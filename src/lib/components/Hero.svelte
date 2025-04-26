<script lang="ts">
	// TODO: Add props
	// TODO: Replace gradient with image
	export let title: string = 'Professional Chiptuning & Performance Upgrades';
	export let subtitle: string = 'Unlock your vehicle\'s true potential with our expert tuning services';
	export let backgroundImage: string = '';
	export let buttonText: string = 'Get Started';
	export let buttonLink: string = '#services';
</script>

<section class="relative h-[80vh] flex items-center overflow-hidden">
	<!-- Background Image with Overlay -->
	{#if backgroundImage}
		<div class="absolute inset-0 z-0">
			<div class="absolute inset-0 bg-black opacity-75 z-10"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-90 z-20"></div>
			<img src={backgroundImage} alt="Hero background" class="w-full h-full object-cover opacity-50" />
		</div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-br from-charcoal via-smoke to-charcoal z-0"></div>
	{/if}

	<div class="container relative z-30">
		<div class="max-w-3xl">
			<h1 class="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-shadow-xl leading-tight">
				{title}
			</h1>
			<p class="text-lg md:text-xl text-white/90 mb-8 text-shadow-lg max-w-2xl">
				{subtitle}
			</p>
			<a
				href={buttonLink}
				class="inline-flex items-center px-8 py-3 bg-pit-red hover:bg-red-700 text-white font-medium rounded-button shadow-lg transition-colors duration-300"
			>
				{buttonText}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
</section> 