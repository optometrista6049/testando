import { dialogueState }
from './dialogueState.js';

// ======================================================
// ELEMENTS
// ======================================================

let root = null;

let portraitImage = null;

let speakerLabel = null;

let textContainer = null;

let textLabel = null;

let continueButton = null;

// ======================================================
// RESPONSIVE HELPERS
// ======================================================

function clamp(min,value,max){

    return Math.max(

        min,

        Math.min(

            value,

            max

        )

    );

}

function getLayout(){

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;

    const portrait =
        clamp(

            42,

            width*0.085,

            140

        );

    const padding =
        clamp(

            8,

            width*0.018,

            20

        );

    const gap =
        clamp(

            8,

            width*0.018,

            20

        );

    const speaker =
        clamp(

            18,

            width*0.018,

            28

        );

    const text =
        clamp(

            15,

            width*0.015,

            22

        );

    const button =
        clamp(

            14,

            width*0.014,

            18

        );

    const buttonPaddingY =
        clamp(

            6,

            width*0.008,

            12

        );

    const buttonPaddingX =
        clamp(

            12,

            width*0.018,

            20

        );

    const dialogWidth =
        clamp(

            320,

            width*0.94,

            1000

        );

    const textHeight =
        clamp(

            90,

            height*0.18,

            220

        );

    const bottom =
        clamp(

            8,

            height*0.02,

            24

        );

    return{

        dialogWidth,

        dialogMaxWidth:1000,

        bottom,

        padding,

        portrait,

        gap,

        speaker,

        text,

        button,

        buttonPaddingY,

        buttonPaddingX,

        textHeight

    };

}

// ======================================================
// CREATE UI
// ======================================================

export function createDialogueUI(){

    const layout =
        getLayout();

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

            bottom:

                layout.bottom+'px',

            transform:

                'translateX(-50%)',

            width:

                layout.dialogWidth+'px',

            maxWidth:

                layout.dialogMaxWidth+'px',

            background:

                'rgba(15,15,15,0.88)',

            border:

                '2px solid #d6b06a',

            borderRadius:'20px',

            padding:

                layout.padding+'px',

            color:'white',

            zIndex:'15000',

            boxSizing:'border-box'

        }

    );

    const header =
        document.createElement(

            'div'

        );

    Object.assign(

        header.style,

        {

            display:'flex',

            alignItems:'center',

            gap:

                layout.gap+'px',

            marginBottom:'8px'

        }

    );

    portraitImage =
        document.createElement(

            'img'

        );

    Object.assign(

        portraitImage.style,

        {

            width:

                layout.portrait+'px',

            height:

                layout.portrait+'px',

            objectFit:'cover',

            borderRadius:'12px',

            border:

                '2px solid #d6b06a',

            flexShrink:'0'

        }

    );

    speakerLabel =
        document.createElement(

            'h3'

        );

    Object.assign(

        speakerLabel.style,

        {

            margin:'0',

            color:'#f2d08a',

            fontSize:

                layout.speaker+'px'

        }

    );

    header.appendChild(

        portraitImage

    );

    header.appendChild(

        speakerLabel

    );

    textContainer =
        document.createElement(

            'div'

        );
		
		    Object.assign(

        textContainer.style,

        {

            maxHeight:

                layout.textHeight+'px',

            overflowY:'auto',

            overflowX:'hidden',

            scrollbarWidth:'thin',

            borderTop:

                '1px solid rgba(255,255,255,0.15)',

            borderBottom:

                '1px solid rgba(255,255,255,0.15)',

            padding:'6px 0',

            marginBottom:'8px'

        }

    );

    textLabel =

        document.createElement(

            'p'

        );

    Object.assign(

        textLabel.style,

        {

            margin:'0',

            lineHeight:'1.45',

            whiteSpace:'pre-line',

            fontSize:

                layout.text+'px'

        }

    );

    textContainer.appendChild(

        textLabel

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

            padding:

                layout.buttonPaddingY+

                'px '+

                layout.buttonPaddingX+

                'px',

            fontSize:

                layout.button+'px',

            cursor:'pointer',

            borderRadius:'10px',

            border:'none',

            background:'#d6b06a',

            color:'#222',

            fontWeight:'bold'

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

    // =====================================
    // RESPONSIVE
    // =====================================

    window.addEventListener(

        'resize',

        ()=>{

            const layout =

                getLayout();

            root.style.bottom =

                layout.bottom+'px';

            root.style.width =

                layout.dialogWidth+'px';

            root.style.maxWidth =

                layout.dialogMaxWidth+'px';

            root.style.padding =

                layout.padding+'px';

            portraitImage.style.width =

                layout.portrait+'px';

            portraitImage.style.height =

                layout.portrait+'px';

            speakerLabel.style.fontSize =

                layout.speaker+'px';

            textContainer.style.maxHeight =

                layout.textHeight+'px';

            textLabel.style.fontSize =

                layout.text+'px';

            continueButton.style.fontSize =

                layout.button+'px';

            continueButton.style.padding =

                layout.buttonPaddingY+

                'px '+

                layout.buttonPaddingX+

                'px';

        }

    );

}

// ======================================================
// SHOW DIALOGUE
// ======================================================

export function showDialogue(dialogue){

    dialogueState.active =

        true;

    dialogueState.currentDialogue =

        dialogue;

    dialogueState.currentPage =

        0;

    root.style.display =

        'block';

    textContainer.scrollTop =

        0;

    updateDialogue();

}

// ======================================================
// UPDATE DIALOGUE
// ======================================================

function updateDialogue(){

    const dialogue =

        dialogueState.currentDialogue;

    if(!dialogue){

        return;

    }

    speakerLabel.innerText =

        dialogue.speaker ?? '';

    if(dialogue.portrait){

        portraitImage.src =

            dialogue.portrait;

        portraitImage.style.display =

            'block';

    }

    else{

        portraitImage.style.display =

            'none';

    }

    textContainer.scrollTop =

        0;

    textLabel.innerText =

        dialogue.pages[

            dialogueState.currentPage

        ];

}

// ======================================================
// NEXT PAGE
// ======================================================

function nextDialoguePage(){

    const dialogue =

        dialogueState.currentDialogue;

    if(!dialogue){

        return;

    }

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

// ======================================================
// CLOSE DIALOGUE
// ======================================================

export function closeDialogue(){

    dialogueState.active =

        false;

    dialogueState.currentDialogue =

        null;

    dialogueState.currentPage =

        0;

    if(

        textContainer

    ){

        textContainer.scrollTop =

            0;

    }

    if(

        root

    ){

        root.style.display =

            'none';

    }

}

// ======================================================
// GETTERS
// ======================================================

export function isDialogueOpen(){

    return dialogueState.active;

}

// ======================================================
// REFRESH
// ======================================================

export function refreshDialogue(){

    if(

        !dialogueState.active ||

        !root

    ){

        return;

    }

    const layout =

        getLayout();

    root.style.bottom =

        layout.bottom+'px';

    root.style.width =

        layout.dialogWidth+'px';

    root.style.maxWidth =

        layout.dialogMaxWidth+'px';

    root.style.padding =

        layout.padding+'px';

    portraitImage.style.width =

        layout.portrait+'px';

    portraitImage.style.height =

        layout.portrait+'px';

    speakerLabel.style.fontSize =

        layout.speaker+'px';

    textContainer.style.maxHeight =

        layout.textHeight+'px';

    textLabel.style.fontSize =

        layout.text+'px';

    continueButton.style.fontSize =

        layout.button+'px';

    continueButton.style.padding =

        layout.buttonPaddingY+

        'px '+

        layout.buttonPaddingX+

        'px';

}
