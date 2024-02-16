const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Заменить массив комментариев локальным хранилищем
const COMMENT_KEY = 'comments';
let comments = JSON.parse(localStorage.getItem(COMMENT_KEY)) || [];

function saveComments() {
  localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
}

function displayComments() {
  commentList.innerHTML = '';
  for (const comment of comments) {
    const commentElement = document.createElement('li');
    commentElement.innerHTML = `
      <span class="name">${comment.name}</span>
      <p class="comment">${comment.comment}</p>
    `;
    commentList.appendChild(commentElement);
  }
}

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  // Добавить новый комментарий и сохранить
  comments.push({ name, comment });
  saveComments();

  // Отображать обновленные комментарии
  displayComments();

  // Очистить форму
  commentForm.reset();
});

// Загрузка и отображение комментариев initially
displayComments();
