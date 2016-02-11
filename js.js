document.addEventListener("DOMContentLoaded", function(){
  //Use CLOSURES to solve these two problems
  
  //PART A
  //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  //Use the numbers 1  - 6, not 0 - 5
  
	
	function partA() {

var main = document.querySelector("#main");

for (var i = 1; i < 7; i++) {

var p = document.createElement("p");
p.textContent = "Click Me";
main.appendChild(p);
	
// add an IIFE with a closure
	
p.addEventListener("click", (function (i) {
return function () {
this.textContent = i;
};

})(i));
}
}
	

	
							
	partA();

	
	

  //PART B 
  //after the user clicks on the h2 heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
  //EACH LIST ITEM'S TEXT SHOULD INCLUDE ITS INDEX NUMBER AS PART OF THE TEXT
  
	var h22 = document.getElementById("h2");
    var ul = document.getElementById("theList"); 
	
	h22.addEventListener("click", function () {      
            
		for (var i = 0; i <5; i++)
                
				setTimeout(poplist(ul, i), (i * 1000));
        });

    function poplist(ul, i) {
        return function () {
			var liCreate = document.createElement("li");
            liCreate.textContent = "Hello" + (i + 1);
            ul.appendChild(liCreate);
};
    }
});