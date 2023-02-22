function startTime() {
  var today = new Date();
  var years = today.getFullYear();
  var months = today.getMonth();
  var d = today.getDate();
  // add a zero in front of numbers<10
  months = months + 1;
  months = checkTime(months);
  var weekday = new Array(7);
  weekday[0] = "星期日";
  weekday[1] = "星期一";
  weekday[2] = "星期二";
  weekday[3] = "星期三";
  weekday[4] = "星期四";
  weekday[5] = "星期五";
  weekday[6] = "星期六";
  var w = weekday[today.getDay()];
  document.querySelector(".date").innerHTML =
    years + "年" + months + "月" + d + "日";
    document.querySelector(".week").innerHTML =
    w;
  t = setTimeout("startTime()", 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime()