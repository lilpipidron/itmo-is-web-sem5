document.addEventListener('DOMContentLoaded', function() {

  // Инициализируем flatpickr на элементе с id="raffleDate"
  flatpickr("#raffleDate", {
    enableTime: true,     // Позволяет выбирать не только дату, но и время
    dateFormat: "Y-m-d H:i", // Задает формат вывода даты и времени: Год-месяц-день часы:минуты
    minDate: "today"      // Устанавливает минимально доступную дату для выбора на сегодня
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

    // После успешного создания розыгрыша создаём уведомление с помощью Toastify
    Toastify({
      text: "Розыгрыш успешно создан!", // Текст уведомления
      duration: 3000,                   // Продолжительность отображения уведомления в миллисекундах (3 секунды)
      gravity: "top",                   // Расположение по вертикали: сверху страницы
      position: "center",               // Расположение по горизонтали: по центру
      style: {
        background: "rgba(0,0,0,0.8)",  // Фон уведомления 
        color: "white",                 // Цвет текста внутри уведомления
        borderRadius: "8px",            // Скругление углов уведомления
        boxShadow: "0 0 10px rgba(255,255,255,0.3)" // Тень для визуального эффекта
      }
    }).showToast(); // Метод, который непосредственно показывает уведомление на экране
  });

});

