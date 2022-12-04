FROM node:alpine
WORKDIR /usr/src/notification
COPY ./notification/package*.json ./
RUN npm install
COPY ./notification .
COPY lib.js .
CMD ["node", "app.js"]