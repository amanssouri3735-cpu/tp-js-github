function infoEtudient(nom, note){
    if ( note >= 10) {
        console.log(nom + " :" + note + "/20" + "-> admis ")
    } else {
        console.log(nom + " :" + note + "/20" + "-> ajourné ")
    }
}

infoEtudient("Hiba", 14)
infoEtudient( "Ahmed", 8)