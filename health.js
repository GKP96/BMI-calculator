function add() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var str = document.getElementById("name").value;
    if (n1 == "" || n2 == '' || str == '') {
        alert("Please! Fill all the fields...");
    }
    else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        var c = n1 / ((n2 / 100) * (n2 / 100));
        document.getElementById("res").innerHTML = "Your BMI value is : " + c;
        if (c >= 25) {

            window.location.href = "overweight.html";
        }
        else if (c < 25 && c > 18.5) {
            window.location.href = "normal.html";
        }
        else {
            window.location.href = "underweight.html";
        }
    }
}