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
    alert("Something went wrong Try Again");
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
