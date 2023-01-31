	Reveal.initialize({
	//autoAnimateEasing: 'ease-in',
	//autoAnimateDuration: 1.0,
	//autoAnimateUnmatched: false,
	// Display controls in the bottom right corner
	controls: true,
	// Help the user learn the controls by providing hints, for example by
	// bouncing the down arrow when they first encounter a vertical slide
	controlsTutorial: true,
	// Determines where controls appear, "edges" or "bottom-right"
	controlsLayout: 'bottom-right',
	// Visibility rule for backwards navigation arrows; "faded", "hidden"
	// or "visible"
	controlsBackArrows: 'faded',
	// Display a presentation progress bar
	progress: true,
	// Display the page number of the current slide
	slideNumber: true,
	// Add the current slide number to the URL hash so that reloading the
	// page/copying the URL will return you to the same slide
	hash: true,
	// Push each slide change to the browser history
	history: true,
	// Enable keyboard shortcuts for navigation
	keyboard: true,
	// Enable the slide overview mode
	overview: true,
	// Vertical centering of slides
	center: false,
	// Enables touch navigation on devices with touch input
	touch: true,
	// Loop the presentation
	loop: false,
	// Change the presentation direction to be RTL
	rtl: false,
	// see https://revealjs.com/vertical-slides/#navigation-mode
	navigationMode: 'default',
	// Randomizes the order of slides each time the presentation loads
	shuffle: false,
	// Turns fragments on and off globally
	fragments: true,
	// Flags whether to include the current fragment in the URL,
	// so that reloading brings you to the same fragment position
	fragmentInURL: true,
	// Flags if the presentation is running in an strongbedded mode,
	// i.e. contained within a limited portion of the screen
	strongbedded: false,
	// Flags if we should show a help overlay when the questionmark
	// key is pressed
	help: true,
	// Flags if speaker notes should be visible to all viewers
	showNotes: false,
	// Global override for autoplaying strongbedded media (video/audio/iframe)
	// - null: Media will only autoplay if data-autoplay is present
	// - true: All media will autoplay, regardless of individual setting
	// - false: No media will autoplay, regardless of individual setting
	autoPlayMedia: true,
	// Global override for preloading lazy-loaded iframes
	// - null: Iframes with data-src AND data-preload will be loaded when within
	//   the viewDistance, iframes with only data-src will be loaded when visible
	// - true: All iframes with data-src will be loaded when within the viewDistance
	// - false: All iframes with data-src will be loaded only when visible
	preloadIframes: null,
	// Number of milliseconds between automatically proceeding to the
	// next slide, disabled when set to 0, this value can be overwritten
	// by using a data-autoslide attribute on your slides
	autoSlide: 0,
	// Stop auto-sliding after user input
	autoSlideStoppable: true,
	// Use this method for navigation when auto-sliding
	autoSlidstrongethod: null,
	// Specify the average time in seconds that you think you will spend
	// presenting each slide. This is used to show a pacing timer in the
	// speaker view
	defaultTiming: null,
	// Enable slide navigation via mouse wheel
	mouseWheel: false,
	// Hide cursor if inactive
	hideInactiveCursor: true,
	// Time before the cursor is hidden (in ms)
	hideCursorTime: 5000,
	// Opens links in an iframe preview overlay
	previewLinks: false,
	// Transition style
	transition: 'slide', // none/fade/slide/convex/concave/zoom
	// Transition speed
	transitionSpeed: 'default', // default/fast/slow
	// Transition style for full page slide backgrounds
	backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
	// Number of slides away from the current that are visible
	viewDistance: 3,
	// Number of slides away from the current that are visible on mobile
	// devices. It is advisable to set this to a lower number than
	// viewDistance in order to save resources.
	mobileViewDistance: 2,
	// The "normal" size of the presentation, aspect ratio will be preserved
	// when the presentation is scaled to fit different resolutions. Can be
	// specified using percentage units.
	width: 1920,
	height: 1200,
	// The display mode that will be used to show slides
	display: 'block',
	math: {
	  <!--mathjax: 'https://cd-public.github.io/slides/html_srcs/reveal.js/plugin/math/mathjax/tex-mml-chtml.js',-->
	  <!--config: 'tex-mml-chtml',-->
	  <!--tex2jax: {-->
		<!--inlinstrongath: [['\\(','\\)']],-->
		<!--displayMath: [['\\[','\\]']],-->
		<!--balanceBraces: true,-->
		<!--processEscapes: false,-->
		<!--processRefs: true,-->
		<!--processEnvironments: true,-->
		<!--preview: 'TeX',-->
		<!--skipTags: ['script','noscript','style','textarea','pre','code'],-->
		<!--ignoreClass: 'tex2jax_ignore',-->
		<!--processClass: 'tex2jax_process'-->
	  <!--},-->
	  CommonHTML: {scale: 80},
	},
	reveald3: {
		runLastState: true, // true/false, default: true
		onSlideChangedDelay: 200,
		mapPath: false, // true / false / "spefific/path/as/string", default: false
		tryFallbackURL: true, // true/false, default false
		disableCheckFile: false, //default false
	 },

	// reveal.js plugins
	plugins: [
	  RevealMath,
	  RevealHighlight,
	  RevealNotes,
	  RevealSearch,
	  RevealZoom,
	  RevealChart,
	  RevealChalkboard,
	],
	chalkboard: {
	boardmarkerWidth: 4,
	chalkWidth: 7,
	boardmarkers : [
			{ color: 'rgba(248,248,242,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
			{ color: 'rgba(102,217,239,1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
			{ color: 'rgba(249,38,114,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
			{ color: 'rgba(166,226,46,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
			{ color: 'rgba(253,151,31,1)', cursor: 'url(' + path + 'img/boardmarker-orange.png), auto'},
			{ color: 'rgba(174,129,255,1)', cursor: 'url(' + path + 'img/boardmarker-purple.png), auto'},
			{ color: 'rgba(255,231,146,1)', cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto'}
	],
	chalks: [
			{ color: 'rgba(248,248,242,0.5)', cursor: 'url(' + path + 'img/chalk-white.png), auto'},
			{ color: 'rgba(102,217,239,0.5)', cursor: 'url(' + path + 'img/chalk-blue.png), auto'},
			{ color: 'rgba(249,38,114,0.5)', cursor: 'url(' + path + 'img/chalk-red.png), auto'},
			{ color: 'rgba(166,226,46,0.5)', cursor: 'url(' + path + 'img/chalk-green.png), auto'},
			{ color: 'rgba(253,151,31,0.5)', cursor: 'url(' + path + 'img/chalk-orange.png), auto'},
			{ color: 'rgba(174,129,255,0.5)', cursor: 'url(' + path + 'img/chalk-purple.png), auto'},
			{ color: 'rgba(255,231,146,0.5)', cursor: 'url(' + path + 'img/chalk-yellow.png), auto'}
	]
	},
	dependencies: [
		{ src: "https://cd-public.github.io/slides/html_srcs/reveal.js/plugin/title-footer/title-footer.js", async: true, callback: function() { title_footer.initialize({css:"https://cd-public.github.io/slides/html_srcs/reveal.js/plugin/title-footer/title-footer.css"}); } },
		{ src: "https://cd-public.github.io/slides/html_srcs/reveal.js/plugin/d3/reveald3.js" },
	],
});