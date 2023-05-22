FROM node:latest

WORKDIR /user/app

# transfer all the  packages* file to the docker container
COPY package.json *

# Install all the things
RUN npm ci

# Copy every files to the working directory
COPY . .

#  set up the startup command
CMD ["npm", "run", "dev"]
