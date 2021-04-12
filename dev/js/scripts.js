import { gsap } from "gsap";

let SquareTL = gsap.timeline();

SquareTL
    .from("#square", {duration: .25, y: -600, delay: 2});