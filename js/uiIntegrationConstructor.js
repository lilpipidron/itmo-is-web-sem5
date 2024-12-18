document.addEventListener('DOMContentLoaded', function() {

  flatpickr("#raffleDate", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today"
  });

  var raffleForm = document.getElementById('raffleForm');

  raffleForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      name: document.getElementById('raffleName').value,
      prize: document.getElementById('prize').value,
      ticketCount: document.getElementById('ticketCount').value,
      ticketPrice: document.getElementById('ticketPrice').value,
      raffleDate: document.getElementById('raffleDate').value
    };

    var raffleList = document.getElementById('raffleList');
    var li = document.createElement('li');
    li.textContent = "Розыгрыш: " + data.name + " | Приз: " + data.prize + " | Дата: " + data.raffleDate;
    raffleList.appendChild(li);

    raffleForm.reset();

    Toastify({
      text: "Розыгрыш успешно создан!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "rgba(0,0,0,0.8)",
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(255,255,255,0.3)"
      }
    }).showToast();
  });

});

