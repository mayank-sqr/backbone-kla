Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"cat-id\" data-catid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a href=\"javascript:void(0);\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true})

Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<li class=\"grid_post\">\n<a data-postid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"/"
    + alias4(alias5((depth0 != null ? depth0.slug : depth0), depth0))
    + "\">\n	<div class=\"library-featured-image-and-video\">\n		<img class=\"img-responsive\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.better_featured_image : depth0)) != null ? stack1.source_url : stack1), depth0))
    + "\">\n	</div>\n	<div class=\"library-featured-content\">\n		<h6 style=\"color:#40acfc\">"
    + alias4(((helper = (helper = helpers.categories || (depth0 != null ? depth0.categories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categories","hash":{},"data":data}) : helper)))
    + "</h6>\n		<h5>"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.rendered : stack1), depth0)) != null ? stack1 : "")
    + "</h5>\n	<div class=\"improving-content\">\n		<p>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "<span style=\"background:#50af5b\"></span></p>\n	</div>\n	</div>\n	<div class=\"tiles-overlay-content\" style=\"background:#40acfc\">\n		<p>"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.rendered : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n	</div>\n</a>\n</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--"
    + container.escapeExpression(helpers.log.call(alias1,(depth0 != null ? depth0.posts : depth0),{"name":"log","hash":{},"data":data}))
    + " -->\n<ul class=\"library-ul\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n	";
},"useData":true})

Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=container.lambda;

  return "<!--"
    + alias1(helpers.log.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.singlePost : depth0),{"name":"log","hash":{},"data":data}))
    + " -->\n<div class=\"energy-parent\" id=\"page-energy-parent\">\n	<section class=\"solar-power-capacity\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"solar-power-capacity-content\">\n					<span style=\"color:#9d50af;\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.singlePost : depth0)) != null ? stack1.id : stack1), depth0))
    + "</span>\n					<h1 style=\"color:#9d50af;\">"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.singlePost : depth0)) != null ? stack1.title : stack1)) != null ? stack1.rendered : stack1), depth0))
    + "</h1>\n					"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.singlePost : depth0)) != null ? stack1.content : stack1)) != null ? stack1.rendered : stack1), depth0)) != null ? stack1 : "")
    + "\n\n					<div class=\"how-we-measure-parent\">\n						<div class=\"geographical-unit\" style=\"border:1px solid #aa67ba;\">\n							<p style=\"color:#9d50af;\">mW</p>\n							<small style=\"color:#9d50af;\">MILLIWATTS</small>\n						</div>\n						<div class=\"geographical-unit-abbreviation\">\n							<h1>How We Measure</h1>\n							<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo consequat.</p>\n							<p></p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</section>\n\n		<div class=\"ref_navigation-content\"></div>\n	<section class=\"navigation-section\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<span></span>\n				<div class=\"navigation-content\">\n					<ul>\n					<li><a href=\"javascript:void(0);\">HOW WE MEASURE</a></li>\n					<li><a href=\"javascript:void(0);\">GOALS</a></li>\n					<li><a href=\"javascript:void(0);\">WHAT IT MEANS</a></li>\n					<li><a href=\"javascript:void(0);\">RECENT UPDATES</a></li>\n					<li><a href=\"javascript:void(0);\">RELATED</a></li>\n					<li><a href=\"javascript:void(0);\">HOW YOU CAN HELP</a></li>\n					</ul>\n				</div>\n			</div>\n		</div>\n	</section>\n		\n		\n	<section class=\"our-goals-section\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"col-md-12 col-sm-12 col-xs-12\">\n					<div class=\"our-goals-content\">\n						<h1>our goals</h1>\n						<ul>\n							<li>\n								<div class=\"years-div\">\n								<p>2016</p>\n								</div>\n								<h2>132</h2>\n								<h3>mW</h3>\n							</li>\n							<li>\n								<div class=\"years-div\">\n								<p>2020</p>\n								</div>\n								<h2>162</h2>\n								<h3>mW</h3>\n							</li>\n							<li>\n								<div class=\"years-div\">\n								<p>2040</p>\n								</div>\n								<h2>264</h2>\n								<h3>mW</h3>\n							</li>\n							<li>\n								<div class=\"years-div\">\n								<p>2040</p>\n								</div>\n								<h2>132</h2>\n								<h3>mW</h3>\n							</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</section>\n		\n	<section class=\"graph-section\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"graph-content-parent\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12 graph-left-cols\">\n						<div class=\"graph-left-map-div\">\n							<p>Graph Title Here</p>\n							<img src=\"images/graph-placeholder.png\">\n						</div>\n					</div>\n					<div class=\"col-md-4 col-sm-4 col-xs-12 graph-right-cols\">\n						<div class=\"graph-right-description-div\">\n							<h5>Description Title</h5>\n							<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam.</p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</section>\n		\n	<section class=\"multi-purpose-slider-section\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"col-md-12 col-sm-12 col-xs-12\">\n					<div class=\"multi-purpose-slider-content\">\n						<!-- Slider Content Here -->\n						<img class=\"img-responsive\" src=\"images/multi-purpose-slider-placeholder.png\">\n					</div>\n				</div>\n			</div>\n		</div>\n	</section>\n\n	<section class=\"recent-update-section\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"recent-update-content\">\n					<h1>Recent Updates</h1>\n					<ul>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">Lexington</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">Green Living</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">TIME</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">Nature Conservancy</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">Lexington</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n						<li>\n							<p><small>1 DAY AGO</small>  posted by <span style=\"color:#9853a1;\">Lexington</span></p>\n							<h4>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</h4>\n							<a href=\"javascript:void(0);\">Full Post</a>\n						</li>\n					</ul>\n					<a href=\"javascript:void(0);\" class=\"all-updates-btn  \">All Updates</a>\n				</div>\n			</div>\n		</div>\n	</section>\n		\n			\n	<section class=\"how-can-you-help-section\" style=\"background:#9853a1;\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<h1>How You Can Help</h1>\n					<div class=\"col-md-12 col-sm-12 col-xs-12\">\n						<div class=\"how-can-you-help-content\">\n							<ul>\n								<li>\n									<h2>1. You can help by calling your mayor</h2>\n									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica. <a href=\"javascript:void(0);\">More Information</a></p>\n								</li>\n								<li>\n									<h2>2. You can email companies asking them to remove toxic chemicals from their products</h2>\n									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica. <a href=\"javascript:void(0);\">More Information</a></p>\n								</li>\n								<li>\n									<h2>3. You can tell your friends</h2>\n									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica. <a href=\"javascript:void(0);\">More Information</a></p>\n								</li>\n							</ul>\n						</div>\n					</div>\n			</div>\n		</div>\n	</section>\n</div>";
},"useData":true})

Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"newest\">\n<select>\n	<option value=\"newest\">Newest</option>\n	<option value=\"oldest\">Oldest</option>\n</select>\n</div>";
},"useData":true})