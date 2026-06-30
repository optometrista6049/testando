export function isMobile(){

    return window.innerWidth < 768;

}

export function isTablet(){

    return (

        window.innerWidth >= 768 &&

        window.innerWidth < 1200

    );

}

export function getDialogueLayout(){

    if(isMobile()){

        return{

            width:'96%',

            maxWidth:'480px',

            bottom:'8px',

            padding:'8px',

            borderRadius:'16px',

            portraitSize:52,

            speakerSize:18,

            textSize:15,

            textMaxHeight:'9vh',

            buttonHeight:'38px',

            buttonFont:14

        };

    }

    if(isTablet()){

        return{

            width:'92%',

            maxWidth:'760px',

            bottom:'18px',

            padding:'14px',

            borderRadius:'18px',

            portraitSize:90,

            speakerSize:24,

            textSize:18,

            textMaxHeight:'18vh',

            buttonHeight:'44px',

            buttonFont:17

        };

    }

    return{

        width:'90%',

        maxWidth:'1000px',

        bottom:'25px',

        padding:'20px',

        borderRadius:'20px',

        portraitSize:140,

        speakerSize:30,

        textSize:22,

        textMaxHeight:'220px',

        buttonHeight:'48px',

        buttonFont:19

    };

}