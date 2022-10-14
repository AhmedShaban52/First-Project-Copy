//Check if there is Local storage option
let maincolors = localStorage.getItem("color_option")

if (maincolors!==null){
    document.documentElement.style.setProperty('--main-color',maincolors)

    //Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

    //Remove Active Class On  Element With Data color === Local storage Item
    if(element.dataset.color === maincolors ){

    //Add Active Class
    element.classList.add("active");
    
    }
    
    })
}
//Toggle spin class 
document.querySelector(".settings-box .fa-gear").onclick =function(){
    this.classList.toggle("fa-spin")

    document.querySelector(".settings-box").classList.toggle("open")
}

//select setting box
document.querySelector(".settings-box .fa-gear").onclick = function() {
    
    //toggle class spin
    this.classList.toggle("fa-spin")

    // toggle class open
    document.querySelector(".settings-box").classList.toggle("open")
}

//swtich colors
const colorsLi=document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click",(e) =>{

        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set color on local storage
        localStorage.setItem("color_option",e.target.dataset.color)

        //Remove active class from all childern
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        })
        
        //add class active on slef
        e.target.classList.add("active");

    })
});

// Select Landing Page Element
let landing =document.querySelector(".landing");

// Get Array Of Imgs
let imgsArray = ["header_bg.jpg","burger.jpg","burger2.jpg","burger3.jpg","burger4.jpg","burger5.jpg","burger6.jpg","burger7.jpg","burger8.jpg","burger9.jpg"];

// Function To Randomize Imgs
setInterval(() => {
    //Get Random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    //change Background Image url
    landing.style.backgroundImage ='url("images/' + imgsArray[randomNumber] + '")';

}, 3000)



const allbullets = document.querySelectorAll(".nav-bullets .bullet");

allbullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });
});


let toggleBtn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".links")

toggleBtn.onclick =function (e){

    
    e.stopPropagation();

    //toggle class "menu-active" on button
    this.classList.toggle("menu-active") 

    //toggle class "open" on links
    tLinks.classList.toggle("open")
}

//Click Anawhere Outside Menu And  Toggle Menu
document.addEventListener("click",(e) =>{

    if(e.target!==toggleBtn & e.target!==tLinks){

        //Check if Menu Is open
        if(tLinks.classList.contains("open")){

        //toggle class "menu-active" on button
        toggleBtn.classList.toggle("menu-active") 

       //toggle class "open" on links
        tLinks.classList.toggle("open")
        }
    }
})

//stop Prppagation on menu
tLinks.onclick =function(e){

    e.stopPropagation();

}