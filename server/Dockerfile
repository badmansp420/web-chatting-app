FROM node:20-bullseye-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN npm install

# Bundle app source
COPY . /app

EXPOSE 8080
CMD [ "node", "index.js" ]
