/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button[href='#'], .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

!function(a){a(function(){function b(a){for(var d,b=[],c=a.split(","),e=0;e<c.length;e++)if(d=c[e].split("-"),2===d.length)for(var f=parseInt(d[0],10);f<=d[1];f++)b.push(f);else 1===d.length&&b.push(parseInt(d[0],10));return b}a("[data-gist-id]").each(function(){var d,e,f,g,h,i,j,c=a(this),k={};return c.css("display","block"),d=c.attr("data-gist-id")||"",f=c.attr("data-gist-file"),i="true"===c.attr("data-gist-hide-footer"),j="true"===c.attr("data-gist-hide-line-numbers"),g=(c.attr("data-gist-line")||"").replace(/ /g,""),h=(c.attr("data-gist-highlight-line")||"").replace(/ /g,""),f&&(k.file=f),d?(e="https://gist.github.com/"+d+".json",c.html("Loading gist "+e+(k.file?", file: "+k.file:"")+"..."),a.ajax({url:e,data:k,dataType:"jsonp",timeout:1e4,success:function(d){var f,k,l,m,n;d&&d.div?(d.stylesheet&&0!==d.stylesheet.indexOf("http")&&(0!==d.stylesheet.indexOf("/")&&(d.stylesheet="/"+d.stylesheet),d.stylesheet="https://gist.github.com"+d.stylesheet),d.stylesheet&&0===a('link[href="'+d.stylesheet+'"]').length&&(f=document.createElement("link"),k=document.getElementsByTagName("head")[0],f.type="text/css",f.rel="stylesheet",f.href=d.stylesheet,k.insertBefore(f,k.firstChild)),n=a(d.div),n.removeAttr("id"),c.html("").append(n),g&&(l=b(g),n.find(".line").each(function(b){-1===a.inArray(b+1,l)&&a(this).remove()}),n.find(".line-number").each(function(b){-1===a.inArray(b+1,l)&&a(this).remove()})),i&&n.find(".gist-meta").remove(),j&&n.find(".line-numbers").remove(),h&&(m=b(h),n.find("td.line-data").css({width:"100%"}),n.find(".line").each(function(b){-1!==a.inArray(b+1,m)&&a(this).css({"background-color":"rgb(255, 255, 204)"})}))):c.html("Failed loading gist "+e)},error:function(a,b){c.html("Failed loading gist "+e+": "+b)}}),void 0):!1})})}(jQuery);
