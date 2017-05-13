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

function loadCats(array){

	for (var i=0; i<array.length; i++){
		var catDisplay = document.createElement('div');

		var catName = document.createElement('h3');
	    catName.innerHTML = array[i].name;
	    catDisplay.appendChild(catName);

		var image = document.createElement('img');
	    image.src = array[i].pic;
	    image.className = ('cat');
	    image.style.width = '200px';
	    catDisplay.appendChild(image);

	    var count = document.createElement('p');
		count.innerHTML = array[i].click;
		catDisplay.appendChild(count);

	    document.body.appendChild(catDisplay);
	}	
}

//////////// MAKE EACH IMG.CAT CLICKABLE AND RECORD CLICKS IN COUNTER //////////////

function clickCats(array){
	var elem = document.getElementsByClassName('cat');

	for (var i=0; i<elem.length; i++){
		elem[i].addEventListener('click', clickHandler(i));
	};

	function clickHandler(i){
		return function(){
            var noOfClicks = cats[i].click += 1;
			var counter = document.getElementsByTagName('p');
			counter[i].innerHTML = noOfClicks;
        };
	};
};

loadCats(cats);
clickCats(cats);
