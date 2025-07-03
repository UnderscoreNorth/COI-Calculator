import type { ItemName } from './types';

export const unityDemands: Array<{ item: ItemName; demand: number; active: boolean }> = $state([
	{ item: 'Household Goods', demand: 11, active: true },
	{ item: 'Household Appliances', demand: 7.7, active: true },
	{ item: 'Luxury Goods', demand: 3.95, active: true },
	{ item: 'Consumer Electronics', demand: 5, active: true },
	{ item: 'Medical Supplies', demand: 5, active: true },
	{ item: 'Medical Supplies II', demand: 5, active: true },
	{ item: 'Medical Supplies III', demand: 5, active: true }
]);
