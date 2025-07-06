const API_KEY = "5de72675f5cab4521e19d415";
const CODE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;           // :contentReference[oaicite:4]{index=4}
const PAIR_URL = (from,to,amt=1)=>`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amt}`; // :contentReference[oaicite:5]{index=5}

const amountIn =     document.getElementById("amount");
const fromSel =      document.getElementById("from");
const toSel   =      document.getElementById("to");
const resultOut =    document.getElementById("result");
const convertBtn =   document.getElementById("convert");
const switchBtn  =   document.getElementById("switch");
const loader     =   document.getElementById("loader");
const msg        =   document.getElementById("message");

const show = el => el.classList.remove("hidden");
const hide = el => el.classList.add("hidden");

// ----------  fetch supported codes once ----------
async function loadCodes(){
  try{
    const res = await fetch(CODE_URL);
    if(!res.ok) throw new Error("Codes fetch failed");
    const {supported_codes} = await res.json();               // docs call the array supported_codes :contentReference[oaicite:6]{index=6}
    supported_codes.forEach(([code,name])=>{
      const opt = new Option(`${code} — ${name}`,code);
      fromSel.append(opt.cloneNode(true));
      toSel.append(opt);
    });
    // default combo
    fromSel.value="USD"; toSel.value="EUR";
  }catch(e){ msg.textContent=e.message;show(msg);}
}

// ---------- convert handler ----------
async function convert(){
  hide(msg);show(loader);
  const amt   = Number(amountIn.value)||1;
  const from  = fromSel.value;
  const to    = toSel.value;
  try{
    const res = await fetch(PAIR_URL(from,to,amt));
    if(!res.ok) throw new Error("Rate fetch failed");
    const data = await res.json();                              // returns conversion_rate & conversion_result
    resultOut.value = data.conversion_result.toFixed(2);        // :contentReference[oaicite:7]{index=7}
  }catch(e){
    msg.textContent = "Conversion error: "+e.message;
    show(msg);
  }finally{hide(loader);}
}

// ---------- swap currencies ----------
function swap(){
  [fromSel.value,toSel.value] = [toSel.value,fromSel.value];
  convert();
}

// ---------- events ----------
window.addEventListener("DOMContentLoaded",loadCodes);
convertBtn.addEventListener("click",convert);
switchBtn.addEventListener("click",swap);
