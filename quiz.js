function check() 
{
    let c=0;
    let q1=document.quiz.question1.value;
    let q2=document.quiz.question2.value;
    let q3=document.quiz.question3.value;
    let q4=document.quiz.question4.value;
    let q5=document.quiz.question5.value;

    let result=document.getElementById('result'); 
    let quiz=document.getElementById("quiz");
    if(q1==="Javascript") {c++}
    if(q2==="Russia") {c++}
    if(q3==="Delhi") {c++}
    if(q4==="Coronavirus") {c++}
    if(q5==="Twelve") {c++}
    console.log(c);

    quiz.style.display="none";
    
    result.innerText="Your answer is "+c;

}