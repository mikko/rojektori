var interval = 3000;

var url1 = "https://farm6.staticflickr.com/5674/21445908434_53dbacc277_k.jpg";
var url2 = "https://farm6.staticflickr.com/5761/21445908204_bf5658a90c_k.jpg";
var b = true;
var imgElement1 = document.getElementById("image1");
var imgElement2 = document.getElementById("image2");

var photoList;

var req = new XMLHttpRequest();
req.addEventListener("load", function() { 
	var json = JSON.parse(this.responseText);
	photoList = json.photos.photo;
	var photoInfo = json.photos.photo[Math.floor(Math.random() * json.photos.photo.length)];
	console.log(photoInfo);
	var photoURL = `https://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}_h.jpg`;
	console.log(photoURL);
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
});
req.open("GET", "https://crossorigin.me/https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=0387da6ad03addd68d5db89c4729f758&format=json&nojsoncallback=1&user_id=" + location.hash.split("#")[1])
req.send();

// Key 0387da6ad03addd68d5db89c4729f758

setInterval(function() {
	b = !b;
	var photoInfo = photoList[Math.floor(Math.random() * photoList.length)];
	console.log(photoInfo);
	var nextPhoto = `https://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}_h.jpg`;
	if (b) {
		imgElement1.className = "";
		imgElement2.className = "hidden";
		setTimeout(function() {
			imgElement2.src = nextPhoto;
		}, 1000)
	} else {
		imgElement1.className = "hidden";
		imgElement2.className = "";
		setTimeout(function() {
			imgElement1.src = nextPhoto;
		}, 1000)
	}
	console.log("Tick", location.hash.split("#")[1]);
}, interval);


