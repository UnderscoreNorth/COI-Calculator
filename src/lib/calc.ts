import type { BuildingName, ItemName, Recipe, VehicleName } from '$lib/data/types';
import { getBuilding, getVehicle } from './helper';
export function calc(recipes: Recipe[]) {
	let callstack = 0;
	let loops = 0;
	const outputs: Array<{ item: ItemName; num: number }> = [
		{ item: 'Lab Equipment IV', num: 48 },
		{ item: 'Space Research', num: 48 },
		{ item: 'Construction Parts IV', num: 12 },
		{ item: 'Station Parts (Launched)', num: 0.75 },
		{ item: 'Crew Supplies (Launched)', num: 0.8 },
		{ item: 'Astronaut', num: 4 / 720 }
	];
	const inputs: Array<{ item: ItemName; num: number }> = [{ item: 'Crude Oil', num: 180 }];
	const baseBuildings: Array<{ building: BuildingName; num: number }> = [
		{ building: 'Food Market II', num: 11 },
		{ building: 'Waste Sorting Plant', num: 2 }
	];
	const baseVehicles: Array<{ vehicle: VehicleName; num: number }> = [
		{ vehicle: 'Truck', num: 78 }
	];
	const inOut: Record<string, { input: number; output: number }> = {};
	const reqBuildings: Record<string, { recipe: string; building: string; num: number }> = {};
	let itemList: Array<{ item: string; input: number; output: number; key: number }> = [];
	let buildingList: Array<{ building: string; recipe: string; num: number }> = [];
	let pop = 0;
	const maintenanceEnum = {
		1: 'Maintenance I',
		2: 'Maintenance II',
		3: 'Maintenance III'
	} as const;
	const foodDemands: Array<{ item: ItemName; base: number; common: number }> = [
		{ item: 'Potato', base: 4.7, common: 3 },
		{ item: 'Corn', base: 3.3, common: 3 },
		{ item: 'Vegetables', base: 4.7, common: 2 },
		{ item: 'Fruit', base: 3.5, common: 2 },
		{ item: 'Bread', base: 2.2, common: 3 },
		{ item: 'Meat', base: 3, common: 4 },
		{ item: 'Sausage', base: 3.7, common: 4 },
		{ item: 'Eggs', base: 3.3, common: 4 },
		{ item: 'Tofu', base: 2, common: 4 },
		{ item: 'Snacks', base: 5.8, common: 2 },
		{ item: 'Cake', base: 2.8, common: 2 }
	];
	const unityDemands: Array<{ item: ItemName; demand: number }> = [
		{ item: 'Household Goods', demand: 11 },
		{ item: 'Household Appliances', demand: 7.7 },
		{ item: 'Luxury Goods', demand: 3.95 },
		{ item: 'Consumer Electronics', demand: 5 },
		{ item: 'Medical Supplies', demand: 5 },
		{ item: 'Medical Supplies II', demand: 5 },
		{ item: 'Medical Supplies III', demand: 5 }
	];
	for (const output of outputs) {
		initItem(output.item);
		let item = inOut[output.item];
		if (item !== undefined) item.output += output.num;
	}
	for (const input of inputs) {
		initItem(input.item);
		let item = inOut[input.item];
		if (item !== undefined) item.input += input.num;
	}
	for (const building of baseBuildings) {
		initBuilding(building.building, 'Nothing');
		reqBuildings[building.building + '-Nothing'].num = building.num;
	}
	for (const vehicle of baseVehicles) {
	}
	let [newState, oldState] = ['', ''];
	initItem('Population');
	initItem('Water');
	initItem('Waste Water');
	initItem('Electricity');
	initItem('Computing');
	do {
		callstack++;
		oldState = JSON.stringify(inOut);
		loops = 0;
		check('req');
		console.log('Req Loops: ' + loops);
		loops = 0;
		check('consumers');
		console.log('Consumer Loops: ' + loops);
		loops = 0;
		check('producers');
		console.log('Producer Loops: ' + loops);
		popCheck();
		newState = JSON.stringify(inOut);
		console.log('Callstack: ' + callstack);
	} while (newState !== oldState && callstack < 100);
	function initItem(item: ItemName) {
		if (inOut[item] === undefined) inOut[item] = { input: 0, output: 0 };
	}
	function initBuilding(building: BuildingName, recipe: string) {
		if (reqBuildings[building + '-' + recipe] === undefined)
			reqBuildings[building + '-' + recipe] = { recipe, building, num: 0 };
	}

	function checkConsumer(recipe: Recipe, item: ItemName) {
		if (recipe.consumer === undefined) return false;
		if (recipe.consumer.includes(item)) return true;
		return false;
	}
	function checkProducer(recipe: Recipe, item: ItemName) {
		if (recipe.producer === undefined) return false;
		if (recipe.producer.includes(item)) return true;
		return false;
	}
	function popCheck() {
		let newPop = 0;
		for (let { building, num } of Object.values(reqBuildings)) {
			newPop += getBuilding(building).pop * Math.ceil(num);
		}
		for (let { vehicle, num } of Object.values(baseVehicles)) {
			newPop += getVehicle(vehicle).pop * num;
		}
		let popDiff = newPop - pop;
		for (const food of foodDemands) {
			initItem(food.item);
			inOut[food.item].output += (food.base / (4 * food.common) / 100) * popDiff;
		}
		for (const item of unityDemands) {
			initItem(item.item);
			inOut[item.item].output = (item.demand / 1000) * newPop;
		}
		inOut['Electricity'].output += (1440 / 1000) * popDiff * 1.4;
		inOut['Water'].output += ((65.5 * 1.2) / 1000) * popDiff;
		inOut['Waste Water'].input += ((54.8 * 1.2) / 1000) * popDiff;
		inOut['Computing'].output += (40.25 / 1000) * popDiff;
		inOut['Population'].output = newPop;
		inOut['Population'].input = newPop;
		pop = newPop;
	}
	function check(type: 'req' | 'consumers' | 'producers') {
		loops++;
		let change = false;
		for (let i in inOut) {
			let item = i as ItemName;
			let { input, output } = inOut[item] ?? { input: 0, output: 0 };
			let required = output - input;
			let check = false;
			if (required > 0 && ['req', 'producers'].includes(type)) check = true;
			if (required < 0 && type == 'consumers') check = true;
			if (!check) continue;
			let recipe: Recipe = recipes[0];
			if (type == 'req')
				recipe = recipes.filter(
					(i) => i.output[item] !== undefined && !i.consumer && !i.producer && i.active
				)[0];
			if (type == 'consumers')
				recipe = recipes.filter(
					(i) => i.input[item] !== undefined && checkConsumer(i, item) && i.active
				)[0];
			if (type == 'producers')
				recipe = recipes.filter(
					(i) => i.output[item] !== undefined && checkProducer(i, item) && i.active
				)[0];
			if (recipe !== undefined) {
				let num = Math.abs(required);
				let ratio = required > 0 ? recipe.output[item] : recipe.input[item];
				if (ratio !== undefined) num /= ratio;
				if (recipe.binary) num = Math.ceil(num);
				for (let input in recipe.input) {
					initItem(input as ItemName);
					let currentInput = recipe.input[input as ItemName];
					if (currentInput !== undefined) inOut[input].output += currentInput * num;
				}
				for (let output in recipe.output) {
					initItem(output as ItemName);
					let currentOutput = recipe.output[output as ItemName];
					if (currentOutput !== undefined) inOut[output].input += currentOutput * num;
				}

				initBuilding(recipe.building, item);
				reqBuildings[recipe.building + '-' + item].num += num;
				let building = getBuilding(recipe.building);
				initItem(maintenanceEnum[building.mType]);
				inOut[maintenanceEnum[building.mType]].output += num * building.mUse;
				inOut['Electricity'].output += num * building.kw * (recipe.kwRatio ?? 1);
				inOut['Computing'].output += num * building.tflop;
				change = true;
			}
		}
		if (change) check(type);
	}
	inOut['Electricity'].input /= 1000;
	inOut['Electricity'].output /= 1000;
	for (let item in inOut) {
		let row = { item, input: inOut[item].input, output: inOut[item].output, key: 1 };
		if (['Population', 'Computing', 'Electricity', 'Mechanical Power'].includes(item)) row.key = 4;
		if (
			[
				'Maintenance I',
				'Maintenance II',
				'Maintenance III',
				'Space Maintenance',
				'Exhaust'
			].includes(item)
		)
			row.key = 3;
		if (
			[
				'Potato',
				'Corn',
				'Bread',
				'Meat',
				'Eggs',
				'Tofu',
				'Sausage',
				'Vegetables',
				'Fruit',
				'Snacks',
				'Cake'
			].includes(item)
		)
			row.key = 2;
		itemList.push(row);
	}
	itemList.sort((a, b) => {
		if (a.key > b.key) return -1;
		if (a.key < b.key) return 1;
		if (a.item > b.item) return 1;
		if (a.item < b.item) return -1;
		return 0;
	});
	for (let item of Object.values(reqBuildings)) {
		buildingList.push(item);
	}
	buildingList.sort((a, b) => {
		if (a.building > b.building) return 1;
		if (a.building < b.building) return -1;
		if (a.recipe > b.recipe) return 1;
		if (a.recipe < b.recipe) return -1;
		return 0;
	});
	return { itemList, buildingList, pop };
}
