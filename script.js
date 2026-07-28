document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert(btn.innerText);
    });
});
