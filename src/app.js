const DATA = /*__DATA__*/null;
const PHOTOS = /*__PHOTOS__*/{};
const PLACES = DATA.places, TIPS = DATA.tips;
// 장소 자체가 아니라 그 장소가 있는 건물 외관 사진인 경우 (사진에 표시)
const EXTERIOR = new Set([154]);

const T = {
  ko:{brand:"KNUT 꿀팁 가이드",nav:[["#picks","추천"],["#all","전체 목록"],["#data","데이터 원칙"]],
    h1:"한국교통대학교<br>캠퍼스 꿀팁 가이드",eyebrow:"충주캠퍼스 · 교통대생이 직접 추천한 동네 안내서",sub:"충주캠퍼스 주변 맛집 & 숨은 힐링/공부 장소 모아보기",
    lead:"수강생들이 직접 다녀와 남긴 추천 250건을 178곳으로 정리했습니다. 원문에 없는 정보는 짐작하지 않고 '확인 안 됨'으로 남겨 두었어요.",
    searchPh:"가게 이름, 메뉴, 주소 — 예: 국밥, 도서관",searchPh2:"이름 · 메뉴 · 주소 검색",find:"찾기",
    go:n=>`조건에 맞는 ${n}곳 보기`,rand:"아무 데나 골라줘",
    stPlaces:"정리한 장소",stFood:"맛집",stHidden:"숨은장소",stRecs:"추천 기록",credit:"사진 · 네이버 플레이스 방문자 사진",
    picksKicker:"PICKS",picksTitle:"처음 왔다면, 여기부터",tabs:[["food","맛집 TOP 8"],["hidden","숨은장소 TOP 8"]],
    rec:n=>`추천 ${n}`,tLoc:"위치",tHours:"시간",tCost:"비용",tMap:"지도 보기",ext:"건물 외관",
    allKicker:"DIRECTORY",allTitle:n=>`${n}곳 전체 목록`,cats:[["all","전체"],["food","맛집"],["hidden","숨은장소"]],cFood:"맛집",cHidden:"숨은장소",
    budget:"예산",bAny:"전체",sort:"정렬",sRec:"추천 많은 순",sPrice:"가격 낮은 순",sName:"이름순",
    count:n=>`<b>${n}곳</b>`,strict:n=>`원문 확정 ${n}곳`,candT:n=>`참고 후보 ${n}곳 함께 보기`,
    divider:"참고 후보 — 원문에 명시되진 않았지만 비고에 단서가 있는 곳",candSolo:"혼밥 표기 없음 · 1인 이용 단서만 있음",
    empty:"조건에 맞는 곳이 없어요.",reset:"필터 초기화",prev:"이전",next:"다음",
    noPrice:"가격 미확인",noHours:"시간 미확인",soloO:"혼밥 O",soloX:"혼밥 X",cand:"참고 후보",
    dMenu:"대표 메뉴·시설",dPrice:"대표 가격",dSolo:"혼밥",dHours:"영업시간",dAddr:"주소",dDate:"확인한 날",dTip:"유학생 팁",dNote:"비고",
    dOrig:"원문 비고 (한국어)",dSrc:"출처 기록",dMap:"네이버 지도",dSearch:"네이버 지도에서 검색",dCopy:"이름 복사",copied:"가게 이름을 복사했어요",
    again:"다시 뽑기",randHead:"오늘은 여기 어때요?",na:"확인 안 됨",won:n=>`${n.toLocaleString()}원`,
    dataKicker:"METHOD",dataTitle:"이 데이터는 이렇게 만들었어요",
    p1t:"250 → 178",p1:"수강생 추천 250건에서 같은 장소의 중복 기록을 합쳐 178곳으로 정리했습니다. 장소별 추천 수를 모두 더하면 다시 250이 됩니다.",
    p2t:"확인 안 됨",p2:"원문에 적히지 않은 혼밥 여부·가격·영업시간은 가게 이름이나 업종으로 짐작하지 않고 '확인 안 됨'으로 남겼습니다.",
    p3t:"원문 확정 / 참고 후보",p3:"어림수·무게제·2인분 가격은 대표가격 대신 비고에 보존했습니다. 혼밥·예산 필터에서는 두 층을 나눠 보여 줍니다.",
    foot1:"LIU ZHIYUAN (유지원 · 2544412) · AI 데이터 서사 & Vibe Coding · 2026",foot2:"데이터 확인일 2026-10 · 영업 정보는 방문 전 지도에서 다시 확인하세요",
    credit2:"사진: 네이버 플레이스 방문자 사진 · 네이버 블로그 (2024년 이후 게시물만 사용)"},
  zh:{brand:"KNUT 留学生指南",nav:[["#picks","精选"],["#all","全部地点"],["#data","数据原则"]],
    h1:"韩国交通大学<br>留学生生存指南",eyebrow:"忠州校区 · 写给中国留学生的校园周边指南",sub:"不会韩语也能吃饭、办事、找地方自习",
    lead:"把同学们亲自去过的 250 条推荐整理成 178 个地点，并挑出留学生最需要的信息。原文没写的不靠店名去猜，一律标为「未确认」。",
    searchPh:"搜店名、菜品、地址 —— 例：麻辣烫、图书馆",searchPh2:"搜索店名 · 菜品 · 地址",find:"搜索",
    go:n=>`查看符合条件的 ${n} 个地点`,rand:"随机抽一家",
    stPlaces:"整理地点",stFood:"美食",stHidden:"隐秘好去处",stRecs:"推荐记录",credit:"图片 · Naver Place 访客实拍",
    picksKicker:"PICKS",picksTitle:"刚来交大？先看这里",tabs:[["intl","留学生亲测 12"],["tips","生存指南 5"],["top","人气 TOP 8"]],
    rec:n=>`推荐 ${n} 次`,tLoc:"地点",tHours:"时间",tCost:"费用",tMap:"查看地图",ext:"建筑外观",
    allKicker:"DIRECTORY",allTitle:n=>`全部 ${n} 个地点`,cats:[["all","全部"],["food","美食"],["hidden","隐秘好去处"],["intl","留学生亲测"]],cFood:"美食",cHidden:"隐秘好去处",
    budget:"预算",bAny:"不限",sort:"排序",sRec:"推荐最多",sPrice:"价格最低",sName:"按店名",
    count:n=>`<b>${n} 个地点</b>`,strict:n=>`原文确认 ${n} 家`,candT:n=>`同时显示 ${n} 家备注候选`,
    divider:"备注候选 —— 原文没有明确写，但备注里有线索",candSolo:"原文未写一人食 · 仅有单人用餐线索",
    empty:"没有符合条件的地点。",reset:"清除筛选",prev:"上一页",next:"下一页",
    noPrice:"价格未确认",noHours:"时间未确认",soloO:"一人食 O",soloX:"不适合一人食",cand:"备注候选",
    dMenu:"代表菜单·设施",dPrice:"代表价格",dSolo:"一人食",dHours:"营业时间",dAddr:"地址",dDate:"核实日期",dTip:"留学生贴士",dNote:"备注",
    dOrig:"韩文原始备注",dSrc:"数据来源",dMap:"Naver 地图",dSearch:"在 Naver 地图搜索",dCopy:"复制韩文店名",copied:"已复制韩文店名，可直接粘贴到 Naver 地图",
    again:"再抽一次",randHead:"今天就去这家？",na:"未确认",won:n=>`${n.toLocaleString()}원`,
    dataKicker:"METHOD",dataTitle:"这些数据是怎么来的",
    p1t:"250 → 178",p1:"把同学们的 250 条推荐里同一地点的重复记录合并，得到 178 个地点。所有地点的推荐次数加起来正好还是 250。",
    p2t:"未确认",p2:"原文没写的一人食、价格、营业时间，不凭店名或品类去猜，统一标为「확인 안 됨 / 未确认」。",
    p3t:"原文确认 / 备注候选",p3:"概数、按重量计价、两人份价格不写进代表价格，而是保留在备注里。一人食和预算筛选时分两层展示。",
    foot1:"LIU ZHIYUAN (유지원 · 2544412) · AI 数据叙事 & Vibe Coding · 2026",foot2:"数据核实于 2026-10 · 出发前请在地图上再确认营业信息",
    credit2:"图片：Naver Place 访客实拍 · Naver 博客（仅使用 2024 年以后的照片）"}
};

