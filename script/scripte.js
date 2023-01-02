question.sort(function(){ return Math.random() - 0.5;});
 var valueRadio; //stor value
 var Name;
 //var num;
  var repenseQ;
//  var numarr;
 let array=[];
 const btnStart = document.querySelector('#btnStart');
 let step2 = document.querySelector(".step-2");
 let step1 = document.querySelector(".step-1");
 let step3 = document.querySelector(".step-3");
 let votre = [];
 let vote;
 
// question.forEach((key)=>{
//     let chirororo = key.options[0];
//     console.log(Object.entries(chirororo))
    
// })
 // console.log(btnNext)
 btnStart.addEventListener('click', quiz);
 // btnNext.addEventListener('click',quizStart);
 let correct  = 0;
 let echac    = 0;
 let conteur  = -1;
 let conteur1 = 0;
 function quiz() {
     var fullname = document.getElementById("Fullname").value;
     Name = fullname;
     //console.log(Name)
     if (fullname === "") {
         document.getElementById("alert").innerText = `s'il vous plait Entre votre name`;
     } else {
         document.querySelector(".lance").innerHTML = `
        <article id="quz">
        <h1 class="quiz">Quiz well start in <br><span id="counter-to-start"></span></h1>
        </article>`
        // random();
        
        countDown();
        step2.classList.add('circle-acitve');
        step1.classList.remove('circle-acitve');
     }
 }
//  function random(){
//     if(conteur<=9){
//      do {
//          random_number = Math.floor(Math.random() * (question.length));
//      } while (array.includes(random_number));

//     //  while (array.includes(random_number)){
//     //     random_number = Math.floor(Math.random() * (question.length));
//     //  }
//         array.push(random_number) ;
//         numarr = array[conteur] ;
//         // console.log(numarr,"variable")
//         //  console.log(array[conteur],"arr")
//         //  console.log(conteur,"c++")
//          conteur++;
//          console.log(numarr)
//     }
//  }
 function countDown() {
     for (let i = 1; i >= 0; i--) {
         setTimeout(() => {
             document.getElementById("counter-to-start").innerText = `${i}`
             if (i === 0) {
                 document.getElementById("counter-to-start").innerText = ``
                 document.getElementById("quz").innerText = ``
                 //Suivent.style.display="none";
                  quizStart(0);
                  
             }
         }, (1 - i) * 1000);
     }
 }
//  function countDowns(par) {
    
//      for (let i = 30; i >= 0; i--) {
//          setTimeout(() => {
//              document.getElementById("countdown").innerText = `${i}`
//              if (i === 0) {
//                 document.getElementById("countdown").innerText = ``
//                   quizStart(par);
//                   recuper(par-1)
//              }
//          }, (30 - i) * 1000);
//      }
//  }
 

 function quizStart(id) {
    //let Suivent = document.querySelector("#next");
    //console.log(Suivent)
    //console.log(id)
    //document.getElementById("countdown").innerText = ``
    num=id
    //countDowns(num+1)
    // Math.floor(Math.random() * question.length +1)
   
     document.getElementById("quz").innerHTML = `       
        <div id ="" class="" >
            <div id="fil" class="">
                <div class=""><span id='counter'>${conteur1+1}</span>/10</div>
                <div class=""global><progress id="prog" value=${conteur1+1} max="10">3</progress></div>
                </div>
               <div class="global"><p class="tt" id="title">Q ${conteur1+1}: ${question[id].title}</p></div> 
            <div class="display"><input type="radio" class="qs" id="a"  name="fav"  >
            <div class="global"><label class="ll" for="a">${question[id].options[0].a}</label><br></div></div>
            <div class="display"><input type="radio" class="qs" id="b"  name="fav"  >
            <div class="global"><label class="ll" for="b">${question[id].options[0].b}</label><br></div></div>
            <div class="display"><input type="radio" class="qs" id="c"  name="fav"  >
            <div class="global"><label class="ll" for="c">${question[id].options[0].c}</label><br></div></div>
            <div class="display"><input type="radio" class="qs" id="d"  name="fav"  >
            <div class="global"><label class="ll" for="d">${question[id].options[0].d}</label><br></div></div>
            <div class="btns" id="switchBtns">
               ${conteur1==9 ? `<button id="previous" name="button" onclick=recuper(${id});resultats(); class="inactive">Résultat</button>` :`<button id="next" class="next" onclick=recuper(${id});quizStart(${id+1}) name="button">Suivante</button>`} 
            </div>
        </div>
        `
        
        //console.log(numarr);
        conteur1++
}
function recuper(id) {
    let inputs =document.getElementsByName("fav");
    console.log(id);
    console.log(inputs);
    const destts = document.querySelectorAll('.qs');
    destts.forEach(destt => {
            //    console.log(destt.checked)
            if (destt.checked) {
                // console.log(destt.id == question[id].answer, "comparision")
                // console.log(destt.id, "user")
                // console.log(question[id].answer, "data")
                valueRadio=destt.id ;
            }
        }
        )
        if (valueRadio == question[id].answer) {
            //console.log("yes")
            correct++;
            
        } else {
            //let v =Object.keys(question[0].options[0]);
      
                // console.log(v);
                // v.forEach(key=>{
                // if(key=question[0].answer){

                //                         }})
            
            console.log(valueRadio);
            console.log(question[id].options[0].valueRadio);
            //votre.push(vote);
            repenseQ=question[id].repense;
            //console.log(repenseQ);
            array.push(repenseQ);
            //console.log("errou")
            echac++;
        }
        //console.log(array)
         //console.log(correct)
         //console.log(echac) 
         
         
} 
function resultats(){
    document.getElementById("quz").innerHTML = 
    `<div class="resultat">
    <div class="name">${Name}</div>
    <div class= "correct"><p>Les réponses correctes est ${correct}</p></div>
    <div class="fausse">Les réponses fausses est ${echac}</div>
    ${correct>=9 ? `<div class="mention Tres"><p>mention : Tres bien</p> </div>`:correct>=7 ? `<div class="mention bien"><p>mention :  bien</p> </div>`:correct==6?`<div class="mention assez"><p>mention : Assez bien</p> </div>`:correct==5?`<div class="mention passable"><p>mention : Passable</p> </div>`:`<div class="mention danger"><p>mention : rattrapage</p> </div>`}
    <div class="btnansr"><button id="ans"  name="button" onclick=answer()>Answers</button></div>
    </div>`;
        step3.classList.add('circle-acitve');
        step2.classList.remove('circle-acitve');
}

function answer(){

    document.getElementById("quz").innerHTML =  ``
    document.querySelector(".lance").style.display = "none";
    //     console.log(array,"F")
    document.querySelector('.tit').innerHTML=`Answers des repenses fausses:`
    for (let i = 0; i < array.length; i++) {
        document.querySelector('#results').innerHTML +=  `
        <div class = "ans">${array[i]}</div>
        `
        
    }
}
