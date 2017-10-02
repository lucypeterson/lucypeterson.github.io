console.log('Loaded background censoring text and image!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){

        //YOUR CODE GOES HERE!

        // javascript:void(document.body.style.fontsize=trigger("scroll")

        // $(document).mousemove(function(){
        //     $("h2,a,body,li").css({
        //         "text-decoration":"line-through"
        //     });

        // });

            $("h2,a,body,li,p").css({
                "color":"white"
        });

            setInterval(function(){
            $("img").css({
                    "filter":"blur(50px)",
                    "transition":"all 60s"
                });
            setTimeout(function(){
                $("img").css({
                    "filter":"blur(0px)",
                    "transition":"all 60s"
                });
            },60000);
            }, 120000);
             $("img").css({
                    "filter":"blur(50px)",
                    "transition":"all 60s"
                });
            setTimeout(function(){
                $("img").css({
                    "filter":"blur(0px)",
                    "transition":"all 60s"
                });
            },60000);


            $('h1, h2').mouseenter(function(){
                $(this).css({
                    "transition":"all 1s ease-in-out",
                    "color":"black"
                });
     
            });
            $('h1, h2').mouseleave(function(){
                $(this).css({
                    "transition":"all 1s ease-in-out",
                    "color":"white"
                });

            });
            $(document).mousemove(function(){
                $("h1, h2").css({
                    "transition":"all 1s ease-in-out",
                    "letter-spacing":"50px"
                });

            });

   

        })();

}

})();