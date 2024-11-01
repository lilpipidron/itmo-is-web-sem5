document.addEventListener("DOMContentLoaded", async () => {
  const n = 5; 

  async function loadData(file) {
    const response = await fetch(file);
    const text = await response.text();
    return text.trim().split("\n");
  }

  const names = await loadData("data/names");
  const surnames = await loadData("data/surnames");
  const prizes = await loadData("data/prizes");

  function addRandomWinner() {
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    const date = new Date().toISOString().split("T")[0];

    const row = document.createElement("div");
    row.classList.add("winners-grid-row");

    const nameCell = document.createElement("div");
    nameCell.classList.add("winners-grid-cell");
    nameCell.textContent = `${name} ${surname}`;

    const prizeCell = document.createElement("div");
    prizeCell.classList.add("winners-grid-cell");
    prizeCell.textContent = prize;

    const dateCell = document.createElement("div");
    dateCell.classList.add("winners-grid-cell");
    dateCell.textContent = date;

    row.appendChild(nameCell);
    row.appendChild(prizeCell);
    row.appendChild(dateCell);

    document.querySelector(".winners-grid").appendChild(row);

    const randomDelay = Math.floor(Math.random() * n + 1) * 1000;
    setTimeout(addRandomWinner, randomDelay);
  }

  addRandomWinner();
});
