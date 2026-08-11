const projects=[
{code:"W/01",year:"2026",title:"WeIN Ops Portal",category:"product",label:"Internal product · Product ownership",description:"A negotiation tracker that grew into the sales and operations platform the team runs its day through—roles, pipeline, provider intake, chat, notifications, and launch tracking.",stack:"Flask · Supabase · RLS · JavaScript",href:"https://github.com/AhmeedFathy",colors:["#152620","#b7ff4a"]},
{code:"AI/02",year:"2026",title:"Agentic Offer Pipeline",category:"ai",label:"Production automation · Verification",description:"A manual advisor-to-review process rebuilt as a multi-step n8n system with retrieval, scoring, deterministic groundedness checks, fuzzy deduplication, and delivery.",stack:"n8n · LLMs · Python · pgvector",href:"https://github.com/AhmeedFathy/Wein-AI-System",colors:["#1c1626","#c6a8ff"]},
{code:"OPS/03",year:"2026",title:"Eldorado Operations Platform",category:"product",label:"Secure workflow · Full-stack system",description:"An order-to-reconciliation platform with role-based operations, encrypted credentials, proof handling, append-only finance records, worker KPIs, payroll, and audit trails.",stack:"Next.js · TypeScript · PostgreSQL · Prisma",href:"https://github.com/AhmeedFathy",colors:["#281f13","#ffbf69"]},
{code:"SQL/04",year:"2026",title:"Retail Profitability Investigation",category:"data",label:"Root-cause analysis · Decision support",description:"Traced weak Furniture profitability to Tables discounts: profitable at zero discount, near break-even around 20%, and strongly loss-making above it.",stack:"SQL Server · Power BI · Analysis",href:"https://github.com/AhmeedFathy/Retail-Profitability-SQL-Analysis",colors:["#172431","#8dd1ff"]}
];

const archiveProjects=[
["05","E-commerce Spending Predictor","Regression · Streamlit","data","https://github.com/AhmeedFathy/LinearRegressionEcommerce"],
["06","California Housing","ML pipeline · Feature engineering","data","https://github.com/AhmeedFathy/California_Housing"],
["07","Parkinson’s Detection + Severity","Classification · Regression","data","https://github.com/Parkinson-ML/Parkinson"],
["08","Shore Thing","React brand experience","product","https://github.com/AhmeedFathy"],
["09","Business Automation Library","15 n8n workflows","ai","https://github.com/AhmeedFathy"],
["10","Fieldwork Estates","Property preview site","product","https://github.com/AhmeedFathy/fieldwork-estates-preview-site"],
["11","AI Training Plan Generator","Applied AI prototype","ai","https://github.com/AhmeedFathy/ai-training-plan-generator"],
["12","Mono Pedestrian Gallery","Visual web experiment","product","https://github.com/AhmeedFathy/mono-pedestrian-gallery"]
];

const featured=document.querySelector("[data-featured-work]");
const archive=document.querySelector("[data-archive]");
const filters=[...document.querySelectorAll("[data-filter]")];

function renderProjects(filter="all"){
  featured.innerHTML=projects.filter(p=>filter==="all"||p.category===filter).map(p=>`
    <article class="project">
      <div class="project-top"><span>${p.label}</span><span>${p.year}</span></div>
      <div class="project-visual" style="--bg:${p.colors[0]};--accent:${p.colors[1]}"><span class="visual-code">${p.code}</span></div>
      <h3>${p.title}</h3>
      <div class="project-copy"><div><p>${p.description}</p><span class="project-top">${p.stack}</span></div><a class="project-link" href="${p.href}" aria-label="Open ${p.title}">↗</a></div>
    </article>`).join("");
  archive.innerHTML=archiveProjects.filter(p=>filter==="all"||p[3]===filter).map(p=>`<a class="archive-row" href="${p[4]}"><span>${p[0]}</span><strong>${p[1]}</strong><em>${p[2]}</em><b>↗</b></a>`).join("");
}

filters.forEach(button=>button.addEventListener("click",()=>{filters.forEach(item=>item.classList.remove("is-active"));button.classList.add("is-active");renderProjects(button.dataset.filter)}));

const traceNodes=[...document.querySelectorAll("[data-step]")];
const traceLines=[...document.querySelectorAll(".trace-line")];
let traceTimer;
function setTraceStep(step){
  traceNodes.forEach((node,index)=>{node.classList.toggle("is-active",index<=step);node.querySelector("b").textContent=index<step?"DONE":index===step?"RUNNING":"QUEUED"});
  traceLines.forEach((line,index)=>line.classList.toggle("is-active",index<step));
  if(step===traceNodes.length-1)traceNodes[step].querySelector("b").textContent="VERIFIED";
}
document.querySelector("[data-run-trace]").addEventListener("click",()=>{clearInterval(traceTimer);let step=0;setTraceStep(step);traceTimer=setInterval(()=>{step+=1;setTraceStep(step);if(step>=traceNodes.length-1)clearInterval(traceTimer)},620)});
traceNodes.forEach(node=>node.addEventListener("click",()=>setTraceStep(Number(node.dataset.step))));
const header=document.querySelector("[data-header]");
addEventListener("scroll",()=>header.classList.toggle("is-scrolled",scrollY>24),{passive:true});
document.querySelector("[data-year]").textContent=new Date().getFullYear();
renderProjects();