const text = p=>[p.name,p.menu,p.note,p.intlTipKo,p.hours].join(" ");
// 상황 필터: 여러 개를 동시에 켤 수 있고 모두 AND 조건
const SCENES = {
  solo:{icon:"user",ko:"혼밥 가능",zh:"一人食 O"},
  b5000:{icon:"won",ko:"5,000원 이하",zh:"≤5,000원",budget:"5000"},
  b8000:{icon:"won",ko:"8,000원 이하",zh:"≤8,000원",budget:"8000"},
  study:{icon:"plug",ko:"공부하기 좋은 곳",zh:"充电插座自习",test:p=>/콘센트|충전|공부|열람|스터디/.test(text(p))},
  late:{icon:"clock",ko:"밤늦게까지 영업",zh:"营业到很晚",test:p=>/24시|24:00|~\s*(2[2-4]|0[0-5]):\d\d/.test(p.hours)},
  kiosk:{icon:"kiosk",ko:"키오스크 주문",zh:"Kiosk 点餐免开口",test:p=>/키오스크/.test(text(p))},
  chinese:{icon:"chat",ko:"중국어 소통",zh:"老板会中文",test:p=>/중국어/.test(text(p))},
  popular:{icon:"check",ko:"여러 명이 추천한 곳",zh:"多人推荐",test:p=>p.recs>=3}
};
const MODE_SCENES = {ko:["solo","b8000","study","late","popular"], zh:["solo","kiosk","chinese","b5000","study"]};
const BUDGETS = [["any",null],["5000",[0,5000]],["8000",[0,8000]],["10000",[0,10000]],["over",[10001,1e9]]];
const S = {lang:"ko", cat:"all", q:"", solo:false, budget:"any", sort:"rec", scenes:new Set(), cand:false, page:1, tab:"food", tip:0};
try{ if(localStorage.getItem("knut-lang")==="zh") S.lang="zh" }catch(e){}
S.tab = T[S.lang].tabs[0][0];

