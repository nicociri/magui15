window.addEventListener('deviceorientation',function(e){
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);

    //restringimos el movimiento un poco
    if (x > 50) {
        x = 50;
      }
      if (x < -50) {
        x = -50;
      }

         //restringimos el movimiento un poco
    if (y > 50) {
        y = 50;
      }
      if (y < -50) {
        y = -50;
      }

    document.getElementsByClassName('xtxt')[0].innerText = "X-Axis = " + x;
    document.getElementsByClassName('ytxt')[0].innerText = "Y-Axis = " + y;
    document.getElementsByClassName('ztxt')[0].innerText = "Z-Axis = " + z;

    //Parallax Effect
    document.getElementsByClassName('borde')[0].style.transform = `translate(-${y*0.25}%,-${x*0.25}%)`;
    document.getElementsByClassName('magui')[0].style.transform = `translate(-${y*0.45}%,-${x*0.45}%)`;
    document.getElementsByClassName('fecha')[0].style.transform = `translate(-${y*0.65}%,-${x*0.65}%)`;
    
});
