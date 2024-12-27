
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close');
const prevBtn = modal.querySelector('.prev');
const nextBtn = modal.querySelector('.next');

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modalImg.src = galleryImages[index].src;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'Escape') closeModal();
  }
});
