 var valueRadio = null; //stor value
 var Name = null;
 const btnStart = document.querySelector('#btnStart');
 // console.log(btnNext)
 btnStart.addEventListener('click', quiz);
 // btnNext.addEventListener('click',quizStart);

 let correct = 0;
 let echac = 0;

 function quiz() {
     var fullname = document.getElementById("Fullname").value;
     Name = fullname;
     console.log(Name)
     if (fullname === "") {
         document.getElementById("alert").innerText = `s'il vous plait Entre votre name`;
     } else {
         document.querySelector(".lance").innerHTML = `
        <article id="quz">
        <h1 class="quiz">Quiz well start in <br><span id="counter-to-start"></span></h1>
        </article>`
         countDown();
     }
 }


 function countDown() {
     for (let i = 5; i >= 0; i--) {
         setTimeout(() => {
             document.getElementById("counter-to-start").innerText = `${i}`
             if (i === 0) {
                 document.getElementById("counter-to-start").innerText = ``
                 document.getElementById("quz").innerText = ``

                 quizStart(0);
             }
         }, (1 - i) * 1000);
     }
 }

 function quizStart(id) {

     document.getElementById("quz").innerHTML = `
        <div id ="" class="" >
            <div id="fil" class="">
                <div class=""><span id='counter'>${id+1}</span>/10</div>
                <progress id="prog" value=${id+1} max="10">3</progress>
                </div>
                <p id="title">Q${id+1}: ${question[id].title}</p>
            <form class="" id="form">
            <div><input type="radio" class="qs" id="a"  name="fav"  >
            <label for="a">${question[id].options[0]}</label><br></div>
            <input type="radio" class="qs" id="b"  name="fav"  >
            <label for="b">${question[id].options[1]}</label><br>
            <input type="radio" class="qs" id="c"  name="fav"  >
            <label for="c">${question[id].options[2]}</label><br>
            <input type="radio" class="qs" id="d"  name="fav"  >
            <label for="d">${question[id].options[3]}</label><br>
            
            </form>
            <div class="btns" id="switchBtns">
               ${id==9 ? `<button id="previous" name="button" onclick=recuper(${id});resultat(); quizStart(${id+1}) class="inactive">Résultat</button>` :`<button id="next" onclick=recuper(${id});quizStart(${id+1}) name="button">Suivante</button>`} 
                
            </div>
        </div>
        `;
}



function recuper(id) {
   
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
            //console.log("errou")
            echac++;
        }
         console.log(correct)
         console.log(echac)
        
} 
function resultat(){
    document.getElementById("quz").innerHTML = 
    `<div class="resultat">
    <div class="name">${Name}</div>
    <div class= "correct"><p>Les réponses correcte est ${correct}</p></div>
    <div class="fausse">Les réponses fausse est ${echac}</div>
    ${correct>=9 ? `<div class="mention Tres"><p>mention : Tres bien</p> </div>`:correct>=7 ? `<div class="mention bien"><p>mention :  bien</p> </div>`:correct==6?`<div class="mention assez"><p>mention : Assez bien</p> </div>`:correct==5?`<div class="mention passable"><p>mention : Passable</p> </div>`:`<div class="mention danger"><p>mention : rattrapage</p> </div>`}
    <div class="btnansr"><button id="ans"  name="button" onclick=answer()>Answers</button></div>
    </div>`;
    
}
function answer(){document.getElementById("quz").innerHTML =  `<div class= "Answers"><pre>
Answers:
1) C – The ability to launch instances on demand when needed allows users to launch and terminate instances in
response to a varying workload. This is a more economical practice than purchasing enough on-premises servers
to handle the peak load.
2) B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains
fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS
can migrate data to and from most widely used commercial and open-source databases.
3) D – AWS Marketplace is a digital catalog with thousands of software listings from independent software
vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.
4) D – Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch
AWS resources in a virtual network that they define.
5) B – Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.
6) B – To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of
presence (edge locations and regional edge caches) worldwide.
7) C – Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a
username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be
prompted for their username and password (the first factor—what they know), as well as for an authentication
code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide
increased security for AWS account settings and resources.
8) B – AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their
AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events
include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs
and APIs.
9) A – Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for
every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the
performance of their Amazon SNS topics, push notifications, and SMS deliveries.
10) D – The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS
infrastructure. </pre>
<button id="previous" name="button" onclick=resultat() class="inactive">Resultat</button>
</div>
`}