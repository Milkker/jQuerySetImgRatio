/*!
 * jQuery Set Img To Ratio
 *
 * https://github.com/Milkker/jQuerySetImgRatio
 *
 * Copyright (c) 2017 Milkker
 * Released under the MIT license
 */
(function ($) {
    //ratio = width / height
    $.fn.setImgToRatio = function (ratio) {
        if (this.prop("tagName") != "IMG")
            return;

        //預設寬高比為 16 : 9
        if (ratio == undefined || ratio == 0 || ratio == NaN)
            ratio = 9 / 16;

        //是否為Responsive Image
        var isResposive = this.parent().hasClass("img-responsive");

        //設定
        var setPadding = function (el) {
            var _height = $(el).height();
            var _width = $(el).width();
            var _oriRatio = _height / _width;

            if (_oriRatio > ratio) {
                var prefix = Math.round((_height / ratio - _width) * 10000) / 20000;

                if (isResposive) {
                    /*
                      寬度設定後實際px 會因width:100% 再次改變寬度，所以需預估變化率在轉換 prefix。
                      Ex:
                        ratio = 0.75, _height = 300, _width = 300
                        可算出新的寬度(new_width)及預留空間(prefix)
                        new_width = _height / ratio = 300 / 0.75 = 400
                        prefix = (new_width - width) / 2 = (400 - 300) / 2 = 50
    
                        但因為 width:100% 的設定，瀏覽器會將寬度再從 400px 縮回 300px
                        所以預留空間依變化比率調整
                        prefix = 50 * (300 / 400) = 37.5
                    */
                    var new_width = _width + 2 * prefix;
                    prefix = prefix * (_width / new_width);
                }

                $(el).css("padding", "0px " + prefix + "px");
            }
            else if (_oriRatio < ratio) {
                var prefix = Math.round((_width * ratio - _height) * 10000) / 20000;

                $(el).css("padding", prefix + "px 0px");
            }
        }

        //If not cache.
        if (!this.complete) {
            this.on("load", function () {
                setPadding(this);
            });
        }
        else
            setPadding(this);
    }
}(jQuery));