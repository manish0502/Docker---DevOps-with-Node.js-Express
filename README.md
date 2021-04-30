# Docker---DevOps-with-Node.js-Express
Devops , docker , Node &amp; Express


To run this 

docker rm <cantainerID> -f

## build the image
   docker build -t my-image .

## creating conatiner from the images

  docker run -v $(pwd):/app -p 3000:3000 -d --name my-app my-image

## Running the server

   http://localhost:3000/
