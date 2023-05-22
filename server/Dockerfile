FROM node:latest

WORKDIR /user/app

# transfer all the  packages* file to the docker container
COPY package.json .

# Install all the things
RUN npm install

# Copy every files to the working directory
COPY . .

# Expose the port
EXPOSE 3000

# VOLUME [ "." ]

#  set up the startup command
CMD ["npm", "run", "dev"]
