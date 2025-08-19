import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const currentYear = new Date().getFullYear();
  const firstYear = 2014;
  const year = Number(params.year);
  if (!Number.isInteger(year) || year < firstYear || year > currentYear) {
    throw error(404, 'Year not found');
  }
  return { year };
};
