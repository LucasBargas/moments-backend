## Projeto Moments
O projeto **Moments** foi desenvolvido por mim, Lucas Bargas, para estudo, durante um curso no Youtube ministrado pelo Matheus Battisti, do Hora de Codar, que tem como objetivo apresentar uma simples rede social onde os usuários podem compartilhar fotos de momentos marcantes que vivenciaram.
Fiz mínimas alterações durante o desenvolvimento, utilizei SCSS, diferente do professor que fez uso de CSS. Construí todo o backend por conta própria, como desafio própio, com Nodejs e MongoDB, já o instrutor usou Adonisjs e SQL Lite.

### Por que fiz este projeto?
Tenho notado já há algum tempo que grandes empresas/corporações, especialmente focadas em tecnologia, no Front end, fazem muito uso do Angular em suas versões mais recentes. Notei também ao consultar a quantidade de candidatos às vagas que pedem esta tecnologia, é consideravelmente menor que as que que requerem Reactjs ou Vuejs, ou seja, a concorrência, querendo ou não, sendo bom ou ruim, é menor. Além de eu considerar extremamente importante está aberto em conhecer as tecnologias disponíveis, seja para o Front end ou Backend.
Especialmente por estes motivos decidi aprender Angular.

### Link para visualizar o projeto
<https://moments-frontend.vercel.app/>

### Principais recursos do App
* Postagem de momentos;
* Edição de momentos;
* Exclusão de momentos;
* Pesquisa de momentos.

### Tecnologias utilizadas
#### Backend
<table>
  <tr>
    <td>Nodejs</td>
    <td>Express-js</td>
    <td>Mongoose</td>
    <td>Multer</td>
    <td>UUID</td>
  </tr>
  <tr>
    <td>19.2</td>
    <td>4.18</td>
    <td>6.9</td>
    <td>1.4</td>
    <td>9.0</td>
  <tr>
</table>

### Como executar este Backend

#### Pré-requisitos
Possuir o Nodejs instalado.

#### Clone o repositório
```bash
git clone https://github.com/LucasBargas/moments-backend.git
```

#### Entre na pasta
```bash
cd moments_backend
```

#### Instale as dependências
```bash
npm install
```

#### Configure as variáveis de ambiente
```bash
# Crie um arquivo .env e passe os valores
MONGO_URL=value
```

#### Execute o App
```bash
npm start
```

# Autor
Lucas Bargas da Silva
</br>
<https://projetoslucasbargas.vercel.app/>
</br>
<https://www.linkedin.com/in/lucas-bargas/>

Gostaria de ver o repositório do Front end deste app?
[Clique aqui](https://github.com/LucasBargas/moments_frontend)
