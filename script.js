$(function () {
    'use strict';
    var view = $(window).height();
    $('.part')
        .height(view)
        .scrollie({
            direction : 'both',
            scrollOffset : 0,
            scrollRatio : 2,
            // scrollOffset: -50,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');
                $('body').css('background-color', bgColor);
            }
        })
})