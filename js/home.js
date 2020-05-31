//***HEADER***

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  

    burger.addEventListener('click',()=>{
          //toggle nav
        nav.classList.toggle('nav-active');
    
    //animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.8s ease forwards ${index/ 7 + 0.5}s`;
        }

        });
        //burger animation

        burger.classList.toggle('toggle');
    
    });
}

navSlide();

//***Home slider***

setInterval(function(){

    const checkedElement = document.querySelector(".carousel > input:checked")
    const checkedElementId = checkedElement.getAttribute("id")
    const elementOrdinal = parseInt(checkedElementId[checkedElementId.length - 1]) % 5 //kolku slideri, tolku modul %
    document.getElementById("carousel-" + ((elementOrdinal + 1))).checked = true

}, 5000)



//************************************************************//

var latestNews = [
    './img/606641.jpg',
    './img/606641.jpg',
    './img/606641.jpg',
    './img/606641.jpg',
    './img/606641.jpg',
    './img/606641.jpg'
]

function initializeNewsSlider() {
    const newsBoxes = document.querySelectorAll(".news-slider > img")
    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].setAttribute("src", latestNews[i])
    }

}
initializeNewsSlider();

var newArray = []

function moveLeft() {

    const leftButton = document.getElementById("moveLeftBtn")
    const rightButton = document.getElementById("moveRightBtn")
    leftButton.classList.add("disable-events")
    rightButton.classList.add("disable-events")

    triggerAnimationLeft()
    const firstElement = latestNews.shift();
    latestNews.push(firstElement)

    setTimeout(function(){
        initializeNewsSlider();
        leftButton.classList.remove("disable-events")
        rightButton.classList.remove("disable-events")
    }, 1000)

}

function moveLeftTwice(){
    moveLeft()
    setTimeout(moveLeft, 1000)
}

function moveRightTwice(){
    moveRight()
    setTimeout(moveRight, 1000)
}
function moveRight() {

    const leftButton = document.getElementById("moveLeftBtn")
    const rightButton = document.getElementById("moveRightBtn")
    leftButton.classList.add("disable-events")
    rightButton.classList.add("disable-events")

    triggerAnimationRight()
    const lastElement = latestNews[latestNews.length-1];
    latestNews = [lastElement].concat(latestNews.slice(0, latestNews.length-1))

    setTimeout(function(){
        initializeNewsSlider();
        leftButton.classList.remove("disable-events")
        rightButton.classList.remove("disable-events")
    }, 1000)
}

function triggerAnimationLeft() {

    const newsBoxes = document.querySelectorAll(".news-slider > img")

    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-right'); // reset animation
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-left'); // reset animation
        void newsBoxes[i].offsetWidth; // trigger reflow
        newsBoxes[i].classList.add('slider' + (i + 1) + '-animate-left'); // start animation
    }

}

function triggerAnimationRight() {
    const newsBoxes = document.querySelectorAll(".news-slider > img")

    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-right'); // reset animation
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-left'); // reset animation
        void newsBoxes[i].offsetWidth; // trigger reflow
        newsBoxes[i].classList.add('slider' + (i + 1) + '-animate-right'); // start animation
    }

}
