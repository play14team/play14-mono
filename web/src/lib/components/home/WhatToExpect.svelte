<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section class="mb-16">
  <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
    {$t('home.whatToExpect')}
  </h2>
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="mb-4 text-gray-700 dark:text-gray-300">
      {$t('home.whatToExpectDescription')}
    </p>
    <div class="flex justify-center">
      <blockquote class="my-8 max-w-2xl border-l-4 border-blue-500 pl-6 text-center italic">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {$t('home.platoQuote')}
        </p>
        <footer class="mt-4 text-right font-semibold">— Plato</footer>
      </blockquote>
    </div>
    <p class="mb-4 text-gray-700 dark:text-gray-300">
      {$t('home.activitiesIntro')}
    </p>
    <ul class="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
      <li>{$t('home.activitySeriousGame')}</li>
      <li>{$t('home.activityIceBreaker')}</li>
      <li>{$t('home.activityWarmUp')}</li>
      <li>{$t('home.activityFacilitation')}</li>
      <li>{$t('home.activityTeamBuilding')}</li>
      <li>{$t('home.activityGameDesign')}</li>
      <li>{$t('home.activityIntrospection')}</li>
      <li>{$t('home.activityCoaching')}</li>
      <li>{$t('home.activityBrainstorming')}</li>
      <li>{$t('home.activityCreative')}</li>
      <li>{$t('home.activityFun')}</li>
    </ul>
    <p class="mt-6 text-gray-700 dark:text-gray-300">
      {$t('home.developSkills')}
    </p>
  </div>
</section>
