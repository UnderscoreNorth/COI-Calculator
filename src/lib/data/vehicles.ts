import type { Vehicle } from './types';

export const vehicles = [
	{
		name: 'Truck',
		icon: '90px-TruckT2_Container.png',
		pop: 1,
		mType: 1,
		mUse: 3.2,
		fUse: 1.1
	}
] as const satisfies Vehicle[];
