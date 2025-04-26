<script>
  // Custom 404 Error Page
</script>

<svelte:head>
  <title>Pagina Niet Gevonden | Pitstop Tuning</title>
  <meta name="description" content="De opgevraagde pagina kon niet worden gevonden. Keer terug naar de homepage van Pitstop Tuning." />
</svelte:head>

<section class="bg-white py-24">
  <div class="container mx-auto px-4 text-center">
    <div class="mb-8">
      <span class="text-9xl font-bold text-pit-red block">404</span>
      <h1 class="text-4xl font-bold mt-2 mb-4">Pagina Niet Gevonden</h1>
      <p class="text-lg text-gray-600 max-w-lg mx-auto">
        De pagina die u zoekt bestaat niet of is verplaatst. 
        Laten we u helpen de juiste pagina te vinden.
      </p>
    </div>
    
    <div class="flex flex-col items-center justify-center mb-12">
      <svg class="w-32 h-32 text-gray-300 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>

      <div class="space-y-4">
        <p class="text-gray-600">Misschien vindt u één van deze pagina's nuttig:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/" class="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Home</a>
          <a href="/services" class="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Diensten</a>
          <a href="/about" class="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Over Ons</a>
          <a href="/contact" class="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Contact</a>
        </div>
      </div>
    </div>
    
    <a href="/" class="bg-pit-red text-white py-3 px-8 rounded-button font-bold hover:bg-red-700 inline-block transition-colors">
      Terug naar Home
    </a>
  </div>
</section> 