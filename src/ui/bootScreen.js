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
    // ROOT
    // =====================================================

    const boot = document.createElement('div');

    boot.id = 'bootScreen';

    // =====================================================
    // BACKGROUND IMAGE
    // =====================================================

    const bg = document.createElement('img');

    bg.id = 'bootBackground';

    bg.src =
        '/assets/ui/boot/bootBackground.jpg';

    boot.appendChild(bg);

    // =====================================================
    // OVERLAY
    // =====================================================

    const overlay = document.createElement('div');

    overlay.id = 'bootOverlay';

    boot.appendChild(overlay);

    // =====================================================
    // PANEL
    // =====================================================

    const panel = document.createElement('div');

    panel.id = 'bootPanel';

    // =====================================================
    // TITLE
    // =====================================================

    const title = document.createElement('h1');

    title.innerText =
        'MONTESERIN ACADEMY';

    panel.appendChild(title);

    // =====================================================
    // TEXT
    // =====================================================

    const text = document.createElement('div');

    text.className = 'bootText';

    text.innerHTML = isMobile()

        ? 'Se recomienda jugar en posición horizontal'

        : 'Mejor experiencia en pantalla completa';

    panel.appendChild(text);

    // =====================================================
    // BUTTON
    // =====================================================

    const button = document.createElement('button');

    button.id = 'startButton';

    button.innerText =
        'ENTRAR A LA EXPERIENCIA';

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
        // REMOVE BOOT
        // =================================================

        boot.remove();

        // =================================================
        // START GAME
        // =================================================

        if(onStart){

            onStart();

        }

    });

    panel.appendChild(button);

    // =====================================================
    // APPEND PANEL
    // =====================================================

    boot.appendChild(panel);

    // =====================================================
    // APPEND TO BODY
    // =====================================================

    document.body.appendChild(boot);

}