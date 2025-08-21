// const title = document.getElementById("title");
// console.log(title);
// title.innerHTML = "Hi";


// Event for DOM
document.addEventListener("DOMContentLoaded", function() {
    // Get the menu toggle button
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const barIcon = document.getElementById("bar-icon");
    const closeIcon = document.getElementById("close-icon");
    // Add event for menuToggle
    console.log(menuToggle);
    menuToggle.addEventListener("click", function (){
        mobileNav.classList.toggle("active");

        if(mobileNav.classList.contains("active")){
            // da bam vao bar icon => an va hien close icon
            barIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else{
            barIcon.style.display = "block";
            closeIcon.style.display = "none";
        }




    });
});


