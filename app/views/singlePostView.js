var singlePostView = Backbone.View.extend({
	
	el: '.main-body-content',

	initialize: function(options) {
		// console.log('initialize in singlePostView =>', options)
		// console.log('model in singlePostView =>', this.model.toJSON());
	},
	/**
	 * This function call every time when single post page
	 * is loaded.
	 * @return {[type]} [description]
	 */
	render: function() {
		var resource = Handlebars.getTemplate('singlepost-template');
		var html = resource({singlePost: this.model.toJSON()});
		this.$el.html(html);
		return this;
	}
});