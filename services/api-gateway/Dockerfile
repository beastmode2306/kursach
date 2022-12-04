FROM node:alpine
WORKDIR /usr/src/api-gateway
COPY ./api-gateway/package*.json ./
RUN npm install
COPY ./api-gateway .
COPY lib.js .
EXPOSE 3000
CMD ["node", "app.js"]