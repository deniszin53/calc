const but = document.getElementById('clav');
const disp = document.getElementById('span');
const hide_block = document.getElementById('his');
hide_block.hidden = true;
const history = [];
let i = 0;
let n=0;

but.onclick = (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    let step = event.target;
    if (step.innerHTML === '1' || step.innerHTML === '2' || step.innerHTML === '3' || step.innerHTML === '4' || step.innerHTML === '5' || step.innerHTML === '6' || step.innerHTML === '7' || step.innerHTML === '8' ||
        step.innerHTML === '9' || step.innerHTML === '0' || step.innerHTML === '+' || step.innerHTML === '-' || step.innerHTML === '*' || step.innerHTML === '/') {
        disp.innerHTML += step.innerHTML;
    }
    switch (step.innerHTML) {
        case 'C':
            disp.innerHTML = '';
            break;
        case '=':
            let result = eval(disp.innerHTML);
            disp.innerHTML += '=' + result;
            history.push(disp.innerHTML);
            hide_block.innerHTML+='<span>'+history[n]+'</span>';
            n++;
            break;
        case 'H':
            i++;
            if (i % 2 === 0) {
                hide_block.hidden = true;
            } else {
                hide_block.hidden = false;
            }
            break;
    }
}

