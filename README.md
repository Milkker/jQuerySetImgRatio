# jQuerySetImgRatio
Make image padding with ratio.


## Getting Started

You need to download the javascript file & include it.

## Prerequisites
 - jQuery
 - Bootstrap (options)
 
## Sample
 1. Make image fixed ratio with 9:16 (height : width).
```html
<img id='imgSample' src='http://placehold.it/300x300'>
```
```javascript
$("img").setImgToRatio(9/16)
```
 2. You also can use it with Bootstrap library.
```html
<div class='img-responsive'>
  <img id='imgSample' src='http://placehold.it/300x300'>
</div>
```
```javascript
$("img").setImgToRatio(9/16)
```

## Authors

* **Milkker** - *dotNet MVC depldeveloper* - [Milkker](https://github.com/Milkker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
