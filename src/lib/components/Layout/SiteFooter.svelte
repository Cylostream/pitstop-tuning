<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-charcoal text-white py-8 px-4">
  <div class="container mx-auto text-center text-sm">
    <div>
      <!-- TODO: Add real contact details -->
      <a href="/contact" class="hover:text-pit-yellow mx-2">Contact</a>
      <span class="mx-2">|</span>
      <!-- TODO: Add link to Privacy Policy / Terms -->
      <a href="/privacy" class="hover:text-pit-yellow mx-2">Privacy Policy</a>
    </div>
    <div class="mt-4 text-smoke">
      &copy; {currentYear} Pitstop Tuning. All rights reserved.
    </div>
  </div>
</footer> 