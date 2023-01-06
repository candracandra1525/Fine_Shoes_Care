const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const product = document.querySelector(".product");
const droppoint = document.querySelector(".droppoint");
const comment = document.querySelector(".comment");

function cek() {
  var cb = document.getElementById("cek");
  cb.checked = false;
}

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

home.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

about.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

product.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

droppoint.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

comment.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

/* Whatsapp Contact */
function decorateWhatsAppLink() {
  var url = "https://wa.me/+6282178518769";
  var text = "Mau Cuci Sepatu ? Sini Biar Kami Bantu";
  var encodedText = encodeURIComponent(text);
  var $whatsApp = $(".whatsapp a");
  $whatsApp.attr("href", url + encodedText);
}
decorateWhatsAppLink();
