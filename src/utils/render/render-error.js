export default function renderError(message) {
  import ('../../Components/ErrorMessage')
  .then(
    ({default:ErrorMesage}) => {
      const error = new ErrorMesage();
      error.createError(message);
    })
  .catch(e => console.log(e));
}
