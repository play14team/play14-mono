<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div>
  <h3 class="pb-5 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
    {$t('manifesto.title')}
  </h3>
  <p class="mb-4 text-gray-700 dark:text-gray-300">
    <strong>#play14</strong>
    {$t('manifesto.intro')}
  </p>
  <ul class="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
    <li>
      {$t('manifesto.shareKnowledge')}
    </li>
    <li>
      {$t('manifesto.openToAll')}
    </li>
    <li>
      {$t('manifesto.physicalWorld')}
    </li>
    <li>
      {$t('manifesto.unconference')}
    </li>
    <li>
      {$t('manifesto.nonProfit')}
    </li>
  </ul>
</div>
