document.getElementById("go").onclick = change;
function change() {
    var src = "images/"
    var radioButtons = document.getElementsByName("animals");
    
   
    for ( var i in radioButtons ) {       
        if ( radioButtons[i].checked ) {
            var checkedButton = radioButtons[i].value;
            break;
        }
    }
    var newSource = src + checkedButton + ".jpg";
	
	
    var image= document.getElementById("puppies");
    image.setAttribute("src",newSource);
}