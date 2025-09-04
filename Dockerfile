FROM node:alpine3.21

WORKDIR /app

COPY header-reader.js ./

CMD ["node", "header-reader.js"]
