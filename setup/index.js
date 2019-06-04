;
let entorno = require('./config/entorno'),
  app = require('./app')

entorno.initVar() 

app.listen(process.env.PORT, () => {
  console.log(`El servicios está funcionando en el puerto ${ process.env.PORT }`)
})


