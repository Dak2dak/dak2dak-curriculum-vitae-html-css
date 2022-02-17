const toggle = document.getElementById('btn');
const swithBtn = document.getElementById('swithBtn');


const language1 = document.getElementById('french__version');
const language2 = document.getElementById('english__version');
const title = document.getElementById('big-title');


swithBtn.addEventListener('click', function Switching() {
    
    title.innerHTML = "Curriculum Vitæ";
    language1.classList.toggle('isVisible');
    // toggle.disabled = true;

})

toggle.addEventListener('click', function myFunction() {

    title.innerHTML = "Resume";
    language2.classList.toggle('isVisible');
    // swithBtn.disabled = true;
    
})


