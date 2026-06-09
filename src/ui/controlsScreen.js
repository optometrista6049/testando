export function createControlsScreen(){

    const panel =
        document.createElement('div');

    Object.assign(

        panel.style,

        {

            display:'none',

            position:'fixed',

            top:'50%',

            left:'50%',

            transform:'translate(-50%,-50%)',

            width:'80%',

            maxWidth:'600px',

            background:'rgba(0,0,0,0.85)',

            border:'2px solid #ffffff',

            borderRadius:'20px',

            padding:'30px',

            color:'white',

            textAlign:'center',

            zIndex:'10000',

            backdropFilter:'blur(4px)'

        }

    );

    panel.innerHTML = `

        <h2>CONTROLES</h2>

        <br>

        <h3>PC</h3>

        <p>W A S D → Movimiento</p>

        <p>Ratón → Cámara</p>

        <p>E → Interacción</p>

        <br>

        <h3>MÓVIL</h3>

        <p>Joystick → Movimiento</p>

        <p>Arrastrar pantalla → Cámara</p>

        <p>Botón contextual → Interacción</p>

    `;

    const closeBtn =
        document.createElement('button');

    closeBtn.innerText =
        'VOLVER';

    closeBtn.style.marginTop =
        '20px';

    closeBtn.onclick = ()=>{

        panel.style.display =
            'none';

    };

    panel.appendChild(closeBtn);

    return panel;

}