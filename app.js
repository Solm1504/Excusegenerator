const what = ["Carne", "Pollo", "Pescado", "Conejo"];    
const whit = ["con pasta", "con arroz", "con puré de patatas", "con ensalada"];
const how = ["y vino blanco","y vino tinto", "y agua", "y coca-cola"];

function getRandomNumber(array){
    return Math.floor(Math.random() * array.length)
}

function getMessage (whatIndex, whitIndex, howIndex){
    alert (what[whatIndex] +" " + whit[whitIndex]+ " " + how[howIndex])
}

function generarexcusa (){
    const whatIndex= getRandomNumber(what);
    const whitIndex = getRandomNumber(whit);
    const howIndex = getRandomNumber(how);
    getMessage (whatIndex, whitIndex, howIndex)
}