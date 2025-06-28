import { buildings } from './data/buildings';
import { vehicles } from './data/vehicles';

export function getBuilding(name: string) {
	return buildings.filter((i) => i.name == name)[0];
}
export function getVehicle(name: string) {
	return vehicles.filter((i) => i.name == name)[0];
}
