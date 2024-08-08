window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    const tweetButton      = document.querySelector("#create-tweet-button");
    const changeproduct = document.getElementById('product-img');
    
    changeproduct.addEventListener('change', function(){
    
        console.log(changeproduct.value)

    });
    

    tweetButton.addEventListener('click', function (event){
        event.preventDefault()

        const productInput     = document.getElementById('product-input');
        const precioInput      = document.getElementById('precio-input');
        const descriptionInput = document.getElementById('description-input');
        
        
        const cardTitle = document.getElementById('card-title');
        const cardPrice = document.getElementById('card-price');
        const cardDesc  = document.getElementById('card-desc');

      
        if (changeproduct.value != 'Default') {
            changeproduct.classList.remove("is-invalid");
            if (productInput.value == ""){
                cardDesc.innerHTML  = "¡Información Incompleta!";
                productInput.classList.add("is-invalid");
            }else if(precioInput.value == ""){
                cardDesc.innerHTML  = "¡Información Incompleta!";
                precioInput.classList.add("is-invalid");
            }else if(descriptionInput.value == ""){
                cardDesc.innerHTML  = "¡Información Incompleta!";
                descriptionInput.classList.add("is-invalid");
            } else if (productInput.value != "" && precioInput.value != "" && descriptionInput.value != "") {
                cardTitle.innerHTML = productInput.value;
                cardPrice.innerHTML = "$" + precioInput.value;
                cardDesc.innerHTML  = descriptionInput.value;
                productInput.classList.remove("is-invalid");
                precioInput.classList.remove("is-invalid");
                descriptionInput.classList.remove("is-invalid");
                productInput.value     = "";
                precioInput.value      = "";
                descriptionInput.value = "";
            };

        }  else {
            changeproduct.classList.add("is-invalid");
            cardDesc.innerHTML  = "¡Debe seleccionar un producto!";

        }


    
    });

    document.getElementById('precio-input').addEventListener('keydown', function(e) {
        var key   = e.keyCode ? e.keyCode : e.which;
    
        if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
             (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
             (key >= 35 && key <= 40) ||
             (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
             (key >= 96 && key <= 105)
           )) e.preventDefault();
    });

});



