/*var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 34.088, lng: -118.3263}, 
  zoom: 10
});
}*/

var initialLocs = [
	{
		name: 'Cactus Taqueria #1',
		imgSrc: 'http://s3-media1.fl.yelpcdn.com/bphoto/L9wOQV8YRn1sCwrhCHoYnA/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0882', 
		lng: '-118.3263',
		bizid: 'cactus-taqueria-1-los-angeles',
		html: ''
	},
	{
		name: 'Tatsu Ramen',
		imgSrc: 'http://s3-media3.fl.yelpcdn.com/bphoto/o-vIcHqB10lKdOqab3WXjw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0836', 
		lng: '-118.3446',
		bizid: 'tatsu-ramen-los-angeles-4',
		html: ''
	},
	{
		name: "Flaming Patty's",
		imgSrc: 'http://s3-media4.fl.yelpcdn.com/bphoto/uUnFECWsU0GPfiRc59nITw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0841', 
		lng: '-118.3260',
		bizid: 'flaming-pattys-los-angeles',
		html: ''
	},
	{
		name: "Pavilions",
		imgSrc: 'http://s3-media4.fl.yelpcdn.com/bphoto/uUnFECWsU0GPfiRc59nITw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.08457', 
		lng: '-118.3272',
		bizid: 'pavilions-los-angeles-5',
		html: ''
	},
	{
		name: "El Rancho Super Market",
		imgSrc: 'http://s3-media4.fl.yelpcdn.com/bphoto/uUnFECWsU0GPfiRc59nITw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0883', 
		lng: '-118.3265',
		bizid: 'el-rancho-super-market-los-angeles',
		html: ''
	}
]



var infowindow = null;

	

var i = 0;	
function formatdata(data) {
	//console.log(data);	
	var displayinfo = "<img id='mainimg' src='" + data.image_url + "'/><br><div><a href = '" + data.url + "'>" + data.name + '</a>' +
			  '<p>Phone: ' + data.display_phone + '</p><p><img id="ratingimg" src="' + data.rating_img_url + '" /></p>' + 
			  "<p> Reviews: " + data.review_count + "</div>";
	
	console.log(displayinfo);
	
	for (site in initialLocs) {
		
		if (initialLocs[site].bizid === data.id)  {
			initialLocs[site].html = displayinfo;
		}
	}
	
	i = i + 1;

	if (i === initialLocs.length) {
		initialize();
	}

}
	
	
for (var e = 0; e < initialLocs.length; e++) {
	var bizid = initialLocs[e].bizid;
	console.log(bizid);
	loadapi(bizid);
}
	
	
function loadapi(bizid) {  
    
  var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey: "SvRKHRB_9YP99jEIvTz1ww",
    consumerSecret: "8eqP7zUiWYJyCdwPN8YLHBKXg10",
    accessToken: "s_oarhXB3235Lj1aoH7hhdUU6qWlESDz",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret: "v7rq8Tlhg-fCYIDL3m6MvzQdRdo",
    serviceProvider: {
      signatureMethod: "HMAC-SHA1"
    }
  };
    
   var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
  };
  
  //https://api.yelp.com/v2/business/urban-curry-san-francisco?actionlinks=True

  
  
  parameters = [];
  parameters.push(['callback', 'cb']);
  parameters.push(['oauth_consumer_key', auth.consumerKey]);
  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  parameters.push(['oauth_token', auth.accessToken]);
  parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
  
  
  
	var message = {
    'action': 'http://api.yelp.com/v2/business/' + bizid,
    'method': 'GET',
    'parameters': parameters
  };
    
  OAuth.setTimestampAndNonce(message);
  OAuth.SignatureMethod.sign(message, accessor);
  
  var parameterMap = OAuth.getParameterMap(message.parameters);
  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

  $.ajax({
    'url': message.action,
    'data': parameterMap,
    'cache': true,
    'dataType': 'jsonp',
    //'jsonpCallback': 'cb',
    'success': function(data, textStats, XMLHttpRequest) {

	  if (data) {
		formatdata(data);
		console.log('Formatting data');
	  }

  
    }
  });
  
  
  }; 
	
	
	
	
	
    function initialize() {

        var centerMap = new google.maps.LatLng(34.088, -118.3263);

        var myOptions = {
            zoom: 15,
            center: centerMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        setMarkers(map, initialLocs);
	    infowindow = new google.maps.InfoWindow({
                content: "loading..."
            });

    }

    



    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites.lat, sites.lng);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites.name,
                //zIndex: sites[3],
                html: sites.html
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                //alert(this.html);
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }





var ViewModel = function() {
	var self = this;
	this.locList = ko.observableArray([]);
	
	initialLocs.forEach(function(locItem){
		self.locList.push( new Loc(locItem) );
	});
	
	this.currentCat = ko.observable( this.locList()[0] );
	//console.log(this.currentCat().lat());
	
	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
	
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
		console.log();
	};
	
};

var Loc = function(data) {
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);

	
}

ko.applyBindings(new ViewModel())