
  // Smooth scroll to next layer
  function scrollToLayer(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  // Read aloud one layer
  function readAloud(id) {
    const text = document.getElementById(id).innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  // Read all layers
  function readAllLayers() {
    const ids = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7'];
    let index = 0;
    function speakNext() {
      if (index >= ids.length) return;
      const text = document.getElementById(ids[index]).innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => { index++; speakNext(); };
      speechSynthesis.speak(utterance);
    }
    speechSynthesis.cancel();
    speakNext();
  }

  // Stop reading aloud
  function stopReading() {
    speechSynthesis.cancel();
  }

  // Show centered popup
  function showDetails(title, imgSrc, summary) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = imgSrc;
    document.getElementById('popup-summary').innerText = summary;
    document.getElementById('popup').style.display = 'flex';
  }

  // Close popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // Mini-map active highlight while scrolling
  window.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.layer');
    const mapItems = document.querySelectorAll('.mini-map li');
    let index = layers.length;
    while (--index && window.scrollY + 150 < layers[index].offsetTop) {}
    mapItems.forEach((li) => li.classList.remove('active'));
    if (mapItems[index]) mapItems[index].classList.add('active');
  });

  // Create twinkling stars
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(star);
  }

  // Create floating galaxy particles
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animationDuration = (20 + Math.random() * 40) + 's';
    document.body.appendChild(particle);
  }

