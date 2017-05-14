//// ARRAY OF CAT OBJECTS ////////////

var cats = [{
	name: "Jeff the cat",
	pic: "img/cat0.jpg",
	click: 0
	// id: 0
	},
	{
	name: "Jimmy sharp paws",
	pic: "img/cat1.jpg",
	click: 0
	// id: 1
	},
	{
	name: "Soppy ginger",
	pic: "img/cat2.jpg",
	click: 0
	},
	{
	name: "Bounding Snow Leopard",
	pic: "img/cat3.jpg",
	click: 0	
	},
	{
	name: "Growler in the wild",
	pic: "img/cat4.jpg",
	click: 0
	}
];

// Creates empty cat display area to be used later
function loadCatDisplay(){
	var catDisplay = document.createElement('div');
	catDisplay.id =('selected')
	// var catName = document.createElement('h3');
	// var image = document.createElement('img');
	// var count = document.createElement('p');
	// catDisplay.appendChild(catName, image, count);
	document.body.appendChild(catDisplay);
	// console.log("Empty div is created")
}

// Loads list of cat names
function loadList(array){
	var catList = document.createElement('ul');
	for (var i=0; i<array.length; i++){
		var catName = document.createElement('li');
		catName.innerHTML = array[i].name;
		catList.appendChild(catName);
	};
	document.body.appendChild(catList);
	loadCatDisplay();
};

// function clickPic(img){

// 	var img = document.getElementById('cat');

// 	console.log(img);
// }


// Makes cat names clickable and loads cat details into catDisplay div
function catSelect(array){
	var elem = document.getElementsByTagName('li');
	for (var i=0; i<elem.length; i++){
		elem[i].addEventListener('click', clickHandler(i));
	};
	function clickHandler(i){
		return function() {
			var catDisplay = document.getElementById('selected');

			// First clear the div, then write new info to it
			catDisplay.innerHTML = "";

			var catName = document.createElement('h3');
		    catName.innerHTML = array[i].name;
		    catDisplay.appendChild(catName);

			var image = document.createElement('img');
		    image.src = array[i].pic;
		    image.id = ('cat');
		    image.style.width = '200px';
		    catDisplay.appendChild(image);

		    var count = document.createElement('p');
			count.innerHTML = array[i].click;
			catDisplay.appendChild(count);
		}
	};


	// function clickCats(array){
	// 	var catPic = document.getElementsByClassName('cat');
		
	// 	for (var i=0; i<catPic.length; i++){
	// 		catPic[i].addEventListener('click', clickHandler(i));
	// 	};

	// 	function clickHandler(i){
	// 		return function(){
	//             var noOfClicks = cats[i].click += 1;
	// 			var counter = document.getElementsByTagName('p');
	// 			counter[i].innerHTML = noOfClicks;
	//         };
	// 	};
	// }(cats);

}

//////////// MAKE EACH IMG.CAT CLICKABLE AND RECORD CLICKS IN COUNTER //////////////


loadList(cats);
catSelect(cats);








/* 	1. Display List of cat names
		- create <ul>
		- write each cat[i].name to each <li>
	2. Let user select one
		- onClick create cat div with name / pic / counter
		- if user selects another then cat div needs to be overwirtten */
