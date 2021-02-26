//Modulo nativo do node para lidar com arquivos de sistema
const fs = require('fs');
//Metodo para lidar com pastas de arquivos
const { join } = require('path');

const filePath = join(__dirname, 'users.json');

/**
 * Função para listar usuários
 * @author Francisnei Lima
 */
const getUsers = () => {
    const data = fs.existsSync(filePath) //Verifica se o arquivo existe
        ? fs.readFileSync(filePath) //Se existir lê o arquivo
        : []; //Senao retorna array vazio.

    try {
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

/**
 * Funcao para salvar usuarios
 * @param {} users 
 * @author Francisnei Lima
 */
const saveUser = (users)=> fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

const userRoute = (app) => {
    //Cria uma rota para tratar do CRUD de usuarios.
    app.route('/users/:id?')
        //requisição GET para listar usuarios
        .get((req, res)=>{
            const users = getUsers();

            res.send({ users });
        })

        //Requisição POST para adicionar usuários
        .post((req, res)=> {
            const users = getUsers();

            users.push(req.body);
            
            saveUser(users);

            res.status(201).send(req.body);
        })

        //Requisiçao PUT para atualizar usuario
        .put((req, res)=>{
            const users = getUsers();

            saveUser(users.map( user => {
                if(user.Id === req.params.id){
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return users;
            }));

            res.status(200).send('OK');
        })

        //Requisição DELETE para apagar usuario
        .delete((req, res)=>{
            const users = getUsers();

            saveUser(users.filter(user => user.Id !== req.params.id));

            res.status(200).send('Ok');
        })
}

module.exports = userRoute;