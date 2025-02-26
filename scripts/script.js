let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    const items = document.querySelectorAll('.gallery-item');
    const totalImages = items.length;
    
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    console.log(currentIndex);
    items[currentIndex].classList.add('active');
}

// Inicializar la galería mostrando la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    if (items.length > 0) {
        items[currentIndex].classList.add('active');
    }
});



  
