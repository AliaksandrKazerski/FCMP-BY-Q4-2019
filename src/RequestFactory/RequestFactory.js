class RequestGET {
  constructor(url) {
    this.url = url;
  }
  getRequest() {
    return fetch(this.url);
  }
}

class RequestPOST {
  constructor(url, data) {
    this.url = url;
    this.data = data;
  }
  getRequest() {
    return fetch(this.url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'aplication/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(this.data)
    });
  }
}

class RequestPUT {
  constructor(url, data) {
    this.url = url;
    this.data = data;
  }
  getRequest() {
    return fetch(this.url, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'aplication/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(this.data)
    });
  }
}

class RequestDELETE {
  constructor(url) {
    this.url = url;
  }
  getRequest() {
    return fetch(this.url, {
      method: 'DELETE',
    });
  }
}

export default class RequestFactory {
  createRequest(type, url, data) {
    switch(type) {
      case 'GET':
        return new RequestGET(url);
      case 'POST':
        return new RequestPOST(url, data);
      case 'PUT': 
        return new RequestPUT(url, data);
      case 'DELETE': 
        return new RequestDELETE(url);
    }
  }
}
