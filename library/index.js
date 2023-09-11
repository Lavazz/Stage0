let isLoging=false;
let currentUser={};
let currentVisit=0;

// Получить модальный
let modalRegister = document.querySelector('.register_modal');
let modalLogin = document.querySelector('.login_modal');
let modalBuy = document.querySelector('.buy_modal');
let modalProfile = document.querySelector('.profile_modal');

// Получить кнопку, которая открывает модальный
let login = document.querySelector('.profile_login');
let register = document.querySelector('.profile_register');
let logout= document.querySelector('.profile_logout');
let myProfile= document.querySelector('.my_profile');


// Когда пользователь нажимает на кнопку, откройте модальный
login.onclick = function() {
    modalLogin.style.display = "block";
  document.querySelector('.authorization').style.display = "none";

}
// Когда пользователь нажимает на кнопку, откройте модальный
register.onclick = function() {
    modalRegister.style.display = "block";
  document.querySelector('.authorization').style.display = "none";
}

logout.onclick = function() {
   currentUser={};
   isLoging=false;
   document.querySelector('.authorization_logout').style.display = "none";
   document.querySelector(".icon_profile").classList.add("icon_no_auth");
   document.querySelector(".icon_profile").removeChild( document.querySelector(".icon_auth"));
}

myProfile.onclick = function() {
    modalProfile.style.display = "block";
    document.querySelector('.prof_num').innerHTML=currentUser.cardNumber;
    document.querySelector('.authorization_logout').style.display = "none";
 
 }


document.querySelectorAll(".close").forEach(el => {
    el.addEventListener("click", ()=>{
        if(modalLogin.style.display === "none"){
            modalRegister.style.display = "none"
        }else{
       modalLogin.style.display = "none";
        }
    })})

    document.querySelectorAll(".close_buy").forEach(el => {
        el.addEventListener("click", ()=>{
           modalBuy.style.display = "none";            
        })})

    document.querySelectorAll(".profile_close").forEach(el => {
        el.addEventListener("click", ()=>{
           modalProfile.style.display = "none";            
        })})


const el = document.querySelector('.authorization');
document.onclick = function (e) {
    console.log(e.target.classList[0]);
    if(e.target.classList.contains("icon_profile") || e.target.classList.contains("icon_auth")){
        if(!isLoging){
        document.querySelector('.authorization').style.display = "block";
        document.querySelector(".icon_profile").classList.add("icon_no_auth");
    }else if(isLoging){
        document.querySelector('.authorization_logout').style.display = "block";
        document.querySelector('.profile_initial').innerHTML=currentUser.cardNumber;
    }
    }else if (e.target != el && document.querySelector('.authorization').style.display == "block") {
        el.style.display = "none"; 
    } else if(e.target.classList[0] =='login'){
            modalLogin.style.display ="block"
        }else if(e.target.classList[0] =='register'){
            modalRegister.style.display = "block"
    }else if(e.target.classList.value =='login_modal' &&  modalLogin.style.display == "block"){
        modalLogin.style.display = "none";
    }else if(e.target.classList.value =='register_modal' &&  modalRegister.style.display == "block"){
        modalRegister.style.display = "none";
    }else if(e.target !=document.querySelector('.profile_no_authorized') &&  document.querySelector('.authorization_logout').style.display == "block"){
        document.querySelector('.authorization_logout').style.display = "none";
    }else if(e.target.classList.value =='buy_modal' &&  modalBuy.style.display == "block"){
        modalBuy.style.display = "none";
    }
};


