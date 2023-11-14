let slide_data = [
    {
      'src':'/img/DSC05380-5.jpg',
      'title':'Elevate with JP Productions',
      'copy':'Bringing Your Vision to Life Through Exceptional Video and Photography'
    },
    {
      'src':'/img/DSC00247_002.JPG', 
      'title':'Capturing Moments, Creating Memories',
      'copy':'At JB Productions, we excel in capturing the essence of every moment, from events and portraits to product photography.'
    },
    {
      'src':'/img/DSC05674-2.jpg', 
      'title':'Crafting Cinematic Experiences',
      'copy':'We turn ideas into immersive visual stories.'
    },
    {
      'src':'/img/DSC05193-2.jpg', 
      'title':'Tailored to Your Unique Vision',
      'copy':'No project is too big or too small for JB Productions. We pride ourselves on providing personalized solutions that align with your vision and goals. Your story is unique, and we are here to tell it.'
    },
   
    
  ];
  let slides = [],
    captions = [];
  
  let autoplay = setInterval(function(){
    nextSlide();
  },5000);
  let container = document.getElementById('slider-container');
  let leftSlider = document.getElementById('left-col');
  let down_button = document.getElementById('down_button');
  
  
  down_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });
  
  for (let i = 0; i< slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');
      
    slide.classList.add('slide');
    slide.setAttribute('style','background:url('+slide_data[i].src+')');
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';
    
    switch(i){
      case 0:
          slide.classList.add('current');
          caption.classList.add('current-caption');
          break;
      case 1:
          slide.classList.add('next');
          caption.classList.add('next-caption');
          break;
      case slide_data.length -1:
        slide.classList.add('previous');
        caption.classList.add('previous-caption');
        break;
      default:
         break;       
    }
    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>'+slide_data[i].copy+'</span></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
  }
  // console.log(slides);
  
  function nextSlide(){
    // caption.classList.add('offscreen');
    
    slides[0].classList.remove('current');
    slides[0].classList.add('previous','change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');
    
    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption','change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length -1;
    
    // console.log(last);
    captions[last].classList.remove('previous-caption');
    
    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder); 
    captions.push(captions_placeholder);
  }
  
  let heading = document.querySelector('.caption-heading');
  
  
  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
  
  var transitionEvent = whichTransitionEvent()
  caption.addEventListener(transitionEvent, customFunction);
  
  function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');
  
    // Do something when the transition ends
  }
  
  