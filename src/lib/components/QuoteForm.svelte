<script lang="ts">
  // Form state
  let formData = {
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    service: '',
    message: ''
  };

  let isSubmitting = false;
  let showSuccess = false;
  let showError = false;
  let errorMessage = '';

  // Services list for dropdown - Updated based on services/+page.svelte
  const services = [
    'Chiptuning',
    'DPF/EGR/Adblue Delete',
    'Performance Parts',
    'Andere Dienst' // Keep this option
  ];

  // Form submission handler
  async function handleSubmit() {
    // Basic validation
    if (!formData.name || !formData.email || !formData.carMake || !formData.service) {
      errorMessage = 'Vul alle verplichte velden in.';
      showError = true;
      return;
    }

    isSubmitting = true;
    
    try {
      // Replace with actual API endpoint
      // const response = await fetch('/api/quote-request', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Er is iets misgegaan bij het versturen.');
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form
      formData = {
        name: '',
        email: '',
        phone: '',
        carMake: '',
        carModel: '',
        carYear: '',
        service: '',
        message: ''
      };

      // Show success message
      showSuccess = true;
      showError = false;
    } catch (error) {
      showError = true;
      errorMessage = error instanceof Error ? error.message : 'Er is een onbekende fout opgetreden.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="py-16 bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Left Column - Form Info -->
        <div class="bg-charcoal text-white p-8 flex flex-col justify-center">
          <h2 class="text-3xl font-heading mb-6">Vraag een Offerte Aan</h2>
          <p class="text-gray-300 mb-8">
            Wil je weten wat we voor jouw auto kunnen betekenen? Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte op maat.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-pit-red p-2 rounded mr-4 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold">Email</h3>
                <p class="text-gray-300">info@pitstoptuning38.com</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-pit-red p-2 rounded mr-4 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold">Telefoon</h3>
                <p class="text-gray-300">+32 499 81 21 85</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-pit-red p-2 rounded mr-4 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold">Adres</h3>
                <p class="text-gray-300">Terbiest 90/08, 3800 Sint-Truiden</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Form -->
        <div class="p-8 bg-gray-800">
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            {#if showSuccess}
              <div class="bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded relative mb-4" role="alert">
                <strong class="font-bold">Bedankt!</strong>
                <span class="block sm:inline"> We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op.</span>
              </div>
            {/if}
            
            {#if showError}
              <div class="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded relative mb-4" role="alert">
                <strong class="font-bold">Fout:</strong>
                <span class="block sm:inline"> {errorMessage}</span>
              </div>
            {/if}
            
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Naam <span class="text-pit-red">*</span></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                bind:value={formData.name} 
                required
                class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email <span class="text-pit-red">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                bind:value={formData.email} 
                required
                class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-300 mb-1">Telefoon</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                bind:value={formData.phone}
                class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
              />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label for="carMake" class="block text-sm font-medium text-gray-300 mb-1">Automerk <span class="text-pit-red">*</span></label>
                <input 
                  type="text" 
                  id="carMake" 
                  name="carMake" 
                  bind:value={formData.carMake} 
                  required
                  class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
                />
              </div>
              
              <div>
                <label for="carModel" class="block text-sm font-medium text-gray-300 mb-1">Model</label>
                <input 
                  type="text" 
                  id="carModel" 
                  name="carModel" 
                  bind:value={formData.carModel}
                  class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
                />
              </div>
              
              <div>
                <label for="carYear" class="block text-sm font-medium text-gray-300 mb-1">Bouwjaar</label>
                <input 
                  type="text" 
                  id="carYear" 
                  name="carYear" 
                  bind:value={formData.carYear}
                  class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
                />
              </div>
            </div>
            
            <div>
              <label for="service" class="block text-sm font-medium text-gray-300 mb-1">Gewenste Dienst <span class="text-pit-red">*</span></label>
              <select 
                id="service" 
                name="service" 
                bind:value={formData.service} 
                required
                class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
              >
                <option value="" class="text-gray-400">Selecteer een dienst</option>
                {#each services as service}
                  <option value={service} class="bg-gray-700 text-white">{service}</option>
                {/each}
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Bericht</label>
              <textarea 
                id="message" 
                name="message" 
                bind:value={formData.message}
                rows="3"
                class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-pit-red focus:border-pit-red"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit"
                disabled={isSubmitting}
                class="w-full bg-pit-red text-white py-3 px-6 rounded-button font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verzenden...' : 'Offerte Aanvragen'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section> 