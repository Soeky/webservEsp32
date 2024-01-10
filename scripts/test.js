function updateAllZero() {
    document.getElementById('b1').innerHTML = '0';
    document.getElementById('t1').innerHTML = '0';
    document.getElementById('v1').innerHTML = '0';
    document.getElementById('b2').innerHTML = '0';
    document.getElementById('t2').innerHTML = '0';
    document.getElementById('v2').innerHTML = '0';
    document.getElementById('b3').innerHTML = '0';
    document.getElementById('t3').innerHTML = '0';
    document.getElementById('v3').innerHTML = '0';
    document.getElementById('b4').innerHTML = '0';
    document.getElementById('t4').innerHTML = '0';
    document.getElementById('v4').innerHTML = '0';
    document.getElementById('VALUE_RPM').innerHTML = '0';
    document.getElementById('VALUE_SPEED').innerHTML = '0';
}

function init(){
    let dt = new Date();
    document.getElementById('time').innerHTML = dt.toLocaleTimeString();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();
    updateAllZero();
    process();
}

function updateRPM(){
    const value_rpm = document.querySelector('#VALUE_RPM');
    const input_rpm = document.querySelector('#RPM_RANGE');
    value_rpm.textContent = input_rpm.value;
}

function updateSpeed(){
    const value_speed = document.querySelector('#VALUE_SPEED');
    const input_speed = document.querySelector('#SPEED_RANGE');
    value_speed.textContent = input_speed.value;
}

function updateTime() {
    let dt = new Date();
    document.getElementById('time').innerHTML = dt.toLocaleTimeString();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();
}

function process(){
    console.log("something has changed");
    const sendKlemme = document.getElementById("CHECK_KLEMME").checked;
    const sendSpeed = document.getElementById("CHECK_SPEED").checked;
    const sendRPM = document.getElementById("CHECK_RPM").checked;
//TODO hier weiter machen mit den definitionen danach als JSON datei ausgeben, mit einem ESP32 dann versuchen dateien hin und her zu schicken
    const stateKlemme = document.getElementById("BTN_KLEMME").innerHTML === "ON";
    const speed = document.querySelector('#VALUE_SPEED').innerHTML;
    console.log(speed);
    const state = {}
}

function onBtnClickKlemme(){
    var btn = document.getElementById("BTN_KLEMME");
    var x = btn.innerHTML;
    if (x === "OFF"){
        btn.className = "btn_ON";
        btn.innerHTML = "ON";
    }else {
        btn.className = "btn_OFF";
        btn.innerHTML = "OFF";
    }
    process();
}

window.onload = function (event) {
    init();
}
//TODO Aufpassen bei der richtigen Implementierung kann es zu Problemen kommen, da die Datensätze die ganze zeit geupdated werden.
window.onchange = function (){
    process();
}


