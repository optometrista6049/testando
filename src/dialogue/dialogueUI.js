import {

    dialogueState

}
from './dialogueState.js';

import {

    finishDialogue

}
from './dialogueManager.js';

import {

    getDialogueLayout

}
from './dialogueUtils.js';

let root;

let header;

let portrait;

let speaker;

let body;

let textContainer;

let text;

let footer;

let continueButton;

export function createDialogueUI(){

    const layout =

        getDialogueLayout();

    root =

        document.createElement(

            'div'

        );

    Object.assign(

        root.style,

        {

            display:'none',

            position:'fixed',

            left:'50%',

            transform:'translateX(-50%)',

            bottom:layout.bottom,

            width:layout.width,

            maxWidth:layout.maxWidth,

            padding:layout.padding,

            borderRadius:layout.borderRadius,

            background:

                'rgba(15,15,15,0.90)',

            border:

                '2px solid #d6b06a',

            color:'white',

            zIndex:'15000',

            boxSizing:'border-box',

            backdropFilter:'blur(4px)'

        }

    );

    header =

        document.createElement(

            'div'

        );

    Object.assign(

        header.style,

        {

            display:'flex',

            alignItems:'center',

            gap:'12px'

        }

    );

    portrait =

        document.createElement(

            'img'

        );

    Object.assign(

        portrait.style,

        {

            width:

                layout.portraitSize + 'px',

            height:

                layout.portraitSize + 'px',

            borderRadius:'12px',

            objectFit:'cover',

            border:

                '2px solid #d6b06a',

            flexShrink:'0'

        }

    );

    speaker =

        document.createElement(

            'div'

        );

    Object.assign(

        speaker.style,

        {

            fontWeight:'bold',

            color:'#f2d08a',

            fontSize:

                layout.speakerSize + 'px'

        }

    );

    header.appendChild(

        portrait

    );

    header.appendChild(

        speaker

    );

    body =

        document.createElement(

            'div'

        );

    Object.assign(

        body.style,

        {

            marginTop:'10px'

        }

    );

    textContainer =

        document.createElement(

            'div'

        );

    Object.assign(

        textContainer.style,

        {

            maxHeight:

                layout.textMaxHeight,

            overflowY:'auto',

            overflowX:'hidden',

            scrollbarWidth:'thin',

            paddingRight:'6px',

            borderTop:

                '1px solid rgba(255,255,255,0.15)',

            borderBottom:

                '1px solid rgba(255,255,255,0.15)',

            marginTop:'6px',

            marginBottom:'10px'

        }

    );

    text =

        document.createElement(

            'div'

        );

    Object.assign(

        text.style,

        {

            fontSize:

                layout.textSize + 'px',

            lineHeight:'1.6',

            whiteSpace:'pre-line',

            padding:'8px 0'

        }

    );

    textContainer.appendChild(

        text

    );

    body.appendChild(

        textContainer

    );
	
	    footer =

        document.createElement(

            'div'

        );

    Object.assign(

        footer.style,

        {

            display:'flex',

            justifyContent:'flex-end',

            marginTop:'8px'

        }

    );

    continueButton =

        document.createElement(

            'button'

        );

    continueButton.innerText =

        'Continuar';

    Object.assign(

        continueButton.style,

        {

            height:

                layout.buttonHeight + 'px',

            padding:'0 18px',

            border:'none',

            borderRadius:'10px',

            cursor:'pointer',

            background:'#d6b06a',

            color:'#222',

            fontWeight:'bold',

            fontSize:

                layout.buttonFont + 'px'

        }

    );

    continueButton.onclick =

        nextDialoguePage;

    footer.appendChild(

        continueButton

    );

    root.appendChild(

        header

    );

    root.appendChild(

        body

    );

    root.appendChild(

        footer

    );

    document.body.appendChild(

        root

    );

    window.addEventListener(

        'resize',

        updateResponsiveLayout

    );

}

function updateResponsiveLayout(){

    if(!root) return;

    const layout =

        getDialogueLayout();

    root.style.bottom =

        layout.bottom;

    root.style.width =

        layout.width;

    root.style.maxWidth =

        layout.maxWidth;

    root.style.padding =

        layout.padding;

    root.style.borderRadius =

        layout.borderRadius;

    portrait.style.width =

        layout.portraitSize + 'px';

    portrait.style.height =

        layout.portraitSize + 'px';

    speaker.style.fontSize =

        layout.speakerSize + 'px';

    text.style.fontSize =

        layout.textSize + 'px';

    textContainer.style.maxHeight =

        layout.textMaxHeight;

    continueButton.style.height =

        layout.buttonHeight + 'px';

    continueButton.style.fontSize =

        layout.buttonFont + 'px';

}

export function showDialogue(

    dialogue

){

    dialogueState.active =

        true;

    dialogueState.currentDialogue =

        dialogue;

    dialogueState.currentPage =

        0;

    root.style.display =

        'block';

    updateDialogue();

}

function updateDialogue(){

    const dialogue =

        dialogueState.currentDialogue;

    speaker.innerText =

        dialogue.speaker;

    if(dialogue.portrait){

        portrait.src =

            dialogue.portrait;

        portrait.style.display =

            'block';

    }

    else{

        portrait.style.display =

            'none';

    }

    text.innerText =

        dialogue.pages[

            dialogueState.currentPage

        ];

    textContainer.scrollTop =

        0;

}

function nextDialoguePage(){

    const dialogue =

        dialogueState.currentDialogue;

    dialogueState.currentPage++;

    if(

        dialogueState.currentPage >=

        dialogue.pages.length

    ){

        finishDialogue();

        return;

    }

    updateDialogue();

}

export function closeDialogue(){

    dialogueState.active =

        false;

    dialogueState.currentDialogue =

        null;

    dialogueState.currentPage =

        0;

    if(textContainer){

        textContainer.scrollTop =

            0;

    }

    if(root){

        root.style.display =

            'none';

    }

}

export function isDialogueOpen(){

    return dialogueState.active;

}

export function refreshDialogue(){

    updateResponsiveLayout();

    if(

        dialogueState.active &&

        dialogueState.currentDialogue

    ){

        updateDialogue();

    }

}