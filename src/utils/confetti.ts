import confetti from 'canvas-confetti';

export const triggerConfetti = (originY = 0.6) => {
  try {
    // Left burst
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: originY },
      colors: ['#3b82f6', '#06b6d4', '#10b981', '#a855f7', '#f43f5e', '#fbbf24']
    });

    // Right burst
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: originY },
      colors: ['#3b82f6', '#06b6d4', '#10b981', '#a855f7', '#f43f5e', '#fbbf24']
    });

    // Center star burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: originY - 0.1 },
        colors: ['#38bdf8', '#c084fc', '#34d399', '#f472b6', '#fb923c']
      });
    }, 150);
  } catch (e) {
    // Fail silently if canvas not supported
  }
};

export const triggerSubtleConfetti = () => {
  try {
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#60a5fa', '#a78bfa', '#34d399']
    });
  } catch (e) {
    // Fail silently
  }
};
