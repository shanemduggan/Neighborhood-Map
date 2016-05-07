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




	
	
for (var e = 0; e < initialLocs.length; e++) {
	var bizid = initialLocs[e].bizid;
	//console.log(bizid);
	loadapi(bizid);
}
	
	



var ViewModel = function() {
	var self = this;
	this.locList = ko.observableArray([]);
	
	initialLocs.forEach(function(locItem){
		self.locList.push( new Loc(locItem) );
	});
	
	initialize();
	
	//this.currentCat = ko.observable( this.locList()[0] );
	//console.log(this.currentCat().lat());
	
	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
	
	/*this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
		console.log();
	};*/
	
};

var Loc = function(data) {
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.html = ko.observable(data.html);

	
}