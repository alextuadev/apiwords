FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . ./ 
RUN npm test 
CMD ["node", "index.js"]
