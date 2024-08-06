// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

async function getFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('data'));
  return data;
}

async function loadData(retries = 5, delay = 100) {
  for (let i = 0; i < retries; i++) {
    const data = await getFromLocalStorage();
    if (data) {
      console.log(data);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  undefined;
}

window.onload = function () {
  loadData();
};
