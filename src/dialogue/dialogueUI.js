import { dialogueState }
from './dialogueState.js';

let root = null;

let portraitImage = null;

let speakerLabel = null;

let textContainer = null;

let textLabel = null;

let continueButton = null;

export function createDialogueUI(){

    const screenWidth =
        window.innerWidth;

    const isMobile =
        screenWidth < 768;

    const isTablet =
        screenWidth >= 768 &&
        screenWidth < 1200;

    root =
        document.createElement('div');

    Object.assign(

        root.style,

        {

            display:'none',

            position:'fixed',

            left:'50%',

            bottom:

                isMobile

                    ? '8px'

                    : '20px',

            transform:'translateX(-50%)',

            width:

                isMobile

                    ? '96%'

                    : isTablet

                        ? '92%'

                        : '90%',

            maxWidth:

                isMobile

                    ? '500px'

                    : isTablet

                        ? '800px'

                        : '1000px',

            background:'rgba(15,15,15,0.88)',

            border:'2px solid #d6b06a',

            borderRadius:'20px',

            padding:

                isMobile

                    ? '8px'

                    : isTablet

                        ? '14px'

                        : '20px',

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

            gap:

                isMobile

                    ? '10px'

                    : isTablet

                        ? '15px'

                        : '20px',

            marginBottom:'10px'

        }

    );

    portraitImage =
        document.createElement('img');

    Object.assign(

        portraitImage.style,

        {

            width:

                isMobile

                    ? '55px'

                    : isTablet

                        ? '90px'

                        : '140px',

            height:

                isMobile

                    ? '55px'

                    : isTablet

                        ? '90px'

                        : '140px',

            objectFit:'cover',

            borderRadius:'12px',

            border:'2px solid #d6b06a',

            flexShrink:'0'

        }

    );

    speakerLabel =
        document.createElement('h3');

    Object.assign(

        speakerLabel.style,

        {

            margin:'0',

            color:'#f2d08a',

            fontSize:

                isMobile

                    ? '18px'

                    : isTablet

                        ? '24px'

                        : '28px'

        }

    );

    header.appendChild(
        portraitImage
    );

    header.appendChild(
        speakerLabel
    );

    textContainer =
        document.createElement('div');

    Object.assign(

        textContainer.style,

        {

            maxHeight:

                isMobile

                    ? '12vh'

                    : isTablet

                        ? '16vh'

                        : '220px',

            overflowY:'auto',

            scrollbarWidth:'thin',

            borderTop:
                '1px solid rgba(255,255,255,0.15)',

            borderBottom:
                '1px solid rgba(255,255,255,0.15)',

            padding:'8px 0',

            marginBottom:'10px'
        }

    );

    textLabel =
        document.createElement('p');

    Object.assign(

        textLabel.style,

        {

            margin:'0',

            lineHeight:'1.5',

            fontSize:

                isMobile

                    ? '15px'

                    : isTablet

                        ? '18px'

                        : '22px'

        }

    );

    textContainer.appendChild(
        textLabel
    );

    continueButton =
        document.createElement('button');

    continueButton.innerText =
        'Continuar';

    Object.assign(

        continueButton.style,

        {

            padding:

                isMobile

                    ? '6px 12px'

                    : isTablet

                        ? '8px 16px'

                        : '12px 20px',

            fontSize:

                isMobile

                    ? '14px'

                    : isTablet

                        ? '16px'

                        : '18px',

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
        textContainer
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

    textContainer.scrollTop = 0;

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

    textContainer.scrollTop = 0;

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