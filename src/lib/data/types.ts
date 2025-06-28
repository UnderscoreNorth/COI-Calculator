import type { buildings } from './buildings';
import type { items } from './items';
import type { vehicles } from './vehicles';

export type Building = {
	name: string;
	pop: number;
	kw: number;
	tflop: number;
	mType: 1 | 2 | 3;
	mUse: number;
	icon: string;
};
export type Food = {
	name: string;
	type: 'carbs' | 'protein' | 'vitamins' | 'treats';
};
export type Item = {
	name: string;
	icon: string;
	recyclable?: boolean;
};
export type Vehicle = {
	name: string;
	icon: string;
	pop: number;
	mType: 1 | 2 | 3;
	mUse: number;
	fUse: number;
};
export type ItemName = (typeof items)[number]['name'];
export type BuildingName = (typeof buildings)[number]['name'];
export type VehicleName = (typeof vehicles)[number]['name'];
export type Recipe = {
	building: BuildingName;
	kwRatio?: number;
	input: Partial<Record<ItemName, number>>;
	output: Partial<Record<ItemName, number>>;
	consumer?: ItemName[];
	producer?: ItemName[];
	binary?: boolean;
	active: boolean;
};
