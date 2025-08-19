import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const initialRaw = params.initial || 'a';
  const initial = initialRaw[0].toUpperCase();
  return { initial };
};
