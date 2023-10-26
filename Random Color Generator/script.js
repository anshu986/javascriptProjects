const getcolor=()=>{
    const randomNumber= Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    document.getElementById("colorcode").innerText=randomCode;
    document.body.style.backgroundColor= randomCode;
    navigator.clipboard.writeText(randomCode);
}
const copyCode=()=>{
}
document.getElementById("btn").addEventListener("click",getcolor)

