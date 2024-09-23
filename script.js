function insert(num) {
    document.getElementById('display').value += num;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}
