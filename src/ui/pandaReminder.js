import { gameState }
from '../state/gameState.js';

let reminderRoot = null;

let visible = false;

let timer = 0;

export function createPandaReminder(){

    reminderRoot =
        document.createElement('div');

    Object.assign(

        reminderRoot.style,

        {

            position:'fixed',

            top:'30px',

            left:'50%',

            transform:'translateX(-50%)',

            width:'90%',

            maxWidth:'700px',

            padding:'20px',

            background:
                'rgba(0,0,0,0.85)',

            border:
                '2px solid #d6b06a',

            borderRadius:'20px',

            color:'white',

            zIndex:'14000',

            display:'none'

        }

    );

    const container =
        document.createElement('div');

    Object.assign(

        container.style,

        {

            display:'flex',

            alignItems:'center',

            gap:'20px'

        }

    );

    const portrait =
        document.createElement('img');

    portrait.src =
        './assets/ui/portraits/panda.png';

    Object.assign(

        portrait.style,

        {

            width:'100px',

            height:'100px',

            objectFit:'cover',

            borderRadius:'12px',

            border:
                '2px solid #d6b06a',

            flexShrink:'0'

        }

    );

    const text =
        document.createElement('div');

    text.innerHTML =

        '<strong>Panda</strong><br><br>' +

        'Hola.<br>' +

        'Ven a hablar conmigo.<br>' +

        'Necesito tu ayuda.';

    Object.assign(

        text.style,

        {

            fontSize:'22px',

            lineHeight:'1.5'

        }

    );

    container.appendChild(
        portrait
    );

    container.appendChild(
        text
    );

    reminderRoot.appendChild(
        container
    );

    document.body.appendChild(
        reminderRoot
    );

}

export function updatePandaReminder(delta){

    if(
        gameState.flags.metPanda
    ){

        reminderRoot.style.display =
            'none';

        return;

    }

    timer += delta;

    if(visible){

        if(timer >= 8){

            timer = 0;

            visible = false;

            reminderRoot.style.display =
                'none';

        }

    }else{

        if(timer >= 10){

            timer = 0;

            visible = true;

            reminderRoot.style.display =
                'block';

        }

    }

}