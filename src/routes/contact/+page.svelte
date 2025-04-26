<script lang="ts">
  import QuoteForm from '$lib/components/QuoteForm.svelte';
  
  // Contact info
  const contactInfo = {
    address: {
      street: 'Terbiest 90/08',
      postalCode: '3800',
      city: 'Sint-Truiden',
      country: 'België'
    },
    phone: '+32 499 81 21 85',
    email: 'info@pitstoptuning38.com',
    whatsapp: '+32 499 81 21 85'
  };
  
  // Google Maps Embed URL (replace with your desired location)
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Terbiest+90/08,3800+Sint-Truiden,Belgium`; // Use the actual address. Add your API key if needed.
  // Simple embed without API key:
  // const mapSrc = `https://maps.google.com/maps?q=Terbiest%2090%2F08%2C%203800%20Sint-Truiden%2C%20Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const simpleMapSrc = `https://maps.google.com/maps?q=Terbiest%2090%2F08%2C%203800%20Sint-Truiden%2C%20Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  // Opening hours
  const openingHours = [
    { day: 'Maandag', hours: '9:00 - 18:00' },
    { day: 'Dinsdag', hours: '9:00 - 18:00' },
    { day: 'Woensdag', hours: '9:00 - 18:00' },
    { day: 'Donderdag', hours: '9:00 - 18:00' },
    { day: 'Vrijdag', hours: '9:00 - 18:00' },
    { day: 'Zaterdag', hours: '10:00 - 16:00' },
    { day: 'Zondag', hours: 'Gesloten' }
  ];
</script>

<svelte:head>
  <title>Contact | Pitstop Tuning</title>
  <meta name="description" content="Neem contact op met Pitstop Tuning in Sint-Truiden voor professionele chiptuning. Bezoek onze werkplaats op Terbiest 90/08 of vraag een offerte aan." />
</svelte:head>

<section class="py-16 bg-gray-900 text-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-heading mb-4">Contact</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Heeft u vragen over onze diensten of wilt u een afspraak maken? Neem contact met ons op.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
      <!-- Contact Information (Takes 2 cols) -->
      <div class="lg:col-span-2">
        <h2 class="text-3xl font-bold mb-6 text-white">Contactgegevens</h2>
        
        <div class="space-y-6 mb-10">
          <div class="flex items-start">
            <div class="bg-pit-red p-3 rounded mr-4 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Adres</h3>
              <p class="text-gray-300">{contactInfo.address.street}</p>
              <p class="text-gray-300">{contactInfo.address.postalCode}, {contactInfo.address.city}</p>
              <p class="text-gray-300">{contactInfo.address.country}</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-pit-red p-3 rounded mr-4 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Telefoon</h3>
              <p class="text-gray-300">{contactInfo.phone}</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-pit-red p-3 rounded mr-4 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">E-mail</h3>
              <p class="text-gray-300">{contactInfo.email}</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-pit-red p-3 rounded mr-4 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">WhatsApp</h3>
              <p class="text-gray-300">{contactInfo.whatsapp}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Map & Reachability (Takes 3 cols) -->
      <div class="lg:col-span-3">
        <h2 class="text-3xl font-bold mb-6 text-white">Locatie & Bereikbaarheid</h2>
        
        <!-- Google Maps Embed -->
        <div class="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-8">
          <iframe 
            src={simpleMapSrc} 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen={true} 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Locatie Pitstop Tuning">
          </iframe>
        </div>
        
        <div class="space-y-4">
          <p class="text-gray-300">
            Onze werkplaats in Sint-Truiden is gemakkelijk te bereiken met de auto en er is voldoende parkeergelegenheid.
          </p>
          <p class="text-gray-300">
            Als u bij ons langskomt voor een afspraak, meld u dan bij de receptie. We zorgen voor een kopje koffie terwijl u wacht!
          </p>
        </div>
      </div>
    </div>

    <!-- Opening Hours Section (Moved Below Grid) -->
    <div class="mb-16 pt-12 border-t border-gray-700">
      <h2 class="text-3xl font-bold mb-8 text-white text-center">Openingstijden</h2>
      <div class="bg-gray-800 rounded p-6 max-w-xl mx-auto shadow-lg">
        <table class="w-full">
          <tbody>
            {#each openingHours as { day, hours }}
              <tr class="border-b border-gray-700 last:border-0">
                <td class="py-2 font-medium text-gray-200">{day}</td>
                <td class="py-2 text-right text-gray-200">{hours}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
    <!-- End Opening Hours Section -->

    <!-- Quote Form Section -->
    <div class="pt-16 border-t border-gray-700">
      <h2 class="text-3xl font-bold text-center mb-8 text-white">Vraag Direct een Offerte Aan</h2>
      <QuoteForm />
    </div>
  </div>
</section> 