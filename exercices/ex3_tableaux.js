const notes = [12, 8, 15, 10, 7] 
let sum = 0, moy, sup = 0 
for (i = 0; i < notes.length; i++) {
    sum += notes[i]
}
moy = sum / notes.length
for (i = 0; i < notes.length; i++) {
    if (notes[i] > sup){
        sup = notes[i]
    }
}
let nombreNotes = 0
for (i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nombreNotes += 1
    }
}
console.log("Notes:", notes)
console.log("Sum:", sum)
console.log("moyenne :", moy)
console.log("Meilleur Note:", sup)
console.log("les nombres suprérier ou égals à 10 (>=10):", nombreNotes)