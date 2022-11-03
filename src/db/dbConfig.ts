import { User } from 'src/entity/user.entity';


 
    export default () => ({
        type: 'mongodb',
                url: "mongodb+srv://Awwal:At3jVr0dDBC2Qg3x@cluster0.oyecd.mongodb.net/user",
                database: "user",
                entities: [User],
                ssl: true,
                useUnifiedTopology: true,
                useNewUrlParser: true 
      });