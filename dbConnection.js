import mongoose from 'mongoose';

// import database configuration
//import configDatabase from '../config/database';


class DbConnection {
  constructor() {
    this.mongo();
  }

  

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/moviesApp',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }, (err) => {
          err? console.log(err) : console.log('DB is connected');;
      }
    );
  }
}

export default new DbConnection();
