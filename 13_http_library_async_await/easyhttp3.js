/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @author Chanda Mulenga <stconeten@gmail.com>
 * @date created: Wed May 15 2019 1:37:39 AM
 * @version 3.0.0
 *
 * Twitter: https://twitter.com/stctheproducer
 * GitHub: https://github.com/stctheproducer
 */

class EasyHTTP {
  // Make an HTTP GET request
  async get(url) {
    try {
      const response = await fetch(url)
      const resData = await response.json()
      return resData
    } catch (err) {
      return err
    }
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await response.json()
    return resData
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await response.json()
    return resData
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const resData = await 'Resource deleted'
    return resData
  }
}

export default EasyHTTP
