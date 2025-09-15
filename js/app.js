function lanzarConfeti() {
for (let i = 0; i < 80; i++) {
const confetti = document.createElement("div");
confetti.classList.add("confetti");
document.body.appendChild(confetti);
const size = Math.random() * 8 + 4;
confetti.style.width = `${size}px`;
confetti.style.height = `${size}px`;
confetti.style.left = Math.random() * window.innerWidth + "px";
confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
setTimeout(() => confetti.remove(), 5000);
}
}


function mostrarPayas() {
const payas = [document.getElementById('paya1'), document.getElementById('paya2'), document.getElementById('paya3')];
payas.forEach((paya, i) => {
setTimeout(() => {
paya.classList.add('show');
if(i === payas.length -1) lanzarConfeti();
}, i * 1500);
});
}