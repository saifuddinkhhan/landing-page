function openFeature(evt, featureName) {
    var i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default active tab


// Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let sections = document.querySelectorAll('section');
window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top< offset + height){
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    })
}
//progress
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}
setInterval(next,7000)

