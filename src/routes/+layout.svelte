<script>
  import "../app.css";
  import Header from "$lib/components/Layout/Header.svelte";
  import SiteFooter from "$lib/components/Layout/SiteFooter.svelte";
</script>

<header class="bg-charcoal text-white sticky top-0 z-50 shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <a href="/" class="text-2xl font-bold">
        <span class="text-pit-red">PITSTOP</span> TUNING
      </a>
      
      <div class="flex items-center space-x-8">
        <nav class="hidden md:block">
          <ul class="flex space-x-6 items-center">
            <li><a href="/" class="hover:text-pit-red transition-colors">Home</a></li>
            <li><a href="/services" class="hover:text-pit-red transition-colors">Diensten</a></li>
            <li><a href="/contact" class="hover:text-pit-red transition-colors">Contact</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center space-x-2 text-sm">
          <svg class="w-4 h-4 text-pit-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <a href="tel:+32499812185" class="hover:text-pit-red transition-colors">+32 499 81 21 85</a>
        </div>
      </div>
      
      <div class="md:hidden">
        <button class="text-white focus:outline-none" aria-label="Menu openen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="bg-charcoal text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">PITSTOP TUNING</h3>
        <p class="text-gray-400 mb-4">
          Professionele chiptuning en motoroptimalisatie diensten voor alle merken en modellen.
        </p>
        <div class="flex space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op Instagram" class="text-white hover:text-pit-red transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="text-xl font-bold mb-4">Snelle Links</h3>
        <ul class="space-y-2">
          <li>
            <a href="/services" class="text-gray-400 hover:text-white transition-colors">Diensten</a>
          </li>
          <li>
            <a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
          </li>
          <li>
            <a href="/about" class="text-gray-400 hover:text-white transition-colors">Over Ons</a>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-bold mb-4">Contact</h3>
        <ul class="space-y-2 text-gray-400">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-pit-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>Terbiest 90/08, 3800 Sint-Truiden</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-pit-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>+32 499 81 21 85</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-pit-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>info@pitstoptuning38.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Pitstop Tuning. Alle rechten voorbehouden.</p>
    </div>
  </div>
</footer> 