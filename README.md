# jQuerySetImgRatio
Make image padding with ratio.


## Getting Started

You need to download the javascript file & include it.

## Prerequisites
 - jQuery
 - Bootstrap (options)
 
## Sample
 1. Make image fixed ratio *__(height/width)__* with default ratio *__(9:16)__*.
```html
<img id='imgSample' src='http://placehold.it/300x300'>
```
```javascript
$("img").setImgToRatio()
```
 2. Make image fixed ratio with 3:4.
```html
<img id='imgSample' src='http://placehold.it/300x300'>
```
```javascript
$("img").setImgToRatio(3/4)
```

## Authors

***Milkker*** - *dotNet MVC developer* - [Milkker](https://github.com/Milkker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

