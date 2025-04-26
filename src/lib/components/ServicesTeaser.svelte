<script lang="ts">
  // Define the services (Keep full data for potential detail page reuse)
  const services = [
    {
      id: 'chiptuning',
      title: 'Chiptuning',
      description: 'Optimaliseer het motormanagement van uw auto voor meer vermogen, koppel en brandstofefficiëntie.',
      image: '/placeholder/chiptuning.jpg',
      benefits: ['Tot 30% meer vermogen', 'Verhoogd koppel', 'Lager brandstofverbruik'],
      highlight: 'Stage 1-3'
    },
    {
      id: 'dpf-egr-delete',
      title: 'DPF/EGR/Adblue Delete',
      description: 'Professionele verwijdering van emissiesystemen voor betere prestaties en betrouwbaarheid.',
      image: '/placeholder/dpf-delete.jpg',
      benefits: ['Verbeterde motor respons', 'Minder storing gevoelig', 'Langere levensduur motor'],
      highlight: 'Software'
    },
    {
      id: 'performance-parts',
      title: 'Performance Parts',
      description: 'Hoogwaardige onderdelen zoals downpipes en sportuitlaten voor maximale prestatieverbetering.',
      image: '/placeholder/downpipe.jpg',
      benefits: ['Meer motorvermogen', 'Betere gasrespons', 'Sportievere sound'],
      highlight: 'Hardware'
    }
  ];
</script>

<section class="py-16 bg-gray-900 text-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <span class="inline-block bg-pit-red text-white text-sm font-bold px-3 py-1 rounded-full mb-3">Specialist in Motoroptimalisatie</span>
      <h2 class="text-4xl font-heading mb-4">Onze <span class="text-pit-red">Tuning Diensten</span></h2>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Ontdek hoe wij uw auto kunnen transformeren met onze professionele tuning diensten.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each services as service, index}
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div class="w-full h-48 bg-gray-700 flex items-center justify-center relative group">
            <span class="text-white font-bold text-xl relative z-10">{service.title}</span>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div class="absolute top-3 right-3 bg-pit-red text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
              {service.highlight}
            </div>
          </div>
          
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold mb-3">{service.title}</h3>
            <p class="text-gray-300 text-sm mb-4 flex-grow">{service.description}</p>
            
            <a href="/services/{service.id}" class="mt-auto inline-block bg-pit-red text-white font-bold py-2 px-4 rounded-button text-sm hover:bg-red-700 hover:scale-105 transition-all shadow-lg w-full text-center">
              Meer Informatie
            </a>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="mt-16 text-center">
      <a href="/services" class="inline-block border-2 border-pit-red text-pit-red font-bold py-3 px-8 rounded-button hover:bg-pit-red hover:text-white hover:scale-105 transition-all">
        Bekijk Alle Diensten
      </a>
    </div>
  </div>
</section> 