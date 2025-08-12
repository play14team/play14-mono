<script lang="ts">
  import Title from '$lib/components/layout/Title.svelte';
  import UpcomingEvents from '$lib/components/events/UpcomingEvents.svelte';
  import type { PageData } from './$types';
  let { data } = $props<{ data: PageData }>();
  const { upcoming } = data;
</script>

<section id="title" class="py-8">
  <Title />
  <p class="mt-4 max-w-prose">
    Welcome to <strong>#play14</strong>, a global movement that believes in the transformative power
    of play.
  </p>
</section>

<section id="upcoming" class="border-t py-12">
  <UpcomingEvents events={upcoming} />
</section>

<!-- TODO: migrate remaining home sections (expectations, gallery, manifesto, map, benefits) -->
