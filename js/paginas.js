const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const grupo1 = document.querySelectorAll('.grupo1');
const grupo2 = document.querySelectorAll('.grupo2');

link1.addEventListener('click', () => {
    grupo1.forEach(sec => sec.classList.add('active'));
    grupo2.forEach(sec => sec.classList.remove('active'));
    link1.classList.add('active');
    link2.classList.remove('active');
});

link2.addEventListener('click', () => {
    grupo2.forEach(sec => sec.classList.add('active'));
    grupo1.forEach(sec => sec.classList.remove('active'));
    link2.classList.add('active');
    link1.classList.remove('active');
});