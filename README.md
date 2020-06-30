# maincss

## Basic Flexbox CSS template: responsive, modern, and flexible

Test Template features on maincss github Page:<br>
https://morfyum.github.io/maincss/

### Example for CSS deploy script:
  ```find ./ -name "*.css" -exec cat {} \; > productcss.css```


## HOW TO USE MY CSS

#### INSIDE OF HEADER
Default character Encoding:<br>
```	<meta charset="UTF-8">```<br>
Improve mobile view:<br>
```	<meta name="viewport" content="width=device-width, initial-scale=1.0">```


#### BASIC CLASSES (maincss.css)
It is the basis of everything. 'maincss' contain two basic, important container class.
You can build everything with basebox. Basebox contain the most important css parameters. Add basebox tag to all other class.
```
.basebox
```
There is only one other base label: fixbox. Fixbox width is fix: 1100px on all display, except one: on mobile view, width is 100%
```
.fixbox
```

Align element (under construction)
Verical & Horizontal all item inside element which has this
```.center```

Padding & Margin elements:<br>
```.padding```  - 0.5rem padding<br>
```.padding-soft``` - 1px padding<br>
```.margin``` - 0.5rem margin<br>
```.margin-soft``` - 1px margin<br>

Text align elements
```
.text-left
.text-center
.text-justify
.text-right
```

TODO
