const valorF1 = 23.50
const valorF2 = 109.00
const valorF3 = 3.00

let q1 = 0
let q2 = 0
let q3 = 0

let total = 0

let quantidade1 = document.getElementById("quantidade1")
let quantidade2 = document.getElementById("quantidade2")
let quantidade3 = document.getElementById("quantidade3")

let mais1 =document.getElementById("mais1")
let mais2= document.getElementById("mais2")
let mais3 =document.getElementById("mais3")

let menos1=document.getElementById("menos1")
let menos2=document.getElementById("menos2")
let menos3= document.getElementById("menos3")

let totalHTML = document.getElementById("total")

function atualizar() {
  quantidade1.innerText = "Quantidade: " + q1
  quantidade2.innerText = "Quantidade: " + q2
  quantidade3.innerText = "Quantidade: " + q3

  totalHTML.innerText = "Valor final: R$ " + total.toFixed(2)
}


mais1.addEventListener("click", () => {
 q1++
  total += valorF1
  atualizar()
})

menos1.addEventListener("click", () => {
  if (q1 > 0) {
    q1--
    total -= valorF1
    atualizar()
  }
})


mais2.addEventListener("click", () => {
  q2++
  total += valorF2
  atualizar()
})

menos2.addEventListener("click", () => {
  if (q2 > 0) {
    q2--
total -= valorF2
    atualizar()
  }
})


mais3.addEventListener("click", () => {
q3++
  total += valorF3
  atualizar()
})

menos3.addEventListener("click", () => {
  if (q3 > 0) {
q3--
total -= valorF3
    atualizar()
  }
})
