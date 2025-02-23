FROM node:latest

WORKDIR /app
COPY package.json .

RUN yarn
COPY . .

RUN yarn build
EXPOSE 8080

CMD ["yarn", "preview"]
