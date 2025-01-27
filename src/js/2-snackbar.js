import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateRadios = form.querySelectorAll('input[name="state"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  const delay = parseInt(delayInput.value, 10);
  const selectedState = form.querySelector('input[name="state"]:checked');

  if (!selectedState) {
    iziToast.error({
      title: "Error",
      message: "❌ Please select a state",
      position: 'topRight'
    });
    return;
  }

  const state = selectedState.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((resolvedDelay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight'
      });
    })
    .catch((rejectedDelay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight'
      });
    });
});
