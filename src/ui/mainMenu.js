import {

    hasSave,

    loadGame,

    deleteSave

}
from '../systems/saveSystem.js';

import {

    createControlsScreen

}
from './controlsScreen.js';

import {

    createCreditsScreen

}
from './creditsScreen.js';

export function createMainMenu(

    onStart

){

    const root =

        document.createElement('div');

    root.id =

        'mainMenu';

    Object.assign(

        root.style,

        {

            position:'fixed',

            inset:'0',

            background:'#000',

            display:'flex',

            flexDirection:'column',

            justifyContent:'center',

            alignItems:'center',

            zIndex:'9999'

        }

    );

    const title =

        document.createElement('h1');

    title.innerText =

        'MONTESERIN ACADEMY';

    root.appendChild(title);

    const btnContinue =

        document.createElement('button');

    btnContinue.innerText =

        'CONTINUAR EXPERIENCIA';

    if(!hasSave()){

        btnContinue.style.display =

            'none';

    }

    btnContinue.onclick = ()=>{

        loadGame();

        root.remove();

        onStart();

    };

    const btnNew =

        document.createElement('button');

    btnNew.innerText =

        'NUEVA EXPERIENCIA';

    btnNew.onclick = ()=>{

        deleteSave();

        root.remove();

        onStart();

    };

    const controlsPanel =

        createControlsScreen();

    const creditsPanel =

        createCreditsScreen();

    const btnControls =

        document.createElement('button');

    btnControls.innerText =

        'CONTROLES';

   btnControls.onclick = ()=>{

    if(

        controlsPanel.style.display ===
        'block'

    ){

        controlsPanel.style.display =
            'none';

    }

    else{

        controlsPanel.style.display =
            'block';

    }

};

const btnCredits =

    document.createElement('button');

btnCredits.innerText =

    'CRÉDITOS';

btnCredits.onclick = ()=>{

    if(

        creditsPanel.style.display ===
        'block'

    ){

        creditsPanel.style.display =
            'none';

    }

    else{

        creditsPanel.style.display =
            'block';

    }

};

    root.appendChild(btnContinue);

    root.appendChild(btnNew);

    root.appendChild(btnControls);

    root.appendChild(btnCredits);

    root.appendChild(controlsPanel);

    root.appendChild(creditsPanel);

    document.body.appendChild(root);

}