(function() {
  'use strict';

  // YOUR CODE HERE:
  //declaring buttons
  const stopBtn = document.getElementById(`stopButton`);
  const slowBtn = document.getElementById(`slowButton`);
  const goBtn = document.getElementById(`goButton`);
  //declaring lights
  const stopLight = document.getElementById(`stopLight`);
  const slowLight = document.getElementById(`slowLight`);
  const goLight = document.getElementById(`goLight`);

  stopBtn.addEventListener(`click`, function() {
    stopLight.classList.toggle(`stop`)
  });
  slowBtn.addEventListener(`click`, function() {
    slowLight.classList.toggle(`slow`)
  });
  goBtn.addEventListener(`click`, function() {
    goLight.classList.toggle(`go`)
  });
 
const button = document.getElementsByClassName(`button`);
for(let i=0;i<button.length;i++){
  button[i].addEventListener(`mouseenter`, function(){
    console.log(`Entered ${event.target.textContent} button`)
  }) 
  button[i].addEventListener(`mouseleave`, function(){
    console.log(`Left ${event.target.textContent} button`)
  });
//DEBUG BELOW ME 
  document.getElementById(`controls`).addEventListener(`click`, function(event) {
    if (event.target && event.target.classList.contains('stop')) {
      console.log('working');
    }
  });
}
})();
/*
  //ALTERNATE (WORSE) SOLUTION
  //Light Event Listeners
  // stopBtn.addEventListener(`click`, function(){
  //   toggleLight(stopLight);
  // });
  // slowBtn.addEventListener(`click`, function(){
  //   toggleLight(slowLight);
  // });
  // goBtn.addEventListener(`click`, function(){
  //   toggleLight(goLight);
  // });
 
  // function toggleLight(light) {
  //   if (light === stopLight) {
  //     if (light.style.backgroundColor === 'red') {
  //       light.style.backgroundColor = 'black';
  //     } else {
  //       light.style.backgroundColor = 'red';
  //     }
  //   } else if (light === slowLight) {
  //     if (light.style.backgroundColor === 'orange') {
  //       light.style.backgroundColor = 'black';
  //     } else {
  //       light.style.backgroundColor = 'orange';
  //     }
  //   } else if (light === goLight) {
  //     if (light.style.backgroundColor === 'green') {
  //       light.style.backgroundColor = 'black';
  //     } else {
  //       light.style.backgroundColor = 'green';
  //     }
  //   }
  // }
// })();
*/