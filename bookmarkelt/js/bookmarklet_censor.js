console.log('Loaded background censoring text and image!!!');


javascript: (function() {


    var v = "2.2.4"; // version of jquery we want to use

    if (window.jQuery == undefined || window.jQuery.fn.jquery < v) {

        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
        script.onload = script.onreadystatechange = function() {

            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {

                done = true;
                initMyBookmarklet(); //If jquery is loaded now run my script

            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);


    } else {
        initMyBookmarklet();
    }

    function initMyBookmarklet() {
        (window.myBookmarklet = function() {

            //YOUR CODE GOES HERE!

            // javascript:void(document.body.style.fontsize=trigger("scroll")

            // $(document).mousemove(function(){
            //     $("h2,a,body,li").css({
            //         "text-decoration":"line-through"
            //     });

            // });

            $("h2,a,body,li,p").css({
                "color": "white",
                "letter-spacing": "50px"
            });

            setInterval(function() {
                $("img").css({
                    "filter": "blur(50px)",
                    "transition": "all 60s"
                });
                setTimeout(function() {
                    $("img").css({
                        "filter": "blur(0px)",
                        "transition": "all 60s"
                    });
                }, 60000);
            }, 120000);
            $("img").css({
                "filter": "blur(50px)",
                "transition": "all 60s"
            });
            setTimeout(function() {
                $("img").css({
                    "filter": "blur(0px)",
                    "transition": "all 60s"
                });
            }, 60000);


            // $('h1,h2,h3,h4,h5,h6').mouseenter(function() {
            //     $(this).css({
            //         "transition": "all 3s ease-in-out",
            //         "color": "black"
            //     });
            // });

            // $('h1,h2,h3,h4,h5,h6').mouseleave(function() {
            //     $(this).css({
            //         "transition": "all 3s ease-in-out",
            //         "color": "white"
            //     });
            // });
            var style = document.createElement('style')
            style.innerHTML = `
            h1, h2, h3, h4, h5, h6,
            h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
                transition: all 3s ease-in-out
            }
            h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover,
            h1:hover a, h2:hover a, h3:hover a, h4:hover a, h5:hover a, h6:hover a {
                color: black !important
            }`

            document.getElementsByTagName("head")[0].appendChild(style);
        })();
    }
})();