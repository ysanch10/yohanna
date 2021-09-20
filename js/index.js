const gsapEffects = [
  { 
    id: "fadeSlideTo",  
    props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }
  },
  { 
    id: "fadeSlideFrom", 
    animate: 'from',
    props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1  }
  },
  { 
    id: "fadeSlideFromTo", 
    props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }, 
    
  }
];

gsapEffects.forEach(effect => {
  gsap.registerEffect({
    name: effect.id,
    defaults: { duration: 5 },
    extendTimeline: true,
    effect(targets, config) {
      if(effect.animate === 'from'){
        return gsap.from(targets, {...effect.props,...config })
      } 
      else if (effect.animate === 'fromTo'){ 
        return gsap.fromTo(targets, {...effect.props,...config })
        }
      else {
        return gsap.to(targets, {...effect.props,...config })
      }
    }
  });
});



let tl = gsap.timeline();
tl.fadeSlideTo(".fadeSlideTo")
  .fadeSlideFrom(".fadeSlideFrom", 0)
  .fadeSlideFromTo(".fadeSlideFromTo", 0)