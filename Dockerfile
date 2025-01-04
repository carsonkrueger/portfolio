FROM node:latest

RUN apt-get install -y git

WORKDIR /app/portfolio/front-end
COPY front-end/package.json ./
RUN npm install
COPY front-end/ ./
RUN npm run build

WORKDIR /app/portfolio/back-end
COPY back-end/package.json ./
RUN npm install
COPY back-end/ ./

ARG PORT
RUN export $(cat .env | xargs) && export PORT=$PORT
EXPOSE $PORT

CMD ["npm", "run", "start"]
