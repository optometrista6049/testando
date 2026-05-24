// =====================================================
// MOBILE / FULLSCREEN BOOT SCREEN
// =====================================================

function isMobile(){

    return /Android|iPhone|iPad|iPod/i
        .test(navigator.userAgent);

}

// =====================================================
// CREATE BOOT SCREEN
// =====================================================

export function createBootScreen(onStart){

    // =====================================================
    // CONTAINER
    // =====================================================

    const boot = document.createElement('div');

    boot.id = 'bootScreen';
	
// =====================================================
// BACKGROUND
// =====================================================

const bg = document.createElement('div');

bg.style.position = 'absolute';

bg.style.top = '0';

bg.style.left = '0';

bg.style.width = '100%';

bg.style.height = '100%';

bg.style.backgroundImage =

    "url('/assets/ui/boot/bootBackground.jpg')";

bg.style.backgroundSize = 'cover';

bg.style.backgroundPosition = 'center';

bg.style.backgroundRepeat = 'no-repeat';

bg.style.zIndex = '-2';

// =====================================================
// DARK OVERLAY
// =====================================================

const overlay = document.createElement('div');

overlay.style.position = 'absolute';

overlay.style.top = '0';

overlay.style.left = '0';

overlay.style.width = '100%';

overlay.style.height = '100%';

overlay.style.background =

    'rgba(0,0,0,0.45)';

overlay.style.zIndex = '-1';

// =====================================================
// APPEND
// =====================================================

boot.appendChild(bg);

boot.appendChild(overlay);

    // =====================================================
    // STYLE
    // =====================================================

    boot.style.position = 'fixed';

    boot.style.top = '0';

    boot.style.left = '0';

    boot.style.width = '100%';

    boot.style.height = '100%';

    boot.style.display = 'flex';

    boot.style.flexDirection = 'column';

    boot.style.justifyContent = 'center';

    boot.style.alignItems = 'center';

    boot.style.gap = '20px';

    boot.style.zIndex = '999999';


    // =====================================================
    // FONT
    // =====================================================

    boot.style.fontFamily =
        'Arial';

    boot.style.color = 'white';

    boot.style.textAlign = 'center';

    boot.style.padding = '20px';

    // =====================================================
    // TITLE
    // =====================================================

    const title = document.createElement('h1');

    title.innerText = 'MONTESERIN ACADEMY';

    title.style.fontSize =

        window.innerWidth < 700
        ? '38px'
        : '64px';

    title.style.margin = '0';

    title.style.textShadow =
        '0 0 15px rgba(0,0,0,0.8)';

    boot.appendChild(title);

    // =====================================================
    // SUBTITLE
    // =====================================================

    const text = document.createElement('div');

    text.innerHTML = isMobile()

        ? 'Se recomienda jugar en posición horizontal'

        : 'Mejor experiencia en pantalla completa';

    text.style.fontSize =

        window.innerWidth < 700
        ? '16px'
        : '22px';

    text.style.maxWidth = '600px';

    text.style.lineHeight = '1.4';

    text.style.textShadow =
        '0 0 10px rgba(0,0,0,0.8)';

    boot.appendChild(text);

    // =====================================================
    // START BUTTON
    // =====================================================

    const button = document.createElement('button');

    button.innerText = 'COMENZAR EXPERIENCIA';

    button.style.padding =
        '16px 34px';

    button.style.fontSize =
        '20px';

    button.style.border =
        'none';

    button.style.borderRadius =
        '12px';

    button.style.cursor =
        'pointer';

    button.style.background =
        'rgba(255,255,255,0.12)';

    button.style.color =
        'white';

    button.style.backdropFilter =
        'blur(6px)';

    button.style.border =
        '1px solid rgba(255,255,255,0.2)';

    button.style.transition =
        '0.2s';

    // =====================================================
    // HOVER PC
    // =====================================================

    button.addEventListener('mouseenter',()=>{

        button.style.transform =
            'scale(1.05)';

    });

    button.addEventListener('mouseleave',()=>{

        button.style.transform =
            'scale(1)';

    });

    // =====================================================
    // START GAME
    // =====================================================

    button.addEventListener('click', async ()=>{

        // ================================================
        // FULLSCREEN
        // ================================================

        if(document.documentElement.requestFullscreen){

            try{

                await document
                    .documentElement
                    .requestFullscreen();

            }catch(e){}

        }

        // ================================================
        // SCREEN ORIENTATION
        // ================================================

        if(

            screen.orientation &&
            screen.orientation.lock

        ){

            try{

                await screen.orientation
                    .lock('landscape');

            }catch(e){}

        }

        // ================================================
        // REMOVE BOOT
        // ================================================

        boot.remove();

        // ================================================
        // START GAME CALLBACK
        // ================================================

        if(onStart){

            onStart();

        }

    });

    boot.appendChild(button);

    // =====================================================
    // APPEND
    // =====================================================

    document.body.appendChild(boot);

}
