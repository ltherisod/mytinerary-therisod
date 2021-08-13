const mongoose = require ('mongoose')
mongoose.connect(process.env.MONGODATABASE,
{useUnifiedTopology:true,
    useCreateIndex:true, 
    useNewUrlParser:true, 
    useFindAndModify:false})
    .then(() => console.log("Connected to Data Base"))
    .catch((error)=> console.log(error))