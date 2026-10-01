// ==================================================
// NAVBAR
// ==================================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ==================================================
// CONTACT FORM
// ==================================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    // ==============
    // VALIDASI
    // ================

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Mohon isi semua data terlebih dahulu.");

        return;
    }


    // ==================================================
    // LOCAL STORAGE
    // ==================================================

    const contactData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };


    localStorage.setItem(
        "contactData",
        JSON.stringify(contactData)
    );


    // ==================================================
    // WHATSAPP
    // ==================================================

    const phoneNumber = "6285890788384";

    const text =
        "Halo Dicky, saya " + name +
        "\nEmail: " + email +
        "\nSubject: " + subject +
        "\nPesan: " + message;


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(text);


    window.open(whatsappURL, "_blank");

});