#this will be the base image
FROM node:12   

# this will be the working directory inside the container
WORKDIR /app

# we will give the path to the package.json file
# because whenever we update something it will read it and then
# install the dependencies
# also give the direcory 

COPY package.json .

#it will install the npm packages

RUN npm install

# copy all the file inside the docker images
COPY . ./
EXPOSE 3000

#this cmd is used to run the container

CMD ["npm","run","dev"]