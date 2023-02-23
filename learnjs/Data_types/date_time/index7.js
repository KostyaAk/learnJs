const formatDate = (date) => {
  let difference = new Date() - date;

  if (difference < 1000) {
    return 'прямо сейчас';
  }

  let seconds = Math.floor(difference / 1000);

  if (seconds < 60) {
    return seconds + ' сек. назад';
  }

  let minute = Math.floor(difference / 60000);
  if (minute < 60) {
    return minute + ' мин. назад';
  }

  let currentDate = date;
  currentDate = [
    '0' + currentDate.getDate(),
    '0' + (currentDate.getMonth() + 1),
    '' + currentDate.getFullYear(),
    '0' + currentDate.getHours(),
    '0' + currentDate.getMinutes(),
  ].map((component) => component.slice(-2));

  return (
    currentDate.slice(0, 3).join('.') + ' ' + currentDate.slice(3).join(':')
  );
};

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
