let wer = document.getElementsByClassName("warpper");
let initr = function() {
    wer[0].classList.remove("init");
}
let timer = setInterval(initr(), 200);
let item = document.getElementsByClassName("item");
for (i = 0; i < item.length; i++) {
    let e = item[i];
    e.onclick = function() {
        wer[0].classList.add("warpper-click");
        e.classList.add("click");
    }
}

let closer = document.getElementsByClassName("close");
let clickr = document.getElementsByClassName("click");

for (i = 0; i < closer.length; i++) {
    closer[i].onclick = function(e) {
        e.stopPropagation();
        console.log("dsfa");
        wer[0].classList.remove("warpper-click");
        clickr[0].classList.remove("click");
    }
}