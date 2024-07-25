import 'dotenv/config'
import toggleFavPost from './toggleFavPost.js'
import data from '../data/index.js'

import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI)

client.connect()
    .then(() => {
        console.log('connected')

        const test = client.db('test')
        const users = test.collection('users')
        const posts = test.collection('posts')

        data.users = users
        data.posts = posts

        toggleFavPost('samu', '66a0d0c524645bc8afecbf7e', error => {
            if (error) {
                console.error(error)

                return
            }

            console.log('fav post toggled')

            client.close()
        })
    })
    .catch(error => console.error(error))