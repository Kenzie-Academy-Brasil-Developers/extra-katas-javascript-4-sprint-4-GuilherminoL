let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

let lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const printText = (element, type) => {
    let newElement = document.createElement(type)
    newElement.textContent = JSON.stringify(element)
    document.body.appendChild(newElement)
}

function kata1() {
    printText('Kata1','h1')
    let arr = gotCitiesCSV.split(',')
    printText(arr,'div')
    return arr
}
kata1()

function kata2() {
    printText('Kata2','h1')
    let arr = bestThing.split(' ')
    printText(arr,'div')
    return arr
}
kata2()

function kata3() {
    printText('Kata3','h1')
    let str = gotCitiesCSV.replaceAll(',',';')
    printText(str,'div')
    return str
}
kata3()

 function kata4() {
     printText('Kata4','h1')
     let str = lotrCitiesArray.join()
     printText(str,'div')
     return str
 }
 kata4()

 function kata5() {
     printText('Kata5','h1')
     let arr = []
     for ( let i = 0; i < 5; i++){
         arr.push(lotrCitiesArray[i])
     }
     printText(arr,'div')
    return arr

 }
 kata5()

 function kata6(){
     printText('kata6','h1')
     let arr =[]
     for ( let i = 5; i > 0; i--){
        arr.push(lotrCitiesArray[lotrCitiesArray.length -i])
    }
    printText(arr,'div')
    return arr
 }
 kata6()

 function kata7(){
     printText('kata7','h1')
     let arr =[]
     for(let i = 4; i <= 6; i++){
         arr.push(lotrCitiesArray[i])
     }
     printText(arr,'div')
     return arr
 }
 kata7()

function kata8(){
    printText('Kata8','h1')
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Rohan'),1)
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata8()

function kata9(){
    printText('Kata9','h1')
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Dead Marshes')+1)
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata9()

function kata10() {
    printText('Kata10','h1')
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Gondor')+1,0,'Rohan')
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata10()

function kata11() {
    printText('Kata11','h1')
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Dead Marshes'),1,'Deadest Marshes')
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata11()

function kata12() {
    printText('Kata12','h1')
    let arr = bestThing.slice(0,14)
    printText(arr,'div')
    return arr
}
kata12()

function kata13() {
    printText('Kata13','h1')
    let arr = bestThing.slice(-12)
    printText(arr,'div')
    return arr
}
kata13()

function kata14() {
    printText('Kata14','h1')
    let arr = bestThing.slice(23,38)
    printText(arr,'div')
    return arr
}
kata14()

function kata15() {
    printText('Kata15','h1')
    let arr = bestThing.substring(bestThing.length -12)
    printText(arr,'div')
    return arr
}
kata15()

function kata16() {
    printText('Kata16','h1')
    let arr = bestThing.substring(23,38)
    printText(arr,'div')
    return arr
}
kata16()

let lastCity = ''

function kata17() {
    printText('Kata17','h1')
    lastCity = lotrCitiesArray.pop()
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata17()

function kata18() {
    printText('Kata18','h1')
    lotrCitiesArray.push(lastCity)
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata18()

let firstCity = ''

function kata19() {
    printText('Kata19','h1')
    firstCity = lotrCitiesArray.shift()
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata19()

function kata20(){
    printText('Kata20','h1')
    lotrCitiesArray.unshift(firstCity)
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
kata20()

printText('Bônus Opcional','h1')

function bonus1(){
    printText('Bonus1','h1')
    bestThing = bestThing.split(' ')
    let index = bestThing.indexOf('only')
    bestThing = bestThing.join(' ')
    printText(`o Index de only é ${index}`,'div')
    return index
}
bonus1()

function bonus2(){
    printText('Bonus2','h1')
    let lastIndex = bestThing.split(' ').length -1
    printText(`o último index é ${lastIndex}`,'div')
    return lastIndex
}
bonus2()

function bonus3(){
    let output = []
    printText('Bonus3', 'h1')
    gotCitiesCSV.split(',').map(element =>{
        if (element.includes('aa')) output.push(element)
        if (element.includes('ee')) output.push(element)
        if (element.includes('ii')) output.push(element)
        if (element.includes('oo')) output.push(element)
        if (element.includes('uu')) output.push(element)
    })
    printText(output,'div')
    return output
}
bonus3()

function bonus4() {
    printText('Bonus4','h1')
    let output = []
    lotrCitiesArray.map(element =>{
        if (element.endsWith('or')) output.push(element)
    })
    printText(output,'div')
    return output
}
bonus4()

function bonus5() {
    printText('Bonus5','h1')
    let output = []
    bestThing.split(' ').map(element =>{
        if (element.startsWith('b')) output.push(element)
    })
    printText(output,'div')
    return output
}
bonus5()

function bonus6(){
    printText('Bonus6', 'h1')
    if (lotrCitiesArray.includes('Mirkwood')){
        printText('MirkWood está incluso no array','div')
        return "Sim"
    }
    else{
        printText('MirkWood não está incluso no array','div')
        return "Não"
    }
}
bonus6()

function bonus7(){
    printText('Bonus7', 'h1')
    if (lotrCitiesArray.includes('HollyWood')){
        printText('HollyWood está incluso no array','div')
        return "Sim"
    }
    else{
        printText('HollyWood não está incluso no array','div')
        return "Não"
    }
}
bonus7()

function bonus8(){
    printText('Bonus8','h1')
    let index = lotrCitiesArray.indexOf('Mirkwood')
    printText(`O index de MirkWood é ${index}`,'div')
    return index
}
bonus8()

function bonus9(){
    printText('Bonus9','h1')
    let output = []
    lotrCitiesArray.map(element => {
        if (element.split(' ').length > 1) output.push(element)
    })
    printText(output[0],'div')
}
bonus9()

function bonus10(){
    printText('Bonus10','h1')
    lotrCitiesArray.reverse()
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
bonus10()

function bonus11() {
    printText('Bonus11','h1')
    lotrCitiesArray.sort()
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
bonus11()

function bonus12() {
    printText('Bonus12','h1')
    lotrCitiesArray.sort(orderBonus12)
    printText(lotrCitiesArray,'div')
    return lotrCitiesArray
}
bonus12()

function orderBonus12(a,b) {
    if (a.length > b.length) return 1
    if (a.length < b.length) return -1
    if (a.length === b.length) return 0
}