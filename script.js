const gestures = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
};

const images = {
    'rock' : "./assets/rock-emoji.png",
    'paper' : "./assets/paper-emoji.png",
    'scissors' : "./assets/scissors-emoji.png"
};

const scores = {
    win : 0,
    loss : 0,
    draw : 0
}

function ai(){
    return gestures[Math.floor(Math.random()*100)%3];
}


function play(user_play){
    let ai_play = ai();
    document.querySelector(".user-play").setAttribute('src', images[user_play])
    document.querySelector(".ai-play").setAttribute('src', images[ai_play])
    if(ai_play===user_play){
        scores.draw++;
    }else if((ai_play==='rock'&&user_play==='scissors')||(ai_play==='paper'&&user_play==='rock')||(ai_play==='scissors'&&user_play==='paper')){
        scores.loss++;
    }else{
        scores.win++;
    }
}

function render() {
    console.log('here')
    let win = document.querySelector('.win')
    let loss = document.querySelector('.loss')
    let draw = document.querySelector('.draw')

    win.innerHTML = scores.win;
    loss.innerHTML = scores.loss;
    draw.innerHTML = scores.draw;
}

function reset(){
    scores.win=0;
    scores.loss=0;
    scores.draw=0;
}

function autoplay(){
    play(ai());
}

setInterval(()=>render(),500);