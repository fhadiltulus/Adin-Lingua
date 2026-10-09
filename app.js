const $=id=>document.getElementById(id),norm=s=>(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[?!.,]/g,"").trim();
let extra=[];try{extra=JSON.parse(localStorage.getItem("adin_extra")||"[]")}catch(e){}
const all=()=>PHRASES.concat(extra),has=c=>all().some(p=>p[c]);
const PRI=["id","su","en"],ord=l=>{const i=PRI.indexOf(l.code);return i<0?9:i};
const packs=()=>LANGS.filter(l=>has(l.code)).sort((a,b)=>ord(a)-ord(b));
const nm=c=>(LANGS.find(l=>l.code==c)||{name:c}).name;
function fillSel(){const o=packs().map(l=>`<option value="${l.code}">${l.name} (${l.native})</option>`).join("");const a=$("src").value||"id",b=$("dst").value||"su";$("src").innerHTML=o;$("dst").innerHTML=o;$("src").value=a;$("dst").value=b}
function wordByWord(q,s,d){const idx={};all().forEach(p=>{if(p[s]&&p[d]&&!/\s/.test(p[s].trim()))idx[norm(p[s])]=p[d]});const t=q.split(/\s+/);const hit=t.filter(w=>idx[w]).length;return hit?t.map(w=>idx[w]||w).join(" "):null}
function tr(){const q=norm($("q").value),s=$("src").value,d=$("dst").value,out=$("out");if(!q){out.innerHTML="";return}
const m=all().filter(p=>p[s]&&norm(p[s]).includes(q)).sort((x,y)=>(norm(y[s])==q)-(norm(x[s])==q));
if(m.length){out.innerHTML=m.slice(0,8).map(p=>`<div class="res"><small>${p[s]}</small><br><b>${p[d]||"— belum ada di paket bahasa ini —"}</b></div>`).join("");return}
const w=wordByWord(q,s,d);out.innerHTML=w?`<div class="res"><small>Terjemahan kata per kata (kasar)</small><br><b>${w}</b></div>`:'<p class="small">Belum ditemukan. Coba kata lain atau tambahkan paket bahasa di bawah.</p>'}
function list(){const q=norm($("s").value),r=LANGS.filter(l=>norm(l.name+l.native+l.region+l.code).includes(q)).sort((a,b)=>ord(a)-ord(b));$("cnt").textContent=r.length+" bahasa";
$("list").innerHTML=r.map(l=>`<div class="lang"><div><b>${ord(l)<9?'⭐ ':''}${l.name}</b> <small>${l.native}</small><br><small>${l.region} • ${l.code}</small></div>${has(l.code)?'<span class="tag" data-c="'+l.code+'">paket ✓</span>':''}</div>`).join("")}
$("chips").innerHTML=[["id","su"],["id","en"],["su","id"],["en","id"],["su","en"],["en","su"]].map(([a,b])=>`<button data-a="${a}" data-b="${b}">${nm(a)} → ${nm(b)}</button>`).join("");
$("chips").onclick=e=>{const a=e.target.dataset.a;if(a){$("src").value=a;$("dst").value=e.target.dataset.b;tr()}};
$("list").onclick=e=>{const c=e.target.dataset.c;if(c){$("dst").value=c;tr();scrollTo(0,0)}};
$("q").oninput=tr;$("src").onchange=tr;$("dst").onchange=tr;$("s").oninput=list;
$("swap").onclick=()=>{const a=$("src").value;$("src").value=$("dst").value;$("dst").value=a;tr()};
$("imp").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const j=JSON.parse(r.result);extra=extra.concat(j);localStorage.setItem("adin_extra",JSON.stringify(extra));fillSel();list();tr();alert("Paket ditambahkan: "+j.length+" frasa")}catch(x){alert("File JSON tidak valid")}};r.readAsText(f)};
fillSel();list();

// Tombol saluran WhatsApp: cek koneksi dulu
const WA_URL="https://whatsapp.com/channel/0029Vb8Jtc4Lo4hgNfr35E1x";
async function online(){if(!navigator.onLine)return false;const c=new AbortController(),t=setTimeout(()=>c.abort(),4000);
try{await fetch("https://www.whatsapp.com/favicon.ico?_="+Date.now(),{mode:"no-cors",cache:"no-store",signal:c.signal});return true}catch(e){return false}finally{clearTimeout(t)}}
async function joinWA(btn){btn&&btn.classList.add("busy");const ok=await online();btn&&btn.classList.remove("busy");if(ok){$("modal").hidden=true;location.href=WA_URL}else $("modal").hidden=false}
document.querySelectorAll(".wa-mini,.wa-btn").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();joinWA(a)}));
$("retry").onclick=()=>joinWA($("retry"));$("close").onclick=()=>$("modal").hidden=true;
$("modal").onclick=e=>{if(e.target.id=="modal")$("modal").hidden=true};
