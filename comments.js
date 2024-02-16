const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  // Сохранить комментарий в локальном хранилище
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push({ name, comment });
  localStorage.setItem('comments', JSON.stringify(comments));

  // Отобразить комментарий
  const commentElement = document.createElement('li');
  commentElement.innerHTML = `
    <span class="name">${name}</span>
    <p class="comment">${comment}</p>
  `;
  commentList.appendChild(commentElement);

  // Очистить форму
  commentForm.reset();
});

// Загрузить комментарии из локального хранилища
const comments = JSON.parse(localStorage.getItem('comments')) || [];
for (const comment of comments) {
  const commentElement = document.createElement('li');
  commentElement.innerHTML = `
    <span class="name">${comment.name}</span>
    <p class="comment">${comment.comment}</p>
  `;
  commentList.appendChild(commentElement);
}