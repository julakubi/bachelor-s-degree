Quiz=[{
correct: "A",
id: "1",
option1: "Paweł I",
option2: "Katarzyna Wielka",
option3: "Aleksander I",
option4: "Piotr Wielki",
question: "Który car uwolnił Kościuszkę z więzienia?"},
{
correct: "B",
id: "2",
option1: "Adam Kazimierz Czartoryski",
option2: "Józef Poniatowski",
option3: "Hugo Kołłątaj",
option4: "Jan Henryk Dąbrowski",
question: "Kto był dowódcą wojsk polskich w wojnie polsko-rosyjskiej w 1792 roku?"
}
]
let number=0
let points=0
let maxPoints=Quiz.length
let ans='N'
let userA=[]

data = document.getElementById("quizData") 
place = document.getElementById("quizOptions") 
chQ= document.getElementById("chQ") 
placeToListAns = document.getElementById("placetoListAns")

function whatQuestion()
{
    ans='N'
    if (number===Quiz.length)
    {
 
        data.innerHTML="<h3>Zdobyłeś "+points+"/"+maxPoints+" punktów</h3>"
        number=0
        place.innerHTML="<button id='chYQuiz'onclick='checkYourQuiz()'>Odpowiedzi</button>"
        place.innerHTML+="<button id='oneMore' onclick='oneMoreTime()'>Zrób jeszcze raz</button>"


    }
    else
    {
        
        buildQuiz()
     
    }

}
function buildQuiz()
{
    data.innerHTML="<h3>Pytanie "+(number+1)+"</h3>"
    question=Quiz[number].question
    A=Quiz[number].option1
    B=Quiz[number].option2
    C=Quiz[number].option3
    D=Quiz[number].option4

    data.innerHTML+="<p id='question'>"+question+"<p>"
    place.innerHTML="<button id='A' value='A' onclick='clickA()'>A. "+A+"</button>"
    place.innerHTML+="<button id='B' value='B' onclick='clickB()'>B. "+B+"</button>"
    place.innerHTML+="<button id='C' value='C' onclick='clickC()'>C. "+C+"</button>"
    place.innerHTML+="<button id='D' value='D' onclick='clickD()'>D. "+D+"</button>"
    // document.getElementById("A").style.backgroundColor="rgb(187, 187, 187)"
    // document.getElementById("B").style.backgroundColor="rgb(187, 187, 187)"
    // document.getElementById("C").style.backgroundColor="rgb(187, 187, 187)"
    // document.getElementById("D").style.backgroundColor="rgb(187, 187, 187)"



        place.innerHTML+="<button id='next' onclick='isAns()'>Następne pytanie</button>"
}
function isAns()
{ if(ans!="N")
    {
    ifCorrect()
    }
}
function clickA() {
    if(document.getElementById("A").style.backgroundColor==="rgb(240, 211, 158)")
    {
        document.getElementById("A").style.backgroundColor="rgb(187, 187, 187)";

        ans='N'
    }
    else {
    document.getElementById("A").style.backgroundColor="rgb(240, 211, 158)";
    document.getElementById("B").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("C").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("D").style.backgroundColor="rgb(187, 187, 187)"
    ans='A'
    }
  }
  function clickB() {
    if(document.getElementById("B").style.backgroundColor=="rgb(240, 211, 158)")
    {
        document.getElementById("B").style.backgroundColor="rgb(187, 187, 187)";

        ans='N'
    }
    else {
    document.getElementById("B").style.backgroundColor="rgb(240, 211, 158)";
    document.getElementById("A").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("C").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("D").style.backgroundColor="rgb(187, 187, 187)"
    ans='B'
    }
  }
  function clickC() {
    if(document.getElementById("C").style.backgroundColor=="rgb(240, 211, 158)")
    {
        document.getElementById("C").style.backgroundColor="rgb(187, 187, 187)";

        ans='N'
    }
    else {
    document.getElementById("C").style.backgroundColor="rgb(240, 211, 158)";
    document.getElementById("B").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("A").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("D").style.backgroundColor="rgb(187, 187, 187)"
    ans='C'
    }
  }
  function clickD() {
    if(document.getElementById("D").style.backgroundColor=="rgb(240, 211, 158)")
    {
        document.getElementById("D").style.backgroundColor="rgb(187, 187, 187)";

        ans='N'
    }
    else {
    document.getElementById("D").style.backgroundColor="rgb(240, 211, 158)";
    document.getElementById("B").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("C").style.backgroundColor="rgb(187, 187, 187)"
    document.getElementById("A").style.backgroundColor="rgb(187, 187, 187)"
    ans='D'
    }
  }

