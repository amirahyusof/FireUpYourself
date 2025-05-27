// utils/getGreeting.js
export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning 🌅";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon ☀️";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening 🌇";
  } else {
    return "Good Night 🌙";
  }
}
