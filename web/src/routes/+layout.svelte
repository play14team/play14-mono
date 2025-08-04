<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  let { children } = $props();
</script>

<ModeWatcher />

<Navbar />

<main>
  <div class="container mx-auto px-4">
    <div class="pb-16 pt-24">
      {@render children()}
    </div>
  </div>
</main>

<Footer />

<style>
  /* Main layout styles */
  main {
    min-height: calc(100vh - 60px - 400px); /* Adjust based on navbar and footer height */
  }
</style>
