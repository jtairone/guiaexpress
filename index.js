const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController   = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

//Arquivo do server da pagina
//View engine
app.set('view engine', 'ejs');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static
app.use(express.static('public'));

//database
connection
    .authenticate()
    .then(()=> {
        console.log('Conexão feita com sucesso');
    })
    .catch((error)=>{
        console.log(error);
    })

app.use("/", categoriesController);
app.use("/", articlesController);

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(8080, () => {
    console.log('O servidor esta rodando!');
})