const $ = s=>document.querySelector(s);
const esc = s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const t = (k,...a)=>{const v=T[S.lang][k];return typeof v==="function"?v(...a):v};
const zh = ()=>S.lang==="zh";
const ic = (n,s=16)=>`<svg width="${s}" height="${s}"><use href="#i-${n}"/></svg>`;
const NA = v=>v==null||v===""||v==="확인 안 됨"||v==="未确认";
const nm = p=>zh()?p.name_zh:p.name;
const short = p=>nm(p).replace(/\s*\(.*\)$/,"");
const fld = (p,k)=>zh()?(p[k+"_zh"]||p[k]):p[k];
const byId = Object.fromEntries(PLACES.map(p=>[p.id,p]));
const isFood = p=>p.category==="맛집";
const catLabel = p=>isFood(p)?t("cFood"):t("cHidden");
const pageSize = ()=>matchMedia("(max-width:640px)").matches?6:9;
const counts = f=>PLACES.filter(f).length;
const photo = (p,cls="")=>PHOTOS[p.id]?`<img src="${PHOTOS[p.id]}" alt="${esc(short(p))}" loading="lazy">${EXTERIOR.has(p.id)?`<span class="ext">${t("ext")}</span>`:""}`:"";

/* ---------- filtering: strict = 원문 확정, cand = 비고 단서 ---------- */
function inBudget(v){const r=Object.fromEntries(BUDGETS)[S.budget];return r&&v!=null&&v>=r[0]&&v<=r[1]}
function tierOf(p){
  // 0 = strict, 1 = candidate, -1 = excluded (only solo / budget have a candidate tier)
  let tier=0;
  if(S.solo){ if(p.solo==="O"); else if(p.soloCandidate) tier=1; else return -1 }
  if(S.budget!=="any"){ if(inBudget(p.price)); else if(p.price==null&&inBudget(p.priceHint)) tier=1; else return -1 }
  return tier;
}
function results(){
  const q=S.q.trim().toLowerCase();
  const base=PLACES.filter(p=>{
    if(S.cat==="food"&&!isFood(p))return false;
    if(S.cat==="hidden"&&isFood(p))return false;
    if(S.cat==="intl"&&!p.intlPick)return false;
    for(const k of S.scenes)if(!SCENES[k].test(p))return false;
    if(q&&![p.name,p.name_zh,p.menu,p.menu_zh,p.address,p.address_zh,p.note,p.note_zh,p.intlTipKo,p.intlTipZh].join(" ").toLowerCase().includes(q))return false;
    return true;
  });
  const sorter={
    rec:(a,b)=>b.recs-a.recs||a.name.localeCompare(b.name,"ko"),
    price:(a,b)=>((a.price??a.priceHint??1e9)-(b.price??b.priceHint??1e9))||b.recs-a.recs,
    name:(a,b)=>nm(a).localeCompare(nm(b),zh()?"zh":"ko")
  }[S.sort];
  const strict=[],cand=[];
  base.forEach(p=>{const x=tierOf(p);if(x===0)strict.push(p);else if(x===1)cand.push(p)});
  return {strict:strict.sort(sorter),cand:cand.sort(sorter)};
}
const tiered = ()=>S.solo||S.budget!=="any";
const shownList = ()=>{const r=results();return r.strict.concat(tiered()&&S.cand?r.cand:[])};
const sceneOn = k=>k==="solo"?S.solo:SCENES[k].budget?S.budget===SCENES[k].budget:S.scenes.has(k);
function sceneToggle(k){
  if(k==="solo")S.solo=!S.solo;
  else if(SCENES[k].budget)S.budget=S.budget===SCENES[k].budget?"any":SCENES[k].budget;
  else S.scenes.has(k)?S.scenes.delete(k):S.scenes.add(k);
}
const sceneCount = k=>k==="solo"?counts(p=>p.solo==="O"):SCENES[k].budget?counts(p=>p.price!=null&&p.price<=+SCENES[k].budget):counts(SCENES[k].test);

