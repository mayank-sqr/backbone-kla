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