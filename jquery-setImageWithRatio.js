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
                var _naturalHeight = $(el).get(0).naturalHeight;
                var _naturalWidth = $(el).get(0).naturalWidth;
                var _naturalRatio = _naturalHeight / _naturalWidth;

                if (_naturalRatio > ratio) {
                    var newWidth = _naturalHeight / ratio;
                    var hPrefixRate = ((newWidth - _naturalWidth) / newWidth) * 100 / 2;

                    $(el).css("padding", "0px " + hPrefixRate + "%");
                }
                else if (_naturalRatio < ratio) {
                    var newHeight = _naturalWidth * ratio;
                    var vPrefixRate = ((newHeight - _naturalHeight) / _naturalWidth) * 100 / 2;

                    $(el).css("padding", vPrefixRate + "% 0px");
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