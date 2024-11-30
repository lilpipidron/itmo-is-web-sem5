document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const preloader = document.getElementById('preloader');
  const reviewsSection = document.querySelector('.reviews');
  let callCount = 0;

  showMoreBtn.addEventListener('click', () => {
    preloader.style.display = 'block';
    showMoreBtn.disabled = true;

    callCount++;

    const url = 'https://jsonplaceholder.typicode.com/comments';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then(data => {
        preloader.style.display = 'none';
        showMoreBtn.disabled = false;

        let filteredData;
        if (callCount % 2 === 1) {
          filteredData = data.filter(comment => comment.id >= 100);
        } else {
          filteredData = data.filter(comment => comment.id <= 200);
        }

        const selectedData = filteredData.sort(() => 0.5 - Math.random()).slice(0, 5);

        selectedData.forEach(comment => {
          const reviewDiv = document.createElement('div');
          reviewDiv.classList.add('review');

          const strong = document.createElement('strong');
          strong.textContent = comment.name + ':';

          const p = document.createElement('p');
          p.appendChild(strong);

          const commentText = document.createTextNode(comment.body);
          p.appendChild(commentText);

          reviewDiv.appendChild(p);
          reviewsSection.appendChild(reviewDiv);
        });
      })
      .catch(error => {
        preloader.style.display = 'none';
        showMoreBtn.disabled = false;

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.textContent = '⚠ Что-то пошло не так';
        reviewsSection.appendChild(errorDiv);
        console.error('Ошибка при получении данных:', error);
      });
  });
});
