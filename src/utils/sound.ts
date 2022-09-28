export const playPing = () => {
  const ping = new Audio("/sounds/ping.mp3");

  ping.volume = 0.1;

  ping.play();
};
