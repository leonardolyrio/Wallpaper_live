const canvas = document.getElementById('wallpaper');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const imagemFundo = new Image();
imagemFundo.src = 'assets/wallpaper.jpg'; 

const particulas = [];
const quantidadeParticulas = 50; 

// Um ciclo 'for' para criar várias partículas de uma vez
for (let i = 0; i < quantidadeParticulas; i++) {
    particulas.push({
        x: Math.random() * canvas.width,              // Posição horizontal aleatória na tela
        y: Math.random() * canvas.height,             // Começam espalhadas por toda a altura
        raio:4,                  // Tamanho aleatório entre 1 e 4
        velocidadeY: Math.random() * 1 + 0.5          // Velocidade de subida ligeiramente diferente
    });
}

function animar() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (imagemFundo.complete) {
        ctx.drawImage(imagemFundo, 0, 0, canvas.width, canvas.height);
    }

    particula.y -= particula.velocidadeY;

    if (particula.y < 0) {
        particula.y = canvas.height + 10;
        particula.x = Math.random() * canvas.width;
    }

    // Desenha a particula 
    ctx.beginPath();
    ctx.arc(particula.x, particula.y, particula.raio, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();

    // 4. Repete o loop
    requestAnimationFrame(animar);
}

imagemFundo.onload = function() {
    animar();
};