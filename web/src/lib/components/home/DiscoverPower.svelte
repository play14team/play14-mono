<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section class="mb-16 pt-24">
  <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
    {$t('home.discoverPowerOfPlay')}
  </h2>
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="mb-6 text-gray-700 dark:text-gray-300">
      {$t('home.playDescription')}
    </p>
    <div class="flex justify-center">
      <blockquote class="my-8 max-w-2xl border-l-4 border-blue-500 pl-6 text-center italic">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {$t('home.franklinQuote')}
        </p>
        <footer class="mt-4 text-right font-semibold">— Benjamin Franklin</footer>
      </blockquote>
    </div>
    <p class="text-gray-700 dark:text-gray-300">
      {$t('home.playBenefits')}
    </p>
  </div>
</section>
