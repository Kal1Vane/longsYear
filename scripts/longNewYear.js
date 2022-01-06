const spanSecond = document.querySelector('.time-second');
    const spanMinute = document.querySelector(".time-minutes")
    const spanHourse = document.querySelector(".time-hourse")
    const spanDays = document.querySelector(".time-days")
    const spanMounth = document.querySelector(".time-mounth")

    function longNewYear() {
    let nowDate = new Date();
    
    let newYearDate = new Date(nowDate.getFullYear(),11,31);
    let timeNanoSecond = newYearDate - nowDate;
    let timeSecond = Math.floor(timeNanoSecond / 1000);
    let timeMinutes =  Math.floor(timeSecond / 60);
    let timeHourse = Math.floor(timeMinutes / 60);
    let timeDays = Math.floor(timeHourse / 24);
    let timeMounth = Math.floor(timeDays / 30);
    
    let hours = 24 - nowDate.getHours();
    let minutes = 60 - nowDate.getMinutes();
    let seconds = 60 - nowDate.getSeconds();

    spanSecond.innerHTML = `${seconds}`;

      if ( spanMinute.innerHTML != minutes ) {
        spanMinute.innerHTML = `${minutes}`;
      } 
      if ( spanHourse.innerHTML != hours ) {
        spanHourse.innerHTML = `${hours}`;
      } 
      if ( spanDays.innerHTML != timeDays ) {
        spanDays.innerHTML = `${timeDays}`;
      } 
      if ( spanMounth.innerHTML != timeMounth ) {
        spanMounth.innerHTML = `${timeMounth}`;
      } 
    }
    longNewYear();
    setInterval(longNewYear,1000);