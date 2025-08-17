
const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>
        console.log(`MongoDB connected successfully host: `+con.connection.host)
    ).catch((error)=>{
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
})
    

}
module.exports = connectDatabase;