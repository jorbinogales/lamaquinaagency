$('#button').click(function () {
    let circle1 = document.getElementById('circle1');
    let circle2 = document.getElementById('circle2');
    let circle3 = document.getElementById('circle3');
    let circle4 = document.getElementById('circle4');
    

    let cuerda = document.getElementById('cuerda');
    let middle = document.getElementById('line-middle'); 
    let top = document.getElementById('line-top');
    let central = document.getElementById('line-central');
    let faroDown = document.getElementById('line-faro-down');
    let tilde = document.getElementById('tilde-relleno');
    let faro = document.getElementById('faro');
    let curvaYellow = document.getElementById('curva-yellow');
    let curvaBlue = document.getElementById('curva-rellena-blue');
    let semicurva = document.getElementById('semicurva-blue');
    let background2 = document.getElementById('background2');
    let button = document.getElementById('button');

    circle1.classList = 'circle-faro circle-active';
    circle2.classList = 'circle-top circle-active';
    circle3.classList = 'circle-middle-right circle-active';
    circle4.classList = 'circle-middle-left circle-active';
    cuerda.classList = 'cuerda active';
    middle.classList = 'line-middle active';
    top.classList = 'line-top active';
    central.classList = 'linea-central active';
    faroDown.classList = 'line-faro-down active';
    tilde.classList = 'tilde-relleno active'
    curvaYellow.classList = 'curva-yellow active';
    curvaBlue.classList = 'curva-rellena-blue active';
    semicurva.classList = 'semicurva-blue active';
    background2.classList = 'background2 active';
    button.classList = 'button-change active';

    // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
    setTimeout(function () {
        faro.style.transition = '1s ease-in-out';
        faro.style.opacity = 0;
        faroDown.style.transition = '1s ease-in-out';
        faroDown.style.opacity = 0;
    }, 5000);

    // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
    setTimeout(function () {
        circle1.style.transition = '1s ease-in-out';
        circle1.style.opacity = 0;
    }, 4000);
    // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
    setTimeout(function () {
        circle2.style.transition = '1s ease-in-out';
        circle2.style.opacity = 0;
    }, 3000);
    // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
    setTimeout(function () {
        circle3.style.transition = '1s ease-in-out';
        circle3.style.opacity = 0;
    }, 2000);
    // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
    setTimeout(function () {
        circle4.style.transition = '1s ease-in-out';
        circle4.style.opacity = 0;
        cuerda.style.transition = '1s ease-in-out';
        cuerda.style.opacity = 0;
    }, 1000);

})