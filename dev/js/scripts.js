import { gsap } from "gsap";

let SquareTL = gsap.timeline();

SquareTL

    // Falling from sky
    .from("#square", {duration: .3, y: -600, delay: 1})
    .to("#square", {duration: .05, scaleY: .75, scaleX: 1.2})
    .to("#square", {duration: .05, scaleY: .5, scalex: 1})
    .to("#square", {duration: .1, y: -50, scaleY: .25})
    .to("#square", {duration: .05, scaleY: .5})
    .to("#square", {duration: .05, scaleY: .75})
    .to("#square", {y:0,duration: .1, scaleY:1, scaleX:1})
    
    //Enters circle
    .from("#circle", {duration: .3, y: -600, delay: 2, alpha: 1})
    .to("#circle", {duration: .05, scaleY: .75, scaleX: 1.2})
    .to("#circle", {duration: .05, scaleY: .5, scalex: 1})
    .to("#circle", {duration: .1, y: -50, scaleY: .25})
    .to("#circle", {duration: .05, scaleY: .5})
    .to("#circle", {duration: .05, scaleY: .75})
    .to("#circle", {y:20, duration: .1, scaleY:1, scaleX:1})

    // Square scared
    .to("#square", { delay: -.3, x:"+5", y:"-100", duration:.2, scaleX:1.6, scaleY:1.6})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", y:"0", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1, scaleX:1, scaleY:1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
  
    //Square approaches
    .to("#square", {x:"250", duration:1.5, delay:1})
    .to("#square", {x:"400", duration:2})

    // Square jumps
    .to("#square", {y:"-100", x:"-50", duration:.2, scaleX:1.7, scaleY:1.6})
    .to("#square", {y:"-110", x:"-30", duration:.1})
    .to("#square", {y:"0", x:"0", duration:.2, scaleX:1, scaleY:1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    .to("#square", {x:"-5", duration:.1})
    .to("#square", {x:"+5", duration:.1})
    
    // Takes breath
    .to("#square", {delay:1, duration:.8, scaleX:.8, scaleY:.5})
    .to("#square", {duration:1, scaleX:1.2, scaleY:1.5})
    .to("#square", {duration:1, scaleX:1, scaleY:.75})
    .to("#square", {duration:1, scaleY:1.3})
    .to("#square", {duration:1,  scaleY:1})

    //Square jump
    .to("#square", {delay:1, duration:1, scaleX:.9, scaleY:.7, x:-50})
    .to("#square", {duration:.1, scaleX:1.8, scaleY:1, x:20})
    .to("#square", {duration:.2, y:-150, x:300})
    .to("#square", {duration:.2, scaleX:1.5, y:-120, x:500})
    .to("#square", {duration:.2, scaleX:1, scaleY: .6, y:0, x:600})
    .to("#square", {duration:.1, scaleY: .2})
    .to("#square", {duration:.1, scaleY: .5})
    .to("#square", {duration:.1, scaleY: 1})
    ;