var post = Backbone.Model.extend({

	initialize: function(options) {
		this.postid = options.postid
	},

	url: function() {
		// console.log('url in post =>', "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts/" + this.postid)
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts/" + this.postid
	}
});