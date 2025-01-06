FROM node:alpine

# RUN apt-get update && apt-get install -y git
RUN apk add --no-cache git openssh-client

WORKDIR /app/portfolio
ARG CACHEBUST=1
RUN git clone https://github.com/carsonkrueger/portfolio.git .
RUN cp .env back-end/ || true

WORKDIR /app/portfolio/front-end
# COPY front-end/package.json ./
RUN npm install
# COPY front-end/ ./
RUN npm run build

WORKDIR /app/portfolio/back-end
# COPY back-end/package.json ./
RUN npm install
# COPY back-end/ ./

WORKDIR /app/portfolio
RUN ./DEVOPS/deploy.sh
RUN crond

EXPOSE 5000

WORKDIR /app/portfolio/back-end
CMD crond && npm run start
