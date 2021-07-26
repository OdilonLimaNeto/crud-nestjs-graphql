<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Description

Basic CRUD for users with password encryption when registering.

API under construction, new implementations coming soon...

## Technologies used

 - Node.js
 - NestJS
 - Typescript
 - GraphQL
 - bcrypt
 - TypeORM
 - PostgreSQL
 - Docker and docker-compose
 - class-validator and class-transformer

## Installation

```bash
$ yarn
```

## Basic settings for starting the API

#### Define the database properties in the docker-compose.yml file, which are:

```bash
  - POSTGRES_USER="set"
  - POSTGRES_PASSWORD="set"
  - POSTGRES_DB="set"
  
```

#### After setting the properties, run:


```bash
  - docker-compose up
```
      The above command will create a PostgreSQL database via container, as well as a pgAdmin database manager.

      access pgadmin: http://localhost:5433/

      To learn more about the docker and docker-compose commands, see: https://docs.docker.com/compose/


## Set the required properties in your ormconfig.json, which are:

```bash
  "username": "set"
  "password": "set"
  "database": "set"
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Access GraphQL playground
```bash
   - http://localhost:3000/graphql
```

## License

Nest is [MIT licensed](LICENSE).
