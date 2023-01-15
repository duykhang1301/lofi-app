
import Validator from "../../vendor/validate/validator.js";

const MAIN_BACKGROUND_DAY = "assets/video/main-bg-day.mp4";
const MAIN_BACKGROUND_DAY_RAIN = "assets/video/main-bg-day-rain.mp4";
const MAIN_BACKGROUND_NIGHT = "assets/video/main-bg-night.mp4";
const MAIN_BACKGROUND_NIGHT_RAIN = "assets/video/main-bg-night-rain.mp4";

const btnOpenLoginForm = document.querySelector(".header .btn__sign button");
const loginFormElement = document.querySelector(".login__form");
const btnCloseLoginForm = document.querySelector(".login__form i");
const seePassword = document.querySelector(".login__form .form__group i");
const passWordElement = document.getElementById("password");

const btnOpenRegisterForm = document.getElementById("btn-register");
const registerFormElement = document.querySelector(".register__form");
const btnCloseRegisterForm = document.querySelector(".register__form i");
const seeRegisterPassword = document.querySelector(".register__form .form__group i");
const passwordRegisterElement = document.getElementById("password-register");
const backToLoginForm = document.getElementById("btn-back-login-form");

const btnMixmode = document.querySelector(".container .menu__mixmode i:nth-child(1)");
const btnTemplates = document.querySelector(".container .menu__mixmode i:nth-child(2)");
const btnCloseTemplate = document.querySelector(".container .templates__details i");
const btnDetails = document.querySelector(".container .details__mixmode");
const detailTemplates = document.querySelector(".container .templates__details");
const selectMode = document.querySelectorAll(".container .details__mixmode .menu__mood .menu__mood--detail");
const closeMode = document.querySelector(".container .details__mixmode>i");
const btnPrev = document.querySelector(".container .music__player__container .music__player--control i:nth-child(1)");
const btnPlay = document.querySelector(".container .music__player__container .music__player--control i:nth-child(2)");
const btnNext = document.querySelector(".container .music__player__container .music__player--control i:nth-child(3)");
const btnMute = document.querySelector(".container .music__player__container .music__player--extra .fa-volume-high");
const containerCityRainPoint = document.querySelector(".container .cityrain__point__container");
const cityRainPoint = document.querySelector(".container .cityrain__point__container .cityrain__point");
const pointCityRainSoundContent = document.querySelector(".container .cityrain__point__container .content");
const rangeCityRainSound = document.querySelector(".container .cityrain__point__container .content .volume__point");
const circleInCityRainPoint = document.querySelector(".container .cityrain__point__container .cityrain__point .point__circle");

const containerKeyboardPoint = document.querySelector(".container .keyboard__point__container");
const keyboardPoint = document.querySelector(".container .keyboard__point__container .keyboard__point");
const keyboardPointSoundContent = document.querySelector(".container .keyboard__point__container .content");
const rangeKeyboardSound = document.querySelector(".container .keyboard__point__container .content .volume__point");
const circleInKeyboardPoint = document.querySelector(".container .keyboard__point__container .keyboard__point .point__circle");

const keyBoardSound = document.querySelector(".container .details__mixmode .sounds__container .sounds__container--item:nth-child(1) audio");
const cityTrafficSound = document.querySelector(".container .details__mixmode .sounds__container .sounds__container--item:nth-child(2) audio");
const cityRainSound = document.querySelector(".container .details__mixmode .sounds__container .sounds__container--item:nth-child(3) audio");

const volumeKeyBoard = document.getElementById("volume-keyboard");
const volumeCityTraffic = document.getElementById("volume-cityTraffic");
const volumeCityRain = document.getElementById("volume-cityRain");

const darkModeButton = document.getElementById("switch");
const videoBackground = document.querySelector(".container video");
const audioSong = document.querySelector(".container #audio");
const volume = document.getElementById("volume");

const templateItem = document.querySelectorAll(".container .templates__details .templates__details--item")

const keyEventElement = document.querySelector("body");

let darkModeItem = "";
let backgroundTemplate = "";
let templateOn = false;
let typeOfSong = 2;
let isPlayed = false;
let isRained = false;
let isRainPointClicked = false;
let isKeyboardPointClicked = false;


//loader 
window.onload = function(){
   
    setTimeout(()=>{
    document.querySelector(".loader__container").classList.add("active");
    },200);
    document.querySelector(".loader__container").classList.remove("active");
}

