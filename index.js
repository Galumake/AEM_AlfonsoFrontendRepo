// var number = 5;
// let name ="shawn";
// document.writeln(name + number)
// alert("hello world!")

let hasJob =true;
if (hasJob){
    showMessage("Thanks for visiting, I'm currently employed")
}else{
    showMessage("Please look arond, I'm currently looking for a position")
}

function showMessage(message){
    document.writeln("<p>"+message+"</p>")
}