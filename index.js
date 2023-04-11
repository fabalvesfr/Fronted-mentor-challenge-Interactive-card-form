//'''''''Button that autofills fields with data for testing purposes'''''''''''
const testButton = document.getElementById('test');
testButton.addEventListener('click', ()=>{
    document.getElementById('cardholder-name').value = "Fabio Fernandes Alves";
    document.getElementById('card-number').value ="0000000000000000"
    document.getElementById('exp-month').value = "12"
    document.getElementById('exp-year').value = "12"
    document.getElementById('cvc').value = "123"
});
//''''''''''''''''''

function updateCardNumber(value) {
    const target = document.getElementById('oncard-number');
    target.textContent = value;
}

// Formatting card number for better UX
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', (Event) => {
    // 1. Removing all non-digit characters and extracting the first 16 of them
    const input16 = Event.target.value.replace(/\D/g, '').substring(0,16);
    // 2. Adding a space every four digits
    const formattedInput = input16.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    // 3. Updating the input field with the formatted value
    Event.target.value = formattedInput;
    // 4. Applying the same formatting for the mirrored displayed card number
    const target = document.getElementById('oncard-number');
    target.textContent = formattedInput;
}); 

function updateCardName(value) {
    const target = document.getElementById('oncard-name');

    target.textContent = value
}

function updateMonth (value) {
    const target = document.getElementById('month');
    target.textContent = value;
}

function updateYear(value) {
    const target = document.getElementById('year');
    target.textContent = "/"+value;
}

function updateCVC(value) {
    const target = document.getElementById('oncard-cvc');
    target.textContent = value;
}

// As we press the "Confirm" button, if all information entered is valid, the form is replaced by a Thank You! message
const confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', ()=>{
    const form = document.getElementById('interactive-card-form');
    const checkImg = document.getElementById('check-img');
    const thankYouMessage = document.querySelector('#thank-you-message');
    const continueButton = document.querySelector('#continue-button');

    form.style.display = "none";
    checkImg.style.display = "block";
    thankYouMessage.style.display = "block";
    continueButton.style.display = "block";
});


// As we press the "Continue" button, the "Thank you!" message is hidden and the empty form reappears on the screen
const continueButton = document.querySelector('#continue-button');
continueButton.addEventListener('click', () => {

    const continueButton = document.querySelector('#continue-button');
    const thankYouMessage = document.querySelector('#thank-you-message');
    const checkImg = document.getElementById('check-img');
    const form = document.querySelector('#interactive-card-form');

    form.reset(); // Resetting the form fields

    // Resetting the mirrored form information on the both front and back card images
    const oncardNumber = document.getElementById('oncard-number');
    const oncardName = document.getElementById('oncard-name');
    const oncardMonth = document.getElementById('month');
    const oncardYear = document.getElementById('year');
    const oncardCVC = document.getElementById('oncard-cvc');

    oncardNumber.textContent = "";
    oncardName.textContent = "";
    oncardMonth.textContent = "";
    oncardYear.textContent = "";
    oncardCVC.textContent = "";

    checkImg.style.display = "none";
    thankYouMessage.style.display = 'none';
    continueButton.style.display = 'none';
    form.style.display = 'block';

});