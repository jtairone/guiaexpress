const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category   = require('../categories/Category');

const Article = connection.define('artigos', {
    title:{
        type:Sequelize.STRING,
        allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);   // Uma Categoria tem muitos artigos 1 - p - M
Article.belongsTo(Category); //Um Artigo pertence a uma categoria 1 - p - 1

//descomentar esta linha caso a tabela não esteja criada no banco de dados ..apos ter criado comentar novamente
//Article.sync({force: true});

module.exports = Article;