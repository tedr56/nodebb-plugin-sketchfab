(function(module) {
    "use strict";

    var Sketchfab = {},
        embed = '<iframe class="sketchfab-embed" frameborder="0" height="480" width="854" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" src="https://sketchfab.com/models/$1/embed"></iframe>';

http://sketchfab.com/embed/bd6ed505658e4601850bf36f0abb3bf8

	Sketchfab.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:sketchfab\.com)\/?(?:models)\/?(.+)">.+<\/a>/g, embed);
		
		callback(null, postContent);
	};

	module.exports = Sketchfab;
}(module));
