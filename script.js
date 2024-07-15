function send() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" || pesan == "") {
        alert("Formnya diisi dulu dongg");
    } else {
        alert(`Terima kasih ${nama}`);
    }
}