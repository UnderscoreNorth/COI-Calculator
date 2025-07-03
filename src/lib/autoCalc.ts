import type { ItemName, Recipe } from '$lib/data/types';
import { input, output } from '../routes/states.svelte';
import { recipes } from './data/recipes.svelte';
export function autoCalc() {
	let loops = 0;
	let recipeBalance: Partial<Record<ItemName, { in: number; out: number }>> = {};
	loops = 0;
	recipeBalance = {};
	check('req');
	console.log('Req Loops: ' + loops);
	loops = 0;
	check('consumers');
	console.log('Consumer Loops: ' + loops);
	loops = 0;
	check('producers');
	console.log('Producer Loops: ' + loops);
	input.recipeBalance = recipeBalance;
	input.population = Math.ceil((output().itemBalance['Population']?.out ?? 0) / 100) * 100;
	function initItem(item: ItemName) {
		if (recipeBalance[item] === undefined) recipeBalance[item] = { in: 0, out: 0 };
	}

	/*function initBuilding(building: BuildingName, recipe: string) {
		if (reqBuildings[building + '-' + recipe] === undefined)
			reqBuildings[building + '-' + recipe] = { recipe, building, num: 0 };
	}*/

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
	/*function popCheck() {
		let newPop = 0;
		for (const { building } of Object.values(reqBuildings)) {
			newPop += getBuilding(building).pop;
		}
		for (const { vehicle, num } of Object.values(baseVehicles)) {
			newPop += getVehicle(vehicle).pop * num;
		}
		const popDiff = newPop - pop;
		for (const food of foodDemands) {
			const key = items.map((i) => i.name).indexOf(food.item) * -1;
			initRecipeBalance(key);
			if (recipeBalance[key][food.item] == undefined)
				recipeBalance[key][food.item] = { in: 0, out: 0 };
			const foodItem = recipeBalance[key][food.item];
			if (foodItem !== undefined) foodItem.out += (food.base / (4 * food.common) / 100) * popDiff;
		}
		for (const item of unityDemands) {
			const key = items.map((i) => i.name).indexOf(item.item) * -1;
			initRecipeBalance(key);
			if (recipeBalance[key][item.item] == undefined)
				recipeBalance[key][item.item] = { in: 0, out: 0 };
			const unityItem = recipeBalance[key][item.item];
			if (unityItem !== undefined) unityItem.out += (item.demand / 1000) * popDiff;
		}
		//inOut['Electricity'].output += (1440 / 1000) * popDiff * 1.4;
		//inOut['Water'].output += ((65.5 * 1.2) / 1000) * popDiff;
		//inOut['Waste Water'].input += ((54.8 * 1.2) / 1000) * popDiff;
		//inOut['Computing'].output += (40.25 / 1000) * popDiff;
		const key = items.map((i) => i.name).indexOf('Population') * -1;
		initRecipeBalance(key);
		recipeBalance[key]['Population'] = { in: newPop, out: newPop };
		pop = newPop;
	}*/
	function check(type: 'req' | 'consumers' | 'producers') {
		loops++;
		let change = false;
		for (const i in output().itemBalance) {
			const itemName = i as ItemName;
			const item = output().itemBalance[itemName] ?? { in: 0, out: 0 };
			const itemIn = item.in;
			const itemOut = item.out;
			const required = itemOut - itemIn;
			let check = false;
			if (required > 0 && ['req', 'producers'].includes(type)) check = true;
			if (required < 0 && type == 'consumers') check = true;
			if (!check) continue;
			let recipe: Recipe = recipes[0];
			if (type == 'req')
				recipe = recipes.filter(
					(i) => i.output[itemName] !== undefined && !i.consumer && !i.producer && i.active
				)[0];
			if (type == 'consumers')
				recipe = recipes.filter(
					(i) => i.input[itemName] !== undefined && checkConsumer(i, itemName) && i.active
				)[0];
			if (type == 'producers')
				recipe = recipes.filter(
					(i) => i.output[itemName] !== undefined && checkProducer(i, itemName) && i.active
				)[0];
			if (recipe !== undefined) {
				let num = Math.abs(required);
				const ratio = required > 0 ? recipe.output[itemName] : recipe.input[itemName];
				if (ratio !== undefined) num /= ratio;
				if (recipe.binary) num = Math.ceil(num);

				for (const i in recipe.input) {
					const itemName = i as ItemName;
					initItem(itemName as ItemName);
					const currentInput = recipe.input[itemName];
					const balance = recipeBalance[itemName];
					if (currentInput !== undefined && balance !== undefined)
						balance.out += currentInput * num;
				}
				for (const i in recipe.output) {
					const itemName = i as ItemName;
					initItem(itemName as ItemName);
					const currentOutput = recipe.output[itemName];
					const balance = recipeBalance[itemName];
					if (currentOutput !== undefined && balance !== undefined)
						balance.in += currentOutput * num;
				}
				recipe.num = (recipe.num ?? 0) + num;
				change = true;
			}
		}
		if (change) check(type);
	}
}
