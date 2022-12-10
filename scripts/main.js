
let canvas = document.querySelector('.canvas');
let context = canvas.getContext('2d');
function dibujar(x, y) {
    document.querySelector('#tiempo').innerHTML = 'T: 0';
    document.querySelector('#posx').innerHTML = 'X: 20';
    document.querySelector('#posy').innerHTML = 'Y: 0';

    canvas.width = 1000;
    canvas.height = 500;

    context.beginPath();
    context.fillStyle = 'red';
    context.arc(x, y, 10, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();

    
}
dibujar(20, 480);
function particulas(arr) {

    let cont = 0;
    let r = 3;
    for (let i = arr.length - 2; i >= 0; i--) {
        context.beginPath();
        context.fillStyle = 'blue';
        context.arc(arr[i].x, arr[i].y, r, 0, Math.PI * 2, true);
        r -= 0.1;
        context.fill();
        if (cont > 15) break;
        cont++;
    }

}

function animar() {
    let x = 20;
    let y = 480;
    let _x = 20;
    let _y = 480;
    let v = parseFloat(document.querySelector('#velocidad').value);
    let angulo = parseFloat(document.querySelector('#angulo').value);
    let alfa = angulo * Math.PI / 180;
    let t = 0;
    let dx = parseFloat(document.querySelector('#rango').value);
    let arr = [];
    let id = setInterval(() => {
        document.querySelector('#tiempo').innerHTML = 'T: ' + t.toFixed(2);
        document.querySelector('#posx').innerHTML = 'X: ' + x.toFixed(2);
        document.querySelector('#posy').innerHTML = 'Y:' + (450 - y).toFixed(2);
        dibujar(x, y);
        particulas(arr);
        if (x >= 990 || y <= 10 || y >= 490) clearInterval(id);
        x = _x + v * Math.cos(alfa) * t;
        y = _y - (v * Math.sin(alfa) * t) + (0.5 * 9.81 * t * t);
        t += dx;
        arr.push({ x, y })
    }, 10);
}