/* ---------- render ---------- */
function priceText(p){return p.price!=null?t("won",p.price):`<span class="na">${t("noPrice")}</span>`}
function soloPill(p){return p.solo==="O"?`<span class="pill o">${t("soloO")}</span>`:p.solo==="X"?`<span class="pill">${t("soloX")}</span>`:""}
function sceneChip(k,sm){const d=SCENES[k];
  return `<button class="chip${sm?" sm":""}" data-scene="${k}" aria-pressed="${sceneOn(k)}">${ic(d.icon,sm?14:15)}${esc(d[S.lang])}${sm?"":`<small>${sceneCount(k)}</small>`}</button>`}

function card(p,isCand){
  const menu=fld(p,"menu"), hours=fld(p,"hours");
  let reason="";
  if(isCand){
    const r=[];
    if(S.solo&&p.solo!=="O")r.push(t("candSolo"));
    if(S.budget!=="any"&&p.price==null&&p.priceHint!=null)r.push(zh()?p.priceHintZh:p.priceHintKo);
    reason=`<p class="reason">${esc(r.join(" · "))}</p>`;
  }
  return `<button class="card${isCand?" cand":""}" data-id="${p.id}">
    <div class="meta"><span class="cat${isFood(p)?"":" h"}">${catLabel(p)}</span><span>${isCand?`<span class="pill c">${t("cand")}</span>`:t("rec",p.recs)}</span></div>
    <h3>${esc(nm(p))}${zh()?`<small>${esc(p.name)}</small>`:""}</h3>
    <p class="menu-l">${NA(menu)?`<span class="na">${t("na")}</span>`:esc(menu)}</p>
    ${reason}
    <div class="facts-s">
      <div>${ic("won",14)}<span>${priceText(p)}</span>${soloPill(p)?`<span style="margin-left:auto">${soloPill(p)}</span>`:""}</div>
      <div>${ic("clock",14)}<span>${NA(hours)?`<span class="na">${t("noHours")}</span>`:esc(hours)}</span></div>
    </div>
  </button>`;
}

