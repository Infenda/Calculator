let outputscreen = document.getElementById("output-screen")
let screenvalue = ""
let historybtn = document.getElementById("historybtn")
let maxnu = 6
function display(num) {
    outputscreen.value += num;
}
function Clear() {
    outputscreen.value = '';
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function calculate() {
    let calchistory = JSON.parse(localStorage.getItem("calchistory")) || []
    screenvalue = outputscreen.value;
    try {
        outputscreen.value = eval(outputscreen.value);
        if (calchistory.length >= maxnu) {
            calchistory.shift();
        }
        calchistory.push({ screenvalue, result: outputscreen.value });
        localStorage.setItem("calchistory", JSON.stringify(calchistory));
    }
    catch (err) {
        alert("error")
    }
}

let history = document.getElementById('history');
let btn = document.getElementById('closebtn');
function histdisplay() {
    history.innerText = '';

    let calchistory = JSON.parse(localStorage.getItem("calchistory")) || [];
    let len = calchistory.length;

    if (len == 0) {
        let histItem = document.createElement('div');
        histItem.className = 'historyelementh';
        histItem.innerHTML = 'There is no history yet';
        histItem.style.fontSize = '30px';
        history.appendChild(histItem);
    }
    else {
        for (let i = (len - 1); i >= 0; i--) {
            const ele = calchistory[i];
            let histItem = document.createElement('div');
            histItem.className = 'historyelement';
            histItem.innerHTML = `${ele.screenvalue} = ${ele.result}`;
            history.appendChild(histItem);
        }
    }
    btn.style.display = "block";
    history.style.display = "block";
}

function Close() { 
    history.style.display = "none";
    btn.style.display = "none";
}

function clrhist(){
    localStorage.clear();
}
