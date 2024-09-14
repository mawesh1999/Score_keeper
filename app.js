const player1_score = document.querySelector("#score1");
const player2_score = document.querySelector("#score2");

const player1_button = document.querySelector("#player1");
const player2_button = document.querySelector("#player2");
const reset = document.querySelector("#reset");

let select_box = document.querySelector("#drop");
let limit = select_box.value;

let score1 = player1_score.innerText;
let score2 = player2_score.innerText;

// ----------------change score-----------------
player1_button.addEventListener("click", () => {

    if (score1 ==limit || score2==limit){
        clean();
    }
    else{
        score1 = player1_score.innerText;
        score1++;
        player1_score.innerHTML = score1;
        check_limit();
    }
})

player2_button.addEventListener("click", () => {

    if (score1 ==limit || score2==limit){
        clean();
    }
    else{
        score2 = player2_score.innerText;
        score2++;
        player2_score.innerHTML = score2;
        check_limit();
    }
})

// ---------------------result----------------------
select_box.addEventListener("change",() => {
    limit = select_box.value;
    console.log(limit);
})


function check_limit(){
    if (score1==limit || score2==limit){
        if (score1 > score2){
            document.querySelector("#result").innerText = `Player1 Won with ${score1-score2} Points`;
            player1_score.style.color = "Green";
            player2_score.style.color = "red";
        }
        else{
            document.querySelector("#result").innerText = `Player2 Won with ${score2-score1} Points`;
            player1_score.style.color = "red";
            player2_score.style.color = "green";
        }
    }
}


// --------reset------

function clean(){
    player1_score.innerHTML = 0;
    player2_score.innerHTML = 0;
    document.querySelector("#result").innerText = "";
    score1 = 0;
    score2 = 0;
    
    player1_score.style.color = "";
    player2_score.style.color = "";
}
reset.addEventListener("click", clean);