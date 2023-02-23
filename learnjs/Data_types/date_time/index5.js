const getSecondsToday = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let difference = now - today;
  return Math.round(difference / 1000);
};

console.log(getSecondsToday());
