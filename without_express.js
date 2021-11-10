// const express = require('express')
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'Navgurukul',
        password: 'kabita@123',
    }
})
knex.select('*').from('information').then((result) => {
   console.log(result)
}).catch((err) => {
    console.log(err)
})

// knex.select('name').from('information').then((result) => {
//     console.log(result)
//  }).catch((err) => {
//      console.log(err)
//  })
 
//  knex.select('id').from('information').then((result) => {
//     console.log(result)
//  }).catch((err) => {
//      console.log(err)
//  })
// knex.select('address').from('information').then((result) => {
//     console.log(result)
//  }).catch((err) => {
//      console.log(err)
//  })