const BASE_URL = 'https://www.nosyapi.com/apiv2';

class VetService {
  async getVets(
    city: string,
    country: string,
    onSuccess: (res: any) => void,
  ) {
    var data = new FormData();
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        onSuccess(this.responseText);
      }
    });

    xhr.open(
      'GET',
      BASE_URL +
        `/getTurkey?id=95930&city=${city.toLowerCase()}&country=${country.toLowerCase()}`,
    );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader(
      'Authorization',
      'Bearer 40C3Og2gQVgjYJBYT1l0q0HMzN9syEZfvw9KJLeIg47sQKvNZ3wuc72iUwol',
    );

    xhr.send(data);
  }
}

export default new VetService();