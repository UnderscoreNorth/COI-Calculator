import { buildings } from './data/buildings';
import { items } from './data/items';
import { vehicles } from './data/vehicles';

export function getBuilding(name: string) {
	return buildings.filter((i) => i.name == name)[0];
}
export function getVehicle(name: string) {
	return vehicles.filter((i) => i.name == name)[0];
}
export function getItem(name: string) {
	return items.filter((i) => i.name == name)[0];
}
export function round(num: number) {
	return (Math.round(num * 100) / 100).toFixed(2);
}
