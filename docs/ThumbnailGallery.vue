<template>
  <div class="gallery">
    <div 
      v-for="(thumbnail, index) in thumbnails" 
      :key="index" 
      class="thumbnail" 
      @mouseover="hoveredIndex = index" 
      @mouseleave="hoveredIndex = null" >

      <img 
        :src="thumbnail.image" 
        alt="Thumbnail Image" 
        class="thumbnail-image" 
      />

      <div class="long-description" :class="{ show: hoveredIndex === index }">
        <div class="thumbnail-info">
            <!-- <h3 class="title">{{ thumbnail.title }}</h3> -->
            <p class="short-description">{{ thumbnail.shortDescription }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import an from '/an.jpg'
export default {
  data() {
    return {
      hoveredIndex: null,
      thumbnails: [
        {
          title: 'An Chen: Night portrait',
          shortDescription: 'Night portrait taken by the Charles River in Cambridge, MA',
          longDescription: 'This is a longer description that provides more details about Thumbnail 1.',
          image: {an},
        },
        {
          title: 'Thumbnail 2',
          shortDescription: 'Cobblestone road in Bruges, Belgium in December',
          longDescription: 'This is a longer description that provides more details about Thumbnail 2.',
          image: '/Bruges-cobblestone.jpg',
        },
        {
          title: 'Thumbnail 3',
          shortDescription: 'Bullet striking a playing card taken using strobe photography techniques',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/bullet-card.JPG',
        },
        {
          title: 'Thumbnail 3',
          shortDescription: 'Bullet striking chalk, taken using strobe photography techniques',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/bullet-chalk.JPG',
        },
        {
          title: 'Fire dance show in Maui, HI',
          shortDescription: 'Fire dance show in Maui, HI',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/fire-spin.jpg',
        },
        {
          title: 'Frogs in their natural habitat',
          shortDescription: 'Frogs in their natural habitat',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/frogs-DC.jpg',
        },
        {
          title: 'Man walks on air',
          shortDescription: 'Man walking on air',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/step.jpg',
        },
        {
          title: 'Street portrait taken next to a mural in Singapore',
          shortDescription: 'Street portrait taken next to a mural in Singapore',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/sydney.jpg',
        },
        {
          title: 'Reflections from a puddle by the Seine River in Paris, France after a rainy day ',
          shortDescription: 'Reflections from a puddle by the Seine River in Paris, France after a rainy day',
          longDescription: 'This is a longer description that provides more details about Thumbnail 3.',
          image: '/paris-reflection.jpg',
        },
        // Add more thumbnails as needed
      ],
    };
  },

};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.thumbnail {
  position: relative;
  width: calc(33.33% - 8px);
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.thumbnail-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: opacity 0.3s linear;
}

.thumbnail-info {
  padding: 10px;
  z-index: 1; /* Ensure the info is above the image */
  position: relative; /* Context for z-index */
}

.title {
  font-size: 1.15rem;
  margin: 0;
  line-height: 1em;
}

.short-description {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.2em;
}

.long-description {
  position: absolute;
  bottom: -100%; /* Start off-screen */
  left: 0;
  width: 100%;
  background-color: rgba(100, 108, 255, 0.8); /* Semi-transparent background */
  color: white;
  text-align: center; /* Center text */
  transition: bottom 0.3s ease-in-out; /* Transition for sliding effect */
}


.thumbnail:hover .long-description {
  bottom: 0; /* Slide up into view */
}

/* Responsive Design */
@media (max-width: 768px) {
  .thumbnail {
    width: calc(50% - 8px); /* Set width to 1/2 of the container on smaller screens */
  }
}

@media (max-width: 480px) {
  .thumbnail {
    width: 100%; /* Set width to full container on mobile devices */
  }
}

</style>
