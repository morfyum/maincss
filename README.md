# maincss - v0.3.0

### MicroCSS framework based on flexbox: small, modern, and flexible!

> Responsive, Modern, Minimal, MicroCSS, Flexible, Less Code, 
Borderless...

> - Philosophy of Structure: [ Less code ]
> - Philosophy of Design: [ Borderless ]
> - Test Template features: https://morfyum.github.io/maincss/

### Example for CSS deploy:
```
find ./ -name "*.css" -exec cat {} \; > productcss.css
```

### Use from GitHub:
```html
<link rel="stylesheet" href="https://morfyum.github.io/maincss/maincss.css">
<link rel="stylesheet" href="https://morfyum.github.io/maincss/models/extras.css">
<link rel="stylesheet" href="https://morfyum.github.io/maincss/models/768p.css">
<link rel="stylesheet" href="https://morfyum.github.io/maincss/models/1280p.css">
<link rel="stylesheet" href="https://morfyum.github.io/maincss/models/2160p.css">
<link rel="stylesheet" type="text/css" href="self.css"> <!-- Your own .css --!>
```


## Framework elements
✅ stable | 🚧 Not recommended to use | ✨ new | 🧪 changed/testing

```
## TEST TOOLS
    .testbox                : ✅ Orange highlighting

## FUNCTIONALITY
    .basebox                : ✅ The main building elemnt
    .row                    : ✅ Modifi basebox to an independent row
    .col                    : 🚧 Equal with row, but outdated and not maintained
    .fixbox                 : 🚧 Not maintained class with fix 1100px width on FHD display
    .vertical-scroll        : ✅ Put div with this class into `basebox` container
    .horizontal-scroll      : ✨ Put div with this class into `basebox` container
    .hide-on-mobile         : 🧪 Hide elements under 768px width devices

    .button                 : ✅ Borderless Button element

    .col-1                  : 🧪 Independet row. Same as a basebox + row
    .col-2                  : 🧪 Two column
    .col-3                  : 🧪 Three column
    .col-4                  : 🧪 Four column
    .col-5                  : 🧪 Five column
    .col-6                  : 🧪 Six column

## COLORS
    .bg1                    : ✨ Primary Background color
    .fg1                    : ✨ Primary Foreground color
    .bg2                    : ✨ Secondary Background color
    .fg2                    : ✨ Secondary Foreground color

## DESIGN
    .gap                    : ✨ Flexbox gap: `row-gap: 30px`, `column-gap: 30px`    

    .center                 : ✅ Horizontal center
    .full-center            : ✅ Horizontal and vertical center for any children items

    .padding                : ✅ --padding: 0.5rem
    .padding-soft           : ✅ --padding-soft: 3px
    .padding-hard           : ✅ --padding-hard: 13px

    .margin                 : ✅ --margin: 0.5rem
    .margin-soft            : ✅ --margin-soft: 3px
    .margin-hard            : ✅ --margin-hard: 1rem

    .border-radius          : ✨ --border-radius: 13px
    .border-radius-soft     : ✨ --border-radius-soft: 3px
    .border-radius-hard     : ✨ --border-radius-hard: 1rem
    .br                     : ✨ Equal with .border-radius
    .br-soft                : ✨ Equal with .border-radius-soft
    .br-hard                : ✨ Equal with .border-radius-hard

    .text-left              : ✅ With align-item property
    .text-center            : ✅ With align-item property, justify-content
    .text-justify           : ✅ With align-item property
    .text-right             : ✅ With align-item property

    .item-top               : ✅ With align-item property
    .item-center            : ✅ With align-item property
    .item-bottom            : ✅ With align-item property

## MODIFIED HTML ELEMENTS  
    h1, h2, h3,             : ✨ width: 100%, padding: var(--padding-hard)
    h4, h5, h6		
    p                       : ✅ text-align: justify
    fieldset                : 🧬 border: 1px solid
    input                   : 🧪 Input field
    img                     : 🧪 Add: width: 100%, max-height: 100%, object-fit: cover, object-position: top center
	                         Background -repeat: no-repeat, -position: top center, -size: cover  
    hr                      : ✅ display: block, width: 90%, boder: 1px, solid, var(--default-orange), height: 0px  
    footer                  : ✅ HTML footer element modifiees
    a:link                  : ✅ text-decoration: none, color: var(default-font)
    a:visited               : ✅ color: var(--default-font)
    a:hover                 : ✅ color: var(--default-orange)
    a:active                : ✅ color: var(--default-font)
    
## LEGACY 🚧:
    .checkbox-labe                              : 🧪+🧬
    .checbox-label input                        : 🧪+🧬
    .checkmark                                  : 🧪+🧬
    .radiomark                                  : 🧪+🧬
    .checkbox-label:hover input ~ .checkmark    : 🧪+🧬
    .checkbox-label:hover input ~ .radiomark    : 🧪+🧬
```

### \<head\> - \</head\>
**Set character Encoding:**
```
<meta charset="UTF-8">
```
**Improve mobile view**
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

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
