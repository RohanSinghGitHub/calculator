function Hello(val) {

        document.getElementById("inp").value = document.getElementById("inp").value + val;
}

function calculate() {
        var a = document.getElementById("inp").value;
        var x = eval(a);
        document.getElementById("inp").value = x;
}

function emp() {
        document.getElementById("inp").value = ""
}