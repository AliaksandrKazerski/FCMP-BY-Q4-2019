export default class RequestFactory {
  createRequest(type, url, data) {
    switch(type) {
      case 'GET':
        return fetch(url);
      case 'POST':
        return fetch(url, {
          method: type,
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'aplication/json',
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify(data)
        });
      case 'PUT': 
        return fetch(url, {
          method: type,
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'aplication/json',
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify(data)
        });
      case 'DELETE': 
        return fetch(url, {
          method: type,
        });
    }
  }
}