function ifCorrect()
{
    
    if(ans==Quiz[number].correct)
    {
        points=points+1
    }
    userAns()
}
function userAns()
{
    userA[number]=ans
    number=number+1
    whatQuestion()
}
function numbersOfQuestions()
{

    for(i=0; i<Quiz.length; i++)
    {
        if(userA[i]===Quiz[i].correct)
        {
        listAns.innerHTML+="<button class='numberQuestionButton' id='"+number+"' style='background-color:rgb(0, 194, 97)' onclick='goToQuestion("+ i +")'>"+(i+1)+"</button>"
        }
        else
        {
        listAns.innerHTML+="<button class='numberQuestionButton' id='"+number+"' style='background-color:#dd0707' onclick='goToQuestion("+ i +")'>"+(i+1)+"</button>"
        }
    }
}
function goToQuestion(questionNumber)
{
number=questionNumber
checkYourQuiz()
}

function checkYourQuiz()
{   m= document.getElementById("m")
    m.innerHTML=""
    document.getElementById("m").style.visibility="visible";
    data.innerHTML=""
    place.innerHTML+="<button onclick='Next()'>Następne pytanie</button>"
    m.innerHTML+="<div id='listAns'></div>"
    listAns = document.getElementById("listAns")
    listAns.innerHTML=""
    listAns.innerHTML+="<h3 id='textListAns'>Pytania:</h3>"
    numbersOfQuestions()
    question=Quiz[number].question
    A=Quiz[number].option1
    B=Quiz[number].option2
    C=Quiz[number].option3
    D=Quiz[number].option4

   
    place.innerHTML="<div id='A'><p>A. "+A+"</p>"
    place.innerHTML+="<div id='B'><p>B. "+B+"</p>"
    place.innerHTML+="<div id='C'><p>C. "+C+"</p>"
    place.innerHTML+="<div id='D'><p>d. "+D+"</p>" 
    if(userA[number]==Quiz[number].correct)
    {
        data.innerHTML+="<h3>Pytanie "+(number+1) + "  " + '<span style=" color:rgb(0, 194, 97)">    dobrze! </span></h3>'
        document.getElementById(userA[number]).style.color="rgb(0, 194, 97)"
        document.getElementById(userA[number]).style.fontWeight="bold"
    }
    else
    {
        data.innerHTML+="<h3>Pytanie "+(number+1) + "  " +'<span style=" color:#dd0707">    źle! </span></h3>'
        document.getElementById(Quiz[number].correct).style.color="rgb(0, 194, 97)"
        document.getElementById(Quiz[number].correct).style.fontWeight="bold"
        document.getElementById(userA[number]).style.color="#dd0707"
        document.getElementById(userA[number]).style.fontWeight="bold"
    }
    data.innerHTML+="<p id='question'>"+question+"<p>"
    place.innerHTML+="<button id='chYQuiz' onclick='toLastNumber()'>Wynik</button>"
    place.innerHTML+="<button id='nextAns' onclick='Next()'>Następne pytanie</button>"
    
}
function toLastNumber()
{
    number=Quiz.length-1
    Next()
}
function Next()
{

    number=number+1
    if (number===Quiz.length)
    {
        document.getElementById("m").style.visibility="hidden";
        data.innerHTML="<h3>Zdobyłeś "+points+"/"+maxPoints+" punktów</h3>"
        number=0
        place.innerHTML="<button id='chYQuiz' onclick='checkYourQuiz()'>Sprawdź swoje odpowiedzi</button>"
        place.innerHTML+="<button id='oneMore' onclick='oneMoreTime()'>Zrób jeszcze raz</button>"


    }
    else
    {  
        checkYourQuiz()
    }
}
function oneMoreTime()
{
    document.getElementById("m").style.visibility="hidden";
    points=0
    number=0
    ans='N'
    userA=[]
    whatQuestion()
}