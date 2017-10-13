var postView = Backbone.View.extend({
	tagName: 'ul',
	className: 'library-ul',

	initialize: function(options) {
		// console.log('model => initialize in postView =>', this.model)
	},

	render: function() {
		console.log('model => render in postView =>', this.model)
		var source = Handlebars.getTemplate("post-template");
	//	console.log('kla posts=>', this.model.toJSON());
		var html = source({posts: this.model.responseJSON});
	// console.log('render in postView =>',html)
		this.$el.html(html);
		return this;
	}

});