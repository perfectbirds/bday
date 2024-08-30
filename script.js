const photos = document.querySelectorAll('.photo img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');

modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.padding = '30px';
modal.style.borderRadius = '20px';
modal.style.zIndex = '1000';
modal.style.cursor = 'pointer';
modal.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';

document.body.appendChild(modal);
modal.appendChild(modalImage);

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        modalImage.src = photo.src;
        modal.style.display = 'block';
        modalImage.style.maxWidth = '100%';
        modalImage.style.maxHeight = '80vh';
        modalImage.style.borderRadius = '10px';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
