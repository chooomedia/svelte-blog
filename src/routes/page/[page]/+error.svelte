<script>
	export let error;
</script>

<section class="flex flex-col items-center justify-center h-screen text-center">
	<h1 class="text-4xl font-bold text-red-600">❌ Fehler {error.status || '500'}</h1>
	<p class="text-lg text-gray-500 mt-4">
		{error.message || 'Ein unerwarteter Fehler ist aufgetreten.'}
	</p>
	<a
		href="/page/1"
		class="mt-6 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
	>
		🏠 Zur ersten Seite
	</a>
</section>
