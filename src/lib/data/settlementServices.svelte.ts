export const settlementServices: Array<{
	service: 'Settlement Electricity' | 'Settlement Water' | 'Settlement Computing';
	active: boolean;
}> = $state([
	{ service: 'Settlement Electricity', active: true },
	{ service: 'Settlement Water', active: true },
	{ service: 'Settlement Computing', active: true }
]);
