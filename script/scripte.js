var valueRadio = null; //stor value
const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click',quiz)
function countDown(){
    for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = ``
                document.getElementById("quz").innerText = `` 
                quizStart()
            }
        }, (5 - i) * 1000);
    }
}

function quiz(){
    var fullname=document.getElementById("Fullname").value;
    if(fullname===""){
        document.getElementById("alert").innerText= `s'il vous plait Entre votre name`;
    }else{
        document.querySelector(".lance").innerHTML=`
        <article id="quz">
        <h1 class="quiz">Quiz well start in <br><span id="counter-to-start"></span></h1>
        </article>`
        countDown();
    }  
      }

    function quizStart(){
        
        document.getElementById("quz").innerText = `
        
        
        
        ` 

    }
