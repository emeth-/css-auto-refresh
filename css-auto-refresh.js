
//css-refresh code
var css_files = {};

function get_css_files()
{
    var base_html = document.documentElement.outerHTML;
    var tempdiv = document.createElement('div');
    tempdiv.innerHTML = base_html;
    var stylezzz = tempdiv.getElementsByTagName('link');
    var i = stylezzz.length;
    while (i--)
    {
        var x = jQuery(stylezzz[i]);
        if (x.attr('rel') == "stylesheet")
        {
            css_files[x.attr('href').split('?')[0]] = "";
        }
    }
}

function update_css_files()
{
    var req = window.ActiveXObject ? new ActiveXObject( 'Microsoft.XMLHTTP' ) : new XMLHttpRequest();
    
    jQuery.each(css_files, function(file_loc, mod_time){
        req.open( 'HEAD', file_loc, false );
        req.send( null ); 
        if ( req.readyState < 3 )
                return false;
        var latest_mod_time = req.getAllResponseHeaders().split('\n')[1];
        if (latest_mod_time != mod_time && mod_time != "")
        {
            //reload csv file
            var new_file = file_loc+"?cssrefresh="+(Math.random().toString().replace('.', ''));
            console.log(file_loc, "has been changed, adding ", new_file);
            var newstylefile = document.createElement('link');
            newstylefile.setAttribute('href',new_file);
            newstylefile.setAttribute('rel', "stylesheet");
            newstylefile.setAttribute('type', "text/css");
            newstylefile.setAttribute('media', "all");
            document.getElementsByTagName('head')[0].appendChild(newstylefile);
        }
        css_files[file_loc] = latest_mod_time;
    });
}

jQuery(document).ready(function() {
    
    get_css_files();
    
    update_css_files();
   
    setInterval("update_css_files()", 3000);
    
});