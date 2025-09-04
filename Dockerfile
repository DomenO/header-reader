FROM node:latest

WORKDIR /app

COPY header-reader.js ./

CMD ["node", "header-reader.js"]
