FROM node:12-alpine
WORKDIR /app2
COPY . .
EXPOSE 8889
RUN npm install formidable && npm install mv
CMD ["node", "index.js"]