import mongoose from 'mongoose';

// IP ADDRESS : 45.140.187.89/32
// PassWORD :eRNkUKvKg9w06FKR
// qJBBtlnI1BmmbE86
// connection string: mongodb+srv://dfreshteh2020:123123123@cluster0.uwofg4n.mongodb.net/?retryWrites=true&w=majority
let isConnected : boolean = false;

export const connectToDatabase = async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB_URL')
}
    if(isConnected){
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'devOverFlow'
        })
        isConnected =true;
    } catch (error) {
        console.log('MonoDB Failed To Connection!')
    }
}