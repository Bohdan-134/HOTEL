import { openModal, closeModal, modalContentErrorHtml } from '../main.js'

const checkForm = document.querySelector('.form-check');
const iCheckIn = document.querySelector('.input-check-in');
const iCheckOut = document.querySelector('.input-check-out');

const errMessageWrap = document.querySelector('.check-availability__err');

checkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errMessageWrap.innerHTML !== "") errMessageWrap.innerHTML = "";
    if (!iCheckIn.value) return checkFormErr(`Check-in field filled out incorrectly`);
    if (!iCheckOut.value) return checkFormErr(`Check-out field filled out incorrectly`);
    openModal(modalContentErrorHtml.content);
})

function checkFormErr(message) {
    errMessageWrap.innerHTML = message;
}