/* 
code taken from https://github.com/mkordulewski/reveal.js-fullscreen-code/blob/master/reveal.js-fullscreen-code.js

and then modifed
*/

$('body').append("<div id='fullscreen-box'><pre class='sourceCode numberSource number-lines'><code class='sourceCode'></code></pre></div>" );
$('pre code').before("<button title='Fullscreen' class='fullscreen-button'><a href='#fullscreen-box'><i class='fullscreen-icon'></a></i></button>");
$('div#fullscreen-box button.fullscreen-button').replaceWith("<button title='Exit Fullscreen' class='fullscreen-button'><a href='#'><i class='fullscreen-exit-icon'></i></a></button>")

var fullscreenBoxVisible = false;
$('button.fullscreen-button').click(function(e){
    var code = this.parentElement.children[1].innerHTML;
    if (fullscreenBoxVisible) {
        $('div#fullscreen-box pre code').html('');
        $('div#fullscreen-box').toggleClass('visible');
        fullscreenBoxVisible = false;
    } else {
        $('div#fullscreen-box pre code').html(code);
        $('div#fullscreen-box').toggleClass('visible');
        fullscreenBoxVisible = true;
        let box_height = Math.max($('div#fullscreen-box pre').outerHeight(), $(document).height())
        $('div#fullscreen-box').height(box_height);
        let id = this.parentElement.parentElement.id;
        let id_string = `#${id}`;
        $('div#fullscreen-box button.fullscreen-button a').attr("href", id_string);
    }
   setTimeout(function() {
     if (!fullscreenBoxVisible) {
       $('div#fullscreen-box button.fullscreen-button a').attr("href", "#fullscreen-box");
     }
   }, 100);
});


/*
function guidGenerator() {
  // code from https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
*/
