(function(module) {
	"use strict";

	var Sketchfab = {},
		embed = '<iframe class="sketchfab-embed" frameborder="0" height="480" width="854" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" src="http://sketchfab.com/embed/$1?autostart=0&transparent=0&autospin=0&controls=1"></iframe>';



http://sketchfab.com/embed/bd6ed505658e4601850bf36f0abb3bf8

	Sketchfab.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:sketchfab\.com)\/?(?:show)\/?(.+)<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Sketchfab;
}(module));
