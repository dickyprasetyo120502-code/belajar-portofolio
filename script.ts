// ==================================================
// NAVBAR
// ==================================================

const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

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

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // ==================================================
        // MENGAMBIL DATA FORM
        // ==================================================

        const nameInput =
            document.getElementById("name") as HTMLInputElement;

        const emailInput =
            document.getElementById("email") as HTMLInputElement;

        const subjectInput =
            document.getElementById("subject") as HTMLInputElement;

        const messageInput =
            document.getElementById("message") as HTMLTextAreaElement;


        const name = nameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;


        // ==================================================
        // VALIDASI
        // ==================================================

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

        const phoneNumber: string = "6285890788384";

        const text: string =
            "Halo Dicky, saya " + name +
            "\nEmail: " + email +
            "\nSubject: " + subject +
            "\nPesan: " + message;


        const whatsappURL: string =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(text);


        window.open(whatsappURL, "_blank");

    });

}


export {};