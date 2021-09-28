var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#message");

function sumOfDOB(){
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    var sum = 0
    for (var i=0; i<dob.length; i++){
        sum += Number(dob[i]);
    }
    return sum;
}

function checkIfLucky(){
    sum = sumOfDOB();
    number = luckyNumber.value;
    if (sum&&number){
        if (sum % number === 0){
            showMessage("Yeaahh!! Your birthdate is lucky😍");
        }else{
            showMessage("Ooops!! Your birthdate is not lucky. But your are amazing🤗");
        }
    }else{
        showMessage("Kindly enter both the fields");
    }
    
}

function showMessage(msg){
    message.innerText = msg;
}

checkButton.addEventListener("click", checkIfLucky);