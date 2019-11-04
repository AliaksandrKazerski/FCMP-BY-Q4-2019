import RequestFactory from '../../RequestFactory/RequestFactory';

const requestFactory = new RequestFactory();

export default async function requestPreparation(type, url) {
  let request = requestFactory.createRequest(type, url);
  request = new Proxy (request, {
    get: function(obj, prop) {
      console.log(obj);
      console.log(`Get property ${prop}`);
      return obj[prop];
    }
  });
  const response = await request.getRequest();
  return await response.json();
}
