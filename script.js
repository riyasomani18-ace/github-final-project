//Function that computes the Simple Interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Variable that stores the calculation of the user's Simple Interest
    var interest = (principal * years * rate)/100;
    //Varaible that stores the future year
    var year = new Date().getFullYear()+parseInt(years);

    //Check if the input amount value by the user is a negative or zero
    if (principal <= 0)
    {
        //An alert will appear in the user's screen to enter valid input, and previous output will be cleared
        alert("Please enter a positive number.")
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML = "";
        return false;
    }

    //Message that is outputed once the calculation of the Simple Interest is completed
    document.getElementById("result").innerHTML = "<div style = 'text-align: center'> If you deposit <mark>" + principal + "</mark>, <br/> at an interest rate of <mark>" + rate + "%</mark>. <br/> You will receive an amount of <mark>" + interest + "</mark>, <br/> in the year <mark>" +(year) + "</mark>";

}
//Function that dynamically updates the interest rate when the slider is used
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";

}
