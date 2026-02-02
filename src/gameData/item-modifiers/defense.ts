import { createStandardTiers, Modifier } from './types';

export const DEFENSE_MODIFIERS: { [key: string]: Modifier } = {
  globalArmorIncrease: {
    id: 'globalArmorIncrease',
    name: 'Armor',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['armor'],
    suffix: 'of Protection',
    displayFormat: '+{value}% Armor',
    isGlobalStat: true,
    tiers: createStandardTiers(10, 15, 64, 70)
  },

  globalEvasionIncrease: {
    id: 'globalEvasionIncrease',
    name: 'Evasion',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['armor'],
    suffix: 'of Evasion',
    displayFormat: '+{value}% Evasion',
    isGlobalStat: true,
    tiers: createStandardTiers(10, 15, 64, 70)
  },

  globalBarrierIncrease: {
    id: 'globalBarrierIncrease',
    name: 'Barrier',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['armor', 'jewelry'],
    suffix: 'of Warding',
    displayFormat: '+{value}% Barrier',
    isGlobalStat: true,
    tiers: createStandardTiers(10, 15, 64, 70)
  },

  healthFlat: {
    id: 'healthFlat',
    name: 'Maximum Life',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['armor', 'jewelry'],
    suffix: 'of Vitality',
    displayFormat: '+{value} Maximum Life',
    isGlobalStat: true,
    tiers: createStandardTiers(10, 20, 101, 110)
  },

  manaFlat: {
    id: 'manaFlat',
    name: 'Maximum Mana',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['armor', 'jewelry', 'magic'],
    suffix: 'of Insight',
    displayFormat: '+{value} Maximum Mana',
    isGlobalStat: true,
    tiers: createStandardTiers(10, 20, 101, 110)
  }
};

