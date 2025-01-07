FROM node:alpine

ARG CACHEBUST

RUN apk add --no-cache git openssh-client

WORKDIR /app/portfolio
RUN git clone https://github.com/carsonkrueger/portfolio.git .
COPY .env ./
RUN echo "$CACHEBUST" \
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
