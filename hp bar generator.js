function makingHP (hp){
parseInt(hp);
return `
<button onclick=hp()>-1</button>
<button onclick=hp()>-5</button>
<button onclick=hp()>-20</button>
<meter optimum='${hp}' high='${Math.ceil(hp/2)}' low='${Math.ceil(hp/4)}' value='${hp}' min='0' max='${hp}'></meter>
<button onClick=hp()>+20</button>
<button onClick=hp()>+5</button>
<button onClick=hp()>+1</button>
<p>${hp}</p>

`

}
