const btnPlay=document.getElementById('botom')
const conteIncio=document.getElementById('conteIncio')
const loading=document.getElementById('loading')
const contemGame=document.getElementById('contenGame')
const circulo=document.querySelectorAll('.redondo')
const circuloArray=[].slice.call(circulo);
const[jugador1,jugador2]=circuloArray 

const srcArray=['img/uno.png','img/dos.png','img/tres.png','img/cuatro.png','img/cinco.png','img/seis.png']
 
btnPlay.addEventListener('click',e=>{
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
      const dado=document.getElementById('jugador2')
      const resultado=document.querySelectorAll('.numero2')
      const resultadoArray=[].slice.call(resultado);
      let[a,b]=resultadoArray
    //   console.log(resultado)
    if (jugador1.classList.contains('primero')) {
        pintar(dado,a,b)
    }
})

jugador2.addEventListener('click',e=>{
    const dado=document.getElementById('jugador1')
    const resultado=document.querySelectorAll('.numero1')
    // console.log(resultado)
    const resultadoArray=[].slice.call(resultado);
    let[a,b]=resultadoArray
    // console.log(a,b)
    if (jugador2.classList.contains('primero')) {
      
        pintar(dado,a,b)
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


function pintar(params,a,b) {
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
                clearInterval(interval)
            }
        
        },400)
}