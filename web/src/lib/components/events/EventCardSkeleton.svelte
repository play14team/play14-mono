<script lang="ts">
  // Simple skeleton loader for event card
  let { withImage = true } = $props<{ withImage?: boolean }>();
</script>

<div class="bg-card animate-pulse overflow-hidden rounded-xl border shadow-sm">
  {#if withImage}
    <div class="bg-muted h-64 w-full" />
  {/if}
  <div class="flex flex-col gap-4 p-6">
    <div class="bg-muted h-6 w-3/4 rounded" />
    <div class="space-y-2">
      <div class="bg-muted h-4 w-1/2 rounded" />
      <div class="bg-muted h-4 w-2/3 rounded" />
    </div>
    <div class="bg-muted mt-auto h-9 w-full rounded" />
  </div>
</div>
