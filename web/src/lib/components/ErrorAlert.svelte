<script lang="ts">
  import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
  import { CircleAlert } from 'lucide-svelte';

  interface Props {
    error: Error | null | undefined;
    title?: string;
  }

  let { error, title = 'Error' }: Props = $props();
</script>

{#if error}
  <Alert variant="destructive" class="mb-4">
    <CircleAlert class="h-4 w-4" />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>
      {error.message || 'An unexpected error occurred. Please try again later.'}
    </AlertDescription>
  </Alert>
{/if}
