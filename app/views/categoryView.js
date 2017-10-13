var categoryView = Backbone.View.extend({
	tagName: 'li',
	initialize: function() {

	},

	render: function() {
		var self = this;
		var reference = Handlebars.getTemplate("category-template");
		//console.log('categories =>', this.model.toJSON());
		var html = reference(this.model.toJSON());
		self.$el.html(html);
		return this;
	}

});