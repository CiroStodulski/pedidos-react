Para rodar a aplicação 

1  necessário instalar o mongodb 
2  após realizar a instalação é necessário criar a collection com o comando:

    db.createCollection("pedidosreact")

3 necessário incluir dar carga em alguns registros, no cliente do mongo utilize:

    db.users.insert({name:"ciro stoduslki de azevedo", login:"ciro.sdsa@gmail.com", password:"123"})

    após dar um db.users.find() onde o *resultado* será informando no campo user ao  inserir um
    pedido, confomre o exemplo abaixo


     db.pedidos.insert({codigo:"982HUDODD", user: *resultado*);

     o insert ficara assim  ("exemplo")

     db.pedidos.insert({codigo:"HDJR948572", user:{ "_id" : ObjectId("5b33996f4ff7960cfa56fbdc"), "name" : "ciro stoduslki de azevedo", "login" : "ciro.sdsa@gmail.com", "password" : "123" }});

4 instalar os modulo, utilizar o npm i nos diretorios app, backend.

5 instalar o nodemon npm i nodemon -g

6 na pasta backend npm run dev

7 na pasta app npm start