//
//fullscreen
const btnFullScreen = document.querySelector('.container .music__player__container .music__player--extra:nth-child(3) i');
const fullscreenElement = document.querySelector("body");
btnFullScreen.addEventListener('click', function() {
    btnFullScreen.classList.toggle("fa-expand");
    btnFullScreen.classList.toggle("fa-compress");
	requireFullScreen(fullscreenElement);
});
function requireFullScreen(element) {
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	} else if (element.msRequestFullScreen) {
		element.msRequestFullScreen();
	}
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

//


//validate form start

Validator({
    form: '#login-form',
    errorSelector: '.error__message',
    rules: [
    Validator.isRequired('#username'),
    Validator.isEmail("#username"),
    Validator.isRequired("#password"),
    Validator.isMinLength('#password',6),
],
    onSubmit: function(data){
        location.reload();
    }
});
Validator({
    form: '#register-form',
    errorSelector: '.error__message',
    rules: [
    Validator.isRequired('#user'),
    Validator.isEmail("#user"),
    Validator.isRequired('#email'),
    Validator.isEmail("#email"),
    Validator.isRequired("#password-register"),
    Validator.isMinLength('#password-register',6),   
    ],
    onSubmit: function(data){
       location.reload();
    }
});

//validate form end

//Danh sach bai hat
const listSongs = [
    [
        {
            id: 1,
            path: "assets/musics/sleepy/sleepy-1.mp3"
        },
        {
            id: 2,
            path: "assets/musics/sleepy/sleepy-2.mp3"
        },
        {
            id: 3,
            path: "assets/musics/sleepy/sleepy-3.mp3"
        },
        {
            id: 4,
            path: "assets/musics/sleepy/sleepy-4.mp3"
        },
        {
            id: 5,
            path: "assets/musics/sleepy/sleepy-5.mp3"
        },
        {
            id: 6,
            path: "assets/musics/sleepy/sleepy-6.mp3"
        },
        {
            id: 7,
            path: "assets/musics/sleepy/sleepy-7.mp3"
        },
        {
            id: 8,
            path: "assets/musics/sleepy/sleepy-8.mp3"
        },
        {
            id: 9,
            path: "assets/musics/sleepy/sleepy-9.mp3"
        },
        {
            id: 10,
            path: "assets/musics/sleepy/sleepy-10.mp3"
        }
    ],
    [
        {
            id: 1,
            path: "assets/musics/jazzy/jazz-1.mp3"
        },
        {
            id: 2,
            path: "assets/musics/jazzy/jazz-2.mp3"
        },
        {
            id: 3,
            path: "assets/musics/jazzy/jazz-3.mp3"
        },
        {
            id: 4,
            path: "assets/musics/jazzy/jazz-4.mp3"
        }, 
        {
            id: 5,
            path: "assets/musics/jazzy/jazz-5.mp3"
        },
        {
            id: 6,
            path: "assets/musics/jazzy/jazz-6.mp3"
        },
        {
            id: 7,
            path: "assets/musics/jazzy/jazz-7.mp3"
        },
        {
            id: 8,
            path: "assets/musics/jazzy/jazz-8.mp3"
        },
        {
            id: 9,
            path: "assets/musics/jazzy/jazz-9.mp3"
        },
        {
            id: 10,
            path: "assets/musics/jazzy/jazz-10.mp3"
        }
    ],
    [
        {
            id: 1,
            path: "assets/musics/chill/chill-1.mp3"
        },
        {
            id: 2,
            path: "assets/musics/chill/chill-2.mp3"
        },
        {
            id: 3,
            path: "assets/musics/chill/chill-3.mp3"
        },
        {
            id: 4,
            path: "assets/musics/chill/chill-4.mp3"
        },
        {
            id: 5,
            path: "assets/musics/chill/chill-5.mp3"
        },
        {
            id: 6,
            path: "assets/musics/chill/chill-6.mp3"
        },
        {
            id: 7,
            path: "assets/musics/chill/chill-7.mp3"
        },
        {
            id: 8,
            path: "assets/musics/chill/chill-8.mp3"
        },
        {
            id: 9,
            path: "assets/musics/chill/chill-9.mp3"
        },
        {
            id: 10,
            path: "assets/musics/chill/chill-10.mp3"
        }
    ]
]


//city rain sound
containerCityRainPoint.onmouseover = function(){
    pointCityRainSoundContent.style.display = "block";
    circleInCityRainPoint.style.display = "block";
    pointCityRainSoundContent.style.color = "rgb(243, 169, 82)";
}

containerCityRainPoint.onmouseout = function(){
    pointCityRainSoundContent.style.display = "none";
    circleInCityRainPoint.style.display = "none";
}

