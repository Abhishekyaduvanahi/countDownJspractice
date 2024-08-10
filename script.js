// const date = new date();


const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mins=document.getElementById('mins');
const secs=document.getElementById('secs');

const formatTime =(time)=>{
  return time<10? `0${time}`:time;
}
const updateCountDown=(deadline)=>{
  const currentTime=new Date();
  const timeDifference = deadline-currentTime; // milliseconds

  // calculate days ,hours ,mins ,secs from time difference

  let calcSecs =Math.floor(timeDifference/1000)%60;
  let calcMins=Math.floor(timeDifference/1000/60)%60;
  let calcHours=Math.floor(timeDifference/1000/60/60)%24 ;
  let caclDays=Math.floor(timeDifference/1000/60/60/24);

  secs.textContent=formatTime(calcSecs);
  mins.textContent=formatTime(calcMins);
  hours.textContent=formatTime(calcHours);
  days.textContent=formatTime(caclDays);

  

}

const countDown=(targetDate)=>{
  setInterval(()=>updateCountDown(targetDate),1000);
}
const targetDate= new Date("January 16 2025 07:00");
countDown(targetDate);