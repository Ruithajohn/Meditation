const techniqueCards = document.querySelectorAll('.technique-card');

techniqueCards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    techniqueCards.forEach((otherCard, otherIndex) => {
      if (index !== otherIndex) {
        otherCard.style.zIndex = '1';
        otherCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
      }
    });
    card.style.zIndex = '2';
    card.style.transform = 'rotateY(5deg) rotateX(5deg)';
  });
});