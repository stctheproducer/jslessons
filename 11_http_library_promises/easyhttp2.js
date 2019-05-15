/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @author Chanda Mulenga <stconeten@gmail.com>
 * @date created: Wed May 15 2019 1:37:39 AM
 * @version 2.0.0
 *
 * Twitter: https://twitter.com/stctheproducer
 * GitHub: https://github.com/stctheproducer
 */

class EasyHTTP {
  // Make an HTTP GET request
  get(url) {
    return new Promise((resolve, response) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  // Make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, response) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  // Make an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, response) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  // Make an HTTP DELETE request
  delete(url) {
    return new Promise((resolve, response) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(() => resolve('Resource deleted'))
        .catch((err) => reject(err))
    })
  }
}
