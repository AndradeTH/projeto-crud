const mongoose = require('mongoose')


// conectando ao banco de dados
function connect(){
    mongoose.set("strictQuery", true);
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)


    // Inserir entre as aspas o link da compass do MongoDB
    mongoose.connect('')

    
    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}

