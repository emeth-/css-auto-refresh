

//css-refresh code
var css_files = {};
var css_tmp_div = document.createElement('div');

function get_css_files()
{
    var cfiles = [];
    
    var base_html = document.documentElement.outerHTML;
    css_tmp_div.innerHTML = base_html;
    var stylezzz = css_tmp_div.getElementsByTagName('link');
    var i = stylezzz.length;
    while (i--)
    {
        var x = jQuery(stylezzz[i]);
        if (x.attr('rel') == "stylesheet")
        {
            //css_files[x.attr('href').split('?')[0]] = "";
            cfiles.push(x.attr('href').split('?')[0]);
        }
    }
    css_tmp_div.innerHTML = '';
    return cfiles;
}

function load_css_files_variable()
{
    css_files = {};
    var cfiles = get_css_files();
    for (var i=0; i<cfiles.length; i++)
    {
        css_files[cfiles[i]] = "";
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
            remove_css_file(file_loc);
            add_css_file(new_file);
        }
        css_files[file_loc] = latest_mod_time;
    });
}

function add_css_file(new_file)
{
    var newstylefile = document.createElement('link');
    newstylefile.setAttribute('href',new_file);
    newstylefile.setAttribute('rel', "stylesheet");
    newstylefile.setAttribute('type', "text/css");
    newstylefile.setAttribute('media', "all");
    document.getElementsByTagName('head')[0].appendChild(newstylefile);
}

function remove_css_file(file_loc)
{
    var allsuspects=document.getElementsByTagName('link')
    for (var i=allsuspects.length; i>=0; i--)
    {
        if (allsuspects[i] && allsuspects[i].getAttribute('href')!=null)
        if (allsuspects[i] && allsuspects[i].getAttribute('href')!=null && allsuspects[i].getAttribute('href').indexOf(file_loc)!=-1)
        {
            allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
    }
}

jQuery(document).ready(function() {
    load_css_files_variable();
    update_css_files();
    setInterval("update_css_files()", 3000);
});
