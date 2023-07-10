import { create } from "zustand"

interface IUseLayers {
  layerSequence: string[]
  moveLayerSequence: () => void
}

export const useLayers = create<IUseLayers>((set, get) => ({
  layerSequence: ["_first", "_second", "_third"],
  moveLayerSequence: () => {
    const [firstItem, ...layerSequence] = get().layerSequence
    set({ layerSequence: [...layerSequence, firstItem] })
  },
}))
