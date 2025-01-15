let screen = document.querySelector('.display');

function display(value){
    screen.textContent += value;
}

function evalute(){
    try{
        screen.textContent = eval(screen.textContent);
    }catch(e){
        screen.textContent = "Math Error";
    }
}

function clearAll(){
    screen.textContent = '';
}

function clearLast(){
    screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
}

function percentage(){
    try{
        screen.textContent = eval(screen.textContent) / 100;
    }catch(e){
        screen.textContent = "Syntax Error";
    }
}

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const shift = e.shiftKey;

    switch(true){
        case key >= '0' && key <= '9':
            display(key);
            break;
        case key === 'Backspace':
            clearLast();
            break;
        case key === 'Delete':
            clearAll();
            break;
        case key === 'Enter' || key === '=':
            evalute();
            break;
        case key === '/':
            display('/');
            break;
        case key === '+':
            display('+');
            break;
        case key === '*':
            display('*');
            break;
        case key === '-':
            display('-');
            break;
        case shift && key === '=':
            display('+');
            break;
        case shift && key === '8':
            display('*');
            break;
        default:
            console.log(`Unhandled key: ${key}`);
    }
});
