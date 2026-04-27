

const data = [
  { title: "Cardiology", desc: "Heart treatments", icon: "icon1.png" },
  { title: "Dermatology", desc: "Skin treatments", icon: "icon2.png" },
  { title: "Neurology", desc: "Brain treatments", icon: "icon3.png" }
];


const grid = document.getElementById("grid");
const title = document.getElementById("bookTitle");
const desc = document.getElementById("bookDesc");
const icon = document.getElementById("bookIcon");


data.forEach((item, i) => {
  const div = document.createElement("div");
  div.className = "spec-card";

  div.innerHTML = `
    <img src="${item.icon}">
    <p>${item.title}</p>
  `;


  div.onclick = () => {
    title.textContent = item.title;
    desc.textContent = item.desc;
    icon.src = item.icon;
  };

  grid.appendChild(div);
});


title.textContent = data[0].title;
desc.textContent = data[0].desc;
icon.src = data[0].icon;

