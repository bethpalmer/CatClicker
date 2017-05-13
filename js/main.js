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
		count.innerHTML = array[i].click;
		catDisplay.appendChild(count);
		// count.style.marginBottom = '20px';
		// image.id = array[i].id;

	    document.body.appendChild(catDisplay);
	}

	// function onClick(){
	// 	for (var i=0; i<array.length; i++){
	// 		array[i].click += 1;
	// 		count[i].innerHTML = array[i].click;
	// 		catDisplay.appendChild(count);
	// 	}
	// }

	// var elem = document.getElementsByClassName('cat');
	//     console.log(elem);

	// for (var i=0; i<elem.length; i++){
	// 	elem[i].addEventListener('click', function(){
	//     	array[i].click += 1;
	//     	count.innerHTML = array[i].click;
	// 	})
	// }	
	    
}

//////////// MAKE EACH IMG.CAT CLICKABLE //////////////

function clickCats(array){
	var elem = document.getElementsByClassName('cat');
	for (var i=0; i<elem.length; i++){
		elem[i].addEventListener('click', clickHandler);
	}
}

//////////// ON CLICK 1. REGISTER WHICH OBJECT THAT WAS ON
//////////////////    2. UPDATE THAT OBJECTS CLICK COUNT
//////////////////    3. OVERWITE 'P' COUNT

function clickHandler(){
	console.log("Click registered for");
}

//////////////// PLAN OF ACTION ///////////
// 1. Make image clickable - DONE - WOOP!
// 2. When clicked, cats[i].click +1
// 3. Select 'p' count and  overwrite it


// function onClick(){
// 	console.log("You clicked that cat!");
// }

loadCats(cats);
clickCats(cats);



	
	    		// var elem = document.getElementsByClassName('cat');
	    	// }

	    	// elem[0].addEventListener("click",function(){
	     //                  array[0].count = array[0].count + 1;
	     //                  var total= array[0].count;
	     //                  var numb = document.getElementsByTagName("p")[0];
	     //                  numb.innerHTML = total;
	     //          },false);
      //       elem[1].addEventListener("click",function(){
		    //               array[1].count = array[1].count + 1;
		    //               var total= array[1].count;
		    //               var numb = document.getElementsByTagName("p")[1];
		    //               numb.innerHTML = total;
		    //       },false);
	    // };

	 



///////////////////// THIS CLICK FUNCTION WORKED WELL FOR A SINGULAR CAT ///////////////////////////////////
    // var clicks = 0;
    // function onClick() {
    //     clicks += 1;
    //     document.getElementById("clicks").innerHTML = clicks;
    // };

    