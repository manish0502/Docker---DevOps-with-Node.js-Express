# Docker-DevOps-with-Node.js-Express
Devops , docker , Node &amp; Express


To run this 

docker rm (cantainerID) -f

## build the image
   docker build -t my-image .

## creating conatiner from the images

  docker run -v $(pwd):/app -p 3000:3000 -d --name my-app my-image

## we can do bind mount (read only)

 docker run -v $(pwd):/app:ro -v /app/node_modules  -p 3000:3000 -d --name my-app my-image

## Running the server

   http://localhost:3000/



## step 1 : To start the container
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
  
## step-2 : to down
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
   
 ## next
   docker logs <ID>
