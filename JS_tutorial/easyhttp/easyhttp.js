class EasyHTTP {
  //make http get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      header: {
        'Content-type': 'appl'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Constent-type' : 'application/json'
      }
    });

    const resData = await 'Resource Deleted...';
    return resData;
  }
}
