Round Social Media Buttons
==========================

A set of Retina-proof round (or rounded) social media buttons, that can be added with just one HTML element. The buttons are 32px in diameter and are (for the most part) made with just CSS.

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

Not using all the buttons? You can make your own CSS file that suits your needs with LESS/SASS. Open `social-buttons.less` or `social-buttons.scss` and comment out the `@imports` you don't need at the bottom of the file. Compile it and add the CSS to your project.



## How to use ##

Add an HTML element with the class `social-btn` and without any content:

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
- `foursquare` **!updated**
- `github` (Octocat)
- `github-alt` (letter 'g')
- `gplus`
- `icheckmovies` **!new**
- `lastfm`
- `linkedin`
- `mail`
- `path`
- `rss`
- `skype` (favicon) **!new**
- `skype-alt` (letter 'S') **!new**
- `tumblr`
- `twitter` (Twitter bird)
- `twitter-alt` (letter 't')
- `vimeo`
- `youtube` (logo on white background)
- `youtube-alt` (white logo on red background)

## Changelog ##

**v.1.2.5**

- Changed background-position for `youtube-alt` icon in SCSS file to match LESS file
- Removed inline-block mixin: is only needed for lower than IE8 browsers.
- Removed double background-size attribute in LESS file.

**v.1.2.4**

- Added browser prefix versions of the Retina media query & background-size, so that all browser use the Retina sprite if possible. 

**v.1.2.3**

- Added `content: ''` on `.social-btn` to remove any content added to the button: resolves bug causing the button to break ([Issue #10](https://github.com/timhuisman/round-social-media-buttons/issues/10))
- Added `social-buttons.min.less` and `social-buttons.min.scss` for easier compiling of style into a minified and unminified version.

**v.1.2.2**

- Updated `.foursquare` button: changed background-color and replaced the icon with its official (fav)icon: the green ball with white trail.

**v.1.2.1**

- Alphabetical order restored / Remove Trailing Whitespace (thanks [@cafferata](https://github.com/cafferata))
- Optimizes images: Saved 2,6 KB of 11,1KB (thanks [@cafferata](https://github.com/cafferata))
- Added an alternative icon for `.skype`: the Skype favicon.
- Repositioned both Skype icons to the right column in the sprites.
- Switched Skype icons: the favicon version is now the primary icon.
- Switched Github icons: the Octocat is now the primary icon.
- Switched Twitter icons: the Twitter bird is now the primary icon.
- Changed color of _"White"_ (actually `#F1F2F2`) icons to `#fff`;
- Improved YouTube icons: the word 'Tube' has been made fully transparent.
- Added button classes to the preview page and image.
- Changed width of preview page and image to hold eight buttons per row.

**v.1.2.0**

- Added two new buttons: `.skype` (thanks [@AMeijerNL](https://github.com/AMeijerNL)) and `.icheckmovies`.
- Converted sprite from horizontally to vertically orientated (thanks [@AMeijerNL](https://github.com/AMeijerNL)), for smaller file size and load time.
- Added pointer cursor to button, so that non-anchor elements have the same visual button behaviour as anchor elements.
- Added source files for both normal and Retina sprites as Adobe Illustrator files.

**v.1.1.0**

- Added a SASS version (using the .scss notation) of the files

**v.1.0.1**

- Optimized sprites: removed 1px and 2px (Retina) empty space between icons and compressed the files to decrease filesize by almost 50%.
- Changed order of alternative icons in sprite: first the normal icon and then the alternative icon instead of vice versa.