var valueRadio = null; //stor value
const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click',quizStart)
function countDown(){
    for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = `let's Go`
                quizStart()
            }
        }, (5 - i) * 1000);
    }
}

function quizStart(){
    var fullname=document.getElementById("Fullname").value;
    if(fullname===""){
        document.getElementById("alert").innerText= `s'il vous plait Entre votre name`;
    }else{
        document.querySelector(".lance").innerHTML=`
        <article>
        <h1>Quiz well start in <br><span id="counter-to-start"></span></h1>
        </article>`
        countDown();
    }
        
      }
