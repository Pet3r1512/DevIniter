import { create } from "zustand";

type InViewStoreProps = {
  isHeroInView: boolean;
  setHeroInView: (isInView: boolean) => void;
};

export const useInViewStore = create<InViewStoreProps>((set) => ({
  isHeroInView: false,
  setHeroInView: (isInView) => set({ isHeroInView: isInView }),
}));
