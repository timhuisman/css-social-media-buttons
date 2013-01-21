Round Social Media Buttons
==========================

A set of Retina-proof round (or rounded) social media buttons, that can be added with just one anchor element. The buttons are 32px in diameter and are (for the most part) made with just CSS.

![](https://raw.github.com/timhuisman/round-social-media-buttons/master/screenshot-1.png)

**Browser compatibility**

The buttons have been tested and approved in the following browsers:

- Opera	12
- Chrome 24
- Safari 5
- Firefox 8
- Internet Explorer 9*
- Chrome for iPhone 23
- Safari for iPhone iOS 6

*The buttons rely on features of CSS3 and are therefor not shown properly in Internet Explorer 8: meaning no rounded corners, gradients and shadows. Lower versions than IE8 are not supported.



## Installation ##

Simply put the CSS file in your project CSS folder and link to it in your `<head>` or copy/paste the content of the `social-buttons.css` into your own CSS file:

Not using all the buttons? You can make your own CSS file that suits your needs with LESS/SASS. Open `social-buttons.(less/scss)` and comment out the `@imports` you don't need at the bottom of the file. Compile it and add the CSS to your project.



## How to use ##

Add a HTML element with the class `social-btn` and without any content:

	<a href="#" class="social-btn"></a>
	<span class="social-btn"></span>

Add a class of a (social) network, like for example `github` (see 'Lists of available classes' below for all the possibilities):

	<a href="#" class="social-btn github"></a>
	<span class="social-btn github"></span>

And that's it!

Don't want fully rounded buttons? Add the class `rounded` for a button with just slightly rounded corners:

	<a href="#" class="social-btn github rounded"></a>
	<span class="social-btn github rounded"></span>


**Lists of available classes**

- `facebook`
- `flickr`
- `foursquare`
- `github` (the letter 'g')
- `github-alt` (the octocat)
- `gplus`
- `lastfm`
- `linkedin`
- `mail`
- `path`
- `rss`
- `skype`
- `tumblr`
- `twitter` (the letter 't')
- `twitter-alt` (the bird)
- `vimeo`
- `youtube` (black, red and white logo on a white background)
- `youtube-alt` (white logo on a red background)

## Changelog ##

**v.1.1.0**

- Added a SASS version (using the .scss notation) of the files

**v.1.0.1**

- Optimized sprites: removed 1px and 2px (Retina) empty space between icons and compressed the files to decrease filesize by almost 50%.
- Changed order of alternative icons in sprite: first the normal icon and then the alternative icon instead of vice versa.