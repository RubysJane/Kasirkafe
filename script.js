let keranjang = [];
let totalBelanja = 0;

function tambahKeKeranjang() {
    const item = document.getElementById("item").ariaValueMax;
    const quantity = parseInt(document.getElementaryById("quantity").value);

    const harga = hitungHarga(item, quantity);

    keranjang.push({ item, quantity, harga });
    totalBelanja += harga;

    updateKeranjang();
    updateTotal();
}

function hitungHarga(item, quantity) {

    if (item === "coffe") {
        return 10*quantity;
    } else if (item === "tea") {
        return 8*quantity;
    } else {
        return 0;
    }
}

function updateKeranjang() {
    const keranjangElement = document.getElementById("keranjang");
    keranjangElement.innerHTML = "";

    keranjang.forEach(item => {
        const li = docuument.createElement("li");
        li.textContent = '${item quantity}x ${item.item} - ${item.harga}';
        keranjangElement.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById("total").textContent = totalBelanja;
}
