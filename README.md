# Welcome To Ultimate AI Backend Challenge


## Non-functional requirements
make sure that port 3000 for node server and 27017 mongodb are free and not used by other apps.

## (A) Auto Installation Using Docker Compose.
1- Install ```docker``` and ```docker-compose``` depends on your OS,  for docker check [here](https://docs.docker.com/get-docker/), and for docker-compose [here](https://docs.docker.com/compose/install/)

2- Extract or clone project and open bash inside base directory.

3- Excute ```$ docker-compose up```

4-Enjoy with postman collection from [here](https://www.getpostman.com/collections/26563117f23d59596e50)

5- API Docs [HERE](https://documenter.getpostman.com/view/3227464/TzXzEHdy#51abad2e-9e78-4ebd-979d-749582a0884d)



## (B) Manual Installation.

1- Install and configure Node.js engine version 12.16.1 or higher, see [download page](https://nodejs.org/en/download/).

2- Install and configure MongoDB version 3.6.8 or higher, see [download page](https://www.mongodb.com/try/download).

3- Extract or clone project and open bash inside base directory

4- Execute ```$ npm install``` to build project and install required dependencies.

5- Check file ```/{{ProjectDir}}/config/mongoose.js``` if you have custom installation for MongoDB.(next enhance can use .ENV file)

6- Execute ```$ npm test``` to run test cases.

7- Execute ```$ npm start``` to run the server.

8- Enjoy with postman collection from [here](https://www.getpostman.com/collections/26563117f23d59596e50)

9- API Docs [HERE](https://documenter.getpostman.com/view/3227464/TzXzEHdy#51abad2e-9e78-4ebd-979d-749582a0884d)


***
## Project Source Tree


```bash
ProjectDirRoot
├───bin/
│   └───www──────────────────────────────────>>server config
├───config/
│   └───mongoose.js──────────────────────────>>database connection config
├───constants/
│   ├───http-responses.constants.js──────────>>common HTTP Status Code definition 
│   └───response-formate.constants.js────────>>common Response Template formate
├───models/──────────────────────────────────>>contains models schema definitions
│   └───MessageDetails.js─────────────────────>>database Model Schema
├───public/──────────────────────────────────>>auto generate for HTML
│   ├───images/
│   ├───javascripts/
│   └───stylesheets/
│       └───style.css
├───routes/──────────────────────────────────>>API routes
│   ├───message-details/
│   │   ├───message.controller.js─────────────>>contains logic of end point
│   │   ├───message.router.js─────────────────>>contains url for end point
│   │   ├───message.service.js────────────────>>contains database queries
│   │   └───message.validate.js───────────────>>contains JOI request params validation
│   └───ultimate.routes.js────────────────────>>contains registration of all routers files
├───specs/
│   └───message.spec.js──────────────────────────>>unit test cases
├───views/───────────────────────────────────>>auto generate for frontend
│   ├───error.jade
│   ├───index.jade
│   └───layout.jade
├───.dockerignore
├───.eslintrc.json───────────────────────────>>ESLint configuration
├───Dockerfile───────────────────────────────>>docker image config
├───README.md────────────────────────────────>>WE ARE HERE :) 
├───app.js───────────────────────────────────>>application sequence of middlewares
├───docker-compose.debug.yml─────────────────>>for debug over docker
├───docker-compose.yml───────────────────────>>config for mongodb image and wake-cape node image
├───package.json─────────────────────────────>>project libraries and versions
```
Good Chance :)
