<script lang="ts">
  import UpcomingEventsGrid from '$lib/components/events/UpcomingEventsGrid.svelte';
  import { t } from '$lib/i18n';
  const currentYear = new Date().getFullYear();
</script>

<UpcomingEventsGrid />
<div class="mt-10 text-center text-sm">
  <a class="hover:text-primary underline" href={`/events/${currentYear}`}
    >{$t('events.viewCurrentYear', { year: currentYear })}</a
  >
</div>
