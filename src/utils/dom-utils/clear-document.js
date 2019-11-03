export default function clearDocument() {
  const error = document.querySelector('.error');

  if (error) {
    error.remove();
  }

  const news = document.querySelector('.news-block');
  
  if (news) {
    news.remove();
  }
}