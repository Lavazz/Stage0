

//test
// document.querySelector('.authorization').addEventListener('click', (event)=>{console.log(event);} )

// Получить модальный
let modalRegister = document.querySelector('.register_modal');
let modalLogin = document.querySelector('.login_modal');

// Получить кнопку, которая открывает модальный
let login = document.querySelector('.profile_login');
let register = document.querySelector('.profile_register');

// Получить элемент <span>, который закрывает модальный
// let closeAll=document.querySelectorAll('.close');

// Когда пользователь нажимает на кнопку, откройте модальный
login.onclick = function() {
    console.log(event.target);
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


// Когда пользователь щелкает в любом месте за пределами модального, закройте его
// window.onclick = function(event) {
//     console.log(event.target.classList.value);
//     if(document.querySelector('.authorization').style.display === "block"){
//           if (event.target.classList.value != 'drop_list_authorization') {
//     document.querySelector('.authorization').style.display = "none";
//   }
//     }

// }

const el = document.querySelector('.authorization');
document.onclick = function (e) {
    console.log(e.target.classList.value);
    if(e.target.classList.value=="icon_profile"){
        document.querySelector('.authorization').style.display = "block";
    }
    else if (e.target != el) {
        el.style.display = "none";
    };
};

//add registration

