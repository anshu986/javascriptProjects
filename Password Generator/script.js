const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet="abcdefghijklmnopqrstuvwxyz"
const numberSet ="0123456789"
const symbolSet="!@#$%^&*()_-=+"

//selectors

const pass =document.getElementById("passWord")
const Length =document.getElementById("length")
const uppercase =document.getElementById("uppercase")
const lowercase =document.getElementById("lowercase")
const Numbers =document.getElementById("numbers")
const Symbols =document.getElementById("symbols")

const getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}
// console.log(getRandomData(upperSet))

const generatePassword=(password="")=>{
    if(uppercase.checked)
    {
        password+=getRandomData(upperSet);
    }
    if(lowercase.checked)
    {
        password+=getRandomData(lowerSet);
    }
    if(Numbers.checked)
    {
        password+=getRandomData(numberSet);
    }
    if(Symbols.checked)
    {
        password+=getRandomData(symbolSet);
    }
    if(password.length < Length.value)
    {
        return generatePassword(password)
    }
    console.log(password)
   
        const finalPassword=password.slice(0,Length.value)
        pass.innerText=finalPassword;
    
}
document.getElementById("btn").addEventListener("click",
    function(){
        generatePassword();
    }
)