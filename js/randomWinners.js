document.addEventListener("DOMContentLoaded", async () => {
    async function loadFileData(url) {
        const response = await fetch(url);
        const text = await response.text();
        return text.trim().split("\n");
    }

    const names = await loadFileData("data/names.txt");
    const surnames = await loadFileData("data/surnames.txt");
    const prizes = await loadFileData("data/prizes.txt");

    const audio = new Audio("audio/gennadii-gorin-chihaet.mp3");

    function addRandomWinner() {
        const name = names[Math.floor(Math.random() * names.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const prize = prizes[Math.floor(Math.random() * prizes.length)];
        const date = new Date().toISOString().split("T")[0];

        const winnerInfo = document.createElement('div');
        winnerInfo.textContent = `${name} ${surname} выиграл(а) ${prize} на дату ${date}`;

        document.getElementById('winnerList').appendChild(winnerInfo);

        audio.play();
    }

    addRandomWinner();
});
