# Docker file to create an image that displays information on HTTP requests

# Select the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY src/package*.json ./

# Add the packages
RUN npm install

# Bundle app source
COPY src/* .

# Set the port via environment variable
ENV PORT=81

EXPOSE 8080
CMD [ "node", "server.js" ]