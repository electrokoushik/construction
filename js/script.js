var slider_logos = tns({
	container: '.logos-slider',
	mode: 'carousel',
	slideBy: 'page', // TODO test it
	gutter: 0,
	edgePadding: 0,
	speed: 300,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	loop: true,
	items: 5, // default number of items
    responsive: {
	  300: {
		items: 1	
	  },
      500: {
        items: 3
      },		
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 3
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4
      }
    },	
	nav: false,
	controls: false	
});

var slider_team = tns({
	container: '.team-slider',
	mode: 'carousel',
	items: 3, // default number of items
	slideBy: 'page', // TODO test it
	speed: 300,
	gutter: 110,
	edgePadding: 100,
	center: true,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	loop: true,
    responsive: {
      320: {
		gutter: 45,
		edgePadding: 45,		  
        items: 1
      },
      360: {
		gutter: 60,
		edgePadding: 60,		  
        items: 1
      },
	  400: {
		gutter: 90,
		edgePadding: 90,		  
        items: 1		  
	  },
      576: {
        items: 1
      },
      768: {
		gutter: -290,
		edgePadding: -140,		  
		items: 2
      },
      1024: {
		gutter: 25,
		edgePadding: 15,		  
        items: 3
      },
	  1200: {
		gutter: 100,
		edgePadding: 50		  
	  }
    },	
	nav: false,
	controls: false	
});
