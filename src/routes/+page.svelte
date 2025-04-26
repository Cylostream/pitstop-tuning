<script lang="ts">
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ValuePropGrid from '$lib/components/ValuePropGrid.svelte';
  import ServicesTeaser from '$lib/components/ServicesTeaser.svelte';
  import DynoCarousel from '$lib/components/DynoCarousel.svelte';
  import QuoteForm from '$lib/components/QuoteForm.svelte';
  
  // Dynamic text rotation for hero section
  const services = [
    'Chiptuning',
    'Stage 1-3 Tuning',
    'DPF/EGR Delete',
    'Adblue Delete',
    'Performance Parts',
    'Downpipe Upgrades'
  ];
  
  let currentService = 0;
  let fadeOut = false;
  
  function rotateService() {
    fadeOut = true;
    setTimeout(() => {
      currentService = (currentService + 1) % services.length;
      fadeOut = false;
    }, 500);
  }
  
  onMount(() => {
    const interval = setInterval(rotateService, 3000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Pitstop Tuning | Professionele Chiptuning & Auto Optimalisatie</title>
  <meta name="description" content="Pitstop Tuning biedt professionele chiptuning en auto optimalisatie diensten. Verhoog het vermogen en koppel van uw auto met onze expertise." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-screen md:h-[70vh] bg-black text-white">
  <!-- Background image with darker overlay -->
  <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black opacity-90 z-10"></div>
  <img src="/images/hero/hero-bg.jpg" alt="Performance car" class="absolute inset-0 w-full h-full object-cover object-center" style="opacity: 0.7;" />
  
  <div class="absolute inset-0 flex items-center justify-center z-20">
    <div class="text-center px-4 max-w-4xl">
      <h1 class="text-5xl md:text-6xl font-heading mb-6 text-shadow-lg">
        <span class="block">Specialist in <span class="text-pit-red relative inline-block transition-opacity duration-500 drop-shadow-md" style="opacity: {fadeOut ? 0 : 1}; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">{services[currentService]}</span></span>
        <span class="block mt-2">Voor Maximale Prestaties</span>
      </h1>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-shadow-sm">
        <span class="bg-pit-red px-2 py-1 rounded shadow-md">Professionele tuning</span> voor meer <span class="font-bold text-pit-yellow drop-shadow-md">vermogen</span>, <span class="font-bold text-pit-yellow drop-shadow-md">koppel</span> en een <span class="font-bold text-pit-yellow drop-shadow-md">betere rijervaring</span>
      </p>
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="/services" class="bg-pit-red text-white py-3 px-8 rounded-button font-bold hover:bg-red-700 hover:scale-105 inline-block transition-all shadow-lg">
          Onze Diensten
        </a>
        <a href="/contact" class="border-2 border-white text-white py-3 px-8 rounded-button font-bold hover:bg-white hover:text-black hover:scale-105 inline-block transition-all shadow-lg">
          Offerte Aanvragen
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Value Proposition Section -->
<ValuePropGrid />

<!-- Services Teaser -->
<ServicesTeaser />

<!-- Dyno Carousel -->
<DynoCarousel />

<!-- Quote Form -->
<QuoteForm />
