const dotenv = require('dotenv');
dotenv.config();

const config = {
    mongodb: {
        url: process.env.MONGO_URL,
        connstr: `mongodb+srv://e-commerce:123@cluster0.hcoz7tp.mongodb.net/e-commerce2?retryWrites=true&w=majority`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase: {
        rutaCert: '../../db/./certificado.json',
    },
    filedb: {
        pathdb: './DB'
    },
    srv: {
        port: process.env.PORT,
        logger: process.env.NODE_ENV || 'DEV',
        persistencia: 'memoria'
    }
}

module.exports = config;