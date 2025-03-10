import { create } from "zustand";
import { persist } from "zustand/middleware";

type CalculatorState = {
    value: number;
    add: () => void;
    subtract: () => void;
};

const useCalculatorStore = create<CalculatorState>()(
    persist(
        (set) => ({
            value: 0,
            add: () => set((state) => ({ value: state.value + 1 })),
            subtract: () => set((state) => ({ value: state.value - 1 })),
        }),
        {
            name: "calculator-storage",
        }
    )
);

export default useCalculatorStore;
