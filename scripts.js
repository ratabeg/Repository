$("#heart-trigger").click(function () {
    $("li").toggleClass("visible");
    // $("li").classList.add("visible");
 });


window.addEventListener('load',()=> 
{

    const loader =  document.querySelector('.preloader');
    console.log("hello its working");
    
    function hideLoad(){
    }

    setTimeout(() =>{
        loader.classList.add('loader--hidden')
    }, 1000);

   
    // document.querySelector('preloader').classList.add('loader--hidden');
});




