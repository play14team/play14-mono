<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import { goto } from '$app/navigation';
  const initialsQuery = useQuery(api.players.listInitials, () => ({}));
  $effect(() => {
    if (initialsQuery.data && initialsQuery.data.length) {
      const first = initialsQuery.data.sort()[0];
      goto(`/players/${first}`);
    }
  });
</script>

<p class="text-muted-foreground">Loading players...</p>
