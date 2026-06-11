/* ===========================================================
   EL PRECIO DEL JUEGO · Data Story · lógica y gráficos
   SVG a mano, sin librerías. Datos recalculados desde los CSV.
   =========================================================== */
const DATA = {"corr":{"labels":["Puntaje FIFA","Valor plantel","Edad plantel","Población","Densidad","Área","PBI","Edad mediana","PBI per cápita"],"matrix":[[1.0,0.76,-0.05,0.3,-0.02,0.16,0.2,0.39,0.11],[0.76,1.0,-0.11,0.15,0.1,-0.04,0.06,0.37,0.1],[-0.05,-0.11,1.0,-0.08,0.04,-0.2,-0.19,-0.09,-0.15],[0.3,0.15,-0.08,1.0,-0.1,0.63,0.78,-0.01,0.05],[-0.02,0.1,0.04,-0.1,1.0,-0.37,-0.03,0.28,0.07],[0.16,-0.04,-0.2,0.63,-0.37,1.0,0.55,0.03,0.21],[0.2,0.06,-0.19,0.78,-0.03,0.55,1.0,0.2,0.36],[0.39,0.37,-0.09,-0.01,0.28,0.03,0.2,1.0,0.56],[0.11,0.1,-0.15,0.05,0.07,0.21,0.36,0.56,1.0]]},"scatter":[{"pais":"France","valor_bn":1.29,"puntos_FIFA":1877.32,"continente":"Europe"},{"pais":"Spain","valor_bn":1.15,"puntos_FIFA":1876.4,"continente":"Europe"},{"pais":"Argentina","valor_bn":0.575,"puntos_FIFA":1874.81,"continente":"South America"},{"pais":"England","valor_bn":1.3,"puntos_FIFA":1825.97,"continente":"Europe"},{"pais":"Portugal","valor_bn":0.841,"puntos_FIFA":1763.83,"continente":"Europe"},{"pais":"Brazil","valor_bn":0.932,"puntos_FIFA":1761.16,"continente":"South America"},{"pais":"Netherlands","valor_bn":0.808,"puntos_FIFA":1757.87,"continente":"Europe"},{"pais":"Morocco","valor_bn":0.4356,"puntos_FIFA":1755.87,"continente":"Africa"},{"pais":"Belgium","valor_bn":0.4422,"puntos_FIFA":1734.71,"continente":"Europe"},{"pais":"Germany","valor_bn":0.828,"puntos_FIFA":1730.37,"continente":"Europe"},{"pais":"Croatia","valor_bn":0.2585,"puntos_FIFA":1717.07,"continente":"Europe"},{"pais":"Colombia","valor_bn":0.2851,"puntos_FIFA":1693.09,"continente":"South America"},{"pais":"Senegal","valor_bn":0.4059,"puntos_FIFA":1688.99,"continente":"Africa"},{"pais":"Mexico","valor_bn":0.1421,"puntos_FIFA":1681.03,"continente":"North America"},{"pais":"United States","valor_bn":0.1697,"puntos_FIFA":1673.13,"continente":"North America"},{"pais":"Uruguay","valor_bn":0.4192,"puntos_FIFA":1673.07,"continente":"South America"},{"pais":"Japan","valor_bn":0.2235,"puntos_FIFA":1660.43,"continente":"Asia"},{"pais":"Switzerland","valor_bn":0.251,"puntos_FIFA":1649.4,"continente":"Europe"},{"pais":"Iran","valor_bn":0.0342,"puntos_FIFA":1615.3,"continente":"Asia"},{"pais":"Turkey","valor_bn":0.5082,"puntos_FIFA":1599.04,"continente":"Europe"},{"pais":"Ecuador","valor_bn":0.3496,"puntos_FIFA":1594.78,"continente":"South America"},{"pais":"Austria","valor_bn":0.2319,"puntos_FIFA":1593.45,"continente":"Europe"},{"pais":"South Korea","valor_bn":0.1188,"puntos_FIFA":1588.66,"continente":"Asia"},{"pais":"Australia","valor_bn":0.0328,"puntos_FIFA":1580.67,"continente":"Oceania"},{"pais":"Algeria","valor_bn":0.2291,"puntos_FIFA":1564.26,"continente":"Africa"},{"pais":"Egypt","valor_bn":0.1362,"puntos_FIFA":1563.24,"continente":"Africa"},{"pais":"Canada","valor_bn":0.0219,"puntos_FIFA":1556.48,"continente":"North America"},{"pais":"Norway","valor_bn":0.5029,"puntos_FIFA":1550.94,"continente":"Europe"},{"pais":"Panama","valor_bn":0.0053,"puntos_FIFA":1549.64,"continente":"North America"},{"pais":"Ivory Coast","valor_bn":0.3708,"puntos_FIFA":1532.98,"continente":"Africa"},{"pais":"Sweden","valor_bn":0.496,"puntos_FIFA":1514.77,"continente":"Europe"},{"pais":"Paraguay","valor_bn":0.124,"puntos_FIFA":1503.5,"continente":"South America"},{"pais":"Czech Republic","valor_bn":0.1159,"puntos_FIFA":1501.38,"continente":"Europe"},{"pais":"Scotland","valor_bn":0.2114,"puntos_FIFA":1498.35,"continente":"Europe"},{"pais":"Tunisia","valor_bn":0.0684,"puntos_FIFA":1483.05,"continente":"Africa"},{"pais":"DR Congo","valor_bn":0.134,"puntos_FIFA":1478.35,"continente":"Africa"},{"pais":"Uzbekistan","valor_bn":0.0148,"puntos_FIFA":1465.34,"continente":"Asia"},{"pais":"Qatar","valor_bn":0.018,"puntos_FIFA":1454.96,"continente":"Asia"},{"pais":"Iraq","valor_bn":0.0107,"puntos_FIFA":1447.14,"continente":"Asia"},{"pais":"South Africa","valor_bn":0.0445,"puntos_FIFA":1429.73,"continente":"Africa"},{"pais":"Saudi Arabia","valor_bn":0.0218,"puntos_FIFA":1421.43,"continente":"Asia"},{"pais":"Jordan","valor_bn":0.0093,"puntos_FIFA":1391.45,"continente":"Asia"},{"pais":"Bosnia and Herzegovina","valor_bn":0.1178,"puntos_FIFA":1385.84,"continente":"Europe"},{"pais":"Cape Verde","valor_bn":0.0318,"puntos_FIFA":1366.13,"continente":"Africa"},{"pais":"Ghana","valor_bn":0.1649,"puntos_FIFA":1346.31,"continente":"Africa"},{"pais":"Curaçao","valor_bn":0.0254,"puntos_FIFA":1294.65,"continente":"North America"},{"pais":"Haiti","valor_bn":0.0388,"puntos_FIFA":1291.71,"continente":"North America"},{"pais":"New Zealand","valor_bn":0.0164,"puntos_FIFA":1281.57,"continente":"Oceania"}],"box_cont":{"Europe":{"q1":1541.8975,"med":1683.2350000000001,"q3":1759.36,"lo":1385.84,"hi":1877.32,"n":16,"outliers":[],"vals":[["Bosnia and Herzegovina",1385.8],["Scotland",1498.3],["Czech Republic",1501.4],["Sweden",1514.8],["Norway",1550.9],["Austria",1593.5],["Turkey",1599.0],["Switzerland",1649.4],["Croatia",1717.1],["Germany",1730.4],["Belgium",1734.7],["Netherlands",1757.9],["Portugal",1763.8],["England",1826.0],["Spain",1876.4],["France",1877.3]]},"South America":{"q1":1614.3525,"med":1683.08,"q3":1744.1425,"lo":1503.5,"hi":1874.81,"n":6,"outliers":[],"vals":[["Paraguay",1503.5],["Ecuador",1594.8],["Uruguay",1673.1],["Colombia",1693.1],["Brazil",1761.2],["Argentina",1874.8]]},"North America":{"q1":1358.3975,"med":1553.06,"q3":1643.9675000000002,"lo":1291.71,"hi":1681.03,"n":6,"outliers":[],"vals":[["Haiti",1291.7],["Curaçao",1294.7],["Panama",1549.6],["Canada",1556.5],["United States",1673.1],["Mexico",1681.0]]},"Africa":{"q1":1441.885,"med":1508.0149999999999,"q3":1564.005,"lo":1346.31,"hi":1688.99,"n":10,"outliers":[1755.87],"vals":[["Ghana",1346.3],["Cape Verde",1366.1],["South Africa",1429.7],["DR Congo",1478.3],["Tunisia",1483.0],["Ivory Coast",1533.0],["Egypt",1563.2],["Algeria",1564.3],["Senegal",1689.0],["Morocco",1755.9]]},"Asia":{"q1":1440.7125,"med":1460.15,"q3":1595.3200000000002,"lo":1391.45,"hi":1660.43,"n":8,"outliers":[],"vals":[["Jordan",1391.5],["Saudi Arabia",1421.4],["Iraq",1447.1],["Qatar",1455.0],["Uzbekistan",1465.3],["South Korea",1588.7],["Iran",1615.3],["Japan",1660.4]]},"Oceania":{"q1":1356.345,"med":1431.12,"q3":1505.895,"lo":1281.57,"hi":1580.67,"n":2,"outliers":[],"vals":[["New Zealand",1281.6],["Australia",1580.7]]}},"box_lang":{"Portuguese":{"q1":1563.645,"med":1761.16,"q3":1762.495,"lo":1366.13,"hi":1763.83,"n":3,"outliers":[],"vals":[["Cape Verde",1366.1],["Brazil",1761.2],["Portugal",1763.8]]},"Spanish":{"q1":1583.495,"med":1677.05,"q3":1738.52,"lo":1503.5,"hi":1876.4,"n":8,"outliers":[],"vals":[["Paraguay",1503.5],["Panama",1549.6],["Ecuador",1594.8],["Uruguay",1673.1],["Mexico",1681.0],["Colombia",1693.1],["Argentina",1874.8],["Spain",1876.4]]},"German":{"q1":1621.4250000000002,"med":1649.4,"q3":1689.885,"lo":1593.45,"hi":1730.37,"n":3,"outliers":[],"vals":[["Austria",1593.5],["Switzerland",1649.4],["Germany",1730.4]]},"French":{"q1":1478.35,"med":1532.98,"q3":1688.99,"lo":1291.71,"hi":1877.32,"n":5,"outliers":[],"vals":[["Haiti",1291.7],["DR Congo",1478.3],["Ivory Coast",1533.0],["Senegal",1689.0],["France",1877.3]]},"English":{"q1":1333.395,"med":1527.415,"q3":1603.785,"lo":1281.57,"hi":1825.97,"n":8,"outliers":[],"vals":[["New Zealand",1281.6],["Curaçao",1294.7],["Ghana",1346.3],["Scotland",1498.3],["Canada",1556.5],["Australia",1580.7],["United States",1673.1],["England",1826.0]]},"Arabic":{"q1":1440.7125,"med":1469.005,"q3":1563.495,"lo":1391.45,"hi":1564.26,"n":8,"outliers":[1755.87],"vals":[["Jordan",1391.5],["Saudi Arabia",1421.4],["Iraq",1447.1],["Qatar",1455.0],["Tunisia",1483.0],["Egypt",1563.2],["Algeria",1564.3],["Morocco",1755.9]]}},"box_rel":{"Christianity":{"q1":1498.35,"med":1649.4,"q3":1734.71,"lo":1281.57,"hi":1877.32,"n":29,"outliers":[],"vals":[["New Zealand",1281.6],["Haiti",1291.7],["Curaçao",1294.7],["Ghana",1346.3],["Cape Verde",1366.1],["South Africa",1429.7],["DR Congo",1478.3],["Scotland",1498.3],["Paraguay",1503.5],["Panama",1549.6],["Canada",1556.5],["Australia",1580.7],["Austria",1593.5],["Ecuador",1594.8],["Switzerland",1649.4],["Uruguay",1673.1],["United States",1673.1],["Mexico",1681.0],["Colombia",1693.1],["Croatia",1717.1],["Germany",1730.4],["Belgium",1734.7],["Netherlands",1757.9],["Brazil",1761.2],["Portugal",1763.8],["England",1826.0],["Argentina",1874.8],["Spain",1876.4],["France",1877.3]]},"No Religion":{"q1":1514.77,"med":1550.94,"q3":1588.66,"lo":1501.38,"hi":1660.43,"n":5,"outliers":[],"vals":[["Czech Republic",1501.4],["Sweden",1514.8],["Norway",1550.9],["South Korea",1588.7],["Japan",1660.4]]},"Islam":{"q1":1449.095,"med":1508.0149999999999,"q3":1590.345,"lo":1385.84,"hi":1755.87,"n":14,"outliers":[],"vals":[["Bosnia and Herzegovina",1385.8],["Jordan",1391.5],["Saudi Arabia",1421.4],["Iraq",1447.1],["Qatar",1455.0],["Uzbekistan",1465.3],["Tunisia",1483.0],["Ivory Coast",1533.0],["Egypt",1563.2],["Algeria",1564.3],["Turkey",1599.0],["Iran",1615.3],["Senegal",1689.0],["Morocco",1755.9]]}},"rel_counts":{"Christianity":29,"Islam":14,"No Religion":5},"models":{"pearson":0.768,"linear":{"r2":0.59,"m":348.7149385829162,"b":1471.2912438698315},"quad":{"r2":0.629,"a":-235.36989415493528,"b":612.2718784171046,"c":1439.4448938192684},"log":{"r2":0.552,"a":79.21727418424541,"b":1734.2750849495685},"power":{"r2":0.566,"a":1733.6801427865546,"b":0.05015608381026799},"vertex_x":1.301,"vertex_y":1837.6},"resid_pos":[{"pais":"Argentina","resid":161,"x":0.575,"y":1875},{"pais":"Mexico","resid":159,"x":0.142,"y":1681},{"pais":"Iran","resid":155,"x":0.034,"y":1615},{"pais":"United States","resid":137,"x":0.17,"y":1673},{"pais":"Croatia","resid":135,"x":0.259,"y":1717}],"resid_neg":[{"pais":"Ghana","resid":-188,"x":0.165,"y":1346},{"pais":"Haiti","resid":-171,"x":0.039,"y":1292},{"pais":"Sweden","resid":-170,"x":0.496,"y":1515},{"pais":"New Zealand","resid":-168,"x":0.016,"y":1282},{"pais":"Curaçao","resid":-160,"x":0.025,"y":1295}],"xrange":[0.0053,1.3],"n":48,"hist":{"fifa":[1877.32,1876.4,1874.81,1825.97,1763.83,1761.16,1757.87,1755.87,1734.71,1730.37,1717.07,1693.09,1688.99,1681.03,1673.13,1673.07,1660.43,1649.4,1615.3,1599.04,1594.78,1593.45,1588.66,1580.67,1564.26,1563.24,1556.48,1550.94,1549.64,1532.98,1514.77,1503.5,1501.38,1498.35,1483.05,1478.35,1465.34,1454.96,1447.14,1429.73,1421.43,1391.45,1385.84,1366.13,1346.31,1294.65,1291.71,1281.57],"valor_bn":[1.29,1.15,0.575,1.3,0.841,0.932,0.808,0.4355,0.4422,0.828,0.2585,0.2851,0.4059,0.1421,0.1697,0.4192,0.2235,0.251,0.0343,0.5082,0.3496,0.2319,0.1188,0.0328,0.2291,0.1362,0.0219,0.5029,0.0053,0.3708,0.496,0.124,0.1159,0.2114,0.0684,0.1341,0.0149,0.018,0.0107,0.0445,0.0218,0.0093,0.1178,0.0318,0.1649,0.0254,0.0387,0.0164],"pbi_tn":[2.7753,1.4159,0.6311,3.0891,0.2548,1.9201,0.0016,0.1309,0.5826,4.0769,0.0716,0.3439,0.0278,1.4633,25.7441,0.0712,4.2322,0.8184,0.398,0.9071,0.115,0.4703,1.6739,1.7766,0.1919,0.4093,2.1379,0.5794,0.0765,0.07,0.5912,0.0417,0.2905,3.0891,0.0462,0.0626,0.0804,0.2371,0.2642,0.4053,1.1081,0.0475,0.0245,0.0023,0.0738,0.0036,0.0188,0.2458],"ppc_k":[40.5026,29.983,13.5373,45.3352,24.9286,8.78,0.09,3.5317,48.9056,48.4079,17.1619,6.9713,1.5108,11.2671,75.7926,20.833,34.2079,95.5685,4.5444,10.8515,6.5805,52.6014,32.2112,67.139,4.2877,3.7364,55.5068,103.5066,17.3751,2.386,56.1094,5.6079,27.1362,45.3352,3.8561,0.5592,2.5634,93.6379,6.4019,6.9816,30.8334,4.2801,6.4271,3.8318,2.1795,23.2975,1.6347,48.1134],"pob_m":[68.522,47.2226,46.6218,68.1385,10.2232,218.6898,17.4639,37.0674,11.9136,84.2202,4.1692,49.3365,18.3847,129.8755,339.6651,3.4163,123.7192,8.5638,87.5909,83.5935,17.4833,8.9409,51.9669,26.4612,44.7584,109.5467,38.5167,5.5979,4.4041,29.3448,10.5363,7.4399,10.7062,68.1385,11.9762,111.8599,31.3608,2.5321,41.2661,58.0483,35.9398,11.0867,3.8078,0.6039,33.8461,0.1528,11.4703,5.1097],"dens":[106.4,93.4,16.8,279.7,111.0,25.7,420.4,51.7,390.3,235.9,73.7,43.3,93.5,66.1,34.5,19.4,327.4,207.5,53.1,106.7,61.7,106.6,521.1,3.4,18.8,109.4,3.9,17.3,58.4,91.0,23.4,18.3,135.8,279.7,73.2,47.7,70.1,218.5,94.1,47.6,16.7,124.1,74.4,149.7,141.9,344.3,413.3,19.0],"area_mk":[0.6438,0.5054,2.7804,0.2436,0.0921,8.5158,0.0415,0.7166,0.0305,0.357,0.0566,1.1389,0.1967,1.9644,9.8335,0.1762,0.3779,0.0413,1.6482,0.7836,0.2836,0.0839,0.0997,7.7412,2.3817,1.0014,9.9847,0.3238,0.0754,0.3225,0.4503,0.4068,0.0789,0.2436,0.1636,2.3449,0.4474,0.0116,0.4383,1.2191,2.1497,0.0893,0.0512,0.004,0.2385,0.0004,0.0278,0.2688]}};

