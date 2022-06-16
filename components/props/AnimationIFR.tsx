export const AnimationVariants = {
  show: { transition: { staggerChildren: 0.2 } },
};

export const Animationitem = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: [0.1, 0.1, 0.1, 1],
      duration: 1,
    },
  },
};
