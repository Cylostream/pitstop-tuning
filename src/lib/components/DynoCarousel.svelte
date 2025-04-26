<script lang="ts">
  // Import Svelte transition if you want to add animation effects
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  // Dyno test results data with image paths
  const dynoResults = [
    {
      id: 1,
      model: 'Volkswagen Golf 7 GTI',
      beforeHP: 220,
      afterHP: 290,
      beforeNM: 350,
      afterNM: 430,
      testimonial: "Geweldige resultaten! De auto rijdt nu veel soepeler en krachtiger.",
      image: '/images/cars/golf-7-gti.jpg'
    },
    {
      id: 2,
      model: 'BMW 320d F30',
      beforeHP: 184,
      afterHP: 230,
      beforeNM: 380,
      afterNM: 470,
      testimonial: "Zeer tevreden met de stage 1 tuning, merkbaar verschil in koppel.",
      image: '/images/cars/320-d.jpg'
    },
    {
      id: 3,
      model: 'Mercedes C43 AMG',
      beforeHP: 367,
      afterHP: 435,
      beforeNM: 520,
      afterNM: 620,
      testimonial: "Fantastische upgrade, de auto voelt nu echt als een volwaardige AMG.",
      image: '/images/cars/c-43.jpg'
    },
    {
      id: 4,
      model: 'Audi S3',
      beforeHP: 310,
      afterHP: 370,
      beforeNM: 400,
      afterNM: 470,
      testimonial: "Perfect afgestemd en direct merkbaar meer vermogen.",
      image: '/images/cars/audi-s3.jpg'
    }
  ];
  
  // Carousel state
  let currentIndex = 0;
  
  // Automatic carousel functionality
  let interval: ReturnType<typeof setInterval> | undefined;
  
  function nextSlide(): void {
    currentIndex = (currentIndex + 1) % dynoResults.length;
  }
  
  function prevSlide(): void {
    currentIndex = (currentIndex - 1 + dynoResults.length) % dynoResults.length;
  }
  
  function goToSlide(index: number): void {
    currentIndex = index;
    resetInterval();
  }
  
  function resetInterval(): void {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }
  
  onMount(() => {
    interval = setInterval(nextSlide, 5000);
    
    return () => {
      clearInterval(interval);
    };
  });
</script>

<section class="py-16 bg-charcoal text-white">
  <div class="container mx-auto px-4">
    <h2 class="text-center text-4xl font-heading mb-4">Tuning Resultaten</h2>
    <p class="text-center text-gray-300 max-w-2xl mx-auto mb-12">
      Bekijk onze recente tuning resultaten en de indrukwekkende vermogenswinst die we voor onze klanten hebben bereikt.
    </p>
    
    <div class="relative max-w-5xl mx-auto">
      <!-- Carousel container -->
      <div class="overflow-hidden rounded-lg">
        <div class="relative">
          <!-- Current slide -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left side - Car Image -->
            <div class="bg-gray-800 h-80 rounded overflow-hidden">
              <img 
                src={dynoResults[currentIndex].image} 
                alt={`Afbeelding van ${dynoResults[currentIndex].model}`}
                class="w-full h-full object-cover object-center" 
                loading="lazy"
                decoding="async"
              >
            </div>
            
            <!-- Results side -->
            <div class="flex flex-col justify-center">
              <h3 class="text-3xl font-bold mb-6">{dynoResults[currentIndex].model}</h3>
              
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="bg-gray-800 p-4 rounded">
                  <p class="text-gray-400 text-sm">Vermogen Voor</p>
                  <p class="text-2xl font-bold">{dynoResults[currentIndex].beforeHP} <span class="text-sm">PK</span></p>
                </div>
                <div class="bg-pit-red p-4 rounded">
                  <p class="text-gray-200 text-sm">Vermogen Na</p>
                  <p class="text-2xl font-bold">{dynoResults[currentIndex].afterHP} <span class="text-sm">PK</span></p>
                </div>
                <div class="bg-gray-800 p-4 rounded">
                  <p class="text-gray-400 text-sm">Koppel Voor</p>
                  <p class="text-2xl font-bold">{dynoResults[currentIndex].beforeNM} <span class="text-sm">Nm</span></p>
                </div>
                <div class="bg-pit-red p-4 rounded">
                  <p class="text-gray-200 text-sm">Koppel Na</p>
                  <p class="text-2xl font-bold">{dynoResults[currentIndex].afterNM} <span class="text-sm">Nm</span></p>
                </div>
              </div>
              
              <blockquote class="italic text-gray-300 border-l-4 border-pit-red pl-4">
                "{dynoResults[currentIndex].testimonial}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Carousel controls -->
      <div class="flex justify-between mt-6">
        <button 
          class="bg-pit-red p-2 rounded-full hover:bg-red-700 transition-colors"
          on:click={prevSlide}
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <div class="flex space-x-2">
          {#each dynoResults as _, i}
            <button 
              class="w-3 h-3 rounded-full {i === currentIndex ? 'bg-pit-red' : 'bg-gray-600'}"
              on:click={() => goToSlide(i)}
              aria-label="Go to slide {i + 1}"
            ></button>
          {/each}
        </div>
        
        <button 
          class="bg-pit-red p-2 rounded-full hover:bg-red-700 transition-colors"
          on:click={nextSlide}
          aria-label="Next slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a href="/contact" class="inline-block bg-pit-red text-white py-3 px-8 rounded-button font-bold transition-colors hover:bg-red-700 hover:scale-105 transition-all shadow-lg">
        Vraag een Offerte Aan
      </a>
    </div>
  </div>
</section> 