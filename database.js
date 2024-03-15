import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://jfjvlnyt:VqxAKlw3ZYA1CrcQa43cKdiPZ8FdP-8N@kesavan.db.elephantsql.com/jfjvlnyt')

try{
    await sequelize.authenticate()
    console.log("Sucesso")
}catch(erro){
    console.log(erro)
}

export default sequelize