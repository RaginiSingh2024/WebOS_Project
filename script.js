let iconCounter = 0;

const desktop = document.getElementById("desktop");

const createIcon = (type, name) => {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.style.top = `${iconCounter * 70 + 10}px`;
  icon.style.left = `10px`;
  icon.innerHTML = `
    <img src="${type === 'folder' ? 'https://img.icons8.com/fluency/48/folder-invoices.png' : 'https://img.icons8.com/fluency/48/document.png'}" />
    <div>${name}</div>
  `;
  desktop.appendChild(icon);
  iconCounter++;
};

const createFolder = () => {
  const name = prompt("Enter folder name:");
  if (name) createIcon("folder", name);
};

const createFile = () => {
  const name = prompt("Enter file name:");
  if (name) createIcon("file", name);
};