//add registration
 document.querySelector(".register-form").addEventListener("submit", handleSubmitRegistration);

 function handleSubmitRegistration(event){
    event.preventDefault();

    const data = new FormData(event.target);
	const firstName = data.get("first_name");
	const lastName = data.get("last_name");	
	const email = data.get("email_register");
    const password = data.get("password_register");                         
    const cardNumberDes= Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;
    const cardNumber = (cardNumberDes.toString(16)).toUpperCase(); 

    let newUser={
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: password, 
        cardNumber: cardNumber
    };

    let newVisit={
        email: email, 
        visit: 1
    }

    console.log(newUser);
    let users = [];
    let visits = [];
    let usersFromStorage=JSON.parse(window.localStorage.getItem("users"));
    let visitsFromStorage=JSON.parse(window.localStorage.getItem("visits"));
    if(usersFromStorage){
    usersFromStorage.push(newUser);
    window.localStorage.setItem("users", JSON.stringify(usersFromStorage));
    visitsFromStorage.push(newVisit);
    window.localStorage.setItem("visits", JSON.stringify(visits));
    }else{
        users.push(newUser);
        visits.push(newVisit);
        window.localStorage.setItem("users", JSON.stringify(users));
        window.localStorage.setItem("visits", JSON.stringify(visits));
    }
    isLoging=true;
    currentVisit=1;
    currentUser=newUser;

    const iconLetters=(firstName.substring(0, 1)+lastName.substring(0, 1)).toUpperCase();
    console.log(iconLetters);
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
    document.querySelector(".icon_profile").classList.toggle("icon_no_auth");

    document.getElementById('card_form_name').value = `${firstName} ${lastName}`;
	document.getElementById('card_form_number').value = `${cardNumber}`;
    document.querySelector('.card_button').style.display = "none"; 
    document.querySelector('.visibility').style.display = "block";

    document.querySelector('.auth_button_login').style.display = "none"; 
    document.querySelector('.auth_button_signup').style.display = "none"; 
    document.querySelector('.auth_button_profile').style.display = "block"; 

    document.getElementById('visit_count_1').value = `${currentVisit}`; 
    document.getElementById('visit_count_2').value = `${currentVisit}`; 
    
    modalRegister.style.display = "none";
}


document.querySelector(".icon_profile").addEventListener('mouseover', function(event) {
    if(isLoging){         
    document.querySelector(".icon_profile").title=currentUser.firstName+' ' +currentUser.lastName;
}});


//login
document.querySelector(".login-form").addEventListener("submit", handleSubmitLogin);

function handleSubmitLogin(event){
    event.preventDefault();

    const data = new FormData(event.target);
	const email = data.get("email_login");
    const password = data.get("password_login");

    console.log(`emailFromUser: ${email}`);

    let usersFromStorage= JSON.parse(window.localStorage.getItem("users"));
    let visitsFromStorage= JSON.parse(window.localStorage.getItem("visits"));
    console.log(`usersFromStorage: ${usersFromStorage}`);
    console.log(`visitsFromStorage: ${visitsFromStorage}`);
    if(usersFromStorage){
       
    // currentUser = usersFromStorage.filter(u=>u.email===email && u.password===password.toString())[0];
    currentUser = usersFromStorage.filter(u=>{
        console.log(`u.email: ${u.email} ===${email}` );

     return  u.email===email && u.password===password.toString()})[0];
   
          if(currentUser){ 
              console.log(`currentUser: ${currentUser}`);
              isLoging=true;              
              currentVisit=(visitsFromStorage.find(x => x.email === currentUser.email).visit)+1;

             let visits=visitsFromStorage.map(v=>v.email===currentUser.email  ? { ...v,  visit: currentVisit } : v);

              window.localStorage.setItem("visits", JSON.stringify(visits));
         
          const iconLetters=(currentUser.firstName.substring(0, 1)+currentUser.lastName.substring(0, 1)).toUpperCase();
          console.log(iconLetters);
          document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
          document.querySelector(".icon_profile").classList.toggle("icon_no_auth");
          document.getElementById('card_form_name').value = `${currentUser.firstName} ${currentUser.lastName}`;
	      document.getElementById('card_form_number').value = `${currentUser.cardNumber}`;
	      document.querySelector('.card_button').style.display = "none"; 
	      document.querySelector('.visibility').style.display = "block";

          document.querySelector('.auth_button_login').style.display = "none"; 
          document.querySelector('.auth_button_signup').style.display = "none"; 
          document.querySelector('.auth_button_profile').style.display = "block"; 

          document.querySelector('.visit_count_1').innerHTML = `${currentVisit}`; 
          document.querySelector('.visit_count_2').innerHTML = `${currentVisit}`; 

          modalLogin.style.display = "none";
       }
    } 
}

//slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my_slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(window.screen.width>1024){
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }else{
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }
}

//buy

document.querySelectorAll('.button_buy').forEach(s=>s.addEventListener("click", handleBuy));
document.querySelector('.auth_button_login').addEventListener("click", handleBuy);
document.querySelector('.auth_button_signup').addEventListener("click", handleReg);
document.querySelector('.auth_button_profile').addEventListener("click", handleProfile);

function handleBuy(event){
if(!isLoging){
    modalLogin.style.display = "block";
}else{
    modalBuy.style.display = "block";
}
}

function handleReg(event){
if(!isLoging){
    modalRegister.style.display = "block";
}
}

function handleProfile(event){
    if(isLoging){
        modalProfile.style.display  = "block";
    }
    }

    //visits
















