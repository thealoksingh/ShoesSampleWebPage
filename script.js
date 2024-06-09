// gsap.from("#left" , {
//     width:0,
//     duration :2,
//     ease:Expo.easeInOut
   
   
//    })
gsap.set(".a" ,{opacity:0 , y:10}) //setting initial value of opacity and position
gsap.set("#right>img" ,{opacity:0 , y:10 ,scale:0.3,rotate:240})

var tl=gsap.timeline();
 
tl.from("#left" , {
    width:0,
    duration :1.5,
    ease:Expo.easeInOut
   
   
   })
   .from("#right" , {
    width:0,
    duration :1,
    ease:Expo.easeInOut
   
   
   })
   .to(".a" , {
    delay:-1.8, // starts early 2 seconds 
    stagger:0.1,// same type of element will appear one by one
    opacity:1,//final opacity
    y:0,//final position
    duration :2.5,
    ease:Expo.easeInOut
   
   
   })
   .to("#right>img" , {
    delay:-1.5, // starts early 2 seconds 
    opacity:1,//final opacity
    y:0,//final position
    rotate:-30,
    scale:1,
    duration :2,
    ease:Expo.easeInOut
   
   
   })