const hoverSkill = word => {
    const wrap = document.querySelector(".foto-profile");
    const img = document.querySelector(".foto-profile img");
    
    const newEl = document.createElement("p");
    const node = document.createTextNode(word);
    // tambahkan tulisan / node ke elemen p yang baru dibuat
    newEl.appendChild(node);
    // tambahkan class ke dalam elemen p yang baru dibuat
    newEl.classList.add("teks-hover-skill");
    
    // tambahkan elemen ke dalam elemen var wrap
    wrap.appendChild(newEl);
    
    img.classList.add("dark-image");
}

const outHoverSkill = () => {
    const img = document.querySelector(".foto-profile img");
    img.classList.remove("dark-image");
    
    const text = document.querySelector(".teks-hover-skill");
    text.remove();
}

const hoverContentPorto = el => {
    const link = el.querySelectorAll("a");
    const img = el.querySelector("img");
    
    link.forEach(el => {
        el.classList.remove("d-none");
    });
    img.classList.add("dark-image");
}

const outHoverContentPorto = el => {
    const link = el.querySelectorAll("a");
    const img = el.querySelector("img");
    
    link.forEach(el => {
        el.classList.add("d-none");
    });
    img.classList.remove("dark-image");
}

const nav = () => {
    const navMenu = document.querySelector(".nav-menu");
    const navTitle = document.querySelector("nav .title");
    
    navMenu.classList.toggle("active");
    navTitle.classList.toggle("active");
    
}