var categoriesView = Backbone.View.extend({
	tagName: 'ul',

	events: {
		"click .cat-id": "catClick"
	},

	initialize: function() {

	},
	/**
	 * Category Filter.
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	catClick: function (event) {
		var catId = $(event.currentTarget).attr('data-catid');
		window.App.filters = _.extend(window.App.filters, {
		 categories: catId
		})
		$('.main-body-content').trigger('setFilters');
	}, 
	/**
	 * This is render function which initiated when category is
	 * selected from dropdown.
	 * @return {[type]} [description]
	 */
	render: function() {
		var reference = Handlebars.getTemplate("category-template");
		var html = reference({categories: this.collection.toJSON()});
		this.$el.html(html);
		return this;
	}

});