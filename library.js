(function(module) {
    "use strict";

    var Sketchfab = {},
        embed = '<iframe class="sketchfab-embed" frameborder="0" height="480" width="854" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" src="https://sketchfab.com/models/$1/embed"></iframe>';

    var embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:sketchfab\.com)\/?(?:models)\/?(.+)">.+<\/a>/g;

	Sketchfab.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
            data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
	};

	module.exports = Sketchfab;
}(module));
