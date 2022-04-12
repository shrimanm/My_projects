const quizdata = [
    {
        question:'how old are u',
        a:'10',
        b:'20',
        c:'30',
        d:'40',
        correct: 'b'
    },{
        question:'which is best programming language',
        a:'c',
        b:'c++',
        c:'pythno',
        d:'java',
        correct:'d'
    },{
        question:'who is the prime minister of india',
        a:'me',
        b:'you',
        c:'modi',
        d:'we',
        correct:'c'
    },{
        question:'which is best programming language',
        a:'c',
        b:'c++',
        c:'pythno',
        d:'java',
        correct:'d'
    },{
        question:'what does html syands for',
        a:'lalala',
        b:'hyper text markup language',
        c:'facavsfq',
        d:'hyper text markup langage',
        correct:'b'
    }
];

const question1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
const answerels = document.querySelectorAll('.answer');

const quiz = document.getElementById('quiz');



let currentquestion = 0;
let score = 0;
loadquiz();

function loadquiz(){
    deselect();
    const currentquizdata = quizdata[currentquestion];
question1.innerText = currentquizdata.question;

a_text.innerText=currentquizdata.a;
b_text.innerText=currentquizdata.b;
c_text.innerText=currentquizdata.c;
d_text.innerText=currentquizdata.d;


}

function deselect(){
    answerels.forEach((answerele) =>{

        answerele.checked = false;
    });
}

function getselected(){
    const answerels = document.querySelectorAll('.answer');
    let answer = undefined;

    answerels.forEach((answerele) => {

        if(answerele.checked){
            answer = answerele.id;
        }

    });
return answer;
}

submitbtn.addEventListener('click',() =>{
const answer = getselected();

    if(answer){
        if(answer === quizdata[currentquestion].correct){
            score++;
        }
        currentquestion++; 
        if(currentquestion < quizdata.length){
            loadquiz();
        }
        else{
            quiz.innerHTML = `<h2> you answered ${score}/${quizdata.length}
            <button onclick="location.reload()">attempt again</button>`
        }
    }

    

});