//keyboard sound
containerKeyboardPoint.onmouseover = function(){
    keyboardPointSoundContent.style.display = "block";
    circleInKeyboardPoint.style.display = "block";
    keyboardPointSoundContent.style.color = "rgb(243, 169, 82)";
}

containerKeyboardPoint.onmouseout = function(){
    keyboardPointSoundContent.style.display = "none";
    circleInKeyboardPoint.style.display = "none";
}


//
//Open mixmode
btnMixmode.addEventListener('click',()=>{
    btnDetails.classList.toggle('open');
});

//Close mixmode
closeMode.addEventListener('click',()=>{
    btnDetails.classList.remove("open");
});

keyEventElement.addEventListener('keydown',function(event){
    if(event.ctrlKey && (event.key.toUpperCase() === "M")){
        btnMixmode.click();
    }
})


//open templates mode

btnTemplates.onclick = function(){
    detailTemplates.classList.toggle("open");
}
//Close template
btnCloseTemplate.addEventListener('click',()=>{
    detailTemplates.classList.remove("open");
});

keyEventElement.addEventListener('keydown',function(event){
    if(event.ctrlKey && (event.key.toUpperCase() === "I")){
        btnTemplates.click();
    }
})
//Xu ly su kien Mute

btnMute.addEventListener('click',()=>{
    btnMute.classList.toggle("fa-volume-high");
    btnMute.classList.toggle("fa-volume-xmark");
});

keyEventElement.addEventListener('keydown',function(event){
    if(event.shiftKey && (event.key.toUpperCase() === "M")){
        btnMute.click();
    }
})
//Xu ly su kien click play/pause    
btnPlay.addEventListener('click',()=>{
    btnPlay.classList.toggle("fa-play");
    btnPlay.classList.toggle("fa-pause");
});
//open - close login form

btnOpenLoginForm.onclick = function(){
    loginFormElement.classList.add("active");
    keyEventElement.removeEventListener('keydown',checkKeyDown);
}

btnCloseLoginForm.onclick = function(){
    loginFormElement.classList.remove("active");
    keyEventElement.addEventListener('keydown',checkKeyDown);

}

//Hien thi password
seePassword.onclick = function(){
    const inputType = passWordElement.getAttribute('type');
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    passWordElement.setAttribute(
        'type',
        inputType === 'password' ? 'text' : 'password'
    )
}

//open - close register form

btnOpenRegisterForm.onclick = function(){
    loginFormElement.classList.remove("active");
    registerFormElement.classList.add("active");
}

btnCloseRegisterForm.onclick = function(){
    registerFormElement.classList.remove("active");
    keyEventElement.addEventListener('keydown',checkKeyDown);

}

//Hien thi password
seeRegisterPassword.onclick = function(){
    const inputType = passwordRegisterElement.getAttribute('type');
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    passwordRegisterElement.setAttribute(
        'type',
        inputType === 'password' ? 'text' : 'password'
    )
}

backToLoginForm.onclick = function(){
    registerFormElement.classList.remove("active");
    loginFormElement.classList.add("active");
}


//play - pause bang phim cach


function checkKeyDown(event){
    if (event.key === " ") {
        event.preventDefault();
        // Do more work 
        btnPlay.click();
    }
}
keyEventElement.addEventListener('keydown',checkKeyDown)


//Che do darkMode
darkModeButton.checked = true;
darkModeButton.addEventListener('click',()=>{
    let isChecked = darkModeButton.checked;
    if(!templateOn){
        if(!isChecked){
            isRained?videoBackground.src = MAIN_BACKGROUND_NIGHT_RAIN:videoBackground.src = MAIN_BACKGROUND_NIGHT;
        }else{
            isRained?videoBackground.src = MAIN_BACKGROUND_DAY_RAIN:videoBackground.src = MAIN_BACKGROUND_DAY;     
        }
    }else{
        if(!isChecked){
            if(darkModeItem !== "") videoBackground.src = darkModeItem;
        }
        else{
            videoBackground.src = backgroundTemplate;
        }
    }
});

//Tai bai hat
let currentId;
let isMoved = false;
function loadSong(typeOfSong,state){
    let kindOfMusic = listSongs[typeOfSong];
    let randomSongId =  Math.floor(Math.random() * kindOfMusic.length) + 1;
    if(isMoved){
        currentId;
        isMoved = false;
    }else{
        currentId = randomSongId;

    }
    let song = kindOfMusic.find((name)=>{
        return name.id === currentId;
    });
    audioSong.src = song.path;
    if(!state){
        audioSong.pause();
        btnPlay.classList.add("fa-play");
        btnPlay.classList.remove("fa-pause");
    }else{
        audioSong.play();
        btnPlay.classList.add("fa-pause");
        btnPlay.classList.remove("fa-play");
    }
}

