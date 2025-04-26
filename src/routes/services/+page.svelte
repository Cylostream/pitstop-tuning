<script lang="ts">
  // Services page for Pitstop Tuning
  import { onMount } from 'svelte';
  
  // Define the services with more details
  const services = [
    {
      id: 'chiptuning',
      title: 'Chiptuning',
      description: 'Optimaliseer het motormanagement van uw auto voor meer vermogen, koppel en brandstofefficiëntie.',
      longDescription: 'Onze chiptuning is op maat gemaakt voor elk voertuig. We optimaliseren diverse parameters zoals brandstofinjectie, turbodruk en ontstekingstiming voor maximale prestaties zonder betrouwbaarheid in te leveren.',
      features: [
        'Stage 1: Optimalisatie van de standaard ECU voor 15-30% meer vermogen',
        'Stage 2: Voor voertuigen met hardware modificaties zoals uitlaat of intake',
        'Stage 3: Custom maatwerk voor zwaar gemodificeerde motoren',
        'ECO tuning voor lager brandstofverbruik'
      ]
    },
    {
      id: 'dpf-egr-delete',
      title: 'DPF/EGR/Adblue Delete',
      description: 'Professionele verwijdering van emissiesystemen voor betere prestaties en betrouwbaarheid.',
      longDescription: 'Wij bieden professionele software-oplossingen voor het deactiveren van problematische emissiesystemen. Dit verbetert de betrouwbaarheid en prestaties van uw dieselmotor aanzienlijk.',
      features: [
        'DPF (Roetfilter) uitschakeling via software',
        'EGR uitschakeling voor betere motorrespons',
        'Adblue systeem deactivering',
        'Lambdasonde correcties'
      ]
    },
    {
      id: 'performance-parts',
      title: 'Performance Parts',
      description: 'Hoogwaardige onderdelen zoals downpipes en sportuitlaten voor maximale prestatieverbetering.',
      longDescription: 'Naast software-optimalisatie bieden wij een selectie van hoogwaardige hardware-upgrades. Deze onderdelen zijn zorgvuldig geselecteerd om perfect samen te werken met onze tuning software.',
      features: [
        'Downpipes voor betere uitlaatgasstroom',
        'Sportuitlaat systemen voor betere flow en sportief geluid',
        'Inlaatsystemen en sportluchtfilters',
        'Turbo upgrades voor specifieke modellen'
      ]
    }
  ];
</script>

<svelte:head>
  <title>Diensten | Pitstop Tuning</title>
  <meta name="description" content="Ontdek onze professionele tuning diensten: chiptuning, DPF/EGR verwijdering en performance-onderdelen voor uw auto." />
</svelte:head>

<section class="py-16 bg-gray-900 text-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-heading mb-4">Onze Diensten</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Bij Pitstop Tuning bieden wij verschillende specialistische diensten om het maximale uit uw auto te halen.
      </p>
    </div>
    
    <div class="space-y-16">
      {#each services as service}
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div class="p-8">
            <h2 class="text-3xl font-bold mb-4 text-white">{service.title}</h2>
            <p class="text-gray-300 mb-6">{service.longDescription}</p>
            
            <h3 class="text-xl font-bold mb-3 text-white">Kenmerken:</h3>
            <ul class="space-y-2 mb-6">
              {#each service.features as feature}
                <li class="flex items-start text-gray-300">
                  <svg class="w-5 h-5 text-pit-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            
            <a href="/contact" class="inline-block bg-pit-red text-white font-bold py-3 px-6 rounded-button hover:bg-red-700 transition-colors">
              Offerte Aanvragen
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 