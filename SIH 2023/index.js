
function print()
{
    var a = document.getElementById('main-input').value;
    document.getElementById('print').innerHTML = "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein. “Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi. “Stay away from those people who try to disparage your ambitions.";
    document.getElementById('main-input').value ='';
}
var input = document.getElementById('main-input');
input.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});