//Chon the loai nhac
selectMode.forEach((tab,index)=>{
    tab.onclick = function (){
        document.querySelector(".container .details__mixmode .menu__mood .menu__mood--detail.active")
        .classList.remove("active");
        this.classList.add("active");
        typeOfSong = index;
        loadSong(typeOfSong,isPlayed);
    }
});

//list templates background
const listTemplates = [
    {
        path: "assets/video/main-bg-day.mp4",
        darkMode: "assets/video/main-bg-night.mp4",
        rain: "assets/video/main-bg-day-rain.mp4"
    },
    {
        path: "assets/video/exterior-day.mp4",
        darkMode: "assets/video/exterior-night.mp4"
    },
    {
        path: "assets/video/kyotostreet-day.mp4",
        darkMode:""
    },
    {
        path: "assets/video/lvr-day.mp4",
        darkMode:""
    },
    {
        path: "assets/video/enviroment-day.mp4",
        darkMode: "assets/video/enviroment-night.mp4"
    },
    {
        path: "assets/video/lofi-coffee-day.mp4",
        darkMode:""
    },
    {
        path: "assets/video/coffe-chill-day.mp4",
        darkMode:""
    }

]

//Chon templates background
templateItem.forEach((item,index)=>{
    item.onclick = function(){
        if(index === 0){
            console.log(isRained);
            templateOn = false;
            isRained?videoBackground.src = listTemplates[index].rain:videoBackground.src = listTemplates[index].path;
            //isRained = false;
            backgroundTemplate = videoBackground.src;
            darkModeItem = listTemplates[index].darkMode;
        }else{
            console.log(isRained);
            templateOn = true;
            videoBackground.src = listTemplates[index].path;
            backgroundTemplate = videoBackground.src;
            darkModeItem = listTemplates[index].darkMode;
           
        }
        darkModeButton.checked = true;
    }
});

//Bai hat tiep theo
function nextSong(isPlayed){
    currentId++;
    isMoved = true;
    currentId>listSongs[typeOfSong].length?currentId = 1:currentId;
    loadSong(typeOfSong,isPlayed);
}
function rainMode(isClicked){
    if(darkModeButton.checked){
        if((cityRainSound.volume > 0) && !(isClicked) && (isRained) && !(templateOn)){
            videoBackground.src = MAIN_BACKGROUND_DAY_RAIN;
            //isRained = false;
        }   
        else if(((cityRainSound.volume === 0) || (isClicked)) && !(isRained) && !(templateOn)){
            videoBackground.src = MAIN_BACKGROUND_DAY;
            //isRained = true;
        }   
    }else{
        if((cityRainSound.volume > 0) && !(isClicked) && (isRained) && !(templateOn)){
            videoBackground.src = MAIN_BACKGROUND_NIGHT_RAIN;
            //isRained = false;
        }   
        else if(((cityRainSound.volume === 0) || (isClicked)) && !(isRained) && !(templateOn)){
            videoBackground.src = MAIN_BACKGROUND_NIGHT;
            //isRained = true;
        }
    }
}
function rainModeOn(state){
    if(state){
        isRained = false;
        rainMode(state);
        cityRainSound.pause();
        volumeCityRain.value = 0;
        rangeCityRainSound.classList.toggle("open");
        isRainPointClicked = false;
    }else{
        isRained = true; 
        rangeCityRainSound.value = 0.5;
        volumeCityRain.value = rangeCityRainSound.value;
        cityRainSound.volume = rangeCityRainSound.value;
        rainMode(state);
        cityRainSound.play();
        rangeCityRainSound.classList.toggle("open");
        isRainPointClicked = true;
    }   
}

cityRainPoint.onclick = function(){
    console.log(isRainPointClicked)
    rainModeOn(isRainPointClicked);
    // isRainPointClicked?isRainPointClicked = false:isRainPointClicked = true;
    
}


keyboardPoint.onclick = function(){
    if(isKeyboardPointClicked){
        keyBoardSound.pause();
        volumeKeyBoard.value = 0;
        rangeKeyboardSound.classList.toggle("open");
        isKeyboardPointClicked = false;
    }else{ 
        rangeKeyboardSound.value = 0.5;
        volumeKeyBoard.value = rangeKeyboardSound.value;
        keyBoardSound.volume = rangeKeyboardSound.value;
        keyBoardSound.play();
        rangeKeyboardSound.classList.toggle("open");
        isKeyboardPointClicked = true;
    }   
}

