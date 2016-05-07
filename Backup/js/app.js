var initialLocs = [
	{
		//clickCount: 0,
		name: 'Cactus Taqueria #1',
		imgSrc: 'http://s3-media1.fl.yelpcdn.com/bphoto/L9wOQV8YRn1sCwrhCHoYnA/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		//nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby Tabster']
	},
	{
		//clickCount: 0,
		name: 'Tatsu Ramen',
		imgSrc: 'http://s3-media3.fl.yelpcdn.com/bphoto/o-vIcHqB10lKdOqab3WXjw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		//nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby Tabster']
	},
	{
		//clickCount: 0,
		name: "Flaming Patty's",
		imgSrc: 'http://s3-media4.fl.yelpcdn.com/bphoto/uUnFECWsU0GPfiRc59nITw/o.jpg',
		imgAttribution: 'https://flickr.com/photos/bigtallguy/434164568',
		//nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby Tabster']
	}
]



var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	
	initialLocs.forEach(function(locItem){
		self.catList.push( new Loc(locItem) );
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	
	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
	
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
	
};

var Loc = function(data) {
	//this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	//this.nicknames = ko.observableArray(data.nicknames);
	
	// This isn't working properly
	/*this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 25) {
			title = 'Infant';
		} else if (clicks < 35) {
			title = 'Child';
		} else if (clicks < 50) {
			title = 'Teen';
		} else if (clicks < 100) {
			title = 'Adult';
		} else {
			title = 'Unborn';
		}
		
		return title;
	}, this)*/
	
}

ko.applyBindings(new ViewModel())