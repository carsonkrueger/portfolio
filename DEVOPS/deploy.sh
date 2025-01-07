#!/bin/sh

LOCK_FILE="/tmp/deploy.lock"

# Cleanup function
cleanup() {
    rm -f "$LOCK_FILE"
}

if [ -f "$LOCK_FILE" ]; then
    echo "Another deployment is in progress"
    exit 1
fi

# Set trap for various exit scenarios
trap cleanup EXIT INT TERM

touch "$LOCK_FILE"

# project root
cd /app/portfolio

GIT_URL=https://github.com/carsonkrueger/portfolio.git

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "initializing git repo"
    git init
    git remote add origin $GIT_URL
    git checkout -b main
fi

git fetch $GIT_URL main --quiet
CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# Get the hash of the latest local commit
# UPSTREAM=${1:-'@{u}'}
# LOCAL=$(git rev-parse @)
# REMOTE=$(git rev-parse "$UPSTREAM")
CURRENT=$(git rev-parse HEAD 2>/dev/null || echo "none")
REMOTE=$(git ls-remote origin main | cut -f1)

# Compare hashes to check for changes
if [ "$CURRENT" != "$REMOTE" ]; then
    echo "$CURRENT_TIME: Changes detected, pulling updates..."

    git stash
    # Pull the latest changes
    git pull $GIT_URL main:main --force

    PID_FILE="/tmp/app.pid"
    # Kill existing process if running
    if [ -f "$PID_FILE" ]; then
        kill $(cat "$PID_FILE")
        rm -f "$PID_FILE"
        sleep 2
    fi

    # Rebuild application
    cd back-end
    npx ts-node src/index.ts & echo $! > "$PID_FILE"
    cd ..

    END_TIME=$(date +"%Y-%m-%d %H:%M:%S")
    echo "$END_TIME: Deployment completed"
else
    echo "$CURRENT_TIME: No changes detected"
fi

if ! crontab -l | grep -q "deploy.sh"; then
    CRON_LOG_FILE="/var/log/deploy.log"
    touch "$CRON_LOG_FILE"
    # Run every 5 minutes
    (crontab -l 2>/dev/null; echo "*/1 * * * * /app/portfolio/DEVOPS/deploy.sh >> $CRON_LOG_FILE 2>&1") | crontab -
    # crond
    echo "Cron job added"
fi

trap "rm -f $LOCK_FILE" EXIT
