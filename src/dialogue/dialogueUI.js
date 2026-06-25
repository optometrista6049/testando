import { dialogueState }
from './dialogueState.js';

let root = null;

let portraitImage = null;

let speakerLabel = null;

let textLabel = null;

let continueButton = null;

export function createDialogueUI(){


root =
    document.createElement('div');

Object.assign(

    root.style,

    {

        display:'none',

        position:'fixed',

        left:'50%',

        bottom:'30px',

        transform:'translateX(-50%)',

        width:'90%',

        maxWidth:'1000px',

        background:'rgba(15,15,15,0.88)',

        border:'2px solid #d6b06a',

        borderRadius:'20px',

        padding:'20px',

        color:'white',

        zIndex:'15000'

    }

);

const header =
    document.createElement('div');

Object.assign(

    header.style,

    {

        display:'flex',

        alignItems:'center',

        gap:'20px',

        marginBottom:'15px'

    }

);

portraitImage =
    document.createElement('img');

Object.assign(

    portraitImage.style,

    {

        width:'120px',

        height:'120px',

        objectFit:'cover',

        borderRadius:'12px',

        border:'2px solid #d6b06a'

    }

);

speakerLabel =
    document.createElement('h3');

Object.assign(

    speakerLabel.style,

    {

        margin:'0',

        fontSize:'28px',

        color:'#f2d08a'

    }

);

header.appendChild(
    portraitImage
);

header.appendChild(
    speakerLabel
);

textLabel =
    document.createElement('p');

Object.assign(

    textLabel.style,

    {

        fontSize:'22px',

        lineHeight:'1.6',

        marginBottom:'20px'

    }

);

continueButton =
    document.createElement('button');

continueButton.innerText =
    'Continuar';

Object.assign(

    continueButton.style,

    {

        padding:'12px 20px',

        fontSize:'18px',

        cursor:'pointer',

        borderRadius:'10px',

        border:'none'

    }

);

continueButton.onclick =
    nextDialoguePage;

root.appendChild(
    header
);

root.appendChild(
    textLabel
);

root.appendChild(
    continueButton
);

document.body.appendChild(
    root
);


}

export function showDialogue(dialogue){


dialogueState.active = true;

dialogueState.currentDialogue =
    dialogue;

dialogueState.currentPage = 0;

root.style.display =
    'block';

updateDialogue();


}

function updateDialogue(){


const dialogue =
    dialogueState.currentDialogue;

speakerLabel.innerText =
    dialogue.speaker;

if(dialogue.portrait){

    portraitImage.src =
        dialogue.portrait;

    portraitImage.style.display =
        'block';

}else{

    portraitImage.style.display =
        'none';

}

textLabel.innerText =
    dialogue.pages[
        dialogueState.currentPage
    ];


}

function nextDialoguePage(){


const dialogue =
    dialogueState.currentDialogue;

dialogueState.currentPage++;

if(

    dialogueState.currentPage >=
    dialogue.pages.length

){

    closeDialogue();

    return;

}

updateDialogue();


}

export function closeDialogue(){


dialogueState.active =
    false;

dialogueState.currentDialogue =
    null;

root.style.display =
    'none';


}
