var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 34.088, lng: -118.3263}, 
  zoom: 10
});
}


var initialLocs = [
	{
		name: 'Cactus Taqueria #1',
		imgSrc: 'http://s3-media1.fl.yelpcdn.com/bphoto/L9wOQV8YRn1sCwrhCHoYnA/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0882', 
		lng: '-118.3263'
	},
	{
		name: 'Tatsu Ramen',
		imgSrc: 'http://s3-media3.fl.yelpcdn.com/bphoto/o-vIcHqB10lKdOqab3WXjw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0836', 
		lng: '-118.3446'
	},
	{
		name: "Flaming Patty's",
		imgSrc: 'http://s3-media4.fl.yelpcdn.com/bphoto/uUnFECWsU0GPfiRc59nITw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		lat: '34.0841', 
		lng: '-118.3260'
	}
]



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