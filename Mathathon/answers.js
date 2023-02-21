
let score = 0;
let incorrect = 0;
let correct = 0, correctAdd = 0, correctSub = 0;
let my_answer = 0;
let answered = false;
let plays = 0;
//substrings
let section = "", expression = "";
let qNumber = 1, percentage = 0,percentageAdd = 0, percentageSub = 0;
let a = 0; //incrementer
 
const Addition = ["1 + 1","1 + 2","1 + 3","1 + 4","1 + 5","1 + 6","1 + 7",
                  "1 + 8","1 + 9","1 + 10","10 + 1","9 + 1","8 + 1","7 + 1",
                  "4 + 1","3 + 1","2 + 1","2 + 2","2 + 3","2 + 4","2 + 5","2 + 6",
                  "2 + 7","2 + 8","2 + 9","2 + 10","10 + 2","9 + 2","8 + 2","7 + 2"
                 ,"6 + 2","5 + 2","4 + 2","3 + 2","3 + 3","3 + 4","3 + 5","3 + 6"
                 ,"3 + 7","3 + 8","3 + 9","3 + 10"]; //42
 
const AddAnswered = [false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,false
                        ,false,false,false,false,false,false,false,false
                        ,false,false,false,false];

const Addi = [1 + 1,1 + 2,1 + 3,1 + 4,1 + 5,1 + 6,1 + 7,
                  1 + 8,1 + 9,1 + 10,10 + 1,9 + 1,8 + 1,7 + 1,
                  4 + 1,3 + 1,2 + 1,2 + 2,2 + 3,2 + 4,2 + 5,2 + 6,
                  2 + 7,2 + 8,2 + 9,2 + 10,10 + 2,9 + 2,8 + 2,7 + 2
                 ,6 + 2,5 + 2,4 + 2,3 + 2,3 + 3,3 + 4,3 + 5,3 + 6
                 ,3 + 7,3 + 8,3 + 9,3 + 10];
const Add = {
    incr: 1,
    Section: "Addition",
    array: Addition,
    array2: Addi,
    array3:AddAnswered,
    complete: false
}

const subtraction = ["1 - 1","1 - 2","1 - 3","1 - 4","1 - 5","1 - 6","1 - 7",
                    "1 - 9","1 - 10","10 - 1","9 - 1","8 - 1","7 - 1","5 - 1",
                    "4 - 1","3 - 1","2 - 1","0 - 1","2 - 2","2 - 3" ,"2 - 4",
                    "2 - 5","2 - 6","2 - 7","2 - 8","2 - 9","2 - 10","10 - 2",
                    "9 - 2","8 - 2","7 - 2","3 - 3","3 - 4","3 - 5","3 - 6","3 - 7",
                    "3 - 8","3 - 9","3 - 10","6 - 2","5 - 2","4 - 2","3 - 2"]; 
 
const subi = [1 - 1,1 - 2,1 - 3,1 - 4,1 - 5,1 - 6,1 - 7,
                    1 - 9,1 - 10,10 - 1,9 - 1,8 - 1,7 - 1,5 - 1,
                    4 - 1,3 - 1,2 - 1,0 - 1,2 - 2,2 - 3 ,2 - 4,
                    2 - 5,2 - 6,2 - 7,2 - 8,2 - 9,2 - 10,10 - 2,
                    9 - 2,8 - 2,7 - 2,3 - 3,3 - 4,3 - 5,3 - 6,3 - 7,
                    3 - 8,3 - 9,3 - 10,6 - 2,5 - 2,4 - 2,3 - 2]; //43 0 - 42

const subAnswered = [false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,false,
                        false,false,false,false,false,false,false,false
                        ,false,false,false,false,false,false,false,false
                        ,false,false,false,false,false]; 

const sub = {
    incr: 0,
    Section: "Subtraction",
    array: subtraction,
    array2: subi,
    array3:subAnswered,
    complete: false
}

//current details
document.getElementById("sect").innerHTML = Add.Section;
document.getElementById("expr").innerHTML = Add.array[0];

my_answer = Add.array2[a];
document.getElementById("question").innerHTML = "Question "+qNumber;

