const btnPlay=document.getElementById('botom')
const conteIncio=document.getElementById('conteIncio')
const loading=document.getElementById('loading')
const contemGame=document.getElementById('contenGame')
const circulo=document.querySelectorAll('.redondo')
const circuloArray=[].slice.call(circulo);
const[jugador1,jugador2]=circuloArray 
const audioP=document.getElementById('audioP')
const audiioS =document.getElementById('sonidoS')



let activar=true

const srcArray=['dados/11.png','dados/12.png','dados/13.png','dados/14.png','dados/15.png','dados/16.png']
 
btnPlay.addEventListener('click',e=>{
    audioP.play();
    audioP.volume = 0.1; 
   btnPlay.style.backgroundColor='#FBF3E4';   

   
   const clas=()=> conteIncio.classList.add('contenInicio1');
   const display=()=>  conteIncio.style.display='none';
   const loadingAd=()=>loading.classList.add('loading1');
   const loadingNone=()=>loading.style.display='none';
   const addconteGame=()=>contemGame.classList.add('contenGame1')

inicio(clas,)
        .then(()=>{            
            loadingAd()
            return inicio(display)

        })

        .then(()=>{
        loadingNone()
        addconteGame()
        turno()             
        })
       

})


jugador1.addEventListener('click',e=>{
    audiioS.currentTime=0
      const dado=document.getElementById('jugador2')
      const resultado=document.querySelectorAll('.numero2')
      const resultadoArray=[].slice.call(resultado);
      let[a,b]=resultadoArray
    //   console.log(resultado)
    if ((jugador1.classList.contains('primero'))&&(activar==true)) {
        audiioS.play()
        jugador1.textContent=parseInt(jugador1.textContent)-1
        activar=false
        pintar(dado,a,b,jugador1,jugador2)
    }
})

jugador2.addEventListener('click',e=>{
    audiioS.currentTime=0
    const dado=document.getElementById('jugador1')
    const resultado=document.querySelectorAll('.numero1')
    // console.log(resultado)
    const resultadoArray=[].slice.call(resultado);
    let[a,b]=resultadoArray
    // console.log(a,b)
    if ((jugador2.classList.contains('primero'))&&(activar==true)) {
      
        audiioS.play()
        jugador2.textContent=parseInt(jugador2.textContent)-1
      activar=false
        pintar(dado,a,b,jugador2,jugador1)
    }
})












function inicio(callbak) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            callbak()           
           resolve()
        },1500)
    })
    
}

function turno() {
    
let interval=setInterval(()=>{
    let ramdom=Math.floor(Math.random()*(10-0+1)+0)
    for(let i=0;i<2;i++){       
     setTimeout(()=>{       
         circuloArray[i].style.opacity='1'
     },300)
     if (ramdom==i) {     
         circuloArray[i].classList.add('primero')   
         clearInterval(interval)
         break         
     }
     setTimeout(()=>{        
        circuloArray[i].style.opacity='0.2'
    
    },500)
}

},600)     
}


function pintar(params,a,b,otro,otro1) {
    params.setAttribute('src',"img/dado2.gif")
        params.style.opacity='1'
        let interval=setInterval(()=>{
            let ramdom=Math.floor(Math.random()*(50-0+1)+0)
            // console.log(ramdom)
            
            if (ramdom==0||ramdom==1||ramdom==2||ramdom==3||ramdom==4||ramdom==5) {
                let array=srcArray[ramdom]
                params.setAttribute('src',`${array}`)
               let puntos=parseInt( a.textContent)
                a.textContent=puntos+(ramdom+1)
                b.textContent=puntos+(ramdom+1)               
                if (otro.textContent=="0") {
                   otro.style.opacity='0.2'
                   otro.classList.remove('primero')
                   otro1.classList.add('primero')                   
                   params.style.opacity='0.2'
                   otro1.style.opacity='1'
                }
                if (otro.textContent==otro1.textContent) {
                    otro.classList.remove('primero')
                    otro1.classList.remove('primero')
                    params.setAttribute('src',`${array}`)                    
                    otro.style.opacity='0.2'
                    otro1.style.opacity='0.5'
                    setTimeout(()=>{
                       const alguien=document.getElementById('jugadorA')
                       const alguienChill=alguien.children                    
                       const resultadoArray=[].slice.call(alguienChill);
                       resultadoArray.forEach(element =>alguien.removeChild(element)) 
                       
                       const alguien1=document.getElementById('jugadorB')
                       const alguienChill1=alguien1.children                       
                       const resultadoArray1=[].slice.call(alguienChill1);
                       resultadoArray1.forEach(element =>alguien1.removeChild(element)) 
                       alguien.classList.add('clasepepe')
                       alguien1.classList.add('clasepepe')
                    if (parseInt(a.textContent)>parseInt(b.textContent)) {
                        const alguien=document.getElementById('jugadorA')
                        const alguien1=document.getElementById('jugadorB')
                        const display=document.querySelector('.displayG')

                        const replay=document.getElementById('replay')
                        const alguienChill1=replay.children                       
                        const resultadoArray1=[].slice.call(alguienChill1);
                        const enlace=document.getElementById('enlace')
                        enlace.classList.add('enlace1')
                        resultadoArray1.forEach(element =>replay.removeChild(element)) 
                        replay.innerHTML=' <img id="img" src="img/dado2.gif" alt="">'
                        display.style.opacity='0.5'
                       
                            alguien1.innerHTML='<p>You Win</p>'
                            alguien1.style.backgroundColor='#105652'
                            alguien.innerHTML='<p>Game Over</p>'
                            alguien.style.backgroundColor='#B91646'
             

                    }else{
                        const alguien=document.getElementById('jugadorA')
                        const alguien1=document.getElementById('jugadorB')
                        const display=document.querySelector('.displayG')
                        const replay=document.getElementById('replay')
                        const alguienChill1=replay.children                       
                        const resultadoArray1=[].slice.call(alguienChill1);
                        const enlace=document.getElementById('enlace')
                        enlace.classList.add('enlace1')
                        resultadoArray1.forEach(element =>replay.removeChild(element)) 
                        replay.innerHTML=' <img  id="img"src="img/dado2.gif" alt="">'
                        display.style.opacity='0.5'

                        alguien.innerHTML='<p>You Win</p>'
                        alguien.style.backgroundColor='#105652'
                        alguien1.innerHTML='<p>Game Over</p>'
                        alguien1.style.backgroundColor='#B91646'
                            
                    } 

                },1000)
                    
                } 
                activar=true
                clearInterval(interval)
            }
        
        },400)
}