/* ---- paleta de gráficos (neón sobre índigo oscuro) ---- */
const C = {
  ink:"#F1ECFA", muted:"#AFA6CC", faint:"#7A7299",
  grid:"rgba(241,236,250,.09)", gridStrong:"rgba(241,236,250,.18)",
  green:"#C6FF3D", greenPure:"#C6FF3D", greenRGB:"198,255,61",
  blue:"#22E0CE",  bluePure:"#22E0CE",  blueRGB:"34,224,206",
  red:"#FF3D87",   redPure:"#FF3D87",   redRGB:"255,61,135",
  amber:"#FFA52E", teal:"#22E0CE", violet:"#A98BFF", sky:"#4FA8FF",
  stroke:"#15102E",           // contorno de puntos (separa sobre fondo neón)
  cardStroke:"#211848",       // separación entre segmentos del donut
  whisker:"rgba(241,236,250,.34)",
  curveFaint:"rgba(241,236,250,.46)"
};

const CONT_ES = {Europe:"Europa","South America":"Sudamérica","North America":"Norteamérica",Africa:"África",Asia:"Asia",Oceania:"Oceanía"};
const LANG_ES = {Portuguese:"Portugués",Spanish:"Español",German:"Alemán",French:"Francés",English:"Inglés",Arabic:"Árabe"};
const REL_ES  = {Christianity:"Cristianismo",Islam:"Islam","No Religion":"Sin religión"};
const TEAM_ES = {Argentina:"Argentina",Mexico:"México",Iran:"Irán","United States":"Estados Unidos",Croatia:"Croacia",Ghana:"Ghana",Haiti:"Haití",Sweden:"Suecia","New Zealand":"Nueva Zelanda","Curaçao":"Curaçao"};
const CONT_COLOR = {Europe:C.green,"South America":C.red,"North America":C.blue,Africa:C.amber,Asia:C.violet,Oceania:C.sky};

