FROM node:12-alpine
WORKDIR /app
COPY . .
EXPOSE 8888
RUN npm install formidable && npm install mv
CMD ["node", "index.js"]