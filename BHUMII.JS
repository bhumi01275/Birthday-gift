function showLetter(){
    document.getElementById("letterPopup").style.display="flex";
}

function closeLetter(){
    document.getElementById("letterPopup").style.display="none";
}

window.onload = function(){
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },3000);
}
let blownCandles = 0;

function blowCandle(candle){
    if(!candle.classList.contains("out")){
        candle.classList.add("out");
        blownCandles++;

        if(blownCandles === 5){
            document.getElementById("wishMessage").innerHTML =
            "🎉 Happy Birthday My Love ❤️ 🎉<br>All candles are blown out! Make a wish! ✨";
        }
    }
}