function renderStatic(){
  document.documentElement.lang=zh()?"zh-CN":"ko";
  document.title=zh()?"KNUT 留学生生存指南":"KNUT 캠퍼스 꿀팁 가이드";
  document.querySelectorAll("[data-t]").forEach(el=>{const v=T[S.lang][el.dataset.t];if(typeof v==="string")el.textContent=v});
  document.querySelectorAll("[data-th]").forEach(el=>el.innerHTML=T[S.lang][el.dataset.th]);
  document.querySelectorAll("[data-tp]").forEach(el=>el.placeholder=t(el.dataset.tp));
  $("#modeSeg").dataset.mode=S.lang;
  document.querySelectorAll("[data-mode]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.mode===S.lang));
  $("#nav").innerHTML=t("nav").map(([h,l,tab])=>`<a href="${h}"${tab?` data-tab="${tab}"`:""}>${l}</a>`).join("");
  $("#all h2").textContent=t("allTitle",PLACES.length);
  const total=PLACES.reduce((a,p)=>a+p.recs,0);
  $("#ledger").innerHTML=[[PLACES.length,"stPlaces"],[counts(isFood),"stFood"],[counts(p=>!isFood(p)),"stHidden"],[total,"stRecs"]]
    .map(([n,k])=>`<div><b>${n}</b><span>${t(k)}</span></div>`).join("");
  const tiles=[[2,"t1"],[26,"t2"],[147,"t3"],[1,"t4"]];
  $("#mosaic").innerHTML=tiles.map(([id,c])=>`<button class="tile ${c}" data-id="${id}"><img src="${PHOTOS[id]}" alt="${esc(short(byId[id]))}"><span>${esc(short(byId[id]))}</span></button>`).join("");
  $("#princ").innerHTML=[1,2,3].map(i=>`<div><b>${t("p"+i+"t")}</b><p>${t("p"+i)}</p></div>`).join("");
  $("#pickTabs").innerHTML=t("tabs").map(([k,l])=>`<button role="tab" data-tab="${k}">${l}</button>`).join("");
}

function renderScenes(){
  $("#scenes").innerHTML=MODE_SCENES[S.lang].map(k=>sceneChip(k)).join("")+`<button class="chip rand" data-rand>${ic("shuffle",15)}${t("rand")}</button>`;
  const any=S.solo||S.budget!=="any"||S.scenes.size;
  $("#go").classList.toggle("on",!!any);
  $("#go").innerHTML=any?`${t("go",shownList().length)}${ic("arrow",15)}`:"";
}

function renderPicks(){
  document.querySelectorAll("#pickTabs button").forEach(b=>{b.setAttribute("aria-pressed",b.dataset.tab===S.tab);b.setAttribute("aria-selected",b.dataset.tab===S.tab)});
  const body=$("#pickBody");
  if(S.tab==="tips"){
    const tp=TIPS[S.tip], L=k=>tp[k+(zh()?"_zh":"_ko")];
    const map=tp.map||("https://map.naver.com/p/search/"+encodeURIComponent(tp.search_q));
    body.innerHTML=`<div class="tips">
      <div class="tiplist" role="tablist">${TIPS.map((x,i)=>`<button role="tab" data-tip="${i}" aria-selected="${i===S.tip}"><em>${x.num}</em><span>${esc(x[zh()?"tab_zh":"tab_ko"])}</span></button>`).join("")}</div>
      <article class="tipcard">
        <span class="badge">${esc(L("badge"))}</span>
        <h3>${esc(L("title"))}</h3>
        <dl class="facts"><div><dt>${t("tLoc")}</dt><dd>${esc(L("loc"))}</dd></div><div><dt>${t("tHours")}</dt><dd>${esc(L("hours"))}</dd></div><div><dt>${t("tCost")}</dt><dd>${esc(L("price"))}</dd></div></dl>
        <p>${esc(L("desc"))}</p>
        <a class="btn btn-line" href="${esc(map)}" target="_blank" rel="noopener">${ic("pin")}${t("tMap")}</a>
      </article></div>`;
    return;
  }
  const byRec=(a,b)=>b.recs-a.recs||a.name.localeCompare(b.name,"ko");
  const list={food:PLACES.filter(isFood).sort(byRec).slice(0,8),hidden:PLACES.filter(p=>!isFood(p)).sort(byRec).slice(0,8),
    top:[...PLACES].sort(byRec).slice(0,8),intl:PLACES.filter(p=>p.intlPick)}[S.tab];
  const ranked=S.tab!=="intl";
  body.innerHTML=`<div class="rail">${list.map((p,i)=>{
    const rank=ranked?`<span class="rank">${String(i+1).padStart(2,"0")}</span>`:"";
    const ph=PHOTOS[p.id]?`<div class="ph">${photo(p)}${rank}</div>`:`<div class="ph type">${rank}<em>${esc(short(p))}</em></div>`;
    const desc=S.tab==="intl"?(zh()?p.intlTipZh:p.intlTipKo):fld(p,"menu");
    return `<button class="pc" data-id="${p.id}">${ph}<div class="bd"><h3>${esc(nm(p))}</h3><p>${NA(desc)?`<span class="na">${t("na")}</span>`:esc(desc)}</p>
      <div class="ft"><span class="cat${isFood(p)?"":" h"}">${catLabel(p)}</span><span>${t("rec",p.recs)}</span></div></div></button>`}).join("")}</div>`;
}

function renderFilters(){
  const b=BUDGETS.map(([k])=>`<button class="chip sm" data-budget="${k}" aria-pressed="${S.budget===k}">${k==="any"?t("bAny"):k==="over"?">10,000원":"≤"+(+k).toLocaleString()+"원"}</button>`).join("");
  const sorts=[["rec","sRec"],["price","sPrice"],["name","sName"]];
  $("#filters").innerHTML=`${MODE_SCENES[S.lang].filter(k=>!SCENES[k].budget).map(k=>sceneChip(k,true)).join("")}
    <span class="sep"></span><span class="lbl">${t("budget")}</span>${b}
    <div class="sort"><button class="chip sm" id="sortBtn" aria-haspopup="listbox" aria-expanded="false">${t("sort")} · ${t(sorts.find(s=>s[0]===S.sort)[1])}${ic("chev",14)}</button>
    <ul class="menu" id="sortMenu" role="listbox">${sorts.map(([k,l])=>`<li role="option" data-sort="${k}" aria-selected="${S.sort===k}">${t(l)}${S.sort===k?ic("check",14):""}</li>`).join("")}</ul></div>`;
  $("#cats").innerHTML=t("cats").map(([k,l])=>`<button data-cat="${k}" aria-pressed="${S.cat===k}">${l} ${k==="all"?PLACES.length:k==="food"?counts(isFood):k==="hidden"?counts(p=>!isFood(p)):counts(p=>p.intlPick)}</button>`).join("");
}

function renderGrid(){
  const {strict,cand}=results();
  const list=strict.concat(tiered()&&S.cand?cand:[]);
  const ps=pageSize(), pages=Math.max(1,Math.ceil(list.length/ps));
  S.page=Math.min(S.page,pages);
  const start=(S.page-1)*ps, slice=list.slice(start,start+ps);

  let sum=`<span>${t("count",list.length)}</span>`;
  if(tiered()) sum=`<span style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span class="tag-ok">${ic("check",13)}${t("strict",strict.length)}</span>${t("count",list.length)}</span>`
    +(cand.length?`<button class="switch" id="candSw" role="switch" aria-checked="${S.cand}"><i></i>${t("candT",cand.length)}</button>`:"");
  $("#sum").innerHTML=sum;

  let html="";
  slice.forEach((p,i)=>{
    const isC=start+i>=strict.length;
    if(isC&&(i===0||start+i===strict.length))html+=`<div class="divider">${t("divider")}</div>`;
    html+=card(p,isC);
  });
  if(!list.length)html=`<div class="empty"><p>${t("empty")}</p>${tiered()&&cand.length&&!S.cand?`<button class="btn btn-line" data-showcand>${t("candT",cand.length)}</button> `:""}<button class="btn btn-ink" data-reset>${t("reset")}</button></div>`;
  $("#grid").innerHTML=html;

  if(pages<2){$("#pager").innerHTML="";return}
  const nums=[];for(let i=1;i<=pages;i++)if(i===1||i===pages||Math.abs(i-S.page)<=1)nums.push(i);else if(nums[nums.length-1]!=="…")nums.push("…");
  $("#pager").innerHTML=`<button data-page="${S.page-1}" ${S.page===1?"disabled":""} aria-label="${t("prev")}">${ic("left")}</button>`
    +nums.map(n=>n==="…"?`<span class="dots">…</span>`:`<button data-page="${n}" ${n===S.page?'aria-current="page"':""}>${n}</button>`).join("")
    +`<button data-page="${S.page+1}" ${S.page===pages?"disabled":""} aria-label="${t("next")}">${ic("right")}</button>`;
}

function renderDir(){renderScenes();renderFilters();renderGrid();$("#dirSearch").classList.toggle("has",!!S.q)}
function renderAll(){renderStatic();renderPicks();renderDir()}

/* ---------- drawer ---------- */
let lastFocus=null, randMode=false, curId=null;
function openPlace(id,rand=false){
  const p=byId[id]; curId=id; randMode=rand; lastFocus=lastFocus||document.activeElement;
  const map=p.map||("https://map.naver.com/p/search/"+encodeURIComponent(p.name));
  const tip=zh()?p.intlTipZh:p.intlTipKo, note=fld(p,"note");
  const hint=p.priceHint!=null?`<small>${esc(zh()?p.priceHintZh:p.priceHintKo)}</small>`:"";
  const solo=p.solo==="O"?t("soloO"):p.solo==="X"?t("soloX"):`<span class="na">${t("na")}</span>`+(p.soloCandidate?`<small>${t("candSolo")}</small>`:"");
  const val=(v,alt)=>NA(v)?`<span class="na">${t("na")}</span>`:esc(v)+(alt&&!NA(alt)&&alt!==v?`<small>${esc(alt)}</small>`:"");
  const srcs=(p.source||"").split(";").map(s=>s.trim()).filter(Boolean);
  $("#dHead").textContent=rand?t("randHead"):catLabel(p)+" · "+t("rec",p.recs);
  $("#dBody").innerHTML=`${PHOTOS[p.id]?`<div class="ph">${photo(p)}</div>`:""}
    <span class="cat${isFood(p)?"":" h"}" style="font-size:13px;color:var(--muted)">${catLabel(p)} · ${t("rec",p.recs)}</span>
    <h3 id="dName">${esc(nm(p))}</h3><p class="alt">${esc(zh()?p.name:p.name_zh)}</p>
    <div class="actions">
      <a class="btn btn-ink" href="${esc(map)}" target="_blank" rel="noopener">${ic("pin")}${p.map?t("dMap"):t("dSearch")}${ic("ext",14)}</a>
      <button class="btn btn-line" data-copy="${esc(p.name)}">${ic("copy")}${t("dCopy")}</button>
      ${rand?`<button class="btn btn-clay" data-rand>${ic("shuffle")}${t("again")}</button>`:""}
    </div>
    <dl class="dl">
      <div><dt>${t("dMenu")}</dt><dd>${val(fld(p,"menu"),zh()?p.menu:null)}</dd></div>
      <div><dt>${t("dPrice")}</dt><dd>${p.price!=null?t("won",p.price):`<span class="na">${t("na")}</span>`}${hint}</dd></div>
      <div><dt>${t("dSolo")}</dt><dd>${solo}</dd></div>
      <div><dt>${t("dHours")}</dt><dd>${val(fld(p,"hours"),zh()?p.hours:null)}</dd></div>
      <div><dt>${t("dAddr")}</dt><dd>${val(zh()?p.address_zh:p.address,zh()?p.address:null)}</dd></div>
      <div><dt>${t("dDate")}</dt><dd>${val(p.verified)}</dd></div>
    </dl>
    ${tip&&zh()?`<div class="note tip"><h4>${t("dTip")}</h4>${esc(tip)}</div>`:""}
    ${!NA(note)?`<div class="note"><h4>${t("dNote")}</h4>${esc(note)}${zh()&&p.note?`<details class="orig"><summary>${t("dOrig")}</summary>${esc(p.note)}</details>`:""}</div>`:""}
    ${srcs.length?`<div style="margin-top:20px"><span class="muted" style="font-size:12.5px">${t("dSrc")} · ${srcs.length}</span><div class="src">${srcs.map(s=>`<span>${esc(s)}</span>`).join("")}</div></div>`:""}`;
  $("#drawer").classList.add("on");$("#scrim").classList.add("on");$("#drawer").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";$("#dBody").scrollTop=0;$("#dClose").focus();
}
function closeDrawer(){
  $("#drawer").classList.remove("on");$("#scrim").classList.remove("on");$("#drawer").setAttribute("aria-hidden","true");
  document.body.style.overflow="";curId=null;if(lastFocus)lastFocus.focus();lastFocus=null;
}
function randomPick(){
  // 현재 조건에 맞는 곳 중에서, 추천 2회 이상을 우선
  const {strict}=results(), pool=strict.length?strict:PLACES, good=pool.filter(p=>p.recs>=2);
  const from=good.length?good:pool; let p;
  do p=from[Math.floor(Math.random()*from.length)]; while(from.length>1&&p.id===curId);
  openPlace(p.id,true);
}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("on"),1800)}
async function copy(s){
  try{await navigator.clipboard.writeText(s)}catch(e){const ta=document.createElement("textarea");ta.value=s;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove()}
  toast(t("copied"));
}

