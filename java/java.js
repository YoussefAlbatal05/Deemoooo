
let backToTop = document.querySelector("#back-to-top")

window.onscroll = function(){
    if(document.documentElement.scrollTop > 2){ // The condition document.documentElement.scrollTop > 2 checks whether the user has scrolled more than 2 pixels down the page.

        backToTop.style.display = "block"; // Show button after scrolling down

    }else{

        backToTop.style.display = "none"; // Hide button when at the top

    }
}


backToTop.addEventListener( "click" , () => {

    window.scrollTo({   // window.scrollTo(): This is a method that scrolls the window to a specified location.
        top : 0 , // This tells the browser to scroll to the top of the page 
        behavior: 'smooth'
    })
})   
