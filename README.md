CSS-Auto-Refresh
========================

v1.0<br />
Sean Kooyman [Blog](http://teachthe.net)<br />

How to use
-----------------
1) Copy this code into a bookmark
<pre>
javascript:(function(){var script=document.createElement('script');script.setAttribute('src','http://htmlpreview.github.com/?https://github.com/seanybob/css-auto-refresh/master/css-auto-refresh.js');document.getElementsByTagName('head')[0].appendChild(script);})();
</pre>
<br /><br />

2) Use this chrome extension made by David Cushman which uses this file as its base. <br />
- [extension](https://chrome.google.com/webstore/detail/refrecssher/pbepemgakpapkpholnanaeielcnlklnn) <br />
- [extension source](https://github.com/91bananas/refreCSSher)


About
-----------------
Javascript that, when added to a page, reloads css files as they are changed (removing the old versions).
