//// ARRAY OF CAT OBJECTS ////////////

var cats = [{
	name: "Jeff the cat",
	pic: "img/cat0.jpg",
	click: 0,
	id: 0
	},
	{
	name: "Jimmy sharp paws",
	pic: "img/cat1.jpg",
	click: 0,
	id: 1
	}
];

function loadCats(array){

	for (var i=0; i<array.length; i++){
		var catDisplay = document.createElement('div');

		var catName = document.createElement('h3');
	    catName.innerHTML = array[i].name;
	    catDisplay.appendChild(catName);

		var image = document.createElement('img');
		// image.type = 'image';
	    image.src = array[i].pic;
	    image.onClick = 'onClick()';
	    image.className = ('cat');
	    image.style.width = '200px';
	    catDisplay.appendChild(image);

	    var count = document.createElement('p');
	    count.id = [i];
		count.innerHTML = array[i].click;
		catDisplay.appendChild(count);
		// image.id = array[i].id;

	    document.body.appendChild(catDisplay);
	}	
}

//////////// MAKE EACH IMG.CAT CLICKABLE //////////////

function clickCats(array){
	var elem = document.getElementsByClassName('cat');

	for (var i=0; i<elem.length; i++){
		elem[i].addEventListener('click', clickHandler(i));
	};

	function clickHandler(i){
		return function(){
            var noOfClicks = cats[i].click += 1;
            console.log(cats[i].click);

//////// I am recordeing the number of clicks on each cat separately in their click counter
//////// I need to grab the relevant 'p' tag and overwrite the innerHTML using the click counter

			var counter = document.getElementsByTagName('p');
			counter[i].innerHTML = noOfClicks;

   //          var count = document.getElementById('[i]');
			// count.innerHTML = cats[i].click;
			// array[i].count = array[i].count +1;
        };
	};
};

//// overwrite



loadCats(cats);
clickCats(cats);
