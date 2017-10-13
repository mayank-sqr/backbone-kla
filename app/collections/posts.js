var posts = Backbone.Collection.extend({


	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts"
	}
});