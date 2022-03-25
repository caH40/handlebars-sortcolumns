import mongoose from 'mongoose';
export default {
  mongo() {
    mongoose
      .connect(
        `mongodb://GjerT34opKin:3W*ih-Phqe'mKjx@62.113.105.136:23177/botcurrant?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
      )
      .then(() => {
        console.log('MongoDb connected..');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
