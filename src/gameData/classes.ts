export interface BaseAttributes {
  strength: number
  intelligence: number
  dexterity: number
}

export interface GameClass {
  id: string
  name: string
  baseAttributes: BaseAttributes
}

export const WARRIOR: GameClass = {
  id: 'warrior',
  name: 'Warrior',
  baseAttributes: {
    strength: 20,
    intelligence: 10,
    dexterity: 10,
  },
}

export const GAME_CLASSES = {
  warrior: WARRIOR,
} as const

export type GameClassId = keyof typeof GAME_CLASSES
