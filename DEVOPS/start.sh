#!/bin/sh

cd /app/portfolio
./DEVOPS/deploy.sh

cd /app/portfolio/back-end
crond

npx ts-node src/index.ts & echo $! > /tmp/app.pid
wait $!
