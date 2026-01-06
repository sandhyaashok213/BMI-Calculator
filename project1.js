function CalculateBMI() {
    let weight=prompt("Enter the your weight in kg:");
    let height=prompt("Enter your height in meters:");
    let bmi=weight/(height*height);
    document.getElementById("result").innerText="Your BMI is : " + bmi.toFixed(2);
    if(bmi>=18.5&& bmi<25){
        document.getElementById("status").innerText="You are Healthy";
    }
    else if(bmi<18.5){
        document.getElementById("status").innerText="You are Underweight";
    }
    else{
        document.getElementById("status").innerText="You are Overweight";
    }
}