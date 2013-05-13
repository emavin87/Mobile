var map;
var geocoder;
var infowindow = new google.maps.InfoWindow();
$(document).on(
		"pageshow",
		"#newloc",
		function(event) {

			function initialize() {

				console.log("initialize map");
				geocoder = new google.maps.Geocoder();
				var mapOptions = {
					zoom : 12,
					scale : 2,
					size : 400,
					center : new google.maps.LatLng(41.9, 12.48),
					mapTypeId : google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(
						document.getElementById('map_canvas'), mapOptions);

			}

			initialize();

			$('input#nameLocation').keypress(function() {
				console.log("keypress nameLocation");

				var address = this.value;
				console.log(address);

				$("#popupError").popup({
					transition : "pop"
				});

				if (address.length >= 3) {
					geocoder.geocode({
						'address' : address
					}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							map.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								map : map,
								position : results[0].geometry.location
							});

							// infowindow
							// .setContent(results[0].formatted_address);
							// infowindow
							// .open(
							// map,
							// marker);

						} else {
							console.log("start popup");
							// $('#popupError').popup("open");
						}
					});
				}
			});
			$("a#linknewLoc").click(function(e) {
				console.log("Close panel");
				e.preventDefault();
				$.mobile.activePage.find('#userbar').panel('close');

			});

		});
