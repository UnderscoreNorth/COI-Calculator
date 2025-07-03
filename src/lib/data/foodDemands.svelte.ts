import type { ItemName } from './types';

export const foodDemands: Array<{
	item: ItemName;
	base: number;
	category: 'carb' | 'vitamin' | 'protein' | 'snack';
	active: boolean;
}> = $state([
	{ item: 'Potato', base: 4.7, category: 'carb', active: true },
	{ item: 'Corn', base: 3.3, category: 'carb', active: true },
	{ item: 'Bread', base: 2.2, category: 'carb', active: true },
	{ item: 'Vegetables', base: 4.7, category: 'vitamin', active: true },
	{ item: 'Fruit', base: 3.5, category: 'vitamin', active: true },
	{ item: 'Meat', base: 3, category: 'protein', active: true },
	{ item: 'Sausage', base: 3.7, category: 'protein', active: true },
	{ item: 'Eggs', base: 3.3, category: 'protein', active: true },
	{ item: 'Tofu', base: 2, category: 'protein', active: true },
	{ item: 'Snacks', base: 5.8, category: 'snack', active: true },
	{ item: 'Cake', base: 2.8, category: 'snack', active: true }
]);
