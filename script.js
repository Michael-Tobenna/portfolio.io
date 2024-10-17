const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portifolioList = document.querySelectorAll('.portifolio-list');
const portifolioBoxs = document.querySelectorAll('.portifolio-box');


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

// function sendEmail(){
//     const bodyMessage = `Full Name: ${fullName.value}<br> Email:
//      ${email.value}<br> Phone Number: ${mess.value}<br>Message: ${mess.value}`;


//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "mtobenna1@gmail.com",
//         Password : "52C7DD71B26CB3F0A69F038F7EE5A2D5AD18",
//         To : 'mtobenna1@gmail.com',
//         From : "mtobenna1@gmail.com",
//         Subject :subject.value,
//         Body : bodyMessage
//     }).then(
//       message =>  {
//         if (message == "OK"){
//             Swal.fire({
//                 title: "Good job!",
//                 text: "Message sent successfully",
//                 icon: "success"
//               });
//         }
//       }

//     );
// }


// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     sendEmail();
// } );
//navbar actons along with cube rotation when navabar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');


        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');


        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
    });
});



//resume section when clicking tab-list
resumeList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active')
        list.classList.add('active');


        document.querySelector('.resume-box.active').classList.remove('active')
        resumeBoxs[idx].classList.add('active');
    });
});

// portifolio to section when clicking tab-list
portifolioList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portifolio-list.active').classList.remove('active')
        list.classList.add('active');

        document.querySelector('.portifolio-box.active').classList.remove('active')
        portifolioBoxs[idx].classList.add('active');

    });
});

setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);

function me() {
    window.open("https://w3schools.com")
}
function btn() {
    window.open("https://github.com/Michael-Tobenna/My-CV/blob/main/CV.docx")
}
(function () {
    emailjs.init("dxnU7Zqs1j8Ufw0Kl");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting the default way

    const statusDiv = document.getElementById('status');

    // Send form data to EmailJS
    emailjs.sendForm('service_c5gwu95', 'template_id034s5', this)
        .then(function (response) {
            statusDiv.innerHTML = "Message sent successfully!";
            statusDiv.style.color = "green";
            console.log("Success!", response.status, response.text);
        }, function (error) {
            statusDiv.innerHTML = "Failed to send the message.";
            statusDiv.style.color = "red";
            console.error("Failed...", error);
        });

    // Clear the form fields after sending
    document.getElementById('contact-form').reset();
});
