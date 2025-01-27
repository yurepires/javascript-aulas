import banco from "../config/banco.js";

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: banco.Sequelize.STRING(100)
    },
    email:{
        type: banco.Sequelize.STRING(100),
        unique: true
    },
    senha:{
        type: banco.Sequelize.STRING(100)
    }
})

// Usuario.sync()
export default Usuario