<script lang="ts">
  let tagline: string | undefined = $props().tagline;
</script>

<h1 class="text-3xl font-bold tracking-tight">#play14</h1>
{#if tagline}
  <p class="mt-2 text-base opacity-80">{tagline}</p>
{/if}
