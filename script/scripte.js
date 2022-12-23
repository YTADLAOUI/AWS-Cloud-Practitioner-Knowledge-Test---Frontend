var valueRadio = null; //stor value
const btnStart = document.querySelector('#btnStart');
const qu1 = document.getElementById('#next');
const qu2 = document.getElementById('#qu2');
const qu3 = document.getElementById('#qu3');
const qu4 = document.getElementById('#qu4');

// console.log(btnNext)

btnStart.addEventListener('click',quiz);
// btnNext.addEventListener('click',quizStart);
function countDown(){
    for (let i = 1; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = ``
                document.getElementById("quz").innerText = `` 

                quizStart(0)
            }
        }, (1 - i) * 1000);
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


function quizStart(id){
        
        
        document.getElementById("quz").innerHTML = `
        <div id ="" class="" >
            <div id="fil" class="">
                <div class=""><span id='counter'>${id+1}</span>/10</div>
                <progress id="prog" value=${id+1} max="10">3</progress>
                </div>
                <p id="title">Q${id+1}: ${question[id].title}</p>
            <form class="" id="form">
            <div><input type="radio" id="qu1" name="fav_language" value="ql">
            <label for="q1">${question[id].options[0]}</label><br></div>
            <input type="radio" id="qu2" name="fav_language" value="ql">
            <label for="q1">${question[id].options[1]}</label><br>
            <input type="radio" id="qu3" name="fav_language" value="ql">
            <label for="q1">${question[id].options[2]}</label><br>
            <input type="radio" id="qu4" name="fav_language" value="ql">
            <label for="q1">${question[id].options[3]}</label><br>
            
            </form>
            <div class="btns" id="switchBtns">
                ${id==0 ? "" :`<button id="previous" name="button" onclick=quizStart(${id-1}) class="inactive">Précédent</button>`}
                <button id="next" onclick=quizStart(${id+1}) name="button">Suivante</button>
                ${id==9 ? `<button id="previous" name="button" onclick= class="inactive">Résultat</button>` :""}
            </div>
        </div>
        ` ;
        // x++;
        
    
    
console.log(id);
}
