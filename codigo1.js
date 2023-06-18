const botao = document.getElementById("qua");
const texto = document.getElementById("texa");
const seta = document.getElementById("s");

botao.addEventListener("click", function() {
  if (texto.style.display === "none") {
    texto.style.display = "block";
  botao.style.background ="#ff4040"
  seta.style. transform="rotate(405deg)"
} else {
    texto.style.display = "none";
    botao.style.background = "#484d50"
    seta.style. transform="rotate(317deg)"
  }
});


const que = document.getElementById("que");
const texe = document.getElementById("texe");
const t = document.getElementById("t");
const r = document.getElementById("e");
que.addEventListener("click", function() {
  if (texe.style.display === "none") {
    texe.style.display = "block";
  que.style.background ="#ff4040"
  t.style. transform="rotate(405deg)"
  t.style.marginTop = '-235px'
  r.style.marginTop = '245px'
} else {
    texe.style.display = "none";
    que.style.background = "#484d50"
    t.style. transform="rotate(317deg)"
    t.style.marginTop = '-35px'
    r.style.marginTop = '45px'
  }
});


const qui = document.getElementById("qui");
const texi = document.getElementById("texi");
const e = document.getElementById("e");
const a = document.getElementById("a");
qui.addEventListener("click", function() {
  if (texi.style.display === "none") {
    texi.style.display = "block";
  qui.style.background ="#ff4040"
  e.style. transform="rotate(405deg)"
  e.style.marginTop = '45px'
  a.style.marginTop = '5px'

} else {
    texi.style.display = "none";
    qui.style.background = "#484d50"
    e.style. transform="rotate(317deg)"
    e.style.marginTop = '45px'
  }
});

const quo = document.getElementById("quo");
const texo = document.getElementById("texo");
const b = document.getElementById("a");

quo.addEventListener("click", function() {
  if (texo.style.display === "none") {
    texo.style.display = "block";
    quo.style.background ="#ff4040"
  b.style. transform="rotate(405deg)"
} else {
    texo.style.display = "none";
    quo.style.background = "#484d50"
    b.style. transform="rotate(317deg)"
  }
});

const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrosel(){
  idx++;
if(idx > img.length -1){
  idx=0;
}
    imgs.style.transform = `translateX(${-idx * 250}px)`;

}

setInterval(carrosel,6000);