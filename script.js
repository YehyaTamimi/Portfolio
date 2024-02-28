//page navigation
const homeLink = document.querySelectorAll(".homeLink");
const aboutLink = document.querySelectorAll(".aboutLink");
const projectsLink = document.querySelectorAll(".projectsLink");
const contactLink = document.querySelectorAll(".contactLink");

const homeSection = document.querySelector("header");
const aboutSection = document.querySelector(".about");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");


homeLink.forEach( (btn) => {btn.addEventListener("click", function(event) {
    event.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
})});

aboutLink.forEach( (btn) => {btn.addEventListener("click", function(event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
})});

projectsLink.forEach( (btn) => {btn.addEventListener("click", function(event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: 'smooth' });
})});

contactLink.forEach( (btn) => {btn.addEventListener("click", function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
})});


//download CV
document.querySelector(".cv").addEventListener('click', function(){
    window.location.href = "CV/Resume.pdf";
})



//about me tabs
var tabs = document.querySelectorAll(".tabs p");
var allTabContents = document.querySelectorAll(".tab");
var tab1 = document.querySelector(".tab1");

tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        allTabContents.forEach(t => t.style.display = "none");
        
        var tabIndex = index + 1;
        var selectedTabContent = document.querySelector(".tab" + tabIndex);
        selectedTabContent.style.display = "block";
    });
});

tab1.style.display = "block";


//form validation
document.querySelector(".submit-btn").addEventListener("click", function(e){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("All fields must be filled");
        e.preventDefault();
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailRegex.test(email)){
            alert("email address is incorrect!");
            e.preventDefault();
            return false;
        }
    return true;

});