const SVGNS="http://www.w3.org/2000/svg";
function el(tag,attrs={},txt){const e=document.createElementNS(SVGNS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e;}
function svg(vbw,vbh){return el("svg",{viewBox:`0 0 ${vbw} ${vbh}`,class:"chart-svg",preserveAspectRatio:"xMidYMid meet"});}

/* tooltip */
const tip=document.getElementById("tip");
function showTip(e,html){tip.innerHTML=html;tip.style.opacity=1;moveTip(e);}
function moveTip(e){const x=(e.touches?e.touches[0].clientX:e.clientX),y=(e.touches?e.touches[0].clientY:e.clientY);
  let tx=x+16,ty=y+16;const w=tip.offsetWidth,h=tip.offsetHeight;
  if(tx+w>innerWidth-10)tx=x-w-16;if(ty+h>innerHeight-10)ty=y-h-16;tip.style.left=tx+"px";tip.style.top=ty+"px";}
function hideTip(){tip.style.opacity=0;}
function bindTip(node,html){node.addEventListener("mousemove",e=>showTip(e,html));node.addEventListener("mouseleave",hideTip);
  node.addEventListener("touchstart",e=>showTip(e,html),{passive:true});}

/* ===================== 1. HEATMAP ===================== */
function heatColor(v){
  if(v>=0){const t=Math.min(v,1);return `rgba(${C.greenRGB},${0.10+t*0.82})`;}
  const t=Math.min(-v,1);return `rgba(${C.redRGB},${0.10+t*0.82})`;
}
function renderHeatmap(){
  const {labels,matrix}=DATA.corr;const n=labels.length;
  const W=820,padL=148,padT=120,cell=(W-padL-20)/n,H=padT+cell*n+24;
  const s=svg(W,H);
  labels.forEach((lb,j)=>{
    const x=padL+cell*j+cell/2;
    s.appendChild(el("text",{x,y:padT-12,fill:j===0?C.green:C.muted,"font-size":11,"font-weight":j===0?700:400,"text-anchor":"start",transform:`rotate(-42 ${x} ${padT-12})`},lb));
  });
  matrix.forEach((row,i)=>{
    s.appendChild(el("text",{x:padL-12,y:padT+cell*i+cell/2+4,fill:i===0?C.green:C.muted,"font-size":11,"font-weight":i===0?700:400,"text-anchor":"end"},labels[i]));
    row.forEach((v,j)=>{
      const x=padL+cell*j,y=padT+cell*i;
      const r=el("rect",{x:x+2,y:y+2,width:cell-4,height:cell-4,rx:4,fill:heatColor(v),stroke:"rgba(21,16,46,.55)","stroke-width":1});
      r.style.cursor="crosshair";r.style.transition="filter .12s";
      const txt=el("text",{x:x+cell/2,y:y+cell/2+4,"text-anchor":"middle","font-size":10.5,"font-weight":600,
        fill:Math.abs(v)>0.5?"#15102E":C.ink},v.toFixed(2).replace(".",","));
      txt.style.pointerEvents="none";
      r.addEventListener("mouseenter",()=>r.style.filter="brightness(1.22)");
      r.addEventListener("mouseleave",()=>r.style.filter="none");
      bindTip(r,`<b>${labels[i]}</b> ↔ ${labels[j]}<br>r = <span class="v">${v.toFixed(2).replace(".",",")}</span>`);
      s.appendChild(r);s.appendChild(txt);
    });
  });
  document.getElementById("heatmap").appendChild(s);
}

/* ===================== BOX plot (horizontal) ===================== */
function renderBox(mountId,boxes,labelMap,accent){
  const keys=Object.keys(boxes);
  const W=820,padL=128,padR=30,padT=22,rowH=58,padB=44;
  const H=padT+rowH*keys.length+padB;
  const all=[];keys.forEach(k=>boxes[k].vals.forEach(p=>all.push(p[1])));
  let min=Math.min(...all),max=Math.max(...all);const span=max-min;min-=span*0.05;max+=span*0.05;
  const xS=v=>padL+((v-min)/(max-min))*(W-padL-padR);
  const s=svg(W,H);
  const ticks=5;for(let t=0;t<=ticks;t++){const v=min+(max-min)*t/ticks;const x=xS(v);
    s.appendChild(el("line",{x1:x,y1:padT,x2:x,y2:padT+rowH*keys.length,stroke:C.grid}));
    s.appendChild(el("text",{x,y:H-padB+22,"text-anchor":"middle","font-size":10,fill:C.faint},Math.round(v)));
  }
  s.appendChild(el("text",{x:(padL+W-padR)/2,y:H-10,"text-anchor":"middle","font-size":10.5,fill:C.muted},"Puntaje FIFA →"));
  keys.forEach((k,i)=>{
    const b=boxes[k];const cy=padT+rowH*i+rowH/2;const col=accent;const label=labelMap[k]||k;
    s.appendChild(el("text",{x:padL-14,y:cy-3,"text-anchor":"end","font-size":12.5,"font-weight":600,fill:C.ink},label));
    s.appendChild(el("text",{x:padL-14,y:cy+13,"text-anchor":"end","font-size":10,fill:C.faint},"n = "+b.n));
    s.appendChild(el("line",{x1:xS(b.lo),y1:cy,x2:xS(b.hi),y2:cy,stroke:C.whisker,"stroke-width":1.5}));
    s.appendChild(el("line",{x1:xS(b.lo),y1:cy-7,x2:xS(b.lo),y2:cy+7,stroke:C.whisker,"stroke-width":1.5}));
    s.appendChild(el("line",{x1:xS(b.hi),y1:cy-7,x2:xS(b.hi),y2:cy+7,stroke:C.whisker,"stroke-width":1.5}));
    const bx=xS(b.q1),bw=xS(b.q3)-xS(b.q1);
    const box=el("rect",{x:bx,y:cy-15,width:Math.max(bw,1),height:30,rx:5,fill:col+"33",stroke:col,"stroke-width":1.6});
    bindTip(box,`<b>${label}</b><br>mediana <span class="v">${Math.round(b.med)}</span> · Q1 ${Math.round(b.q1)} · Q3 ${Math.round(b.q3)}<br>rango ${Math.round(b.lo)}–${Math.round(b.hi)}`);
    s.appendChild(box);
    s.appendChild(el("line",{x1:xS(b.med),y1:cy-15,x2:xS(b.med),y2:cy+15,stroke:col,"stroke-width":2.6}));
    b.vals.forEach(p=>{
      const pais=p[0], v=p[1];
      const jitter=(Math.random()-0.5)*16;
      const c=el("circle",{cx:xS(v),cy:cy+jitter,r:3,fill:col,"fill-opacity":.6,stroke:C.stroke,"stroke-width":.6});
      c.style.cursor="pointer";c.style.transition="r .12s";
      c.addEventListener("mouseenter",()=>c.setAttribute("r",5));
      c.addEventListener("mouseleave",()=>c.setAttribute("r",3));
      bindTip(c,`<b>${pais}</b> · ${label}<br>FIFA <span class="v">${Math.round(v)}</span>`);
      s.appendChild(c);
    });
  });
  document.getElementById(mountId).appendChild(s);
}

/* ===================== 3. DONUT ===================== */
function renderDonut(){
  const counts=DATA.rel_counts;const keys=Object.keys(counts);
  const total=keys.reduce((a,k)=>a+counts[k],0);
  const W=560,H=320,cx=180,cy=160,R=120,r0=64;
  const cols={Christianity:C.green,Islam:C.red,"No Religion":C.blue};
  const s=svg(W,H);let ang=-Math.PI/2;
  function arc(a0,a1,R,r0){
    const x0=cx+R*Math.cos(a0),y0=cy+R*Math.sin(a0),x1=cx+R*Math.cos(a1),y1=cy+R*Math.sin(a1);
    const xi1=cx+r0*Math.cos(a1),yi1=cy+r0*Math.sin(a1),xi0=cx+r0*Math.cos(a0),yi0=cy+r0*Math.sin(a0);
    const large=(a1-a0)>Math.PI?1:0;
    return `M${x0} ${y0} A${R} ${R} 0 ${large} 1 ${x1} ${y1} L${xi1} ${yi1} A${r0} ${r0} 0 ${large} 0 ${xi0} ${yi0} Z`;
  }
  keys.forEach(k=>{
    const frac=counts[k]/total;const a1=ang+frac*Math.PI*2;
    const p=el("path",{d:arc(ang,a1,R,r0),fill:cols[k],"fill-opacity":.88,stroke:C.cardStroke,"stroke-width":2});
    p.style.cursor="pointer";p.style.transition="fill-opacity .15s";
    p.addEventListener("mouseenter",()=>p.style.fillOpacity=1);
    p.addEventListener("mouseleave",()=>p.style.fillOpacity=.88);
    bindTip(p,`<b>${REL_ES[k]}</b><br><span class="v">${counts[k]}</span> países · ${(frac*100).toFixed(1).replace(".",",")} %`);
    s.appendChild(p);ang=a1;
  });
  s.appendChild(el("text",{x:cx,y:cy-4,"text-anchor":"middle","font-size":30,fill:C.ink,"font-weight":700},total));
  s.appendChild(el("text",{x:cx,y:cy+16,"text-anchor":"middle","font-size":10,fill:C.muted,"letter-spacing":"1"},"SELECCIONES"));
  let ly=70;keys.forEach(k=>{
    s.appendChild(el("rect",{x:380,y:ly-11,width:13,height:13,rx:3,fill:cols[k]}));
    s.appendChild(el("text",{x:402,y:ly,"font-size":13,fill:C.ink,"font-weight":600},REL_ES[k]));
    s.appendChild(el("text",{x:402,y:ly+17,"font-size":11,fill:C.faint},counts[k]+" países · "+(counts[k]/total*100).toFixed(0)+"%"));
    ly+=58;
  });
  document.getElementById("donut").appendChild(s);
}

/* ===================== 4. SCATTER + MODELS ===================== */
const M=DATA.models;
function modelFns(){
  return {
    none:{name:"Sin modelo",fn:null,r2:null},
    lineal:{name:"Lineal",fn:x=>M.linear.m*x+M.linear.b,r2:M.linear.r2},
    log:{name:"Logarítmico",fn:x=>M.log.a*Math.log(x)+M.log.b,r2:M.log.r2},
    potencia:{name:"Potencia",fn:x=>M.power.a*Math.pow(x,M.power.b),r2:M.power.r2},
    cuadratico:{name:"Cuadrático",fn:x=>M.quad.a*x*x+M.quad.b*x+M.quad.c,r2:M.quad.r2},
  };
}
let scatterState="cuadratico";
function renderScatter(){
  const mount=document.getElementById("scatter");mount.innerHTML="";
  const W=820,padL=64,padR=24,padT=24,padB=54,H=480;
  const pts=DATA.scatter,xmax=1.4,ymin=1240,ymax=1920;
  const xS=v=>padL+(v/xmax)*(W-padL-padR);
  const yS=v=>padT+(1-(v-ymin)/(ymax-ymin))*(H-padT-padB);
  const s=svg(W,H);
  for(let gx=0;gx<=1.4;gx+=0.2){const x=xS(gx);
    s.appendChild(el("line",{x1:x,y1:padT,x2:x,y2:H-padB,stroke:C.grid}));
    s.appendChild(el("text",{x,y:H-padB+20,"text-anchor":"middle","font-size":10,fill:C.faint},gx.toFixed(1).replace(".",",")));}
  for(let gy=1300;gy<=1900;gy+=100){const y=yS(gy);
    s.appendChild(el("line",{x1:padL,y1:y,x2:W-padR,y2:y,stroke:C.grid}));
    s.appendChild(el("text",{x:padL-8,y:y+3,"text-anchor":"end","font-size":10,fill:C.faint},gy));}
  s.appendChild(el("text",{x:(padL+W-padR)/2,y:H-10,"text-anchor":"middle","font-size":10.5,fill:C.muted},"Valor del plantel (miles de millones €) →"));
  s.appendChild(el("text",{x:16,y:padT+(H-padT-padB)/2,"text-anchor":"middle","font-size":10.5,fill:C.muted,transform:`rotate(-90 16 ${padT+(H-padT-padB)/2})`},"↑ Puntaje FIFA"));
  const mdl=modelFns()[scatterState];
  if(mdl.fn){
    let d="";for(let i=0;i<=120;i++){let x=0.01+(xmax-0.01)*i/120,y=mdl.fn(x);
      if(!isFinite(y))continue;d+=(d?"L":"M")+xS(x).toFixed(1)+" "+yS(Math.max(ymin,Math.min(ymax,y))).toFixed(1)+" ";}
    s.appendChild(el("path",{d,fill:"none",stroke:scatterState==="cuadratico"?C.green:C.ink,"stroke-width":2.5,"stroke-dasharray":scatterState==="cuadratico"?"none":"6 5","stroke-opacity":.95}));
  }
  pts.forEach(p=>{
    const c=el("circle",{cx:xS(p.valor_bn),cy:yS(p.puntos_FIFA),r:5,fill:CONT_COLOR[p.continente],"fill-opacity":.85,stroke:C.stroke,"stroke-width":1});
    c.style.cursor="pointer";c.style.transition="r .12s";
    c.addEventListener("mouseenter",()=>c.setAttribute("r",8));
    c.addEventListener("mouseleave",()=>c.setAttribute("r",5));
    bindTip(c,`<b>${p.pais}</b> · ${CONT_ES[p.continente]}<br>valor €${p.valor_bn.toFixed(3).replace(".",",")} B<br>FIFA <span class="v">${Math.round(p.puntos_FIFA)}</span>`);
    s.appendChild(c);
  });
  mount.appendChild(s);
}
function buildScatterControls(){
  const ctrl=document.getElementById("modelCtrl");const fns=modelFns();
  ["cuadratico","lineal","log","potencia","none"].forEach(k=>{
    const b=document.createElement("button");
    b.textContent=fns[k].name+(fns[k].r2!=null?"  R²="+fns[k].r2.toFixed(3).replace(".",","):"");
    if(k===scatterState)b.classList.add("on");
    b.onclick=()=>{scatterState=k;[...ctrl.children].forEach(c=>c.classList.remove("on"));b.classList.add("on");renderScatter();};
    ctrl.appendChild(b);
  });
  const leg=document.getElementById("scatterLeg");
  Object.keys(CONT_COLOR).forEach(k=>{const sp=document.createElement("span");
    sp.innerHTML=`<i style="background:${CONT_COLOR[k]}"></i>${CONT_ES[k]}`;leg.appendChild(sp);});
}
function buildR2Table(){
  const t=document.getElementById("r2table");
  const rows=[["Cuadrático","f(x)=ax²+bx+c",M.quad.r2,true],["Lineal","f(x)=mx+b",M.linear.r2,false],
    ["Potencia","f(x)=a·xᵇ",M.power.r2,false],["Logarítmico","f(x)=a·ln(x)+b",M.log.r2,false]];
  t.innerHTML="<tr><th>Modelo</th><th>Ecuación</th><th class='bar-cell'>R²</th><th style='text-align:right'>R²</th></tr>";
  rows.forEach(([n,eq,r2,best])=>{
    const tr=document.createElement("tr");if(best)tr.className="best";
    tr.innerHTML=`<td><b>${n}</b></td><td style="color:var(--muted)">${eq}</td>
      <td class="bar-cell"><div class="rbar" style="width:${(r2*100).toFixed(0)}%"></div></td>
      <td style="text-align:right"><b>${r2.toFixed(3).replace(".",",")}</b></td>`;
    t.appendChild(tr);
  });
}

/* ===================== 5. QUADRATIC + DERIVATIVE SIM ===================== */
const A=M.quad.a,B=M.quad.b,Cc=M.quad.c;
const f=x=>A*x*x+B*x+Cc, fp=x=>2*A*x+B;
const VX=M.vertex_x,VY=M.vertex_y;
let qs={};
function renderQuad(){
  const mount=document.getElementById("quad");mount.innerHTML="";
  const W=820,padL=64,padR=24,padT=24,padB=54,H=440,xmax=2.0,ymin=1300,ymax=1900;
  const xS=v=>padL+(v/xmax)*(W-padL-padR);
  const yS=v=>padT+(1-(v-ymin)/(ymax-ymin))*(H-padT-padB);
  const s=svg(W,H);
  for(let gx=0;gx<=2;gx+=0.25){const x=xS(gx);s.appendChild(el("line",{x1:x,y1:padT,x2:x,y2:H-padB,stroke:C.grid}));
    s.appendChild(el("text",{x,y:H-padB+20,"text-anchor":"middle","font-size":10,fill:C.faint},gx.toFixed(2).replace(".",",")));}
  for(let gy=1400;gy<=1900;gy+=100){const y=yS(gy);s.appendChild(el("line",{x1:padL,y1:y,x2:W-padR,y2:y,stroke:C.grid}));
    s.appendChild(el("text",{x:padL-8,y:y+3,"text-anchor":"end","font-size":10,fill:C.faint},gy));}
  s.appendChild(el("text",{x:(padL+W-padR)/2,y:H-10,"text-anchor":"middle","font-size":10.5,fill:C.muted},"Valor del plantel (miles de millones €) →"));
  let d="";for(let i=0;i<=140;i++){const x=i/140*xmax;d+=(d?"L":"M")+xS(x).toFixed(1)+" "+yS(f(x)).toFixed(1)+" ";}
  s.appendChild(el("path",{d,fill:"none",stroke:C.green,"stroke-width":2.6}));
  s.appendChild(el("line",{x1:xS(VX),y1:yS(VY),x2:xS(VX),y2:H-padB,stroke:C.red,"stroke-dasharray":"4 4","stroke-width":1.2,"stroke-opacity":.7}));
  s.appendChild(el("circle",{cx:xS(VX),cy:yS(VY),r:6,fill:C.red,stroke:C.stroke,"stroke-width":1.5}));
  s.appendChild(el("text",{x:xS(VX)+10,y:yS(VY)-8,"font-size":11,fill:C.red,"font-weight":600},"vértice · €1,30 B → 1.838 pts"));
  const tangent=el("line",{stroke:C.blue,"stroke-width":1.8,"stroke-opacity":.9});
  const dot=el("circle",{r:6.5,fill:C.blue,stroke:C.stroke,"stroke-width":1.5});
  s.appendChild(tangent);s.appendChild(dot);
  mount.appendChild(s);
  qs={xS,yS,tangent,dot};
  updateSim(parseFloat(document.getElementById("simRange").value));
}
function updateSim(slider){
  const x=slider/100,y=f(x),slope=fp(x);
  document.getElementById("simX").textContent="€"+x.toFixed(2).replace(".",",")+" B";
  document.getElementById("simY").textContent=Math.round(y)+" pts";
  document.getElementById("simD").textContent=(slope>=0?"+":"")+Math.round(slope)+" pts/B";
  if(!qs.xS)return;const{xS,yS,tangent,dot}=qs;
  dot.setAttribute("cx",xS(x));dot.setAttribute("cy",yS(y));
  const dx=0.32,x0=Math.max(0,x-dx),x1=Math.min(2,x+dx);
  tangent.setAttribute("x1",xS(x0));tangent.setAttribute("y1",yS(y+slope*(x0-x)));
  tangent.setAttribute("x2",xS(x1));tangent.setAttribute("y2",yS(y+slope*(x1-x)));
}

/* ===================== 6. RESIDUALS ===================== */
function renderResid(){
  const mount=document.getElementById("resid");mount.innerHTML="";
  const W=820,padL=64,padR=24,padT=24,padB=54,H=480,xmax=1.4,ymin=1240,ymax=1920;
  const xS=v=>padL+(v/xmax)*(W-padL-padR);
  const yS=v=>padT+(1-(v-ymin)/(ymax-ymin))*(H-padT-padB);
  const s=svg(W,H);
  for(let gx=0;gx<=1.4;gx+=0.2){const x=xS(gx);s.appendChild(el("line",{x1:x,y1:padT,x2:x,y2:H-padB,stroke:C.grid}));
    s.appendChild(el("text",{x,y:H-padB+20,"text-anchor":"middle","font-size":10,fill:C.faint},gx.toFixed(1).replace(".",",")));}
  for(let gy=1300;gy<=1900;gy+=100){const y=yS(gy);s.appendChild(el("line",{x1:padL,y1:y,x2:W-padR,y2:y,stroke:C.grid}));
    s.appendChild(el("text",{x:padL-8,y:y+3,"text-anchor":"end","font-size":10,fill:C.faint},gy));}
  s.appendChild(el("text",{x:(padL+W-padR)/2,y:H-10,"text-anchor":"middle","font-size":10.5,fill:C.muted},"Valor del plantel (miles de millones €) →"));
  let d="";for(let i=0;i<=140;i++){const x=0.005+i/140*xmax,y=f(x);d+=(d?"L":"M")+xS(x).toFixed(1)+" "+yS(Math.max(ymin,Math.min(ymax,y))).toFixed(1)+" ";}
  s.appendChild(el("path",{d,fill:"none",stroke:C.curveFaint,"stroke-width":2}));
  DATA.scatter.forEach(p=>s.appendChild(el("circle",{cx:xS(p.valor_bn),cy:yS(p.puntos_FIFA),r:3.5,fill:C.faint,"fill-opacity":.55})));
  s.appendChild(el("circle",{cx:xS(VX),cy:yS(VY),r:5,fill:"none",stroke:C.red,"stroke-width":1.6,"stroke-dasharray":"3 2"}));
  function plot(list,col){
    list.forEach(p=>{
      const pred=f(p.x);
      s.appendChild(el("line",{x1:xS(p.x),y1:yS(p.y),x2:xS(p.x),y2:yS(pred),stroke:col,"stroke-width":1.5,"stroke-opacity":.75}));
      const c=el("circle",{cx:xS(p.x),cy:yS(p.y),r:6,fill:col,stroke:C.stroke,"stroke-width":1.2});
      c.style.cursor="pointer";const nm=TEAM_ES[p.pais]||p.pais;
      bindTip(c,`<b>${nm}</b><br>residuo <span class="v">${p.resid>0?"+":""}${p.resid} pts</span><br>valor €${p.x.toFixed(3).replace(".",",")} B · FIFA ${p.y}`);
      s.appendChild(c);
      s.appendChild(el("text",{x:xS(p.x)+9,y:yS(p.y)+(p.resid>0?-8:14),"font-size":10.5,fill:col,"font-weight":700},`${nm} ${p.resid>0?"+":""}${p.resid}`));
    });
  }
  plot(DATA.resid_pos,C.green);
  plot(DATA.resid_neg,C.red);
  mount.appendChild(s);
  document.getElementById("residLeg").innerHTML=
    `<span><i style="background:${C.green}"></i>Sobre-rendimiento (residuo +)</span>
     <span><i style="background:${C.red}"></i>Sub-rendimiento (residuo −)</span>
     <span><i style="background:${C.faint}"></i>Resto de selecciones</span>`;
}

/* ===================== HISTOGRAMS (+ KDE) ===================== */
function histBins(values,nb){
  const min=Math.min(...values),max=Math.max(...values);
  const w=(max-min)/nb||1;const counts=new Array(nb).fill(0);
  values.forEach(v=>{let i=Math.floor((v-min)/w);if(i>=nb)i=nb-1;if(i<0)i=0;counts[i]++;});
  return {min,max,w,counts};
}
function kdeFn(values){
  const n=values.length,mean=values.reduce((a,b)=>a+b,0)/n;
  const sd=Math.sqrt(values.reduce((a,b)=>a+(b-mean)**2,0)/n)||1;
  const h=1.06*sd*Math.pow(n,-0.2)||1;
  return t=>{let s=0;for(const x of values){const u=(t-x)/h;s+=Math.exp(-0.5*u*u);}return s/(n*h*Math.sqrt(2*Math.PI));};
}
function renderHist(mountId,values,opts){
  opts=opts||{};
  const nb=opts.bins||12,col=opts.color||C.green,fmt=opts.fmt||(v=>Math.round(v));
  const W=460,H=300,padL=46,padR=18,padT=28,padB=54;
  const {min,max,w,counts}=histBins(values,nb);
  const maxC=Math.max(...counts);
  const xS=v=>padL+((v-min)/(max-min||1))*(W-padL-padR);
  const yS=c=>padT+(1-c/(maxC||1))*(H-padT-padB);
  const s=svg(W,H);
  if(opts.title)s.appendChild(el("text",{x:W/2,y:15,"text-anchor":"middle","font-size":12.5,"font-weight":600,fill:C.ink},opts.title));
  const yt=Math.min(maxC,5);
  for(let t=0;t<=yt;t++){const c=Math.round(maxC*t/yt),y=yS(c);
    s.appendChild(el("line",{x1:padL,y1:y,x2:W-padR,y2:y,stroke:C.grid}));
    s.appendChild(el("text",{x:padL-7,y:y+3,"text-anchor":"end","font-size":9.5,fill:C.faint},c));}
  for(let i=0;i<nb;i++){
    if(counts[i]===0)continue;
    const x0=xS(min+i*w),x1=xS(min+(i+1)*w),bw=Math.max(x1-x0-1.5,1),y=yS(counts[i]);
    const r=el("rect",{x:x0+0.75,y:y,width:bw,height:(H-padB)-y,rx:2,fill:col,"fill-opacity":.5,stroke:col,"stroke-width":1});
    r.style.cursor="pointer";
    bindTip(r,`<b>${opts.title||""}</b><br>${fmt(min+i*w)} – ${fmt(min+(i+1)*w)} ${opts.unit||""}<br><span class="v">${counts[i]}</span> ${opts.entity||"casos"}`);
    s.appendChild(r);
  }
  if(opts.kde!==false){
    const k=kdeFn(values);let d="";
    for(let i=0;i<=80;i++){const t=min+(max-min)*i/80,cnt=k(t)*values.length*w;
      d+=(d?"L":"M")+xS(t).toFixed(1)+" "+yS(cnt).toFixed(1)+" ";}
    s.appendChild(el("path",{d,fill:"none",stroke:C.ink,"stroke-width":1.8,"stroke-opacity":.85}));
  }
  for(let t=0;t<=4;t++){const v=min+(max-min)*t/4;
    s.appendChild(el("text",{x:xS(v),y:H-padB+18,"text-anchor":"middle","font-size":9.5,fill:C.faint},fmt(v)));}
  s.appendChild(el("text",{x:W/2,y:H-8,"text-anchor":"middle","font-size":10,fill:C.muted},opts.xlabel||""));
  document.getElementById(mountId).appendChild(s);
}
function renderAllHist(){
  const com2=v=>v.toFixed(2).replace(".",","), com1=v=>v.toFixed(1).replace(".",",");
  renderHist("histFifa",DATA.hist.fifa,{bins:11,color:C.green,title:"Puntaje FIFA",xlabel:"Puntos FIFA",entity:"selecciones"});
  renderHist("histValor",DATA.hist.valor_bn,{bins:13,color:C.red,title:"Valor del plantel",xlabel:"Miles de millones €",unit:"B€",entity:"selecciones",fmt:com2});
  renderHist("histPbi",DATA.hist.pbi_tn,{bins:13,color:C.blue,title:"PBI",xlabel:"Billones de USD",unit:"B USD",entity:"países",fmt:com1});
  renderHist("histPpc",DATA.hist.ppc_k,{bins:13,color:C.violet,title:"PBI per cápita",xlabel:"Miles de USD",unit:"k USD",entity:"países"});
  renderHist("histPob",DATA.hist.pob_m,{bins:13,color:C.amber,title:"Población",xlabel:"Millones de habitantes",unit:"M",entity:"países"});
  renderHist("histDens",DATA.hist.dens,{bins:13,color:C.sky,title:"Densidad",xlabel:"Habitantes por km²",unit:"hab/km²",entity:"países"});
  renderHist("histArea",DATA.hist.area_mk,{bins:13,color:C.green,title:"Superficie",xlabel:"Millones de km²",unit:"M km²",entity:"países",fmt:com1});
}

/* ===================== TICKER · COUNTERS · REVEAL ===================== */
function buildTicker(){
  const items=["Copa Mundial 2026","48 selecciones","r = 0,76 valor↔FIFA","R² = 0,629","umbral €1,30 B","Argentina +161","rendimientos decrecientes","Data Stories Vol. 01"];
  const block=items.map(i=>`${i} <span>·</span>`).join(" ");
  document.getElementById("ticker").innerHTML=`<b>★</b> ${block} <b>★</b> ${block} `;
}
function animateCounters(){
  document.querySelectorAll(".num[data-c]").forEach(node=>{
    const target=parseFloat(node.dataset.c),dec=parseInt(node.dataset.dec||0),suf=node.dataset.suf||"";
    const dur=1300,start=performance.now();
    function step(t){let p=Math.min((t-start)/dur,1);p=1-Math.pow(1-p,3);
      const v=target*p;node.textContent=(dec?v.toFixed(dec).replace(".",","):Math.round(v))+suf;
      if(p<1)requestAnimationFrame(step);else node.textContent=(dec?target.toFixed(dec).replace(".",","):target)+suf;}
    requestAnimationFrame(step);
  });
}
function setupReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll(".rv").forEach(n=>io.observe(n));
}

/* ===================== INIT ===================== */
window.addEventListener("load",()=>{
  buildTicker();
  renderAllHist();
  renderHeatmap();
  renderBox("boxCont",DATA.box_cont,CONT_ES,C.green);
  renderBox("boxLang",DATA.box_lang,LANG_ES,C.blue);
  renderDonut();
  renderBox("boxRel",DATA.box_rel,REL_ES,C.red);
  buildScatterControls();renderScatter();buildR2Table();
  renderQuad();
  document.getElementById("simRange").addEventListener("input",e=>updateSim(parseFloat(e.target.value)));
  renderResid();
  setupReveal();
  setTimeout(()=>{document.getElementById("loader").classList.add("done");animateCounters();},850);
  addEventListener("resize",()=>{renderScatter();renderQuad();renderResid();},{passive:true});
});
