const audioForest = document.querySelector('.audio_forest');
const soloveyBtn = document.querySelector('.play_solovey');
const drozdBtn = document.querySelector('.play_drozd');
const zarynkaBtn = document.querySelector('.play_zarynka');
const javoronokBtn = document.querySelector('.play_javoronok');
const slavkaBtn = document.querySelector('.play_slavka');
const playButton = document.querySelector('button');
const pauseBtn = document.querySelector('.pause');

let isPlay = false;


function playAudio(event) {
    const audio=event.currentTarget.audioParam;
    changePicture(event.currentTarget.pictureParam);
    if(!isPlay){
  audio.currentTime = 0;
  audio.play();
  isPlay=true;
    }else{
        audio.pause();
        isPlay=false;   
    }
    toggleBtn();
}


function playForest(){
    playAudio(audioForest);
}


function toggleBtn() {
    playButton.classList.toggle('pause');
}

function changePicture(pictureParam){
   document.querySelector('.main').style.backgroundImage =`url(${pictureParam})`;
}

playButton.audioParam=document.querySelector('.audio_forest');
playButton.addEventListener('click', playAudio);

soloveyBtn.audioParam=document.querySelector('.solovey');
soloveyBtn.pictureParam="assets/img/solovey.jpg";
soloveyBtn.addEventListener('click', playAudio);

drozdBtn.audioParam=document.querySelector('.drozd');
drozdBtn.pictureParam='assets/img/drozd.jpg';
drozdBtn.addEventListener('click', playAudio);

zarynkaBtn.audioParam=document.querySelector('.zarynka');
zarynkaBtn.pictureParam='assets/img/zarynka.jpg';
zarynkaBtn.addEventListener('click', playAudio);

javoronokBtn.audioParam=document.querySelector('.javoronok');
javoronokBtn.pictureParam='assets/img/javoronok.jpg';
javoronokBtn.addEventListener('click', playAudio);

slavkaBtn.audioParam=document.querySelector('.slavka');
slavkaBtn.pictureParam='assets/img/slavka.jpg';
slavkaBtn.addEventListener('click', playAudio);


