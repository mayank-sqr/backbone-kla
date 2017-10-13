(function($){

	/**
	 * Defining global Object.
	 * @type {Object}
	 */
	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		filters: {}
	};

	$(document).ready(function() {

		/**
		 * On initial page load,
		 * Creating Collection Instance
		 * @type {posts}
		 */
		var postInstance = new posts();
		postInstance.fetch({
			success: function() {
				var postsCollectionView = new postsView({
					collection: postInstance
				});
				$('.library-ul-parent').append(postsCollectionView.render().$el);
				$('.main-body-content').trigger('setPagination');
			}
		});

		/**
		 * Creating category dropdown
		 * @type {categories}
		 */
		var catsInstance = new categories();
		catsInstance.fetch({
			success: function() {
				var catsCollectionView = new categoriesView({
					collection: catsInstance
				});
				$('.all-dropdown-parent #content-type').append(catsCollectionView.render().$el);
			}
		});

		/**
		 * Category Dropdown toggle functionality
		 * @param  {[type]} ) { $(this).find('ul').slideToggle('fast');		} [description]
		 * @return {[type]}   [description]
		 */
		$('#content-type').click(function() {
			//console.log('here');
			$(this).find('ul').slideToggle('fast');
		});

		/**
		 * Search Functionality on Keyup.
		 * Binding Category ID to Search value
		 * @param  {[type]} event) { var   searchTxt [description]
		 * @param  {[type]} Delay 5000)  [description]
		 * @return {[type]} [description]
		 */
    $('#search').keyup(_.debounce(function(event) {
			/* Act on the event */
			var searchTxt = $(event.currentTarget).val();
			window.App.filters = _.extend(window.App.filters, {
				search: searchTxt
			});
			$('.main-body-content').trigger('setFilters');
		}, 5000));

		
    /**
     * Create custom event for common view.
     * Common view for category and search results.
     * Combination of category and search also uses below view.
     * @param  {searchFilters} event) { 
     * event.preventDefault();
     * var filterPost Creating Instance of Search Collection. 
     * @return {[type]}[description]
     */
		$('.main-body-content').on('setFilters', function(event) {
			event.preventDefault();
			/* Act on the event */
			var filterPost = new searchFilters();
			filterPost.fetch({
				success: function(){
					var filterResult = new postsView({collection: filterPost});
					$('.library-ul-parent').html(filterResult.render().$el);
				}
			});
		});
});

})(jQuery);