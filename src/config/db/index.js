const mongoose = require('mongoose');

async function connect() {

   // await mongoose.connect('mongodb://localhost:27017/f8_education_dev')
   try {

        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            //useNewUlrParser : true,
            //useUnifiedTopology: true
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = {connect};
