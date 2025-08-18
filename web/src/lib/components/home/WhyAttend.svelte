<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section class="mb-16 pt-24">
  <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">{$t('home.whyAttend')}</h2>
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="mb-4 text-gray-700 dark:text-gray-300">
      {$t('home.whyAttendDescription')}
    </p>
    <ul class="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
      <li><strong>{$t('home.globalCommunity')}</strong>: {$t('home.globalCommunityDesc')}</li>
      <li><strong>{$t('home.endlessFun')}</strong>: {$t('home.endlessFunDesc')}</li>
      <li><strong>{$t('home.inspireBeInspired')}</strong>: {$t('home.inspireBeInspiredDesc')}</li>
    </ul>
    <p class="mt-4 text-gray-700 dark:text-gray-300">
      {$t('home.unconferenceDescription')}
    </p>
  </div>
</section>
