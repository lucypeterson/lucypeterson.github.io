console.log('Loaded background censoring text and image!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
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

        $(document).click(function(){
            $("h2").css({
                "text-decoration":"line-through"
            });

        });

        $(document).scroll(function(){
            $("img").css({
                "filter":"blur(5px)"
            });

        });


// $(document).scroll(function(){
//     for(i=0;i<p.filter(blur);i++){
//             if(p[i].filter.blur){
//                 var s=parseInt(p[i].filter.blur.replace("px",""));
//             } else {
//                 var s=0;}s+=2;p[i].style.blur=s+"px"}

        //YOUR CODE GOES HERE!

    })();

}

})();