$(document).ready(function() {                    // code inside $(document).ready(..)  will run only once the DOM is loaded fully. It checks for readiness.
	timer = setInterval(function(){               // repeats this block with timer time intervals
		if(count==0){                             // if count == 0, i.e everythin has been uploaded, then fadeOut the "#loader" css styling.
			$("#loader").fadeOut();
			clearInterval(timer);                 // clear the timer
			
			var $root = $('html, body');
				$('a').click(function() {             //   &(selector).click( func(){..} ) execute the func() if selector is clicked. Here the selector is 
				                                      // any hyperlink. So clicking on a hyperlink will cause the func() to get executed.
				
					var href = $.attr(this, 'href');  // extract the 'href' attribute (i.e the link itself )of above selector on which user clicked.
					$root.animate({
					scrollTop: $(href).offset().top
					}, 500, function(){document.location.hash = href;
					document.location.hash = href;});
				return false;
			});
			
			
			$('body').scrollspy({ target: '#navigationBar' });
			$(document).on('activate.bs.scrollspy', function(e) {
				var $hash, $node;
				$hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
				$node = $('#' + $hash);
				if ($node.length) {
				$node.attr('id', '');
				}
				document.location.hash = $hash;
				document.location.hash = $hash;
				if ($node.length) {
					return $node.attr('id', $hash);
				}
			});						
		}
	}, 5000);	
	//setStellar();
	loadEducation();
	loadSchAchievements();
	loadCoursework();
	loadCertifications();
	//loadSkills();
	loadWorkExp();
	loadPORS();
	loadExtraActivities();
	loadExtraAchievements();
});




function setStellar(){
	$.stellar({
	  // Set scrolling to be in either one or both directions
	  horizontalScrolling: true,
	  verticalScrolling: true,

	  // Set the global alignment offsets
	  horizontalOffset: 0,
	  verticalOffset: 0,

	  // Refreshes parallax content on window load and resize
	  responsive: false,

	  // Select which property is used to calculate scroll.
	  // Choose 'scroll', 'position', 'margin' or 'transform',
	  // or write your own 'scrollProperty' plugin.
	  scrollProperty: 'scroll',

	  // Select which property is used to position elements.
	  // Choose between 'position' or 'transform',
	  // or write your own 'positionProperty' plugin.
	  positionProperty: 'position',

	  // Enable or disable the two types of parallax
	  parallaxBackgrounds: true,
	  parallaxElements: true,

	  // Hide parallax elements that move outside the viewport
	  hideDistantElements: true,

	  // Customise how elements are shown and hidden
	  hideElement: function($elem) { $elem.hide(); },
	  showElement: function($elem) { $elem.show(); }
	});
}

var timer;
var hash;
var count=8;
var spreadsheetID = "1dMlTGOwjQIPBje0cgeVke0kFKiRVUZDH3ghwtFkN6uY";
var workExp = [];
var education = [];
var schAchievements =[];
var coursework = [];
var certifications = [];
var skills =[];
var projects = [];
var pors = [];
var activities = [];
var achievements = [];

function loadPORS(){
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/1dMlTGOwjQIPBje0cgeVke0kFKiRVUZDH3ghwtFkN6uY/6/public/values?alt=json";
	
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){
			var por ={};
			por.post = this.gsx$post.$t;
			por.organization = this.gsx$organization.$t;
			por.description = this.gsx$description.$t;
			por.duration = this.gsx$startdate.$t+"-"+this.gsx$enddate.$t;
			pors.push(por);
		});
		
		ko.applyBindings(pors, document.getElementById("pors"));
		
		$('.tile-header').matchHeight();
		$('.tile-footer').matchHeight();
		$('.tile').matchHeight();
		
		count--;
	});	
}

function loadWorkExp(){	
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/1dMlTGOwjQIPBje0cgeVke0kFKiRVUZDH3ghwtFkN6uY/5/public/values?alt=json";
	
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){

			workExp.push(new WorkExperience(this));
				
		});
		
		ko.applyBindings(workExp, document.getElementById("workExperience"));
		count--;
		
	});
}

function loadEducation(){	
	count--;
}

function loadSchAchievements(){
	
	count--;
}

function loadCoursework(){
count--;
}

function loadCertifications(){
	
count--;
	
}


function loadExtraActivities(){
	
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/1dMlTGOwjQIPBje0cgeVke0kFKiRVUZDH3ghwtFkN6uY/7/public/values?alt=json";
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){
			activities.push(this.gsx$activity.$t);
		});
		
		ko.applyBindings(activities, document.getElementById("activities"));
		
		count--;
	});
	
}

function loadExtraAchievements(){
	
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/1dMlTGOwjQIPBje0cgeVke0kFKiRVUZDH3ghwtFkN6uY/8/public/values?alt=json";
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){
			achievements.push(this.gsx$achievement.$t);
		});
		
		ko.applyBindings(achievements, document.getElementById("achievements"));
		
		count--;
	});
	
}

function loadSkills(){
	
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/10/public/values?alt=json";
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){
			var skill ={};
			skill.skill=this.gsx$skill.$t;
			skill.level=this.gsx$level.$t;
			skill.details = this.gsx$details.$t;
			skills.push(skill);
		});
		
		ko.applyBindings(skills, document.getElementById("skills"));
		initializeCarousel();
		$('.updateStatus').append('<p>Loaded: Skills</p>');
		count--;
	});
	
}
function WorkExperience(data) {
	
	this.type = data.gsx$type.$t;

    this.startDate = data.gsx$startdate.$t;

	this.endDate = data.gsx$enddate.$t;
	
	this.jobTitle = data.gsx$jobtitle.$t,

	this.company = data.gsx$company.$t;

	this.location = data.gsx$location.$t;

	this.jobDesc= data.gsx$jobdescribtion.$t;

}

function Education(data) {
	//this.gradDate = data.gsx$graduationdate.$t;
	this.gradDegree = data.gsx$graduationdegree.$t,
	this.stream = data.gsx$stream.$t;
	this.institution = data.gsx$institution.$t;

}

function initializeCarousel(){
	var jcarousel = $('.jcarousel');
	
	var perPageItem;

        jcarousel
            .on('jcarousel:reload jcarousel:create', function ()
					{
						var carousel = $(this),
							width = carousel.innerWidth();
							perPageItem = 1;
							
						if (width>=1000){
							perPageItem = 6;
						} else if (width >= 600) {
							perPageItem = 3;
						} else if (width >= 350) {
							perPageItem = 2;
						}
						
						width = Math.floor(width / perPageItem);;
						
						carousel.jcarousel('items').css('width',width + 'px');
					})
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
	$('.jcarousel').jcarouselAutoscroll({
	target: '+=1'//+Math.max(Math.ceil(perPageItem/2),1)
});
}
