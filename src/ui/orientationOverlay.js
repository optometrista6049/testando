function isPortrait(){

    return window.innerHeight >
           window.innerWidth;

}

export function createOrientationOverlay(){

    const overlay =
        document.createElement('div');

    overlay.id = 'orientationOverlay';

    overlay.innerHTML = `

        <div id="orientationText">

            Gira el dispositivo
            para jugar en horizontal

        </div>

    `;

    document.body.appendChild(overlay);

    function updateOrientation(){

        const mobile =
            /Android|iPhone|iPad|iPod/i
            .test(navigator.userAgent);

        if(mobile && isPortrait()){

            overlay.style.display = 'flex';

        }else{

            overlay.style.display = 'none';

        }

    }

    updateOrientation();

    addEventListener(
        'resize',
        updateOrientation
    );

}