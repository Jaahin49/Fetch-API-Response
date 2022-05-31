import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
parse = require('node-html-parser');
fetch('')
    .then(res =>console.log(res))


fetch(' https://gorest.co.in/public/v1/users')

    .then(res => {
        if (res.ok) {
            console.log('Success')
        } else {
            console.log('Not Success')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')


