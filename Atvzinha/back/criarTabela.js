const sequelize = require('./bd/bd');
const Product = require('./model/produto');

sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado e tabela criada em:', sequelize.options.storage);
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});