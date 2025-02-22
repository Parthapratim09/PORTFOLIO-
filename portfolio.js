let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
console.log(sections);
// sections.forEach(sec =>{
//     let id=sec.getAttribute('id')
//     console.log(id);
// } );
let cv=document.querySelector('#cv');
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        console.log("top is"+top);
        let offset=sec.offsetTop-100;
        console.log("offset is"+offset);
        let height=sec.offsetHeight;
        console.log("height is"+height);
        let id=sec.getAttribute('id')
        console.log(id);
        if(top>=offset && top< offset+height)
        {
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    });
}
cv.addEventListener('click',()=>{
    // console.log("button was clicked");
    window.open('https://drive.google.com/file/d/13wqjPbTpU5KPcJ4pvP6iJ5CiTvQBveO9/view?usp=sharing', '_blank');
})



// Select elements
const menuButton = document.querySelector('#manu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle the navbar visibility on menu button click
menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Hide the navbar when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});








// Initialize EmailJS with your User ID
emailjs.init('DYgE0Qf1sCF2HopNF'); // Replace with your EmailJS User ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phoneNo: document.getElementById('phno').value,
        email: document.getElementById('e-mail').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_o9k44tu', 'template_wm0m2x3', formData) // Replace with your Service ID and Template ID
        .then(function(response) {
            console.log('Email sent successfully!', response);
            // document.getElementById('responseMessage').textContent = 'Message sent successfully!';
            document.getElementById('contactForm').reset(); // Clear the form
        }, function(error) {
            console.error('Failed to send email:', error);
            alert("Error in sending")
            // document.getElementById('responseMessage').textContent = 'Failed to send message. Please try again.';
        });
});