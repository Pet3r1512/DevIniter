import { create } from "zustand";

type InViewStoreProps = {
  isHeroInView: boolean;
  setHeroInView: (isInView: boolean) => void;
  isAnimationInView: boolean;
  setAnimationInView: (isInView: boolean) => void;
};

export const useInViewStore = create<InViewStoreProps>((set) => ({
  isHeroInView: false,
  setHeroInView: (isInView) => set({ isHeroInView: isInView }),
  isAnimationInView: false,
  setAnimationInView: (isInView) => set({ isAnimationInView: isInView }),
}));
