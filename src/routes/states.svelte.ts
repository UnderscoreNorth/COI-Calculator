import type { ItemName } from '$lib/data/types';

export let initialInOuts: Array<{ item: ItemName; in: number; out: number; active: boolean }> =
	$state([
		{ item: 'Lab Equipment IV', out: 48, in: 0, active: true },
		{ item: 'Space Research', out: 48, in: 0, active: true },
		{ item: 'Construction Parts IV', out: 12, in: 0, active: true },
		{ item: 'Station Parts (Launched)', out: 0.75, in: 0, active: true },
		{ item: 'Crew Supplies (Launched)', out: 0.8, in: 0, active: true },
		{ item: 'Astronaut', out: 4 / 720, in: 0, active: true },
		{ item: 'Crude Oil', out: 0, in: 180, active: true }
	]);
