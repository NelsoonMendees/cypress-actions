const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMyNmUxMTAyLTU4ZjUtNDBkNi1iYzAxLTMzNzc0MjVjNGUzZC0xNjk0MTgxMzIzMDk2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTlkYjMwMDYtNmFhNy00NWM1LTg0MDYtYzVkN2YyOTA0ZjhiIiwidHlwZSI6InQifQ.OMRhwJp1B1paNzkoOy1Xe-CrfF_VpeURqWEza1qC3R0'

cypress.run({

})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
