
function plusOne() {
    console.log("Hello!")
    let number = document.getElementById("MyNumber").innerHTML;
    console.log("number", number)
    let add = parseInt(number) + 1;
    document.getElementById("MyNumber").innerHTML = add
}

function minusOne() {
    console.log("Hello!")
    let number = document.getElementById("MyNumber").innerHTML;
    console.log("number", number)
    let take = parseInt(number) - 1;
    document.getElementById("MyNumber").innerHTML = take
}