const app = {
    //Xu ly su kien nguoi dung tuong tac
    handleEvent: function(){
        //Gia tri mac dinh cua am luong bai hat
        audioSong.volume = volume.value;
        
        //Am thanh them vao
        keyBoardSound.volume = volumeKeyBoard.value;
        cityTrafficSound.volume = volumeCityTraffic.value;
        cityRainSound.volume = volumeCityRain.value;
        cityRainSound.volume = rangeCityRainSound.value;

        //Chinh am Keyboard
        rangeKeyboardSound.oninput = function(){
            keyBoardSound.volume = this.value;
            volumeKeyBoard.value = this.value;
            if(keyBoardSound.volume === 0){
                this.classList.remove("open");
                isKeyboardPointClicked = false;
            }
        }

        volumeKeyBoard.oninput = function(){
            keyBoardSound.play();
            keyBoardSound.volume = this.value;
            rangeKeyboardSound.value = this.value;
            rangeKeyboardSound.classList.add("open");
            if(keyBoardSound.volume === 0){
                rangeKeyboardSound.classList.remove("open");
                isKeyboardPointClicked = false;
            }else{
                isKeyboardPointClicked = true;
            }
        }
        //Chinh am cityTraffic
        volumeCityTraffic.oninput = function(){
            cityTrafficSound.play();
            cityTrafficSound.volume = this.value;
        }

        //Chinh am cityRain
        rangeCityRainSound.oninput = function(){
            cityRainSound.volume = this.value;
            volumeCityRain.value = this.value;
            //isRained = true;
            rainMode(true);
            if(cityRainSound.volume === 0){
                isRainPointClicked = true;
                isRained = false;
                console.log(isRainPointClicked)
                rainModeOn(isRainPointClicked);
                console.log(isRainPointClicked)
                this.classList.remove("open");
            }
        }

        volumeCityRain.oninput = function(){
            cityRainSound.play();       
            cityRainSound.volume = this.value;
            rangeCityRainSound.value = this.value;
            rangeCityRainSound.classList.add("open");
            //isRained = true;
            rainMode(true);
            if(cityRainSound.volume === 0){       
                isRainPointClicked = true;
                isRained = false;
                rainModeOn(isRainPointClicked);
                rangeCityRainSound.classList.remove("open");
            }else{
                isRained = true;
                rainMode(isRainPointClicked);
                isRainPointClicked = true;
            }
        }

        //Dieu chinh am luong
        volume.oninput = function(){
            audioSong.volume = this.value;
        }
        
        keyEventElement.addEventListener('keydown',function(event){
            if(event.ctrlKey && (event.key === "ArrowUp")){
                audioSong.volume = Math.min(1,audioSong.volume + 0.01);
                volume.value = audioSong.volume;
              
            }else if(event.ctrlKey && (event.key === "ArrowDown")){
                audioSong.volume = Math.max(0,audioSong.volume - 0.01); 
                volume.value = audioSong.volume;
            }
        })

        //play - pause
        btnPlay.onclick = function(){ 
            if(isPlayed){
                audioSong.pause();
            }
            else{
                audioSong.play();
            }
        }

        //Tat het am thanh
        let isMuted = true;
        btnMute.onclick = function (){
            if(isMuted){
                audioSong.muted = true;
                cityRainSound.muted = true;
                cityTrafficSound.muted = true;
                keyBoardSound.muted = true;
                isMuted = false;
            }else{
                audioSong.muted = false;
                cityRainSound.muted = false;
                cityTrafficSound.muted = false;
                keyBoardSound.muted = false;
                isMuted = true;
            }   
        }
        
        //Khi play
        audioSong.onplay = function(){
            isPlayed = true;
        }

        //Khi pause
        audioSong.onpause = function(){
            isPlayed = false;
        }

        //next song
        btnNext.onclick = function(){
            nextSong(isPlayed);
        }
        keyEventElement.addEventListener('keydown',function(event){
            if(event.ctrlKey && event.key === "ArrowRight"){
                btnNext.click();
            }
                
        })

         //back song
        btnPrev.onclick = function(){
            currentId--;
            isMoved = true;
            currentId <= 0?currentId = listSongs[typeOfSong].length:currentId;
            loadSong(typeOfSong,isPlayed);
        }
        keyEventElement.addEventListener('keydown',function(event){
            if(event.ctrlKey && event.key === "ArrowLeft"){
                btnPrev.click();
            }
                
        })
        //Auto next song when song ended
        audioSong.onended = function(){
            nextSong(true);
        }


        //Tai bai hat khi load trang
        loadSong(typeOfSong, isPlayed);
    },

    start: function(){
        this.handleEvent();
    }
}

app.start();//Ung dung khoi chay
  



