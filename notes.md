-  Remove key frames CSS from style.css2 if you are not going to use it


carousel code.

<div class="carousel" role="region" aria-label="Image carousel">
  <div class="main-image-container">
    <img id="mainImage" src="image1.jpg" alt="Description of image 1" class="fade-in" />
  </div>

  <div class="thumbnails" role="list">
    <button role="listitem" class="thumbnail selected" aria-label="View image 1">
      <img src="image1.jpg" alt="Thumbnail of image 1" data-full="image1.jpg" />
    </button>
    <button role="listitem" class="thumbnail" aria-label="View image 2">
      <img src="image2.jpg" alt="Thumbnail of image 2" data-full="image2.jpg" />
    </button>
    <button role="listitem" class="thumbnail" aria-label="View image 3">
      <img src="image3.jpg" alt="Thumbnail of image 3" data-full="image3.jpg" />
    </button>
    <!-- Add more thumbnails as needed -->
  </div>
</div>
.carousel {
  max-width: 600px;
  margin: auto;
}

.main-image-container {
  position: relative;
  height: 400px;
  margin-bottom: 1rem;
}

.main-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.main-image-container img.fade-in.show {
  opacity: 1;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.thumbnail {
  border: 2px solid transparent;
  padding: 2px;
  cursor: pointer;
  background: none;
  border-radius: 4px;
}

.thumbnail.selected {
  border-color: #007acc;
  outline: 2px solid #007acc;
}

.thumbnail img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}


<script>
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const newSrc = thumb.querySelector('img').dataset.full;
      const newAlt = thumb.querySelector('img').alt.replace("Thumbnail of", "Description of");

      // Fade-out current image
      mainImage.classList.remove('show');

      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.alt = newAlt;
        mainImage.classList.add('show');
      }, 100); // Small delay before fading in new image

      thumbnails.forEach(t => t.classList.remove('selected'));
      thumb.classList.add('selected');
    });
  });

  // Initially show the image with fade
  window.addEventListener('load', () => {
    mainImage.classList.add('show');
  });
</script>


