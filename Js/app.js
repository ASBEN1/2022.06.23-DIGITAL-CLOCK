$(function () {

  setInterval(function () {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let apm = d.getHours();
    let y = d.getFullYear();
    let mon = d.getMonth() +1;
    let date = d.getDate();

    const w = ['SUN','MON','TUE','WEN','THU','FRI','SAT'];
    let day = w[d.getDay()];

    if (apm < 12) {
      apm = 'AM'
    };

    if (apm >= 12) {
      apm = 'PM'
    };

    if (h >= 13) {
      h = h - 12;
    };

    if (h < 10) {
      h = '0' + h;
    }

    if (m < 10) {
      m = '0' + m;
    }

    if (s < 10) {
      s = '0' + s;
    }

    if (mon < 10) {
      mon = '0' + mon;
    }

    if (date < 10) {
      date = '0' + date;
    }

    $('#ampm').html(`${apm}`);
    $('#hours').html(`${h}<br><span>Hours</span>`);
    $('#min').html(`${m}<br><span>Minutes</span>`);
    $('#sec').html(`${s}<br><span>Seconds</span>`);
    $('.datedays').html(`${y} . ${mon} . ${date} . ${day}`);
    console.log(y,mon,date,day);

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    hh.style.strokeDashoffset = 530 - (530 * h) / 12;
    mm.style.strokeDashoffset = 530 - (530 * m) / 60;
    ss.style.strokeDashoffset = 530 - (530 * s) / 60;

  }, 1000);

});
