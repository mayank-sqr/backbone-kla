# BackBone KLA

### Description
This project is based on backbonejs framework. Its a learning purpose project. This project tells us workflow of backbone and how to interact with Models, Collections and View and also with use of template engine like Handlebars.

### Usage

###### Install Node and Grunt
First, make sure to have Node >= 8.3.0 [installed on your system](http://nodejs.org/). Also, make sure to have [grunt-cli](http://gruntjs.com) installed globally.
```
$ npm install -g grunt-cli
```
###### Install dependancies listed in Package.json
```
$ npm install
```
###### Run Grunt Tasks with expected Node environment
```
$ grunt [NODE_ENV]
```

###### Start Server
Then, use http server to start up the web server.
```
$ http server
```

###### Run App
Now, pull up the app in your web browser. It defaults to port 8080.

```
$ open http://localhost:8080/
```

## Developer Reference


Note - This file is used only for UI development purpose


#### Project Architecure


Approach -

Divide all layouts in to components [https://en.wikipedia.org/wiki/Component-based_software_engineering] , while components are reusable, so we can build almost projects using components -

It consist of -
  - Template file( HTML/HBS file )
  - Style sheet (less/CSS file)
  - View file (.js)
  - Collection file (.js)
  - Model file (.js)

We are going to pass data dynamically (In JSON format) to Collection and Models.
Once we have built Collection and Models, will use those in page and pass data to them, 

#### Instructions -
  - All over validations are required - in HBS/js file - check component with empty datasets also.
  - Every developer should follow same naming comventions/coding standards
    - code should be indented with 2 spaces
  - All javascript plugins should be under assets/js/ and concatenated through grunt
  - All css file should be under assets/css/ and concatenated through grunt
