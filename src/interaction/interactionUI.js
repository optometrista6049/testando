let root;


import {

    showMobileInteractionButton,
    hideMobileInteractionButton

}
from '../mobile/mobileInteractionButton.js';

export function createInteractionUI(){


root =
    document.createElement('div');

Object.assign(

    root.style,

    {

        display:'none',

        position:'fixed',

        left:'50%',

        bottom:'120px',

        transform:'translateX(-50%)',

        background:
            'rgba(0,0,0,0.75)',

        border:
            '2px solid #d6b06a',

        borderRadius:'16px',

        color:'white',

        padding:'12px 20px',

        zIndex:'14500',

        fontFamily:'Georgia, serif'

    }

);

document.body.appendChild(
    root
);


}

export function showInteraction(text){


root.innerHTML =
    '[E] ' + text;

root.style.display =
    'block';

showMobileInteractionButton();
}

export function hideInteraction(){


root.style.display =
    'none';

hideMobileInteractionButton();
}
