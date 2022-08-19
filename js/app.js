function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }

    else {
        return getPin();
    }
}

function generatePin() {
    const generateNumber = Math.round(Math.random() * 10000);
    return generateNumber
}

document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const getPinValue = getPin();
    const generateField = document.getElementById('generate-field');
    generateField.value = getPinValue;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumberField.value;
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumberField.value = '';
        }
        else if (number == '<') {
            const backSpace = previousTypedNumbers.split('');
            backSpace.pop();
            const backSpaceClear = backSpace.join('');
            typedNumberField.value = backSpaceClear;
        }
    }
    else {


        const newTypedNumbers = previousTypedNumbers + number;
        typedNumberField.value = newTypedNumbers;
    }
})


document.getElementById('access-btn').addEventListener('click', function () {
    const generateField = document.getElementById('generate-field');
    const currentField = generateField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const newTypedNumbers = typedNumberField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailuer = document.getElementById('pin-failure');
    if (newTypedNumbers === currentField) {

        pinSuccess.style.display = 'block';
        pinFailuer.style.display = 'none';
    }

    else {

        pinFailuer.style.display = 'block';
        pinSuccess.style.display = 'none';
    }

})