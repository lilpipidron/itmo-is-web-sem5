document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('raffleForm');
  const resultsContainer = document.getElementById('results');
  const raffleList = document.getElementById('raffleList');
  let editIndex = null;

  const loadRaffles = () => JSON.parse(localStorage.getItem('raffles')) || [];
  const saveRaffles = (raffles) => localStorage.setItem('raffles', JSON.stringify(raffles));

  const renderRaffleList = () => {
    console.log("Рендер списка розыгрышей");
    while (raffleList.firstChild) {
      raffleList.removeChild(raffleList.firstChild);
    }
    const raffles = loadRaffles();
    raffles.forEach((raffle, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${raffle.raffleName} — ${raffle.prize}`;
      listItem.addEventListener('click', () => loadRaffleForEdit(index));
      raffleList.appendChild(listItem);
    });
  };

  const loadRaffleForEdit = (index) => {
    const raffles = loadRaffles();
    const raffle = raffles[index];
    document.getElementById('raffleName').value = raffle.raffleName;
    document.getElementById('prize').value = raffle.prize;
    document.getElementById('ticketCount').value = raffle.ticketCount;
    document.getElementById('ticketPrice').value = raffle.ticketPrice;
    editIndex = index;
    document.querySelector("button[type='submit']").textContent = 'Обновить розыгрыш';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const raffleName = document.getElementById('raffleName').value;
    const prize = document.getElementById('prize').value;
    const ticketCount = parseInt(document.getElementById('ticketCount').value, 10);
    const ticketPrice = parseFloat(document.getElementById('ticketPrice').value);

    let raffles = loadRaffles();

    if (editIndex !== null) {
      raffles[editIndex] = { raffleName, prize, ticketCount, ticketPrice };
      editIndex = null;
      form.querySelector("button[type='submit']").textContent = 'Создать розыгрыш';
    } else {
      raffles.push({ raffleName, prize, ticketCount, ticketPrice });
    }

    saveRaffles(raffles);
    renderRaffleList();
    form.reset();

    const successMessage = document.createElement('p');
    successMessage.textContent = `Розыгрыш "${raffleName}" успешно сохранён!`;
    resultsContainer.appendChild(successMessage);

    if (resultsContainer.firstChild) {
      resultsContainer.removeChild(resultsContainer.firstChild);
    }
    resultsContainer.appendChild(successMessage);
  });

  renderRaffleList();
});
