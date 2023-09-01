let isLogingIn=false;
let users;


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
    const cardNumber= num.toString(16)( Math.floor(Math.random() * Math.pow(10, 9)));

    users=window.localStorage.getItem("users");
    users.push({firstName, lastName, email, password, cardNumber})

	window.localStorage.setItem("users", users);
    isLogingIn=true;

    const iconLetters=(firstName.substring(0, 1)+lastName.substring(0, 1)).toUpperCase();
    console.log(iconLetters);
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
    document.querySelector(".icon_profile").classList.toggle("icon_no_auth");

    modalRegister.style.display = "none";
}

document.querySelector(".icon_profile").addEventListener('mouseover', function(event) {
	const firstName = window.localStorage.getItem("first_name");
	const lastName = window.localStorage.getItem("last_name");	
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth_fool_name">${firstName} ${lastName}</span>`;
});

document.querySelector(".icon_profile").addEventListener('mouseout', function (event) {
    const firstName = window.localStorage.getItem("first_name");
	const lastName = window.localStorage.getItem("last_name");	
    const iconLetters=(firstName.substring(0, 1)+lastName.substring(0, 1)).toUpperCase();
    document.querySelector(".icon_profile").innerHTML=`<span class="icon_auth">${iconLetters}</span>`;
});






