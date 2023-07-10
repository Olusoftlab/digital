const hourEl=document.getElementById('hour')
const minuteEl=document.getElementById('minutes')
const secondsEl=document.getElementById('seconds')
const ampm=document.getElementById('am-pm')

function updateClock(){

   let h=new Date().getHours()
   let m= new Date().getMinutes()
   let s= new Date().getSeconds()

   let amPm='AM'


   if (h > 12){
        h=h-12
        amPm="PM" 
        if (h < 10){
            hourEl.innerText="0" + h
        }
        else if(h >=10){
            hourEl.innerText=h
        }
   }

   else if(h < 10){
    hourEl.innerText="0" + h
   }


  if (m < 10){
    minuteEl.innerText="0" + m
  }else if (m >= 10){
    minuteEl.innerText=m
  }


//    minuteEl.innerText=m

   if (s < 10){
    //   const d=parseInt('0'+s)
       secondsEl.innerText ='0'+s
   }else{
       secondsEl.innerText = s
   }
   
   ampm.innerText=amPm
   setTimeout(()=> updateClock(),1000)


}

updateClock()

const d=parseInt('4d')
console.log(typeof(d))