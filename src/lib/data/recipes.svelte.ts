import type { Recipe } from './types';

const recycleEff = 0.4;

const initRecipes: Recipe[] = [
	{
		building: 'Assembly V',
		input: { 'Lab Equipment III': 32, 'Electronics III': 4 },
		output: {
			'Lab Equipment IV': 32,
			'Copper Scrap': 65 * recycleEff,
			'Gold Scrap': 4 * recycleEff,
			'Broken Glass': 26 * recycleEff,
			'Iron Scrap': 32 * recycleEff
		},
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Lab Equipment II': 48, 'Electronics II': 8 },
		output: { 'Lab Equipment III': 48 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Lab Equipment': 48, Paper: 16, Glass: 16 },
		output: { 'Lab Equipment II': 48 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Mechanical Parts': 64, Electronics: 32 },
		output: { 'Lab Equipment': 96 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Steel: 48 },
		output: { 'Mechanical Parts': 96 },
		active: true
	},
	{
		building: 'Cooled Caster II',
		input: { 'Molten Steel': 24, Water: 12 },
		output: { Steel: 24 },
		active: true
	},
	{
		building: 'Oxygen Furnace II',
		input: { 'Molten Iron': 48, Oxygen: 18 },
		output: { 'Molten Steel': 24, Exhaust: 36 },
		active: true
	},
	{
		building: 'Air Separator',
		input: {},
		output: { Oxygen: 36, Nitrogen: 36 },
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Iron Scrap': 48, Graphite: 3, Water: 6 },
		output: { 'Molten Iron': 48, Exhaust: 6, 'Steam (Low)': 6 },
		consumer: ['Iron Scrap'],
		kwRatio: 0.6,
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Iron Ore Crushed': 48, Limestone: 6, Graphite: 3, Water: 6 },
		output: { 'Molten Iron': 48, Slag: 18, Exhaust: 12, 'Steam (Low)': 6 },
		producer: ['Molten Iron'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { Microchips: 6, 'Electronics II': 12 },
		output: { 'Electronics III': 6 },
		active: true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Silicon Wafer': 18 / 12, Gold: 2, Copper: 2, Plastic: 2 },
		output: { Microchips: 3 },
		active: true
	},
	/*{
		building: 'Microchip Machine II',
		input: { 'Microchip 4a': 18, Copper: 6, Plastic: 6 },
		output: { 'Microchip 4b': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 3c': 18, Acid: 6, Water: 6 },
		output: { 'Microchip 4a': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 3b': 18, Gold: 6 },
		output: { 'Microchip 3c': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 3a': 18, Copper: 6, Plastic: 6 },
		output: { 'Microchip 3b': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 2c': 18, Acid: 6, Water: 6 },
		output: { 'Microchip 3a': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 2b': 18, Gold: 6 },
		output: { 'Microchip 2c': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 2a': 18, Copper: 6, Plastic: 6 },
		output: { 'Microchip 2b': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 1c': 18, Acid: 6, Water: 6 },
		output: { 'Microchip 2a': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 1b': 18, Gold: 6 },
		output: { 'Microchip 1c': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Microchip 1a': 18, Copper: 6, Plastic: 6 },
		output: { 'Microchip 1b': 18 },
active:true
	},
	{
		building: 'Microchip Machine II',
		input: { 'Silicon Wafer': 18, Acid: 6, Water: 6 },
		output: { 'Microchip 1a': 18 }
	},*/
	{
		building: 'Crystalizer',
		input: { Silicon: 48, Water: 4 },
		output: { 'Silicon Wafer': 12 },
		active: true
	},
	{
		building: 'Silicon Reactor',
		input: { 'Molten Silicon': 18, Hydrogen: 4 },
		output: { Silicon: 18 },
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { Sand: 96, Coal: 24, Graphite: 3, Water: 6 },
		output: { 'Molten Silicon': 72, Slag: 36, Exhaust: 48, 'Steam (Low)': 6 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { PCB: 24, Electronics: 48, Silicon: 24 },
		output: { 'Electronics II': 24 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Copper: 96, Rubber: 24 },
		output: { Electronics: 96 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Copper: 12, Plastic: 24, Glass: 24 },
		output: { PCB: 48 },
		active: true
	},
	{
		building: 'Maintenance Depot',
		input: { 'Mechanical Parts': 24, Electronics: 12 },
		output: {
			'Maintenance I': 480,
			'Iron Scrap': 24 * recycleEff,
			'Copper Scrap': 12 * recycleEff
		},
		active: true
	},
	{
		building: 'Maintenance II Depot',
		input: { 'Mechanical Parts': 18, 'Electronics II': 12 },
		output: {
			'Maintenance II': 480,
			'Iron Scrap': 18 * recycleEff,
			'Copper Scrap': 27 * recycleEff,
			'Broken Glass': 6 * recycleEff
		},
		active: true
	},
	{
		building: 'Maintenance III Depot',
		input: { 'Mechanical Parts': 9, 'Electronics III': 6 },
		output: {
			'Maintenance III': 240,
			'Iron Scrap': 9 * recycleEff,
			'Copper Scrap': 31 * recycleEff,
			'Broken Glass': 6 * recycleEff,
			'Gold Scrap': 4 * recycleEff
		},
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Woodchips: 12, Limestone: 3, 'Steam (high)': 3 },
		output: { Paper: 24 },
		active: true
	},
	{
		building: 'Glass Maker II',
		input: { 'Molten Glass': 24 },
		output: { Glass: 24 },
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Broken Glass': 72, Graphite: 3, Water: 6 },
		output: { 'Molten Glass': 48, Exhaust: 6, 'Steam (Low)': 6 },
		consumer: ['Broken Glass'],
		kwRatio: 0.6,
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Glass Mix': 60, Graphite: 3, Water: 6 },
		output: { 'Molten Glass': 48, Slag: 24, Exhaust: 12, 'Steam (Low)': 6 },
		producer: ['Molten Glass'],
		active: true
	},
	{
		building: 'Mixer II',
		input: { Sand: 120, Limestone: 30, Salt: 12 },
		output: { 'Glass Mix': 120 },
		active: true
	},
	{
		building: 'Shredder',
		input: { Wood: 24 },
		output: { Woodchips: 24 },
		active: true
	},
	{
		building: 'Exhaust Scrubber',
		input: { Exhaust: 480, Water: 48, Limestone: 9 },
		output: { Sulfur: 12, CO2: 192, Slag: 9, 'Steam (Low)': 48 },
		consumer: ['Exhaust'],
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { CO2: 144 },
		output: { Graphite: 6 },
		consumer: ['CO2'],
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Coal: 8, Chlorine: 24 },
		output: { Graphite: 24, 'Sour Water': 8 },
		producer: ['Graphite'],
		kwRatio: 2,
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Construction Parts III': 24, 'Electronics II': 12 },
		output: { 'Construction Parts IV': 12 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Construction Parts II': 48, Steel: 24 },
		output: { 'Construction Parts III': 24 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Construction Parts I': 96, Electronics: 48 },
		output: { 'Construction Parts II': 48 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Steel: 48, Wood: 48, Concrete: 96 },
		output: { 'Construction Parts I': 96 },
		active: true
	},
	{
		building: 'Copper Electrolysis',
		input: { 'Inpure Copper': 24, Acid: 6 },
		output: { Copper: 24 },
		active: true
	},
	{
		building: 'Metal Caster II',
		input: { 'Molten Copper': 24 },
		output: { 'Inpure Copper': 24 },
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Copper Scrap': 48, Graphite: 3, Water: 6 },
		output: { 'Molten Copper': 48, Exhaust: 6, 'Steam (Low)': 6 },
		consumer: ['Copper Scrap'],
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Copper Ore Crushed': 48, Sand: 6, Graphite: 3, Water: 6 },
		output: { 'Molten Copper': 48, Slag: 18, Exhaust: 12, 'Steam (Low)': 6 },
		producer: ['Molten Copper'],
		active: true
	},
	{
		building: 'Thermal Desalinator',
		input: { Seawater: 72, 'Steam (Low)': 24 },
		output: { Water: 72, Brine: 24 },
		consumer: ['Steam (Low)'],
		active: true
	},
	{
		building: 'Data Center',
		input: { 'Chilled Water': 24, 'Maintenance III': 42, Electricity: 4080 },
		output: { Water: 24, Computing: 192 },
		producer: ['Computing'],
		active: true
	},
	{
		building: 'Water Chiller',
		input: { Water: 30 },
		output: { 'Chilled Water': 24 },
		active: true
	},
	{
		building: 'Electrolyzer II',
		input: { Brine: 72 },
		output: { Chlorine: 48 },
		active: true
	},
	{
		building: 'Mixer II',
		input: { Water: 60, Sulfur: 12 },
		output: { Acid: 72 },
		active: true
	},
	{
		building: 'Sour Water Stripper',
		input: { 'Sour Water': 36, 'Steam (high)': 3 },
		output: { Sulfur: 9, Water: 21, Ammonia: 9 },
		consumer: ['Sour Water'],
		active: true
	},
	{
		building: 'Concrete Mixer III',
		input: { Cement: 6, Sand: 12, 'Crushed Slag': 36, Water: 24 },
		output: { Concrete: 48 },
		active: true
	},
	{
		building: 'Rotary Kiln (Gas)',
		input: { Limestone: 18, 'Fuel Gas': 6 },
		output: { Cement: 6, CO2: 18 },
		active: true
	},
	{
		building: 'Seawater Pump',
		input: {},
		output: { Seawater: 108 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { Slag: 144 },
		output: { 'Crushed Slag': 144 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Iron Ore': 192 },
		output: { 'Iron Ore Crushed': 192 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Copper Ore': 192 },
		output: { 'Copper Ore Crushed': 192 },
		active: true
	},
	{
		building: 'Polymerization Plant',
		input: { Naphtha: 12, Chlorine: 8 },
		output: { Exhaust: 24, Plastic: 36 },
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 45, Fertilizer: 6.67 },
		output: { Potato: 29 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 40.25, Fertilizer: 6.5 },
		output: { Vegetables: 22.5 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 45, Fertilizer: 9.25 },
		output: { Soybean: 8.25 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 50, Fertilizer: 7.5 },
		output: { Corn: 24.75 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 39.67, Fertilizer: 6.5 },
		output: { Wheat: 14.5 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 49.88, Fertilizer: 5.63 },
		output: { Fruit: 15 },
		binary: true,
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 60, Fertilizer: 9.33 },
		output: { 'Sugar Cane': 33 },
		binary: true,
		active: true
	},
	{
		building: 'Mill',
		input: { Wheat: 16 },
		output: { Flour: 16, 'Animal Feed': 2 },
		producer: ['Flour'],
		active: true
	},
	{
		building: 'Baking Unit',
		input: { Flour: 16, Water: 8 },
		output: { Bread: 24 },
		active: true
	},
	{
		building: 'Food Processor',
		input: { 'Chicken Carcass': 30, Water: 9, Salt: 3 },
		output: { Meat: 15, 'Meat Trimmings': 6 },
		active: true
	},
	{
		building: 'Food Processor',
		input: { 'Meat Trimmings': 24, Flour: 6, Salt: 9 },
		output: { Sausage: 24 },
		active: true
	},
	{
		building: 'Chicken Farm',
		input: { Water: 18, 'Animal Feed': 15 },
		output: { Eggs: 7, 'Chicken Carcass': 10 },
		active: true
	},
	{
		building: 'Food Processor',
		input: { Water: 6, Sulfur: 1.5, Soybean: 9, Limestone: 1.5 },
		output: { Tofu: 12, 'Animal Feed': 4.5 },
		producer: ['Tofu'],
		active: true
	},
	{
		building: 'Food Processor',
		input: { Corn: 24, Salt: 6, 'Cooking Oil': 3, Plastic: 3 },
		output: { Snacks: 24, Biomass: 3 },
		active: true
	},
	{
		building: 'Baking Unit',
		input: { Flour: 10, Sugar: 4, 'Cooking Oil': 2, Eggs: 2, Fruit: 2 },
		output: { Cake: 14 },
		active: true
	},
	{
		building: 'Mixer II',
		input: { Compost: 72, Water: 24 },
		output: { 'Organic Fertilizer': 96 },
		consumer: ['Compost'],
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { 'Organic Fertilizer': 60, Ammonia: 24, Oxygen: 36 },
		output: { Fertilizer: 90 },
		consumer: ['Organic Fertilizer'],
		active: true
	},
	{
		building: 'Evaporation Pond (Heated)',
		input: { Brine: 96 },
		output: { Salt: 12 },
		consumer: ['Brine'],
		active: true
	},
	{
		building: 'Evaporation Pond (Heated)',
		input: { Seawater: 96 },
		output: { Salt: 6 },
		producer: ['Salt'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { Glass: 30, Steel: 15, Wood: 30 },
		output: {
			'Household Goods': 60,
			'Broken Glass': 30 * recycleEff,
			'Iron Scrap': 30 * recycleEff
		},
		active: true
	},
	{
		building: 'Assembly V',
		input: { Electronics: 32, 'Electronics II': 16, Steel: 16 },
		output: {
			'Household Appliances': 48,
			'Copper Scrap': 68 * recycleEff,
			'Broken Glass': 8 * recycleEff,
			'Iron Scrap': 32 * recycleEff
		},
		active: true
	},
	{
		building: 'Assembly V',
		input: { Gold: 8, 'Imported Goods': 24 },
		output: { 'Luxury Goods': 32 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Electronics III': 2, Plastic: 4, Aluminum: 3 },
		output: {
			'Consumer Electronics': 6,
			'Aluminum Scrap': 3 * recycleEff,
			'Copper Scrap': 10.3 * recycleEff,
			'Broken Glass': 2 * recycleEff,
			'Gold Scrap': (4 / 3) * recycleEff
		},
		active: true
	},
	{
		building: 'Wastewater Treatment',
		input: { 'Waste Water': 160, 'Filter Media': 8, Chlorine: 16 },
		output: { Water: 120, Compost: 36 },
		consumer: ['Waste Water'],
		active: true
	},
	{
		building: 'Mixer II',
		input: { Sand: 24, Coal: 6, Gravel: 48 },
		output: { 'Filter Media': 72 },
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Aluminum Scrap': 48, Graphite: 3, Water: 6 },
		output: { 'Molten Alumnium': 48, 'Steam (Low)': 6, Exhaust: 6 },
		active: true,
		consumer: ['Aluminum Scrap']
	},
	{
		building: 'Metal Caster II',
		input: { 'Molten Alumnium': 24 },
		output: { Aluminum: 24 },
		active: true
	},
	{
		building: 'Aluminum Cell',
		input: { Alumina: 24, Graphite: 6 },
		output: { 'Molten Alumnium': 24, CO2: 18 },
		active: true
	},
	{
		building: 'Rotary Kiln (Gas)',
		input: { 'Hydrated Alumina': 36, 'Fuel Gas': 6 },
		output: { Alumina: 24, CO2: 6 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { 'Bauxite Powder': 72, Brine: 24 },
		output: { 'Hydrated Alumina': 36, 'Red Mud': 36 },
		active: true
	},
	{
		building: 'Settling Tank',
		input: { 'Red Mud': 18, Seawater: 8, Limestone: 2 },
		output: { Slag: 12 },
		consumer: ['Red Mud'],
		active: true
	},
	{
		building: 'Evaporation Pond (Heated)',
		input: { Seawater: 96 },
		output: { Brine: 48 },
		producer: ['Brine'],
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { Bauxite: 72 },
		output: { 'Bauxite Powder': 72 },
		active: true
	},
	{
		building: 'Gold Furnace',
		input: { 'Gold Scrap': 9 },
		output: { Gold: 9 },
		consumer: ['Gold Scrap'],
		active: true
	},
	{
		building: 'Gold Furnace',
		input: { 'Gold Ore Concentrate': 18, Sand: 3 },
		output: { Gold: 9, Exhaust: 12 },
		producer: ['Gold'],
		active: true
	},
	{
		building: 'Settling Tank',
		input: { 'Gold Ore Powder': 36, Acid: 12 },
		output: { 'Gold Ore Concentrate': 9, 'Toxic Slurry': 27 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Gold Ore Crushed': 72 },
		output: { 'Gold Ore Powder': 72 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Gold Ore': 144 },
		output: { 'Gold Ore Crushed': 144 },
		active: true
	},
	{
		building: 'Wastewater Treatment',
		input: { 'Toxic Slurry': 108, 'Filter Media': 6, Brine: 18 },
		output: { Water: 36, Slag: 60 },
		consumer: ['Toxic Slurry'],
		active: true
	},
	{
		building: 'Mixer II',
		input: { Biomass: 24 },
		output: { Compost: 16 },
		consumer: ['Biomass'],
		active: true
	},
	{
		building: 'Food Processor',
		input: { 'Sugar Cane': 15, Water: 3 },
		output: { Sugar: 12, Biomass: 6 },
		producer: ['Sugar'],
		active: true
	},
	{
		building: 'Turbines II',
		input: { 'Steam (high)': 48 },
		output: { 'Steam (Depleted)': 48, 'Mechanical Power': 18 },
		binary: true,
		active: true
	},
	{
		building: 'Cooling Tower (Large)',
		input: { 'Steam (Depleted)': 96 },
		output: { Water: 72 },
		consumer: ['Steam (Depleted)'],
		active: true
	},
	{
		building: 'Power Generator (Large)',
		input: { 'Mechanical Power': 18 },
		output: { Electricity: 15000 },
		binary: true,
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Medical Equipment': 48, Disinfectant: 48 },
		output: { 'Medical Supplies': 96 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Steel: 24, Plastic: 24 },
		output: { 'Medical Equipment': 24 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Ethanol: 9, Plastic: 6 },
		output: { Disinfectant: 24 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Medical Supplies': 96, Antibiotics: 48 },
		output: { 'Medical Supplies II': 96 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Poppy: 12, Acid: 6, Glass: 6 },
		output: { Morphine: 24 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Ammonia: 6, 'Hydrogen Flouride': 12, Steel: 3 },
		output: { Anesthetics: 24 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Medical Supplies II': 96, Anesthetics: 48, Morphine: 48 },
		output: { 'Medical Supplies III': 96 },
		active: true
	},
	{
		building: 'Greenhouse II',
		input: { Water: 33.75, Fertilizer: 5.5 },
		output: { Poppy: 9.5 },
		binary: true,
		active: true
	},
	{
		building: 'Settling Tank',
		input: { Rock: 12, Acid: 6 },
		output: { 'Hydrogen Flouride': 12, Slag: 3 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { Rock: 144 },
		output: { Gravel: 144 },
		active: true
	},
	{
		building: 'Groundwater Pump',
		input: {},
		output: { Water: 48 },
		producer: ['Water'],
		active: true
	},
	{
		building: 'Nuclear Reactor II',
		input: { Water: 384, 'MOX Rod': 2 },
		output: { 'Steam (high)': 384, 'Spent MOX': 2 },
		consumer: ['MOX Rod'],
		active: true
	},
	{
		building: 'Nuclear Reactor II',
		input: { Water: 384, 'Uranium Rod': 2 },
		output: { 'Steam (high)': 384, 'Spent Fuel': 2 },
		producer: ['Steam (high)'],
		active: true
	},
	{
		building: 'Nuclear Reprocessing Plant',
		input: { 'Spent Fuel': 8, 'Molten Glass': 4 },
		output: {
			'Reprocessed Uranium': 6,
			Plutonium: 1,
			'Fission Product': 1
		},
		active: true,
		consumer: ['Spent Fuel']
	},
	{
		building: 'Assembly IV',
		input: { 'Enriched Uranium (4%)': 4, Steel: 2 },
		output: { 'Uranium Rod': 4 },
		active: true
	},
	{
		building: 'Enrichment Plant',
		input: {
			'Yellow Cake': 3,
			'Hydrogen Flouride': 1
		},
		output: {
			'Enriched Uranium (4%)': 0.5,
			'Depleted Uranium': 2.5
		},
		active: true
	},
	{
		building: 'Enrichment Plant',
		input: {
			'Reprocessed Uranium': 2,
			'Hydrogen Flouride': 1
		},
		output: {
			'Enriched Uranium (4%)': 0.5,
			'Depleted Uranium': 1.5
		},
		consumer: ['Reprocessed Uranium'],
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Plutonium: 1, 'Depleted Uranium': 4 },
		output: { 'MOX Rod': 2 },
		consumer: ['Plutonium'],
		active: true
	},
	{
		building: 'Settling Tank',
		input: { 'Uranium Ore Powder': 36, Acid: 12 },
		output: { 'Yellow Cake': 6, 'Toxic Slurry': 36 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Uranium Ore': 72 },
		output: { 'Uranium Ore Powder': 72 },
		active: true
	},
	{
		building: 'Fermentation Tank',
		input: { Sugar: 16, Oxygen: 16 },
		output: { Ethanol: 12, CO2: 16 },
		producer: ['Ethanol'],
		active: true
	},
	{
		building: 'Fermentation Tank',
		input: { Sugar: 4, Ammonia: 1, Oxygen: 8 },
		output: { Antibiotics: 8, CO2: 4 },
		producer: ['Antibiotics'],
		active: true
	},
	{
		building: 'Mill',
		input: { Soybean: 16 },
		output: { 'Cooking Oil': 6, 'Animal Feed': 8 },
		producer: ['Cooking Oil'],
		active: true
	},
	{
		building: 'Hydrogen Reformer',
		input: { 'Fuel Gas': 24, 'Steam (high)': 2 },
		output: { Hydrogen: 28, CO2: 24 },
		producer: ['Hydrogen'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Vehicle Parts I': 32, Steel: 16, Glass: 8 },
		output: { 'Vehicle Parts II': 16 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Mechanical Parts': 96, Electronics: 32 },
		output: { 'Vehicle Parts I': 64 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Vehicle Parts II': 700 },
		output: { 'Imported Goods': 5250 },
		active: true
	},
	{
		building: 'Rubber Maker',
		input: { Naphtha: 8, Sulfur: 3 },
		output: { Rubber: 24 },
		consumer: ['Naphtha'],
		active: true
	},
	{
		building: 'Rubber Maker',
		input: { Diesel: 8, Sulfur: 3 },
		output: { Rubber: 24 },
		producer: ['Rubber'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Vehicle Parts II': 32, 'Electronics II': 8 },
		output: { 'Vehicle Parts III': 16 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Vehicle Parts III': 97 },
		output: { Coal: 5250 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Quartz Crushed': 96 },
		output: { Sand: 96 },
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { Quartz: 288 },
		output: { 'Quartz Crushed': 288 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { Coal: 1875 },
		output: { Quartz: 3750 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Construction Parts IV': 61 },
		output: { Bauxite: 5250 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Household Appliances': 700 },
		output: { Bauxite: 5250 },
		active: false
	},
	{
		building: 'Cargo Depot',
		input: { Gold: 403 },
		output: { Bauxite: 5250 },
		active: false
	},
	{
		building: 'Cargo Depot',
		input: { 'Household Appliances': 750 },
		output: { 'Copper Ore': 4875 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Medical Supplies III': 750 },
		output: { 'Copper Ore': 4875 },
		active: false
	},
	{
		building: 'Cargo Depot',
		input: { 'Lab Equipment II': 1500 },
		output: { 'Copper Ore': 4875 },
		active: false
	},
	{
		building: 'Assembly V',
		input: {
			Steel: 4,
			'Electronics III': 8
		},
		output: { Server: 4 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { Server: 58 },
		output: { 'Gold Ore': 5250 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { Server: 57 },
		output: { 'Iron Ore': 5250 },
		active: true
	},
	{
		building: 'Cargo Depot',
		input: { 'Vehicle Parts II': 375 },
		output: { Limestone: 5250 },
		active: false
	},
	{
		building: 'Cargo Depot',
		input: { 'Construction Parts II': 525 },
		output: { Limestone: 5250 },
		active: true
	},
	{
		building: 'Distillation (Stage 1)',
		input: { 'Crude Oil': 60, 'Steam (high)': 6 },
		output: { 'Heavy Oil': 12, 'Medium Oil': 48, 'Sour Water': 18 },
		consumer: ['Crude Oil'],
		active: true
	},
	{
		building: 'Distillation (Stage 2)',
		input: { 'Medium Oil': 48, 'Steam (high)': 3 },
		output: { Diesel: 36, 'Light Oil': 30 },
		consumer: ['Medium Oil'],
		active: true
	},
	{
		building: 'Distillation (Stage 3)',
		input: { 'Light Oil': 30, 'Steam (high)': 3 },
		output: {
			Naphtha: 24,
			'Fuel Gas': 12
		},
		consumer: ['Light Oil'],
		active: true
	},
	{
		building: 'Cracking Unit',
		input: { 'Heavy Oil': 24, Hydrogen: 9 },
		output: { Diesel: 36, 'Fuel Gas': 6 },
		consumer: ['Heavy Oil'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Composite Core Basic': 16, 'Solar Cell': 8, 'Chemical Fuel': 4 },
		output: { 'Station Parts Basic': 8 },
		active: true
	},
	{
		building: 'Rocket Launch Pad',
		input: { Hydrogen: 140, Oxygen: 40, Water: 160, 'Station Parts Basic': 40, 'Rocket I': 1 },
		output: {
			'Station Parts Basic (Launched)': 40
		},
		active: true
	},
	{
		building: 'Rocket Launch Pad',
		input: { Hydrogen: 140, Oxygen: 40, Water: 160, 'Station Parts': 40, 'Rocket I': 1 },
		output: {
			'Station Parts (Launched)': 40
		},
		active: true
	},
	{
		building: 'Rocket Assembly Depot',
		input: { 'Composite Panel': 300, Steel: 80, 'Electronics II': 24 },
		output: { 'Rocket I': 1 },
		active: true
	},
	{
		building: 'Research Lab IV',
		input: { 'Lab Equipment IV': 96 },
		output: { Research: 96 },
		consumer: ['Lab Equipment IV'],
		active: true
	},
	{
		building: 'Assembly V',
		input: { Aluminum: 32, Steel: 4, Plastic: 8 },
		output: { 'Composite Panel': 32 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Composite Panel': 32, Steel: 16, 'Electronics II': 4 },
		output: { 'Composite Core Basic': 16 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { Steel: 1.5, Silicon: 18, Glass: 6 },
		output: { 'Solar Cell': 12 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Ammonia: 12, 'Fuel Gas': 12, Aluminum: 8 },
		output: { 'Chemical Fuel': 8 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Composite Core': 8, 'Solar Cell Mono': 4, 'Chemical Fuel': 4 },
		output: {
			'Station Parts': 4
		},
		active: true
	},
	{
		building: 'Assembly V',
		input: { Aluminum: 1, 'Silicon Wafer': 9, Glass: 4 },
		output: { 'Solar Cell Mono': 8 },
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Composite Panel': 16, 'Electronics III': 2, 'Titanium Alloy': 8 },
		output: { 'Composite Core': 8 },
		active: true
	},
	{
		building: 'Cooled Caster II',
		input: { 'Molten Titanium Alloy': 24, Water: 12 },
		output: { 'Titanium Alloy': 24 },
		active: true
	},
	{
		building: 'Alloy Mixer',
		input: { 'Molten Titanium': 96, 'Molten Alumnium': 12 },
		output: {
			'Molten Titanium Alloy': 108
		},
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Titanium Sponge': 48, Graphite: 3, Water: 6 },
		output: { 'Molten Titanium': 48, Exhaust: 6, 'Steam (Low)': 6 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { 'Titanium Chloride (Pure)': 24, Salt: 12 },
		output: { 'Titanium Sponge': 24, Chlorine: 12 },
		kwRatio: 2,
		active: true
	},
	{
		building: 'Distillation (Stage 3)',
		input: { 'Titanium Chloride': 12, 'Steam (high)': 3 },
		output: { 'Titanium Chloride (Pure)': 12, 'Steam (Depleted)': 3 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { 'Titanium Slag': 36, Chlorine: 18, Graphite: 3 },
		output: {
			'Titanium Chloride': 12,
			Slag: 12,
			CO2: 12
		},
		kwRatio: 2,
		active: true
	},
	{
		building: 'Arc Furnace II',
		input: { 'Titanium Ore Crushed': 48, Graphite: 3, Water: 6 },
		output: { 'Molten Iron': 12, 'Titanium Slag': 36, Exhaust: 36, 'Steam (Low)': 6 },
		producer: ['Titanium Slag'],
		active: true
	},
	{
		building: 'Crusher (Large)',
		input: { 'Titanium Ore': 96 },
		output: { 'Titanium Ore Crushed': 96 },
		active: true
	},
	{
		building: 'Assembly IV',
		input: { 'Food Pack': 4, 'Medical Supplies II': 2, Plastic: 2 },
		output: { 'Crew Supplies': 8 },
		active: false
	},
	{
		building: 'Assembly V',
		input: { 'Food Pack': 8, 'Medical Supplies II': 4, Plastic: 4 },
		output: { 'Crew Supplies': 16 },
		active: true
	},
	{
		building: 'Rocket Launch Pad',
		input: { Hydrogen: 140, Oxygen: 40, Water: 160, 'Crew Supplies': 40, 'Rocket I': 1 },
		output: {
			'Crew Supplies (Launched)': 40
		},
		active: true
	},
	{
		building: 'Rocket Launch Pad',
		input: { Hydrogen: 140, Oxygen: 40, Water: 160, 'Rocket I': 1 },
		output: {
			Astronaut: 4
		},
		active: true
	},
	{
		building: 'Assembly V',
		input: { 'Electronics III': 6, Lens: 4, Diamond: 2 },
		output: {
			'Electronics IV': 6
		},
		active: true
	},
	{
		building: 'Rocket Launch Pad',
		input: { Hydrogen: 140, Oxygen: 40, Water: 160, 'Electronics IV': 40, 'Rocket I': 1 },
		output: {
			'Electronics IV (Launched)': 40
		},
		active: true
	},
	{
		building: 'Space Station III',
		input: { 'Electronics IV': 2 },
		output: { 'Space Research': 48 },
		active: true
	},
	{
		building: 'Diamond Reactor',
		input: { Graphite: 2, Salt: 2 },
		output: { Diamond: 2 },
		active: true
	},
	{
		building: 'Lens Polisher',
		input: { 'Saphire Wafer': 2, 'Diamond Paste': 2, Ethanol: 2 },
		output: { Lens: 2 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Diamond: 4, 'Cooking Oil': 4 },
		output: { 'Diamond Paste': 16 },
		active: true
	},
	{
		building: 'Crystalizer',
		input: { Alumina: 8 },
		output: { 'Saphire Wafer': 8 },
		active: true
	},
	{
		building: 'Chemical Plant II',
		input: { Hydrogen: 12, Nitrogen: 24 },
		output: { Ammonia: 12 },
		kwRatio: 2,
		producer: ['Ammonia'],
		active: true
	}
];
export const recipes = $state(initRecipes);
