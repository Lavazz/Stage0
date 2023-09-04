let isLoging=false;
let currentUser;

// Получить модальный
let modalRegister = document.querySelector('.register_modal');
let modalLogin = document.querySelector('.login_modal');

// Получить кнопку, которая открывает модальный
let login = document.querySelector('.profile_login');
let register = document.querySelector('.profile_register');


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


document.querySelectorAll(".close").forEach(el => {
    el.addEventListener("click", ()=>{
        if(modalLogin.style.display === "none"){
            modalRegister.style.display = "none"
        }else{
       modalLogin.style.display = "none";
        }
    })})


const el = document.querySelector('.authorization');
document.onclick = function (e) {
    console.log(e.target.classList[0]);
    if(e.target.classList.contains("icon_profile")){
        document.querySelector('.authorization').style.display = "block";
        document.querySelector(".icon_profile").classList.add("icon_no_auth");
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
    const cardNumber= Math.floor(Math.random() *  Math.pow(10, 9));

    let newUser={
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: password, 
        cardNumber: cardNumber
    }

    let users = [];
    let usersFromStorage=window.localStorage.getItem("users");
    if(usersFromStorage){
        console.log(usersFromStorage);
    let newData = [...usersFromStorage, newUser]
    window.localStorage.setItem("users", newData);
     users=usersFromStorage.push(newUser);
    }else{
        users.push(newUser);
        window.localStorage.setItem("users", JSON.stringify(users));
    }

	
    isLoging=true;

    currentUser={
        firstName: firstName, 
        lastName: lastName, 
    }

    const iconLetters=(firstName.substring(0, 1)+lastName.substring(0, 1)).toUpperCase();
    console.log(iconLetters);
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
    document.querySelector(".icon_profile").classList.toggle("icon_no_auth");

    modalRegister.style.display = "none";
}


document.querySelector(".icon_profile").addEventListener('mouseover', function(event) {
    if(isLoging){
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth_fool_name">${currentUser[0].firstName} ${currentUser[0].lastName}</span>`;
}});

document.querySelector(".icon_profile").addEventListener('mouseout', function (event) {
    if(isLoging){	
    const iconLetters=(currentUser[0].firstName.substring(0, 1)+currentUser[0].lastName.substring(0, 1)).toUpperCase();
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
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

    if(usersFromStorage){
       
    // let logingUser = usersFromStorage.filter((u) => u.email===email && u.password===password.toString);
    currentUser = usersFromStorage.filter(u=>u.email===email && u.password===password.toString());
          if(currentUser){ 
              console.log(`currentUser: ${currentUser[0]}`);
              isLoging=true;
         
          const iconLetters=(currentUser[0].firstName.substring(0, 1)+currentUser[0].lastName.substring(0, 1)).toUpperCase();
          console.log(iconLetters);
          document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
          document.querySelector(".icon_profile").classList.toggle("icon_no_auth");
      
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
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  dots[slideIndex-1].className += " active";
}







