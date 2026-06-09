export function createCreditsScreen(){

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

        <h2>CRÉDITOS</h2>

        <br>

        <p><b>Monteserin Academy</b></p>

        <br>

        <p>Diseño y desarrollo</p>

        <p>Optometrista6049</p>

        <br>

        <p>Motor gráfico</p>

        <p>Three.js</p>

        <br>

        <p>Proyecto educativo y narrativo</p>

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