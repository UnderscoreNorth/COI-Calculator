import type { Building } from './types';

export const buildings = [
	{
		name: 'Assembly V',
		pop: 0,
		kw: 400,
		tflop: 6,
		mType: 3,
		mUse: 2.6,
		icon: '108px-AssemblyRoboticT2.png'
	},
	{
		name: 'Rotary Kiln (Gas)',
		pop: 10,
		kw: 100,
		mType: 1,
		mUse: 2,
		icon: '108px-RotaryKilnGas.png',
		tflop: 0
	},
	{
		name: 'Concrete Mixer III',
		pop: 10,
		kw: 400,
		mType: 1,
		mUse: 3.9,
		icon: '108px-ConcreteMixerT3.png',
		tflop: 0
	},
	{
		name: 'Air Separator',
		pop: 6,
		kw: 400,
		mType: 1,
		mUse: 3.9,
		icon: '108px-AirSeparator.png',
		tflop: 0
	},
	{
		name: 'Microchip Machine II',
		pop: 6,
		kw: 500,
		tflop: 12,
		mType: 3,
		mUse: 5.3,
		icon: '108px-MicrochipMachineT2.png'
	},
	{
		name: 'Data Center',
		pop: 6,
		kw: 0,
		mType: 3,
		mUse: 3.8,
		icon: 'Data_Center.png',
		tflop: 0
	},
	{
		name: 'Maintenance Depot',
		pop: 12,
		kw: 200,
		mType: 1,
		mUse: 0,
		icon: '108px-MaintenanceDepotT1.png',
		tflop: 0
	},
	{
		name: 'Maintenance II Depot',
		pop: 16,
		kw: 400,
		mType: 1,
		mUse: 0,
		icon: '108px-MaintenanceDepotT2.png',
		tflop: 0
	},
	{
		name: 'Maintenance III Depot',
		pop: 20,
		kw: 600,
		mType: 1,
		mUse: 0,
		icon: '108px-MaintenanceDepotT3.png',
		tflop: 0
	},
	{
		name: 'Cooled Caster II',
		pop: 2,
		kw: 0,
		mType: 1,
		mUse: 0,
		icon: '108px-CasterCooledT2.png',
		tflop: 0
	},
	{
		name: 'Oxygen Furnace II',
		pop: 6,
		kw: 200,
		mType: 1,
		mUse: 3.9,
		icon: '108px-OxygenFurnaceT2.png',
		tflop: 0
	},
	{
		name: 'Arc Furnace II',
		icon: '108px-ArcFurnace2.png',
		pop: 14,
		kw: 6000,
		mType: 2,
		mUse: 5.3,
		tflop: 0
	},
	{
		name: 'Crystalizer',
		icon: '108px-SiliconCrystallizer.png',
		pop: 8,
		kw: 500,
		mType: 2,
		mUse: 3.9,
		tflop: 4
	},
	{
		name: 'Silicon Reactor',
		icon: '108px-SiliconReactor.png',
		pop: 2,
		kw: 80,
		mType: 1,
		mUse: 0.66,
		tflop: 0
	},
	{
		name: 'Chemical Plant II',
		icon: '108px-ChemicalPlant2.png',
		pop: 14,
		kw: 400,
		mType: 2,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Glass Maker II',
		icon: '108px-GlassMakerT2.png',
		pop: 8,
		kw: 500,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Mixer II',
		icon: '108px-IndustrialMixerT2.png',
		pop: 4,
		kw: 200,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Shredder',
		icon: '108px-Shredder.png',
		pop: 1,
		kw: 100,
		mType: 1,
		mUse: 0.66,
		tflop: 0
	},
	{
		name: 'Exhaust Scrubber',
		icon: '108px-ExhaustScrubber.png',
		pop: 8,
		kw: 200,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Copper Electrolysis',
		icon: '108px-CopperElectrolysis.png',
		pop: 5,
		kw: 400,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Metal Caster II',
		icon: '108px-CasterT2.png',
		pop: 2,
		kw: 0,
		mType: 1,
		mUse: 0,
		tflop: 0
	},
	{
		name: 'Thermal Desalinator',
		icon: '108px-ThermalDesalinator.png',
		pop: 4,
		kw: 400,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Water Chiller',
		icon: '108px-WaterChiller.png',
		pop: 3,
		kw: 1000,
		mUse: 1.3,
		mType: 1,
		tflop: 0
	},
	{
		name: 'Electrolyzer II',
		icon: '108px-ElectrolyzerT2.png',
		pop: 3,
		kw: 1100,
		mType: 2,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Sour Water Stripper',
		icon: '108px-SourWaterStripper.png',
		pop: 8,
		kw: 160,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Seawater Pump',
		icon: '108px-OceanWaterPumpT1.png',
		pop: 1,
		kw: 100,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Crusher (Large)',
		icon: '108px-CrusherLarge.png',
		pop: 6,
		kw: 1000,
		mType: 1,
		mUse: 5.3,
		tflop: 0
	},
	{
		name: 'Polymerization Plant',
		icon: '108px-PolymerizationPlant.png',
		pop: 12,
		kw: 400,
		mType: 1,
		mUse: 3.9,
		tflop: 0
	},
	{
		name: 'Greenhouse II',
		icon: '108px-FarmT4.png',
		pop: 20,
		kw: 0,
		mType: 1,
		mUse: 5.3,
		tflop: 0
	},
	{
		name: 'Mill',
		icon: '108px-FoodMill.png',
		pop: 5,
		kw: 120,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Baking Unit',
		icon: '108px-BakingUnit.png',
		pop: 8,
		kw: 200,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Food Processor',
		icon: '108px-FoodProcessor.png',
		pop: 8,
		kw: 100,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Chicken Farm',
		icon: '108px-ChickenFarm.png',
		pop: 12,
		kw: 0,
		mType: 1,
		mUse: 0,
		tflop: 0
	},
	{
		name: 'Anaerobic Digester',
		icon: '108px-AnaerobicDigester.png',
		pop: 4,
		kw: 50,
		mType: 1,
		mUse: 0.66,
		tflop: 0
	},
	{
		name: 'Evaporation Pond (Heated)',
		icon: '108px-EvaporationPondHeated.png',
		pop: 6,
		kw: 250,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Wastewater Treatment',
		icon: '108px-WaterTreatmentPlant.png',
		pop: 26,
		kw: 600,
		mType: 1,
		mUse: 6.6,
		tflop: 0
	},
	{
		name: 'Aluminum Cell',
		icon: '108px-AluminumCell.png',
		pop: 14,
		kw: 8000,
		mType: 2,
		mUse: 7.9,
		tflop: 0
	},
	{
		name: 'Settling Tank',
		icon: '108px-SettlingTank.png',
		pop: 6,
		kw: 120,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Gold Furnace',
		icon: '108px-GoldFurnace.png',
		pop: 6,
		kw: 800,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Turbines II',
		icon: '108px-TurbineHighPressT2.png',
		pop: 4,
		kw: 0,
		mType: 2,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Cooling Tower (Large)',
		icon: '108px-CoolingTowerT2.png',
		pop: 0,
		kw: 0,
		mType: 1,
		mUse: 1,
		tflop: 0
	},
	{
		name: 'Power Generator (Large)',
		icon: '108px-PowerGeneratorT2.png',
		pop: 0,
		kw: 0,
		mType: 1,
		mUse: 8,
		tflop: 0
	},
	{
		name: 'Groundwater Pump',
		icon: '108px-LandWaterPump.png',
		pop: 2,
		kw: 120,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Nuclear Reactor II',
		icon: '108px-NuclearReactorT2.png',
		pop: 110,
		kw: 0,
		mType: 2,
		mUse: 59,
		tflop: 0
	},
	{
		name: 'Assembly IV',
		icon: '108px-AssemblyRoboticT1.png',
		pop: 2,
		kw: 250,
		tflop: 3,
		mType: 2,
		mUse: 2.6
	},
	{
		name: 'Enrichment Plant',
		icon: '108px-UraniumEnrichmentPlant.png',
		pop: 14,
		kw: 4000,
		mType: 2,
		mUse: 5.3,
		tflop: 0
	},
	{
		name: 'Fermentation Tank',
		icon: '108px-FermentationTank.png',
		pop: 4,
		kw: 20,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Hydrogen Reformer',
		icon: '108px-HydrogenReformer.png',
		pop: 8,
		kw: 400,
		tflop: 0,
		mType: 1,
		mUse: 2.6
	},
	{
		name: 'Cargo Depot',
		icon: 'Cargo_Depot_(4).png',
		pop: 34,
		kw: 600,
		mType: 1,
		mUse: 5.2,
		tflop: 0
	},
	{
		name: 'Rubber Maker',
		icon: '108px-VacuumDistillationTower.png',
		pop: 6,
		kw: 300,
		mType: 1,
		mUse: 1.3,
		tflop: 0
	},
	{
		name: 'Distillation (Stage 1)',
		icon: '108px-DistillationTowerT1.png',
		pop: 6,
		kw: 0,
		mType: 1,
		mUse: 2,
		tflop: 0
	},
	{
		name: 'Distillation (Stage 2)',
		icon: '108px-DistillationTowerT2.png',
		pop: 8,
		kw: 0,
		mType: 1,
		mUse: 2.6,
		tflop: 0
	},
	{
		name: 'Distillation (Stage 3)',
		icon: '108px-DistillationTowerT3.png',
		pop: 8,
		kw: 0,
		mType: 1,
		mUse: 3.9,
		tflop: 0
	},
	{
		name: 'Cracking Unit',
		icon: '108px-HydroCrackerT1.png',
		pop: 12,
		kw: 160,
		mType: 1,
		mUse: 3.9,
		tflop: 0
	},
	{
		name: 'Rocket Assembly Depot',
		icon: 'Rocket_Assembly_Depot.png',
		pop: 160,
		kw: 2000,
		tflop: 8,
		mType: 1,
		mUse: 0
	},
	{
		name: 'Rocket Launch Pad',
		icon: 'Rocket_Launch_Pad.png',
		pop: 30,
		kw: 0,
		tflop: 0,
		mType: 1,
		mUse: 0
	},
	{
		name: 'Food Market II',
		icon: 'Food_Market_II.png',
		pop: 6,
		kw: 0,
		tflop: 0,
		mType: 1,
		mUse: 0
	},
	{
		name: 'Research Lab IV',
		icon: 'Research_Lab_V.png',
		pop: 80,
		kw: 1000,
		mType: 3,
		mUse: 7.9,
		tflop: 12
	},
	{
		name: `Captain's Office II`,
		icon: `Captain's_Office_II.png`,
		pop: 24,
		kw: 250,
		mType: 1,
		mUse: 0,
		tflop: 0
	},
	{
		name: 'Alloy Mixer',
		icon: '108px-AlloyMixer.png',
		pop: 12,
		kw: 1000,
		mType: 2,
		mUse: 5.3,
		tflop: 0
	},
	{
		name: 'Space Station III',
		icon: 'space station.png',
		pop: 0,
		kw: 0,
		mType: 1,
		mUse: 0,
		tflop: 0
	},
	{
		name: 'Diamond Reactor',
		icon: '108px-DiamondReactor.png',
		pop: 8,
		mType: 3,
		mUse: 5.3,
		kw: 2000,
		tflop: 2
	},
	{
		name: 'Lens Polisher',
		icon: '108px-LensMaker.png',
		pop: 6,
		tflop: 4,
		kw: 200,
		mType: 3,
		mUse: 1.3
	},
	{
		name: 'Waste Sorting Plant',
		icon: '108px-WasteSortingPlant.png',
		pop: 32,
		kw: 300,
		mType: 1,
		mUse: 13,
		tflop: 0
	},
	{
		name: 'Nuclear Reprocessing Plant',
		icon: '108px-NuclearReprocessingPlant.png',
		pop: 30,
		kw: 2000,
		tflop: 24,
		mType: 2,
		mUse: 13
	}
] as const satisfies Building[];
