import { foodDemands } from '$lib/data/foodDemands.svelte';
import { recipes } from '$lib/data/recipes.svelte';
import { settlementServices } from '$lib/data/settlementServices.svelte';
import type { ItemName, Recipe } from '$lib/data/types';
import { unityDemands } from '$lib/data/unityDemands.svelte';
import { getBuilding } from '$lib/helper';
export const input: {
	requirements: Array<{ item: ItemName; in: number; out: number }>;
	population: number;
	reqBuildings: Array<Recipe & { num: number }>;
	selectedItem: ItemName | string;
	recipeBalance: Partial<Record<ItemName, { in: number; out: number }>>;
} = $state({
	requirements: [
		{ item: 'Lab Equipment IV', out: 48, in: 0 },
		{ item: 'Space Research', out: 48, in: 0 },
		{ item: 'Construction Parts IV', out: 12, in: 0 },
		{ item: 'Station Parts (Launched)', out: 0.75, in: 0 },
		{ item: 'Crew Supplies (Launched)', out: 0.8, in: 0 },
		{ item: 'Astronaut', out: 4 / 720, in: 0 },
		{ item: 'Crude Oil', out: 0, in: 180 }
	],
	population: 0,
	reqBuildings: [],
	selectedItem: '',
	recipeBalance: {}
});
export const output = () => outputData;
const outputData: {
	settlementRequirements: Partial<Record<ItemName, number>>;
	itemBalance: Partial<Record<ItemName, { in: number; out: number }>>;
} = $derived.by(() => {
	const settlementRequirements: Partial<Record<ItemName, number>> = {};
	const itemBalance: Partial<Record<ItemName, { in: number; out: number }>> = {
		Electricity: { in: 0, out: 0 },
		'Maintenance I': { in: 0, out: 0 },
		'Maintenance II': { in: 0, out: 0 },
		'Maintenance III': { in: 0, out: 0 },
		Population: { in: input.population, out: 0 },
		Unity: { in: 0, out: 0 },
		Computing: { in: 0, out: 0 },
		Water: { in: 0, out: 0 },
		'Waste Water': { in: 0, out: 0 }
	};
	for (const food of foodDemands) {
		const common = foodDemands.filter((i) => i.category == food.category && i.active).length;
		const cats = ['carb', 'protein', 'vitamin', 'snack'].filter((j) => {
			return foodDemands.filter((i) => i.category == j && i.active).length;
		}).length;
		if (food.active) {
			const requirement = (food.base / (cats * common) / 100) * input.population;
			settlementRequirements[food.item] = requirement;
			itemBalance[food.item] = { out: requirement, in: 0 };
		} else {
			settlementRequirements[food.item] = 0;
		}
	}
	for (const item of unityDemands) {
		if (item.active) {
			const requirement = (item.demand / 1000) * input.population;
			settlementRequirements[item.item] = requirement;
			itemBalance[item.item] = { out: requirement, in: 0 };
		} else {
			settlementRequirements[item.item] = 0;
		}
	}
	for (const s of settlementServices) {
		if (s.service == 'Settlement Computing' && s.active) {
			const computing = itemBalance['Computing'];
			if (computing !== undefined) computing.out += (40.25 / 1000) * input.population;
		}
		if (s.service == 'Settlement Electricity' && s.active) {
			const electricity = itemBalance['Electricity'];
			if (electricity !== undefined) electricity.out += (1440 / 1000) * 1.4 * input.population;
		}
		if (s.service == 'Settlement Water' && s.active) {
			const water = itemBalance['Water'];
			if (water !== undefined) water.out += (65.5 / 1000) * 1.2 * input.population;
			const wasteWater = itemBalance['Waste Water'];
			if (wasteWater !== undefined) wasteWater.in += (54.8 / 1000) * 1.2 * input.population;
		}
	}
	for (const i of input.requirements) {
		if (itemBalance[i.item] == undefined) itemBalance[i.item] = { in: 0, out: 0 };
		const item = itemBalance[i.item];
		if (item !== undefined) {
			item.in += i.in;
			item.out += i.out;
		}
	}
	for (const recipe of recipes) {
		const num = recipe.num ?? 0;
		if (num > 0) {
			for (const i in recipe.input) {
				const itemName = i as ItemName;
				if (itemBalance[itemName] == undefined) {
					itemBalance[itemName] = { in: 0, out: 0 };
				}
				itemBalance[itemName].out += (recipe.input[itemName] ?? 0) * num;
			}
			for (const i in recipe.output) {
				const itemName = i as ItemName;
				if (itemBalance[itemName] == undefined) {
					itemBalance[itemName] = { in: 0, out: 0 };
				}
				itemBalance[itemName].in += (recipe.output[itemName] ?? 0) * num;
			}
		}
		const electricity = itemBalance['Electricity'];
		const building = getBuilding(recipe.building);

		if (electricity !== undefined) electricity.out += building.kw * num * (recipe.kwRatio ?? 1);
		const maint =
			itemBalance[
				building.mType == 1
					? 'Maintenance I'
					: building.mType == 2
						? 'Maintenance II'
						: 'Maintenance III'
			];
		if (maint !== undefined) maint.out += building.mUse * num;
		const computing = itemBalance['Computing'];
		if (computing !== undefined) computing.out += building.tflop * num;
		const population = itemBalance['Population'];
		if (population !== undefined) population.out += building.pop * Math.ceil(num);
	}

	return {
		settlementRequirements,
		itemBalance
	};
});
