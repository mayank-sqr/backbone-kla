/* Compiled file! backbone-kla - v1.0.0 - 2017-10-13 */var category = Backbone.Model.extend({
	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/categories"
	}
});
var post = Backbone.Model.extend({

	initialize: function(options) {
		this.postid = options.postid
	},

	url: function() {
		// console.log('url in post =>', "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts/" + this.postid)
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts/" + this.postid
	}
});
var categories = Backbone.Collection.extend({

	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/categories"
	}

});
var posts = Backbone.Collection.extend({


	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts"
	}
});
var searchFilters = Backbone.Collection.extend({

	initialize: function(options) {
	},

	url: function() {
		return "http://kladash.staging.wpengine.com/wp-json/wp/v2/posts?" + $.param(window.App.filters)
	}
});
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
var postsView = Backbone.View.extend({
	tagName: 'div',
	className: 'post-view',

	events: {
		"click .grid_post a": "singlePost"
	},

	initialize: function(options) {
		// console.log('initialize in postsView', this.collection);
		this.postCollection = this.collection.toArray();
		this.totalPostCount = this.postCollection.length;
		// console.log('post length =>', totalPostCount);
		// this.postPerPage = parseInt('3');
		this.totalPages = Math.ceil(this.totalPostCount/3);
	},

	/**
	 * Creating Single Page View
	 * @model { post }
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	singlePost: function(event) {
		event.preventDefault();
		var postId = $(event.currentTarget).attr('data-postid');
		var singlePost = new post({postid: postId});
		// console.log('singlePost in postsView =>', singlePost);
		singlePost.fetch({
			success: function() {
				var singleView = new singlePostView({model: singlePost});
				$('body').html(singleView.render().$el);
			}
		});
	},

	/**
	 * Creating Pagination Using twbsPagination Plugin
	 * Reference:- https://esimakin.github.io/twbs-pagination/
	 * Creating Custom event @name { setPagination }
	 * @param  {[type]} totalPages [description]
	 * @return {[type]}            [description]
	 */
	pagination: function(totalPages) {
		$('.main-body-content').on('setPagination', function(event) {
		event.preventDefault();
		// console.log('@totalpages =>', totalPages);
		$('.pagination').twbsPagination({
		totalPages: totalPages,
		// the current page that show on start
		startPage: 1,
		// maximum visible pages
		visiblePages: 3,

		initiateStartPageClick: true,

		// template for pagination links
		href: false,

		// variable name in href template for page number
		hrefVariable: '{{number}}',

		hideOnlyOnePage: true,

		// Text labels
		first: 'First',
		prev: 'Previous',
		next: 'Next',
		last: 'Last',

		// carousel-style pagination
		loop: false,

		// callback function
		onPageClick: function (event, page) {
		  // console.log('pagi clicked', page);
		  var pageNumber = page;
		 // console.log('@pagenumber =>', page);
		 // var perPage = 3;
		  window.App.filters = _.extend(window.App.filters, {
		  	page: pageNumber,
		  	per_page: 3
		  })
		  $('.main-body-content').trigger('setFilters');
		},

		// pagination Classes
		paginationClass: 'pagination',
		nextClass: 'next',
		prevClass: 'prev',
		lastClass: 'last',
		firstClass: 'first',
		pageClass: 'page',
		activeClass: 'active',
		disabledClass: 'disabled'

		});
	});
	},

	render: function() {
		var source = Handlebars.getTemplate("post-template");
		//console.log('render in postsView=>', this.collection);
		var html = source({posts: this.collection.toJSON()});
		this.$el.html(html);
		this.pagination(this.totalPages);
		return this;
	}

})
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