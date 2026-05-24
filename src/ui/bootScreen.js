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

    boot.style.overflow = 'hidden';

    boot.style.fontFamily = 'Arial';

    boot.style.color = 'white';

    boot.style.textAlign = 'center';

    boot.style.padding = '20px';

    // =====================================================
    // BACKGROUND IMAGE
    // =====================================================

    const bg = document.createElement('img');

    bg.src =
        '/assets/ui/boot/bootBackground.jpg';

    bg.style.position = 'absolute';

    bg.style.top = '0';

    bg.style.left = '0';

    bg.style.width = '100%';

    bg.style.height = '100%';

    bg.style.objectFit = 'cover';

    bg.style.zIndex = '0';

    bg.style.pointerEvents = 'none';

    boot.appendChild(bg);

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

    overlay.style.zIndex = '1';

    boot.appendChild(overlay);

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

    button.innerText = 'ENTRAR A LA EXPERIENCIA';

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

        // =================================================
        // FULLSCREEN
        // =================================================

        if(document.documentElement.requestFullscreen){

            try{

                await document
                    .documentElement
                    .requestFullscreen();

            }catch(e){}

        }

        // =================================================
        // LANDSCAPE LOCK
        // =================================================

        if(

            screen.orientation &&
            screen.orientation.lock

        ){

            try{

                await screen.orientation
                    .lock('landscape');

            }catch(e){}

        }

        // =================================================
        // REMOVE SCREEN
        // =================================================

        boot.remove();

        // =================================================
        // START GAME
        // =================================================

        if(onStart){

            onStart();

        }

    });

    boot.appendChild(button);

    // =====================================================
    // APPEND TO BODY
    // =====================================================

    document.body.appendChild(boot);

}