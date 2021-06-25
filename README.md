
## Simple Filtering list of Phones Number application

#### Explain for application:
This application used for listing available phones numbers for customers
according to their countries and phone validation state for every country phone's rule,
User can be able to filtering listing phones numbers by Countries and phone validation

#### Used Technologies and frameworks:
- NodeJS
- ExpressJS
- MongoDB
- Mongoose  
- Pug Template engine
- ChaiJS
- MochaJS
- Docker
- Docker compose

#### Application Folder Structure
- app
  - src
     - adapters => include DB adapters, used MongoDB adapter
     - config => configuration for application(all environments) and available countries configuration
     - errors => include Custom errors classes
     - factories => include Factories classes which responsible for phone validation instance creation
     - models => Data models classes
     - public => public static files(layouts, javascript scripts and CSS styles)
     - routes => ExpressJS routes for application
     - seeds => include DB data seeder classes
     - services => include logic/domain services
     - validators => include phones validators classes
  - test
     - factories => unit tests on factories classes
     - validators => unit tests on validators classes
    
**Notice:** If we need to add new Country, Just add new country configuration under `availableCountries.json` file
and create Phone validator class plus it's Factory class which responsible for create validator instance
Both Must inheritance from Parent Validator and Factory abstract classes

#### How to run application
- Build docker images and run all services
```shell
docker-compose build && docker-compose up
```
- First Run Database Seeder to add Given simpleDB data Before load the application for testing
```shell
docker exec -it nodeapp node dbSeeder.js
```

#### How to run units tests
```shell
docker exec -it nodeapp npm test
```

#### TODO:
- Apply Pagination logic on Listing Phones numbers
- Using Redis to caching listing phones numbers structure(i.e: not need apply validation process again)
- Apply Unit tests on available services classes