
function galaxy() {
	window.localStorage.setItem('galaxy', 'true');
	document.body.style.backgroundColor = "rgb(60, 9, 108)"
	localStorage.setItem('ocean', 'false');
	menu.style.backgroundColor = "rgb(90, 24, 154)"
	window.localStorage.removeItem('ocean');
}


function ocean() {
	window.localStorage.setItem('ocean', 'on');
	document.body.style.backgroundColor = "rgb(72, 202, 228)"
	localStorage.setItem('galaxy', 'false');
	window.localStorage.removeItem('galaxy');
	menu.style.backgroundColor = "rgb(144, 224, 239)"
}

function classic() {
	window.localStorage.setItem('classic', 'on');
	document.body.style.backgroundColor = "rgb(113, 131, 85)"
	localStorage.setItem('galaxy', 'false');
	window.localStorage.removeItem('galaxy');
	window.localStorage.removeItem('ocean');
	menu.style.backgroundColor = "rgb(90, 24, 154)"
	menu.style.backgroundColor = "rgb(135, 152, 106)"
}



  

 
  

  
  
  var title = localStorage.getItem("title")
  var favicon = localStorage.getItem("favicon")
  
  if (localStorage.hasOwnProperty("title")) {
      document.title = title
  }
  
  if (localStorage.hasOwnProperty("favicon")) {
      document.querySelector("link[rel='shortcut icon']").href = favicon;
  }
  
  function settitle(title) {
    if (title !== "") {
    localStorage.setItem("title", title)
    document.title = title
    } else {
    localStorage.removeItem("title")
    document.title = "\u200E"
    }
  }
  
  function setfavicon(icon) {
    if (icon !== "") {
    localStorage.setItem("favicon", icon)
    document.querySelector("link[rel='shortcut icon']").href = icon;
    } else {
    localStorage.removeItem("favicon")
    document.querySelector("link[rel='shortcut icon']").href = "/img/logo.svg";
    }
  }
  
  function setgoogle() {
    settitle("Google")
    setfavicon("https://www.google.com/favicon.ico")
  }
  
  function setgoogled() {
    settitle("My Drive - Google Drive")
    setfavicon("https://www.drive.google.com/favicon.ico")
  }
  
  function setedpuzzle() {
    settitle("Edpuzzle")
    setfavicon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
  }
  
  function setzoom() {
    settitle("Zoom")
    setfavicon("https://st1.zoom.us/zoom.ico")
  }
  
  function setgooglep() {
    settitle("Android Apps on Google Play")
    setfavicon(href = "images/googleplay.png")
  }
  function setreset() {
    localStorage.removeItem("title")
    localStorage.removeItem("favicon")
    location.reload();
  }
  
  function setclassroom() {
    settitle("Classes")
    setfavicon(href = "images/googleclass.png")
  }

  
  function setxmath() {
    settitle("XtraMath")
    setfavicon(href = "images/xmath.png")
  }

  function setprod() {
    settitle("Free Math Learning Game For Kids | Prodigy Math Game | Prodigy Education")
    setfavicon(href = "images/prodigy.png")
  }
  
  function settube() {
    settitle("The Lessons Of History By Will & Ariel Durant [ FULL AUDIOBOOK ]")
    setfavicon(href = "images/youtube.png")
  }

  function setschool() {
    settitle("Schoology")
    setfavicon(href = "images/school.png")
  }

  function setcanvas() {
    settitle("Canvas Instructure")
    setfavicon(href = "images/canvas.png")
  }



  
  function openGame() {
    var win = window.open() 
    var url = ""
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%  ";
    iframe.style.height = "100%";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.bottom = "0";
    iframe.style.left = "0";
    iframe.style.left = "0";
    iframe.style.border = "none";
    iframe.style.backgroundcolor = "black"
    iframe.src = url
    win.document.body.appendChild(iframe)
    }

    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      }

      function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }

