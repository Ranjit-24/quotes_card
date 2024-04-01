document.getElementById("button").addEventListener("click",()=>{
    console.log("hi")
    fetch("https://api.quotable.io/quotes/random").then((Response)=>{
    return Response.json()
}).then(data=>{
    console.log("fetch")
    quotes(data);
}).catch(e=>{
    alert("error",e)
})});
function quotes(array_data){
    const data = array_data[0];
    document.getElementById("quote").innerText=data.content;
    document.getElementById("author").innerText=data.author;
}