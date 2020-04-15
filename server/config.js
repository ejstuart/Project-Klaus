const config = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/klaus',
    SECRET: process.env.SECRET_KEY ? process.env.SECRET_KEY : "changeme"
}

export default config;