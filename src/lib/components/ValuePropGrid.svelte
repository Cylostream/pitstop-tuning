<script lang="ts">
  // Remove onMount import, valueProps array, animation control variables, rotateProp function, and onMount hook
  // Keep the script tag if other logic might be added later, or remove it entirely if not needed.
  // For now, leaving an empty script tag.
</script>

<section class="py-16 relative overflow-hidden bg-charcoal">
  <!-- Remove overlay div -->
  <!-- Background decoration (maybe remove or adjust if it clashes with the image) -->
  <!-- <div class="absolute inset-0 bg-black opacity-50 z-0"></div> --> <!-- Overlay removed -->
  <div class="absolute -z-10 w-full h-full"> 
    <div class="absolute left-0 -top-20 w-1/3 h-1/3 bg-gray-800 opacity-30 rounded-full blur-3xl"></div>
    <div class="absolute right-0 bottom-0 w-1/4 h-1/4 bg-pit-red opacity-10 rounded-full blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10"> <!-- Ensure content is above overlay -->
    <div class="text-center max-w-3xl mx-auto"> <!-- Centered content, adjusted max-width -->
      <h2 class="text-4xl md:text-5xl font-heading mb-4 text-white">Waarom <span class="text-pit-red">Ons</span> Kiezen</h2>
      <p class="text-xl text-gray-300 mb-10">De ultieme auto-tuning ervaring</p>

      <div class="text-left md:text-center space-y-6 mb-12 text-gray-300">
        <p>
          Placeholder: [PITSTOP TUNING] is een toonaangevende aanbieder van professionele auto-tuning en prestatie-upgrades. Ons team van experts is al meer dan een decennium actief in de branche en is gespecialiseerd in het tunen van software om het vermogen van uw auto te verbeteren, een downpipe toe te voegen en spannende pops & bangs te creëren.
        </p>
        <p>
          Onze missie is om het hoogste niveau van prestaties en rijplezier aan onze klanten te bieden. We maken gebruik van geavanceerde software en moderne technieken om de prestaties van uw auto te optimaliseren.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="/services" class="inline-block bg-pit-red text-white font-bold py-3 px-8 rounded-button hover:bg-red-700 hover:scale-105 transition-all shadow-lg">
          Onze Diensten
        </a>
        <span class="text-gray-400">of</span>
        <a href="/contact" class="inline-block border-2 border-pit-red text-pit-red font-bold py-3 px-8 rounded-button hover:bg-pit-red hover:text-white hover:scale-105 transition-all">
          Neem Contact Op
        </a>
      </div>
    </div>
  </div>
</section> 