/* ---------- events ---------- */
function update(){S.page=1;renderDir()}
// 모드 전환: 스냅샷(View Transitions) 대신 실제 요소에 애니메이션 — iOS에서 끝난 뒤 글자가 튀지 않도록
const SWAP=[[".brand span",0],[".nav",0],[".eyebrow",0],["h1",40],[".sub",90],[".lead",130],["#scenes",170],[".ledger",210],
  ["#picks h2",60],["#pickTabs",60],["#pickBody",140],["#all h2",60],["#cats",100],["#filters",120],["#sum",140],["#grid",160],["#pager",160],["#data h2",60],[".princ",120],["footer",120]];
async function switchMode(m){
  try{localStorage.setItem("knut-lang",m)}catch(_){}
  const apply=()=>{S.lang=m;resetFilters();S.tab=t("tabs")[0][0];S.tip=0;renderAll();if(curId)openPlace(curId,randMode)};
  if(matchMedia("(prefers-reduced-motion: reduce)").matches||!document.body.animate)return apply();
  $("#modeSeg").dataset.mode=m;
  document.querySelectorAll("[data-mode]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.mode===m));
  const els=SWAP.map(([sel,d])=>[$(sel),d]).filter(([el])=>el);
  const outs=els.map(([el])=>el.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(-6px)",filter:"blur(3px)"}],
    {duration:170,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"}));
  await Promise.all(outs.map(a=>a.finished.catch(()=>{})));
  apply();
  // 들어오는 애니메이션을 먼저 걸고 나서 나가는 애니메이션을 지워야 한 프레임도 비지 않음
  els.forEach(([el,d])=>el.animate([{opacity:0,transform:"translateY(10px)",filter:"blur(5px)"},{opacity:1,transform:"none",filter:"blur(0)"}],
    {duration:520,delay:d,easing:"cubic-bezier(.16,1,.3,1)",fill:"backwards"}));
  outs.forEach(a=>a.cancel());
}
function resetFilters(){Object.assign(S,{cat:"all",q:"",solo:false,budget:"any",cand:false,page:1});S.scenes.clear();$("#q").value=$("#heroQ").value=""}

document.addEventListener("click",e=>{
  const el=e.target.closest("button,a,li");if(!el)return;
  const d=el.dataset;
  if(d.mode){if(d.mode!==S.lang)switchMode(d.mode);return}
  if(d.copy!=null){copy(d.copy);return}
  if(d.rand!=null){randomPick();return}
  if(d.id){openPlace(+d.id);return}
  if(d.tab){S.tab=d.tab;renderPicks();return}
  if(d.tip!=null){S.tip=+d.tip;renderPicks();return}
  if(d.scene){sceneToggle(d.scene);update();return}
  if(d.cat){S.cat=d.cat;update();return}
  if(d.budget){S.budget=d.budget;update();return}
  if(el.id==="sortBtn"){const m=$("#sortMenu"),o=!m.classList.contains("open");m.classList.toggle("open",o);el.setAttribute("aria-expanded",o);return}
  if(d.sort){S.sort=d.sort;update();return}
  if(el.id==="candSw"){S.cand=!S.cand;update();return}
  if(d.showcand!=null){S.cand=true;update();return}
  if(d.reset!=null){resetFilters();update();return}
  if(d.page){S.page=+d.page;renderGrid();$("#all").scrollIntoView({behavior:"smooth"});return}
  if(el.id==="qClear"){S.q="";$("#q").value="";update();$("#q").focus();return}
  if(el.id==="dClose"){closeDrawer();return}
});
document.addEventListener("click",e=>{if(!e.target.closest(".sort")){const m=$("#sortMenu");if(m)m.classList.remove("open")}},true);
$("#scrim").addEventListener("click",closeDrawer);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){if($("#drawer").classList.contains("on"))closeDrawer();else $("#sortMenu")?.classList.remove("open")}
  if(e.key==="Tab"&&$("#drawer").classList.contains("on")){ // keep focus inside drawer
    const f=[...$("#drawer").querySelectorAll("button,a,summary")];const first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
});
$("#q").addEventListener("input",e=>{S.q=e.target.value;update()});
$("#heroSearch").addEventListener("submit",e=>{e.preventDefault();S.q=$("#heroQ").value;$("#q").value=S.q;update();$("#all").scrollIntoView({behavior:"smooth"})});
addEventListener("scroll",()=>$("#top").classList.toggle("scrolled",scrollY>8),{passive:true});
let lastPs=pageSize();addEventListener("resize",()=>{if(pageSize()!==lastPs){lastPs=pageSize();renderGrid()}});

renderAll();

// self-check: data integrity the page relies on
console.assert(PLACES.length===178&&PLACES.reduce((a,p)=>a+p.recs,0)===250,"data counts changed");
