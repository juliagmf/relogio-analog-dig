// pegando os elementos
let digitalElement = document.querySelector('.digital');
//segundos
let sElement = document.querySelector('.p_s');
//minutos
let mElement = document.querySelector('.p_m');
//horas
let hElement = document.querySelector('.p_h');

//função de intervalo
function updateClock(){
    //pegando a hora atual
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    
}

//função para fixar o zero
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();