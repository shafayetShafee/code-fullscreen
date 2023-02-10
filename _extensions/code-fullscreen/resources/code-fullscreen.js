/* 
code taken from https://github.com/mkordulewski/reveal.js-fullscreen-code/blob/master/reveal.js-fullscreen-code.js

and then modifed
*/

$('body').append("<div id='fullscreen-box'><pre class='sourceCode numberSource number-lines'><code class='sourceCode'></code></pre></div>" );
$('div.cell-code pre code').before("<button title='Fullscreen' class='fullscreen-button'><i class='fullscreen-icon'></i></button>" );
$('div#fullscreen-box pre code').before("<button title='Fullscreen' class='fullscreen-button'><i class='fullscreen-icon'></i></button>" );
$('div#fullscreen-box button.fullscreen-button').replaceWith("<button title='Exit Fullscreen' class='fullscreen-button'><i class='fullscreen-exit-icon'></i></button>")

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
    }
});