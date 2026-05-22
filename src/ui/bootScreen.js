export function createBootScreen(onStart){

    // =====================================================
    // SCREEN
    // =====================================================

    const screen = document.createElement('div');

    screen.id = 'bootScreen';

    screen.innerHTML = `

        <div id="bootPanel">

            <h1>MI RPG</h1>

            <p class="bootText">
                Recomendado jugar en horizontal
                en dispositivos móviles
            </p>

            <button id="startButton">
                ENTRAR AL JUEGO
            </button>

        </div>

    `;

    document.body.appendChild(screen);

    // =====================================================
    // START BUTTON
    // =====================================================

    const button =
        document.getElementById('startButton');

    button.addEventListener('click', async()=>{

        // fullscreen

        if(document.fullscreenEnabled){

            try{

                await document.documentElement
                    .requestFullscreen();

            }catch(e){

                console.log(
                    "fullscreen cancelado"
                );

            }

        }

        // ocultar pantalla

        screen.remove();

        // iniciar juego

        onStart();

    });

}