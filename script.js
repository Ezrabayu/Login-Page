const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const button = document.getElementById('paperButton');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

function flyPlane() {
    button.classList.add('clicked');
    
    // Optionally, reset the button after animation ends (optional)
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 2000); // Reset after 2 seconds
}
