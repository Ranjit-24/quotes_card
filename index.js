function quotefetch(){
    fetch("https://api.quotable.io/quotes/random")
    .then((Response) => Response.json()).then((data)=>quotes(data[0]))
    .catch(console.log("error"))
}
function quotes(data){
    document.getElementById("quote").innerText=data.content;
    document.getElementById("author").innerText=data.author;
}
addEventListener("keydown",(event)=>event.key=="Enter" && quotefetch())


