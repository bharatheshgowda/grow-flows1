// $('.contents-two a').fancybox({
//     caption : function( instance, item ) {
//     }
//   });

  


  let valueDisplays1=document.querySelectorAll(".num")

  let interval=2000;
  valueDisplays1.forEach((valueDisplay1)=>{
let startValue=0;
let endValue=parseInt(valueDisplay1.getAttribute("data-val"));
let duration=Math.floor(interval/endValue);
let counter=setInterval(function(){
  
  startValue=startValue+1;
  valueDisplay1.innerText=startValue ;
  if(startValue===endValue){
    clearInterval(counter)
  }
},duration)
  })

  
