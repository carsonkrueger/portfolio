cd /app/portfolio/back-end
chrond
npx ts-node src/index.ts & echo $! > /tmp/app.pid
wait $!
