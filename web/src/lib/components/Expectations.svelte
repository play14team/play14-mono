<script lang="ts">
  import { t } from '$lib/i18n';

  export let expectations: Array<{
    id: string;
    attributes: {
      title: string;
      type: 'Main' | 'Secondary';
      icon: string;
      content: string;
    };
  }> = [];

  // Add category prop to filter expectations
  export let category: 'all' | 'main' | 'secondary' = 'all';

  // Filter expectations based on category prop
  $: filteredExpectations = expectations.filter((exp) => {
    if (category === 'main') return exp.attributes.type === 'Main';
    if (category === 'secondary') return exp.attributes.type === 'Secondary';
    return true; // 'all' shows everything
  });

  // Separate expectations by type for the 'all' view
  $: mainExpectations = filteredExpectations.filter((exp) => exp.attributes.type === 'Main');
  $: secondaryExpectations = filteredExpectations.filter(
    (exp) => exp.attributes.type === 'Secondary'
  );

  // Function to convert CKEditor HTML to plain text or simplified HTML
  function sanitizeContent(html: string): string {
    // Remove HTML tags but keep line breaks
    return html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<[^>]*>/g, '')
      .trim();
  }

  // Function to determine if icon is Font Awesome and format it properly
  function isIconFontAwesome(icon: string): boolean {
    // Check if it's a Font Awesome icon (contains 'fa' or starts with emoji)
    return (
      icon.includes('fa') || icon.includes('fas') || icon.includes('far') || icon.includes('fab')
    );
  }

  // Font Awesome 4 to 6 icon mapping
  const fa4ToFa6Map: Record<string, string> = {
    'fa-flask': 'fa-flask',
    'fa-comments-o': 'fa-comments',
    'fa-paper-plane-o': 'fa-paper-plane',
    'fa-lightbulb-o': 'fa-lightbulb',
    'fa-ban': 'fa-ban',
    'fa-dot-circle-o': 'fa-circle-dot',
    'fa-users': 'fa-users',
    'fa-check-circle-o': 'fa-circle-check',
    'fa-question-circle-o': 'fa-circle-question',
    'fa-money': 'fa-money-bill'
  };

  // Function to format Font Awesome icon classes
  function formatIconClass(icon: string): string {
    // Extract icon name from the class string
    let iconName = icon;

    // Handle different formats
    if (icon.includes(' ')) {
      // Extract the last part which should be the icon name
      const parts = icon.split(' ');
      iconName = parts[parts.length - 1];
    }

    // Convert FA4 to FA6 if needed
    if (fa4ToFa6Map[iconName]) {
      iconName = fa4ToFa6Map[iconName];
    }

    // Return with FA6 format
    return `fas ${iconName}`;
  }
</script>

<div>
  {#if category === 'all' || category === 'main'}
    <h2 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
      {$t('home.expectations')}
    </h2>
    <p class="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
      {$t('home.expectationsSubtitle')}
    </p>
  {/if}

  {#if mainExpectations.length > 0 && (category === 'all' || category === 'main')}
    <div class="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {#each mainExpectations as expectation (expectation.id)}
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-gray-800 dark:to-gray-900"
        >
          <div
            class="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue-100/20 dark:bg-blue-900/20"
          ></div>
          <div class="relative z-10">
            <div class="mb-8 flex items-center">
              {#if isIconFontAwesome(expectation.attributes.icon)}
                <div
                  class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                >
                  <i
                    class="{formatIconClass(expectation.attributes.icon)} text-3xl"
                    aria-hidden="true"
                  ></i>
                </div>
              {:else}
                <div
                  class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                >
                  <span class="text-4xl" role="img" aria-label={expectation.attributes.title}>
                    {expectation.attributes.icon}
                  </span>
                </div>
              {/if}
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {expectation.attributes.title}
            </h3>
            <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {sanitizeContent(expectation.attributes.content)}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if secondaryExpectations.length > 0 && (category === 'all' || category === 'secondary')}
    <div class={category === 'secondary' ? '' : 'mt-16'}>
      {#if category === 'all'}
        <h3 class="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {$t('home.additionalExpectations')}
        </h3>
      {/if}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each secondaryExpectations as expectation (expectation.id)}
          <div
            class="group flex items-start rounded-lg border-2 border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700"
          >
            {#if isIconFontAwesome(expectation.attributes.icon)}
              <div
                class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400"
              >
                <i class="{formatIconClass(expectation.attributes.icon)} text-xl" aria-hidden="true"
                ></i>
              </div>
            {:else}
              <div
                class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400"
              >
                <span class="text-2xl" role="img" aria-label={expectation.attributes.title}>
                  {expectation.attributes.icon}
                </span>
              </div>
            {/if}
            <div class="flex-1">
              <h4 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
                {expectation.attributes.title}
              </h4>
              <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {sanitizeContent(expectation.attributes.content)}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
