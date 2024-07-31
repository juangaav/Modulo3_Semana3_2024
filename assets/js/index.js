window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    const tweetButton      = document.querySelector("#create-tweet-button");

    tweetButton.addEventListener('click', function (event){
        event.preventDefault()

        const productInput     = document.getElementById('product-input');
        const precioInput      = document.getElementById('precio-input');
        const descriptionInput = document.getElementById('description-input');
        
        const cardTitle = document.getElementById('card-title');
        const cardPrice = document.getElementById('card-price');
        const cardDesc  = document.getElementById('card-desc');

        cardTitle.innerHTML = productInput.value;
        cardPrice.innerHTML = "$" + precioInput.value;
        cardDesc.innerHTML  = descriptionInput.value;

        productInput.value     = "";
        precioInput.value      = "";
        descriptionInput.value = "";

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



