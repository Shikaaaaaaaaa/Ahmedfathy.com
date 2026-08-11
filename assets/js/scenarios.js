const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;
const worlds=[...document.querySelectorAll("[data-world]")];
const worldLabel=document.querySelector("[data-world-label]");
const worldDot=document.querySelector("[data-world-dot]");

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle("is-visible",entry.isIntersecting);
    if(entry.isIntersecting){
      worldLabel.textContent=entry.target.dataset.world;
      worldDot.style.background=getComputedStyle(entry.target).color;
    }
  });
},{threshold:.48});
worlds.forEach(world=>observer.observe(world));

let offerTimer;
document.querySelector("[data-run-offer]").addEventListener("click",()=>{
  clearInterval(offerTimer);
  const agents=[...document.querySelectorAll("[data-agent]")];
  const lines=[...document.querySelectorAll(".offer-stage .handoff")];
  const output=document.querySelector("[data-offer-output]");
  agents.forEach((agent,index)=>agent.classList.toggle("is-ready",index===0));
  lines.forEach(line=>line.classList.remove("is-live"));
  output.classList.remove("is-done");
  output.innerHTML="<small>OUTPUT / RUNNING</small><strong>Agents are assembling the offer.</strong><span>0 claims checked</span>";
  let step=0;
  const advance=()=>{
    if(step>0)lines[step-1]?.classList.add("is-live");
    agents[step]?.classList.add("is-ready");
    const counter=output.querySelector("span");
    if(counter)counter.textContent=(step*4)+" claims checked";
    if(step===agents.length-1){
      output.innerHTML="<small>OUTPUT / VERIFIED</small><strong>3 audience offers ready to publish.</strong><span>12 / 12 claims grounded · no duplicates</span>";
      output.classList.add("is-done");
      clearInterval(offerTimer);
    }
    step+=1;
  };
  advance();
  offerTimer=setInterval(advance,reduceMotion?20:720);
});

document.querySelector("[data-move-deal]").addEventListener("click",event=>{
  const deal=document.querySelector("[data-deal]");
  const slot=document.querySelector("[data-launch-slot]");
  const status=document.querySelector("[data-portal-status]");
  const moved=deal.classList.toggle("is-signed");
  slot.classList.toggle("is-live",moved);
  status.textContent=moved?"Deal signed. Launch checklist created automatically.":"Deal returned to negotiation.";
  event.currentTarget.firstChild.textContent=moved?"Return the deal ":"Move the deal ";
});

document.querySelector("[data-assemble]").addEventListener("click",event=>{
  const modules=[...document.querySelectorAll("[data-module]")];
  const assembled=!modules.every(module=>module.classList.contains("is-assembled"));
  modules.forEach((module,index)=>setTimeout(()=>module.classList.toggle("is-assembled",assembled),reduceMotion?0:index*150));
  setTimeout(()=>document.querySelector("[data-build-stamp]").classList.toggle("is-live",assembled),reduceMotion?0:650);
  event.currentTarget.firstChild.textContent=assembled?"Disassemble the system ":"Assemble the system ";
});

document.querySelector("[data-shore-toggle]").addEventListener("click",event=>{
  const stage=document.querySelector("[data-shore-stage]");
  const night=stage.classList.toggle("is-night");
  event.currentTarget.firstChild.textContent=night?"Bring back the sun ":"Turn up the night ";
});

if(!reduceMotion){
  document.querySelectorAll(".world-stage").forEach(stage=>{
    stage.addEventListener("pointermove",event=>{
      const rect=stage.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      stage.style.transform="perspective(1100px) rotateX("+(-y*2.2)+"deg) rotateY("+(x*2.2)+"deg)";
    });
    stage.addEventListener("pointerleave",()=>stage.style.transform="");
  });
}