function next() {
    // if(!answered) {alert("Question not answered"); return;}
    if(!Add.array3[Add.incr] || !sub.array3[sub.incr]) {
        if (!(Add.complete)) { //inverted
            if(Add.incr >= Add.array.length)
                Add.complete = true; //all add questions completed
            section = Add.Section;
            a = Add.incr++;
            expression = Add.array[a];
            my_answer = Add.array2[a]; //answer
        }
        if (!(sub.complete) && (Add.complete)) {

            if(sub.incr >= sub.array.length)
                sub.complete = true;
            section = sub.Section;
            a = sub.incr++;
            expression = sub.array[a];
            my_answer = sub.array2[a]; //answer  
        }
        if(document.getElementById("expr").value === expression) //error exp did not change
            return;
        document.getElementById("sect").innerHTML = section; 
        document.getElementById("expr").innerHTML = expression;
            
        document.getElementById("question").innerHTML =  "Question "+ (a+1);

        answered = false;
        document.getElementById("expr").style.visibility = "hidden";
        catchBreath();
    }
    
}

function compare() {
    // alert(document.getElementById("digital").value); //j query
    var answer = document.getElementById("answer").value;
    // if (answer === "" && (!answered)) {alert("Please answer");return;}

    if((Add.array3[a] && (!Add.complete)) || (sub.array3[a] && (!sub.complete))) {
        alert("Already answered, click next");
        return;
    }

    //updating question status
    if(sub.incr === 0) {
        Add.array3[a] = true;
    }
    if(Add.complete) {
        sub.array3[a] = true;
    }
    answered = true; //current question status
    if (parseInt(answer) === my_answer) {
        score += 5; //should hide and show at the end with loading bar
        correct++;
        document.getElementById("load_bar").style.width = correct + "%"; // use animations to change the color of the bar as it grows
        document.getElementById("score").innerHTML = "Score: "+score;
        
        
        //clear field
        document.getElementById("answer").value = ""; 
    }else {
         
        incorrect++;
        document.getElementById("answer").value = ""; //clear 
    }

    if(Add.incr === Add.array.length && sub.incr === 0) {
        percentageAdd = (correct/Add.array.length)*100;
        correctAdd = correct;
        alert("Congratulations, "+ "Score: "+ percentageAdd + "%");
        alert("Not done yet!. Next section: Subtraction");
        // document.getElementById("load_bar").style.display = "block";
        // document.getElementById("score").style.display = "block";
    }
    if(sub.incr === sub.array.length) {
        percentageSub = ((correct - correctAdd)/sub.array.length)*100;
        correctSub = correct - correctAdd;
         
        const TotalPercentage = ((percentageAdd + percentageSub) / (200))*100;
        alert("Congratulations, Addition: "+percentageAdd +"% , "+"Subtraction: "+ percentageSub + "% , "+ "Total Percentage: "+TotalPercentage + "%"); //add page within this page to show data, graphs etc
        if(percentageAdd < 50)
            alert("You need to improve your addition skills!");

        if(percentageSub < 50) 
            alert("You need to improve your subtraction skills!");
        
        //show restart button
        document.getElementById("start").style.display = "none";
        document.getElementById("restart").style.display = "block";
       
        
        //add page within this page to show data, graphs on updated projectetc
        //display score, loadbar with other details
        // document.getElementById("load_bar").style.display = "block";
        // document.getElementById("score").style.display = "block";
        
    }
} 


var second = 0;
var minute = 0;
var hour = 0;
var countDown = 15;
var startTime = 10; //catch your breath


function startTimer() {
    const time = setInterval(
        function() {
            d = new Date();
            second = d.getSeconds() * 6;
            minute = d.getMinutes() * 6;
            hour = d.getHours() * 30;
            
            // document.getElementById("digital").innerHTML = hour/30 + ":" + minute/6 + ":" + second/6;
            document.getElementById("digital").innerHTML = countDown--;
            
            document.getElementById("second").style.transform = "rotate("+ second + "deg)";
            document.getElementById("minute").style.transform = "rotate("+ minute + "deg)";
            document.getElementById("hour").style.transform = "rotate("+ hour + "deg)";

            if(countDown === 0) { //stop the timer
                clearInterval(time);
            }
            if(countDown === 0) {
                compare();
                next();
            }
            
            
        }, 1000
    )
}

function catchBreath() {
    countDown = 15; //initialize
    startTime = 10;
    document.getElementById("start").disabled = true;
    const time2 = setInterval(
        function() {
            document.getElementById("digital").innerHTML = "Catch Your Breath: " + startTime--;

            if(startTime === 0) 
                clearInterval(time2);

            if(startTime === 0) {
                document.getElementById("expr").style.visibility = "visible";
                startTimer();
            }
            
        }, 1000
    )
}

function reload() {
    location.reload();
}

//Attach a pdf of math problems

//Advanced
//division
//Multiplication
//Bodmas
