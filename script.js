// Acceder a la cámara
const video = document.getElementById('camera');
const overlay = document.getElementById('overlay');
const artContent = document.getElementById('art-content');

// Solicitar acceso a la cámara del dispositivo
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream; // Mostrar el video de la cámara
    })
    .catch(err => {
        console.error("Error al acceder a la cámara: ", err);
    });

// Simulación de detección de imagen
const detectImage = () => {
    // Esta es una simulación. En la práctica, se necesitaría usar una API de reconocimiento
    setTimeout(() => {
        artContent.style.display = 'block'; // Mostrar el contenido digital
    }, 3000); // Simula la detección después de 3 segundos
};

// Llamar la función de detección cuando el video esté en marcha
video.addEventListener('play', () => {
    detectImage();
});
