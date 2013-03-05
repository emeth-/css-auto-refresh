CSS-Auto-Refresh
========================

v1.0<br />
Sean Kooyman [Blog](http://teachthe.net)<br />
David Cushman

How to use
-----------------
1) [Drag this to the bookmarks bar](javascript:(function(\){var script=document.createElement('script'\);script.setAttribute('src','http://htmlpreview.github.com/?https://github.com/seanybob/css-auto-refresh/master/css-auto-refresh.js');document.getElementsByTagName('head'\)[0].appendChild(script\);})(\);)
2) ...(placeholder for the chrome extension)

About
-----------------
All the thanks in the world to [@mdo](https://twitter.com/#!/mdo) and [@fat](https://twitter.com/#!/fat) of [@twitter](https://twitter.com/) for the wonderful Bootstrap utility.<br />
I required more functionality out of the Typeahead plugin so I created this extension with some additional features:

- By setting minLength=0, shows all available options on focus.
- Allows traversal through ALL matched objects via use of arrow keys, rather than just going through the first X.
