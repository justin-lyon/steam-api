const config = require('../config/axios.config')
const axios = require('axios').create(config)

axios.get('/ISteamNews/GetNewsForApp/v0002/', {
  params: {
    appid: 440,
    count: 3,
    maxlength: 300
  }})
  .then(res => {
    console.log('response', res)
  })
  .catch(err => {
    console.error('err', err.message)
  })
