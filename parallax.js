const parallax_el = document.querySelectorAll('.parallax');

let xValue = 0, yValue = 0;

window.addEventListener('mousemove',(e)=>{
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;
    var pageX = e.clientX - window.innerWidth/2, pageY = e.clientY - window.innerHeight/2;


    parallax_el.forEach( element =>{
        // el.style.transform = `translate(calc(-50%+${xValue}px),calc(-50%+${yValue}px)`;
        
        // element.style.transform =`translateX(calc(-50%+${xValue}px)) translateY(calc(-50%+${yValue}px))`;
  	    element.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
        
    });
});


// window.onload = function(){
// 	var wrapper = document.querySelector('#wrapper'),
// 			layerOne = document.querySelector('#layer-1'),
// 			layerTwo = document.querySelector('#layer-2'),
// 			layerThree = document.querySelector('#layer-3'),
// 			layerFour = document.querySelector('#layer-4');

// 	wrapper.addEventListener('mousemove',function(e){
// 		var pageX = e.clientX - window.innerWidth/2,
//                 pageY = e.clientY - window.innerHeight/2;
//   	layerOne.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
//   	layerTwo.style.transform = 'translateX(-' + (50 + pageX/1000) + '%) translateY(-' + (50 + pageY/1000) +  '%)';
//   	layerThree.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) +  '%)';
//   	layerFour.style.transform = 'translateX(-' + (50 + pageX/25) + '%) translateY(-' + (50 + pageY/25) + '%)';
// 	});
// }