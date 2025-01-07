FROM node:alpine

# RUN apt-get update && apt-get install -y git
RUN apk add --no-cache git openssh-client

WORKDIR /app/portfolio
ARG CACHEBUST=1
RUN git clone https://github.com/carsonkrueger/portfolio.git . \
    && git stash \
    && git pull origin main

WORKDIR /app/portfolio/front-end
RUN npm install
RUN npm run build

WORKDIR /app/portfolio/back-end
RUN npm install

WORKDIR /app/portfolio
EXPOSE 5000
CMD ["./DEVOPS/start.sh"]
# CMD crond && npm run start
