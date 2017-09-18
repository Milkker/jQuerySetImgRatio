/*
 * jQuery Set Image To Ratio
 *
 * https://github.com/Milkker/jQuerySetImgRatio
 *
 * Copyright (c) 2017 Milkker
 * Released under the MIT license
 */
(function ($) {
    //ratio = width / height
    $.fn.setImgToRatio = function (ratio) {
        $(this).each(function () {
            if ($(this).prop("tagName") != "IMG")
                return;

            //Default height / width is 9/16.
            if (ratio == undefined || ratio == 0 || ratio == NaN)
                ratio = 9 / 16;

            //Set the image padding
            var setPadding = function (el) {
                var _height = $(el).get(0).naturalHeight;
                var _width = $(el).get(0).naturalWidth;
                var _oriRatio = _height / _width;

                if (_oriRatio > ratio) {
                    var prefix = Math.round(((_height / ratio - _width) / (_height / ratio)) * 10000) / 200;

                    $(el).css("padding", "0px " + prefix + "%");
                }
                else if (_oriRatio < ratio) {
                    var prefix = Math.round(((_width * ratio - _height) / (_width * ratio)) * 10000) / 200;

                    $(el).css("padding", prefix + "% 0px");
                }
            }

            //If not cache.
            if (!$(this).complete) {
                setPadding(this);

                $(this).on("load", function () {
                    setPadding(this);
                });
            }
            else
                setPadding(this);
        });

        return this;
    }
}(jQuery));