import mongoose from 'mongoose';

export const connect = async () => {
    try{
        await mongoose.connect('mongodb+srv://server:server@cluster0-c41h4.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected...')
    }catch(err){
        console.error('Database ERROR: ', err)
    }
}