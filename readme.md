## Docker Instructions:

Build our container

``` docker build -t node-api-words . ```

List the images available

``` docker image ls ```


Run the container (port LOCAL / CONTAINER )

``` docker run -p 3001:8080 -d --name node-app node-api-words ```


Ready our project is running in port 3001

```http://localhost:3001```

Connect to the container
``` docker exec -it node-app bash```