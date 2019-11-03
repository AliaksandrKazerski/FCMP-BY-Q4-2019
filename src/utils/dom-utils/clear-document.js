export default function clearDocument() {
  console.log('clear');
  const error = document.querySelector('.error');
  if (error) {
    error.remove();
  }

  const news = document.querySelector('.news-block');
  if (news) {
    news.remove();
  }
}