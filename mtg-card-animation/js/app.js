const $cards = document.querySelectorAll(".card");
const $styles = document.getElementById("styles");

[...$cards].forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        // normalise touch/mouse
        var pos = [e.offsetX,e.offsetY];
        e.preventDefault();
            if ( e.type === "touchmove" ) {
            pos = [ e.touches[0].clientX, e.touches[0].clientY ];
        }
  
        // math for mouse position
        var l = pos[0];
        var t = pos[1];
        var h = el.offsetHeight;
        var w = el.offsetWidth;
        var px = Math.abs(Math.floor(100 / w * l)-100);
        var py = Math.abs(Math.floor(100 / h * t)-100);
        var pa = (50-px)+(50-py)
        // math for gradient / background positions
        var lp = (50+(px - 50)/1.5);
        var tp = (50+(py - 50)/1.5);


        var ty = ((tp - 50)/2) * -1;
        var tx = ((lp - 50)/1.5) * .5;
        const sub =  (40 + Math.abs((ty - 16) * 3));
        const angle = tx < 0 ? -sub : sub;
        // css to apply for active card
        var grad_pos = `background: linear-gradient(${angle}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.2) 42%, rgba(255,255,255,0) 60%)`

        //console.log(angle);
        // css to apply for active card
        el.style.transform= `rotateX(${ty}deg) rotateY(${tx}deg)`;
        //console.log(ty, tx);

        var style = `
            .foil2:hover::before { ${grad_pos} } `;
        $styles.innerHTML = style;
    })
    el.addEventListener("mouseout", function() {
        el.style.transform= `rotateX(0deg) rotateY(0deg)`;
    });
});