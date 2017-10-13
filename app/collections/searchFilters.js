var searchFilters = Backbone.Collection.extend({

	initialize: function(options) {
	},

	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts?" + $.param(window.App.filters)
	}
});