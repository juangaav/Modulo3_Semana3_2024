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
      updateCounter(data.length);
      console.log(data);
  renderList(data)

      return;
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  undefined;
}

 function updateCounter(value) {
  const elem = document.getElementById('product-amount');
  elem.innerHTML = value
 }

function renderList(data) {
    const list = document.getElementById('cart-list');

    // clear the list
    list.innerHTML = '';

    // create a list item for each object in the data array
    data.forEach(item => {
        // create list item with classes
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between lh-sm';

        // create div for name and description
        const div = document.createElement('div');

        // create and append product name
        const productName = document.createElement('h6');
        productName.className = 'my-0 product-name';
        productName.textContent = item.name;
        div.appendChild(productName);

        // create and append product description
        const productDescription = document.createElement('small');
        productDescription.className = 'text-body-secondary product-description';
        productDescription.textContent = item.description;
        div.appendChild(productDescription);

        // append div to list item
        listItem.appendChild(div);

        // create and append product price
        const productPrice = document.createElement('span');
        productPrice.className = 'text-body-secondary product-price';
        productPrice.textContent = "$" + item.price;
        listItem.appendChild(productPrice);

        // append the list item to the list
        list.appendChild(listItem);
    });
}



window.onload = async function () {
  await loadData();
};
