const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateRadios = form.querySelectorAll('input[name="state"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const delay = parseInt(delayInput.value);
  const state = form.querySelector('input[name="state"]:checked').value;

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
