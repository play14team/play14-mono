<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import { locale } from '$lib/i18n';
  import ExpectationsComponent from '$lib/components/Expectations.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';

  // Make locale reactive for Svelte 5
  const currentLocale = $derived($locale);

  // Use Convex query to get expectations
  const query = useQuery(api.home.getExpectations, () => ({ locale: currentLocale }));

  // Access query results using derived runes
  const expectations = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);
</script>

{#if error}
  <section class="mb-16 pt-24">
    <ErrorAlert {error} title="Failed to load expectations" />
  </section>
{:else if isLoading}
  <section class="mb-16 pt-24">
    <div class="flex justify-center">
      <div class="text-gray-500">Loading expectations...</div>
    </div>
  </section>
{:else if expectations.length > 0}
  <section class="mb-16 pt-24">
    <ExpectationsComponent
      expectations={expectations
        .filter((exp) => exp._id && exp.title)
        .map((exp) => ({
          id: exp._id,
          attributes: {
            title: exp.title,
            type: exp.type as 'Main' | 'Secondary',
            icon: exp.icon,
            content: exp.content
          }
        }))}
      category="main"
    />
  </section>
{/if}
