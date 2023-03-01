//-----------Random Generator----------------
// variables
let btn = document.querySelector('#next-hadid')
let hadid = document.querySelector('.hadid');
let referance = document.querySelector('.referance');
let narrated = document.querySelector('.narrated');

const hadids = [{
        hadid: `Some people asked Allah's Messenger (ﷺ), "Whose Islam is the best? i.e. (Who is a very good Muslim)?" He replied, "One who avoids harming the Muslims with his tongue and hands."`,
        referance: `Sahih al-Bukhari 11`,
        narrated: `Narrated Abu Musa`
    }, {
        hadid: `A man asked the Prophet (ﷺ) , "What sort of deeds or (what qualities of) Islam are good?" The Prophet (ﷺ) replied, 'To feed (the poor) and greet those whom you know and those whom you do not Know`,
        referance: `Sahih al-Bukhari 12`,
        narrated: `Narrated Abu Musa`
    }, {
        hadid: `The Prophet (ﷺ) said, "None of you will have faith till he wishes for his (Muslim) brother what he likes for himself."`,
        referance: `Sahih al-Bukhari 13`,
        narrated: `Narrated Anas`
    }, {
        hadid: `Whenever the Prophet (ﷺ) took a bath after Janaba he started by washing his hands and then performed ablution like that for the prayer. After that he would put his fingers in water and move the roots of his hair with them, and then pour three handfuls of water over his head and then pour water all over his body.`,
        referance: `Sahih al-Bukhari 248`,
        narrated: "Narrated `Aisha"
    },{
        hadid: `(the wife of the Prophet) Allah's Messenger (ﷺ) performed ablution like that for the prayer but did not wash his feet. He washed off the discharge from his private parts and then poured water over his body. He withdrew his feet from that place (the place where he took the bath) and then washed them. And that was his way of taking the bath of Janaba.`,
        referance: `Sahih al-Bukhari 249`,
        narrated: `Narrated Maimuna`
    }, {
        hadid: `Once the Prophet (ﷺ) remained behind us in a journey. He joined us while we were performing ablution for the prayer which was over-due. We were just passing wet hands over our feet (and not washing them properly) so the Prophet (ﷺ) addressed us in a loud voice and said twice or thrice: "Save your heels from the fire."`,
        referance: `Sahih al-Bukhari 60`,
        narrated: "Narrated `Abdullah bin `Amr"
    }, {
        hadid: `Allah's Messenger (ﷺ) said, "Amongst the trees, there is a tree, the leaves of which do not fall and is like a Muslim. Tell me the name of that tree." Everybody started thinking about the trees of the desert areas. And I thought of the date-palm tree but felt shy to answer the others then asked, "What is that tree, O Allah's Messenger (ﷺ) ?" He replied, "It is the date-palm tree."`,
        referance: `Sahih al-Bukhari 60`,
        narrated: "Narrated Ibn `Umar"
    }, {
        hadid: `Allah's Messenger (ﷺ) (p.b.u.h) said, "Anyone of you attending the Friday (prayers) should take a bath."`,
        referance: `Sahih al-Bukhari 877`,
        narrated: "Narrated `Abdullah bin `Umar"
    }, {
        hadid: `Allah's Messenger (ﷺ) (p.b.u.h) said, "The taking of a bath on Friday is compulsory for every male (Muslim) who has attained the age of puberty."`,
        referance: `Sahih al-Bukhari 879`,
        narrated: "Narrated Abu Sa`id Al-Khudri"
    }, {
        hadid: `Ibn` + "`" + `Umar said something similar to Mujahid's saying: 
        Whenever (Muslims and non-Muslims) stand face to face in battle, 
        the Muslims can pray while standing. Ibn` + `Umar added, "The Prophet (ﷺ) said, 'If the number of the enemy is greater than the Muslims, 
        they can pray while standing or riding (individually).'"`,
        referance: `Sahih al-Bukhari 943`,
        narrated: "Narrated Abu Sa`id Al-Khudri"
    }, {
        hadid: `The Prophet (ﷺ) said, "The honest treasurer who gives willingly what he is ordered to give, is one of the two charitable persons, (the second being the owner).`,
        referance: `Sahih al-Bukhari 2260`,
        narrated: "Narrated Nafi`"
    }, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * hadids.length);

    hadid.innerText = hadids[random].hadid;
    referance.innerText = hadids[random].referance;
    narrated.innerText = hadids[random].narrated;
});

document.querySelector('.numbers').innerText = hadids.length;

//---------------About pop up---------------

let opnbtn = document.getElementById('open-btn');
let closebtn = document.getElementById('close-btn');
let aboutContainer = document.getElementById('about-container')

opnbtn.addEventListener('click', function() {
    aboutContainer.style.display = 'block';
});

closebtn.addEventListener('click', function(){
    aboutContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
    
    if (e.target !== aboutContainer && e.target !== opnbtn) {
        aboutContainer.style.display = 'none';
    }
});

// ---------------------Q&A------------------------

let accordian = document.querySelectorAll('.container-cotent');
let active = document.querySelector('.active');

for ( i=0; i<accordian.length; i++ ) {
    accordian[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

// -------------------StopWatch------------------
// varibels for buttons
const startstopbtn = document.querySelector('#startstopbtn');
const resetbtn = document.querySelector('#resetbtn')

// variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zero
let leadingSeconds= 0;
let leadingMinutes= 0;
let leadingHours= 0;

//variables for set interval & timerstatus

let timerInterval = null;
let timerstatus = "stopped";

//Stopwatch function
function stopWatch() {

    //watch algorith
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60===0) {
            minutes=0;
            hours++;
        }
    } 

    //watch leading Zero's
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.querySelector('#timer').innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

}

// button start/reset/pause interactions
startstopbtn.addEventListener('click', function () {
    if (timerstatus==="stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector('#startstopbtn').innerHTML = 
        `<i class="fa-solid fa-pause fa-xl" id="play"></i>`;
        timerstatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.querySelector('#startstopbtn').innerHTML = 
        `<i class="fa-solid fa-play fa-xl" id="play"></i>`;
        timerstatus = "stopped";
    }
})

resetbtn.addEventListener('click', function(){
    
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#timer').innerHTML = "00:00:00";
    if (timerstatus !=="stopped") {
        document.querySelector('#startstopbtn').innerHTML = 
        `<i class="fa-solid fa-play fa-xl" id="play"></i>`;
    } 
})

//-----------ToDoList------------
// variable
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event listner Add Button

addTask.addEventListener('click', function (){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    task.appendChild(checkButton)

    let trashButton = document.createElement('button');
    trashButton.classList.add('trashButton');
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    task.appendChild(trashButton);

    if (inputTask.value === "") {
        alert('please add a task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";


    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = 'line-through';
    });

    trashButton.addEventListener('click', function(e){
        
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

})