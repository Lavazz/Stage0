const audioForest = document.querySelector('.audio_forest');
const playLogo = document.querySelector('.logo');
const soloveyBtn = document.querySelector('.play_solovey');
const drozdBtn = document.querySelector('.play_drozd');
const zarynkaBtn = document.querySelector('.play_zarynka');
const javoronokBtn = document.querySelector('.play_javoronok');
const slavkaBtn = document.querySelector('.play_slavka');
const playButton = document.querySelector('button');
const pauseBtn = document.querySelector('.pause');

let isPlay = false;
let currentAudio=audioForest;
let prevAudio;
let prevClass;
let currentClass;


function toggleActive(){
    console.log('in toggleActive');
    console.log(`prevClass: ${prevClass} , currentClass: ${currentClass}`); 
    if(prevClass){
    prevClass.toggle('active');
    }
    currentClass.add('active');
    console.log(`prevClass2: ${prevClass} , currentClass2: ${currentClass}`); 
}


function setCurrentAudio(event){
 if(event.currentTarget.audioParam){
    currentAudio=event.currentTarget.audioParam;
 }
}


function toggleBtn() {
    playButton.classList.toggle('pause');
}

function changePicture(event){
   let pictureParam = event.currentTarget.pictureParam;
   document.querySelector('.main').style.backgroundImage =`url(${pictureParam})`;
}


function playBird(event){
    currentAudio.pause(); 
    prevClass=currentClass;
    currentClass=event.currentTarget.classList;
    prevAudio=currentAudio;
    setCurrentAudio(event);
        
if(prevClass && (currentAudio===prevAudio)){
      if(!isPlay){      
        currentAudio.currentTime = 0;
        currentAudio.play();
        isPlay=true;
        toggleActive();
        toggleBtn();
    }else{          
      isPlay=false; 
      toggleBtn();         
    }
}else{
    currentAudio.currentTime = 0;
    currentAudio.play();
    isPlay=true;
    changePicture(event);
    toggleActive();
    if(!playButton.classList.contains('pause')){
        toggleBtn();       
    }
}
}

function playAudio(event) {
    if(playButton.classList.contains('pause')){
        currentAudio.pause(); 
     isPlay=false; 
     toggleBtn();
    }else{
        currentAudio.currentTime = 0;
        currentAudio.play();
        isPlay=true;  
        toggleBtn();    
    }
}


playButton.audioParam=document.querySelector('.audio_forest');
playButton.pictureParam="assets/img/forest.jpg";
playButton.addEventListener('click', playAudio);

soloveyBtn.audioParam=document.querySelector('.solovey');
soloveyBtn.pictureParam="assets/img/solovey.jpg";
soloveyBtn.addEventListener('click', playBird);

drozdBtn.audioParam=document.querySelector('.drozd');
drozdBtn.pictureParam='assets/img/drozd.jpg';
drozdBtn.addEventListener('click', playBird);

zarynkaBtn.audioParam=document.querySelector('.zarynka');
zarynkaBtn.pictureParam='assets/img/zarynka.jpg';
zarynkaBtn.addEventListener('click', playBird);

javoronokBtn.audioParam=document.querySelector('.javoronok');
javoronokBtn.pictureParam='assets/img/javoronok.jpg';
javoronokBtn.addEventListener('click', playBird);

slavkaBtn.audioParam=document.querySelector('.slavka');
slavkaBtn.pictureParam='assets/img/slavka.jpg';
slavkaBtn.addEventListener('click', playBird);

playLogo.audioParam=document.querySelector('.audio_forest');
playLogo.pictureParam="assets/img/forest.jpg";
playLogo.addEventListener('click', playBird);


