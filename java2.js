//1 w html

//2
function fun(){
    alert("Możesz być z siebie dumny");
}
const two = document.querySelector("#dwa")
two.addEventListener('click',()=>{fun()})
console.log(two)
//3
function oknoConfirm(){
    let conf = confirm('Czy jesteś pewien, że chcesz kontynuować?');{
        if (conf)
            alert('No to kontynuuj...')
        else
            alert('Przykro mi, że nie chcsz kontynuować...')
    }
}
const tre = document.querySelector("#try")
tre.addEventListener('click',()=>{oknoConfirm()})
console.log(tre)
//4
function oknoPrompt(){
    let prom = prompt('Podaj swoje imię:')
    if (prom)
        alert('Witaj ' + prom )
    else
        alert('Anulowałeś akcję, a okienko zwróciło ' + prom )
}
const cre = document.querySelector("#cry")
cre.addEventListener('click', ()=>{oknoPrompt()})