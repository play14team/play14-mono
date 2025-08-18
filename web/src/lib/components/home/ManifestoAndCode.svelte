<script lang="ts">
  import Manifesto from '$lib/components/Manifesto.svelte';
  import CodeOfConduct from '$lib/components/CodeOfConduct.svelte';
</script>

<section class="mb-16 pt-24">
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <div>
      <Manifesto />
    </div>
    <div>
      <CodeOfConduct />
    </div>
  </div>
</section>
