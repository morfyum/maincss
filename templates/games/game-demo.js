
// Prevent Right Clicking -> Enable when cause an issue
// Easier way inside .html file: <body oncontextmenu="return false;">
//document.addEventListener('contextmenu', event => event.preventDefault());

/*
Lazy Loading: https://www.merixstudio.com/blog/lazy-loading-pure-javascript/
*/


/*
// element which needs to enter full-screen mode
var element = document.querySelector("#main-menu");

// make the element go to full-screen mode
element.requestFullscreen()
	.then(function() {
		// element has entered fullscreen mode successfully
	})
	.catch(function(error) {
		// element could not enter fullscreen mode
	});
*/



function gameInventory() {
    document.getElementById("gameInventory").classList.toggle("show-game-menu");
    console.log("Game Inventory");
}

function settingsBar() {
    document.getElementById("mainMenu").classList.toggle("show-game-menu");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.header-element')) {
        var dropdowns = document.getElementsByClassName("main-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-game-menu')) {
                openDropdown.classList.remove('show-game-menu');
            }
        }
    }
}



function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
