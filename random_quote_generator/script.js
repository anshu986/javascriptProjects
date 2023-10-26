const quotes=[
    'Eighty percent of success is showing up.',
    'If at first you dont succeed, try, try again.',
    'If you can dream it, you can do it',
    'The most important thing is to enjoy your life - to be happy - it\' all that matters.',
    'Your time is limited, don\'t waste it living someone else\'s life.',
    'Life is what we make it and how we make it , whether we realize it or not.',
    'You only live once, but if you do it right, once is enough.',
    'If you don\'t build your dream, someone else will hire you to help them build theirs',
    'People often say that motivation doesn\'t last. Well, neither does bathing. That\'s why we recommend it daily.',
    'Never give up because you never know if the next try is going to be the one that works'

]
const by=["-Woody Allen","-W. E. Hickson","-Walt Disney","-Steve Jobs","-Steve Jobs","-Mae West","-Napoleon Hill","-Tony Gaskins","-Zig Ziglar","-Mary Kay Ash"]
const button=document.querySelector(".btn");
var thought=document.querySelector("#thought");
var sayer=document.querySelector("#by");
var a;
button.addEventListener("click",()=>{
     a=Math.floor(Math.random()*10);
    thought.innerText=quotes[a];
    sayer.innerHTML=by[a];


})
const copy=document.querySelector(".fa-copy");
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(quotes[a]+by[a]);
    alert("QUOTE IS COPIED");
})