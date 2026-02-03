import type { ItemCategoryId } from "./items";

type ItemTypeEntry = { id: string; itemCategory: ItemCategoryId };

const WEAPONS = [
	{ id: "sword", itemCategory: "weapon" },
	{ id: "axe", itemCategory: "weapon" },
	{ id: "bow", itemCategory: "weapon" },
] as const satisfies readonly ItemTypeEntry[];

const OFFHANDS = [
	{ id: "shield", itemCategory: "offhand" },
] as const satisfies readonly ItemTypeEntry[];

const ARMORS = [
	{ id: "helmet", itemCategory: "armor" },
	{ id: "chestplate", itemCategory: "armor" },
	{ id: "boots", itemCategory: "armor" },
	{ id: "gloves", itemCategory: "armor" },
] as const satisfies readonly ItemTypeEntry[];

const JEWELRY = [
	{ id: "ring", itemCategory: "jewelry" },
	{ id: "necklace", itemCategory: "jewelry" },
] as const satisfies readonly ItemTypeEntry[];

const CONSUMABLES = [
	{ id: "potion", itemCategory: "consumable" },
	{ id: "food", itemCategory: "consumable" },
] as const satisfies readonly ItemTypeEntry[];

const MAGIC = [
	{ id: "wand", itemCategory: "magic" },
	{ id: "staff", itemCategory: "magic" },
] as const satisfies readonly ItemTypeEntry[];

export const ITEM_TYPES = [
	...WEAPONS,
	...OFFHANDS,
	...ARMORS,
	...JEWELRY,
	...CONSUMABLES,
	...MAGIC,
] as const;

export type ItemType = (typeof ITEM_TYPES)