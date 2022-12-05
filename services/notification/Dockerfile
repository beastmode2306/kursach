FROM node:alpine
WORKDIR /usr/src/notification
COPY ./notification/package*.json ./
RUN npm install
COPY ./lib ./lib
COPY ./notification ./
CMD ["node", "app.js"]