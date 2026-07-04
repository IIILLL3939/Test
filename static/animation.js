// ===============================
// animation.js
// ===============================


// ===============================
// State
// ===============================

let currentStep = 0;
let playing = false;
let playTimer = null;


// ===============================
// Get from api.js
// ===============================

function getHist(){
    return getHistory();
}


// ===============================
// Render step
// ===============================

function renderStep(i){

    const hist = getHist();

    if(hist.length === 0) return;

    drawBoard(hist[i]);

    updateStepText(i, hist.length);

}


// ===============================
// Step text UI
// ===============================

function updateStepText(i, total){

    const el = document.getElementById("stepText");

    if(!el) return;

    el.textContent = `Step ${i} / ${total-1}`;

}


// ===============================
// Show Answer (start)
// ===============================

document.getElementById("showAnswer")
.addEventListener("click",()=>{

    const hist = getHist();

    if(hist.length === 0){
        alert("No solution yet");
        return;
    }

    currentStep = 0;

    renderStep(currentStep);

});


// ===============================
// Prev
// ===============================

document.getElementById("prevStep")
.addEventListener("click",()=>{

    const hist = getHist();

    if(currentStep <= 0) return;

    currentStep--;

    renderStep(currentStep);

});


// ===============================
// Next
// ===============================

document.getElementById("nextStep")
.addEventListener("click",()=>{

    const hist = getHist();

    if(currentStep >= hist.length - 1) return;

    currentStep++;

    renderStep(currentStep);

});


// ===============================
// Play / Auto animation
// ===============================

function play(){

    const hist = getHist();

    if(hist.length === 0) return;

    stop();

    playing = true;

    playTimer = setInterval(()=>{

        if(currentStep >= hist.length - 1){

            stop();
            return;

        }

        currentStep++;

        renderStep(currentStep);

    }, 1000);

}


// ===============================
// Stop
// ===============================

function stop(){

    playing = false;

    if(playTimer){
        clearInterval(playTimer);
        playTimer = null;
    }

}


// ===============================
// Optional: click space to play
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.code === "Space"){

        if(playing){
            stop();
        }else{
            play();
        }

    }

});
