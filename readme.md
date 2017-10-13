# BAckBone KLA

#Docs

### Examples/Usage

###### Install Node and Grunt
First, make sure to have Node >= 0.8.0 [installed on your system](http://nodejs.org/). Also, make sure to have [grunt-cli](http://gruntjs.com) installed globally.
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
Then, use grunt server to start up the web server. Grunt will recompile and restart the server when files change.
```
$ grunt server
```

###### Combined = Run Grunt Tasks + Start Server
```
$ grunt [NODE_ENV] && grunt server
```

###### Run App
Now, pull up the app in your web browser. It defaults to port 3030.

```
$ open http://localhost:3080/
```

You can choose a different port by passing the PORT environment variable:
```
$ PORT=80 grunt server
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

We are going to pass data dynamically (In JSON format) to component.
Once we have built components, will use those components in page and pass data to them, e.g -
```
{{view 'components/articles-2col-grid-01' data=this.data}}
```

Note - All components should be under /components directory

Used Naming Conventions -

Folder name - Dont use underscore instead use -
 ```
e.g -> 'articles-2col-grid-01'
 ```
css class name - Dont use underscore instead use -
```
e.g -> className: 'articles-2col-grid-01-component'
```


#### Instructions -
  - All over validations are required - in HBS/js file - check component with empty datasets also.
  - Every developer should follow same naming comventions/coding standards
    - code should be indented with 2 spaces
  - All javascript plugins should be under assets/vendor/ and concatenated through grunt
  - All css file should be under assets/css/ and concatenated through grunt
    - Vendor specific should be under assets/css/vendor

  - dont load/add new css/js files from _layout.hbs instead use grunt
  - always use Mobile first design

For reference use - /components/header

#### Global CSS reusing conventions


#### CSS

   We are following component design so maintaining CSS is easy. but when it comes
   to padding & margin, we are following global className conventions to
   avoid redundancy in CSS code.

   - when you have to specify margin or padding for an element globally, find mixins used in global.less & reuse them.
   - this way we can avoid redundancy & save effort.



#### Media Queries


Mobile first design -
```
@media (min-width: @screen-sm-min) { 768px
}
@media (min-width: @screen-md-min) { 991px
}
@media (min-width: @screen-lg-min) { 1200px
}

@screen-xs-max:              (@screen-sm-min - 1); 767px
@screen-sm-max:              (@screen-md-min - 1); 991px
@screen-md-max:              (@screen-lg-min - 1); 1199px
```


#### Components List:-
- articles-2col-grid-01
- categories-3col-grid-01
- header
- image-text-01a
- image-text-02a
- multiple-select-box-01
- product-carousel-01
- products-grid-01
- single-select-box-01


#### Catalog filtering Requirment