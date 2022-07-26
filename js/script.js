
// scrollTrigger za komplet timeline container 

const timelineT = document.querySelector('.timeline');

let timelineTL = gsap.timeline();

for (let i = 0; i < timelineT.children.length; i++) {
    let fromX = 1000;
    if (i % 2 === 0) {
        fromX *= -1;
        console.log("grom x je: " + fromX);
    }
    timelineTL.from(timelineT.children.item(i), {
        x: fromX + "px",
        duration: 1,
    });
}

ScrollTrigger.create({
    trigger: ".timeline-container",
    markers: true,
    start: "100px center",
    end: "bottom center",
    animation: timelineTL,
    scrub: 1,
    // pin: true,
});

