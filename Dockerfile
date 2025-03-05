FROM node:22

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

EXPOSE 9000

RUN npm run build

CMD [ "npm", "start" ]