const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categorias', {
    title:{
        type:Sequelize.STRING,
        allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

//descomentar esta linha caso a tabela não esteja criada no banco de dados ..apos ter criado comentar novamente
//Category.sync({force: true});

module.exports = Category;