export function decrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotal();
    }
}

export function updateTotal() {
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(new URLSearchParams(window.location.search).get('price'));
    var totalPrice = quantity * price;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2) + "₹";
}

export function incrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotal();
}
