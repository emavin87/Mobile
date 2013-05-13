$(document).on("pageshow", "#home", function() {

	$("#linkHome").click(function(e) {
		console.log("Close panel new Loc");
		e.preventDefault();
		$.mobile.activePage.find('#userbar').panel('close');	
	});
	
	
});