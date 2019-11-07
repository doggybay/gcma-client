# base image
FROM node:latest

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]