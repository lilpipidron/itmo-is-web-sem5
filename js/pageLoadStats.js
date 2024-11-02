(function() {
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    const statsDiv = document.getElementById('loadStats');

    const loadMessage = `Время загрузки страницы: ${(loadTime / 1000).toFixed(2)} секунд.`;

    if (statsDiv) {
      statsDiv.textContent = loadMessage;
    }
  });
})();
