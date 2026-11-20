document.getElementById("year")?.append(String(new Date().getFullYear()));
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.getElementById("quoteForm")?.addEventListener("submit",e=>{
 e.preventDefault(); const f=new FormData(e.currentTarget);
 const subject=encodeURIComponent("Project enquiry — SIAM IT LABS");
 const body=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nService: ${f.get("service")}\n\nProject details:\n${f.get("details")}`);
 document.getElementById("formMessage").textContent="Your email app should open with the project request. Set your real business email in assets/script.js before launch.";
 window.location.href=`mailto:hello@siamitlabs.com?subject=${subject}&body=${body}`;
});