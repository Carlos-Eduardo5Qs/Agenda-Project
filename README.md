# Este será meu primeiro CRUD
> Desenvolvido por Carlos Eduardo

## Como rodar o projeto

Para rodar o projeto em sua máquina rode o comando ```npm install``` para baixar todas as dependências nescessárias, para iniciar o webpack rode ```npm run build``` e para rodar o servidor web utilizando o "Express" rode o ```npm start``` e accesse "http://localhost:3000/" em seu navegador de preferência

## Erro que estou enfrentando 

Eu estou praticando desenvolvendo um CRUD mas ao tentar carregar o bundle.js gerado pelo webpack que contém o css importado e carregado por carregadores do webpack que são eles "style-loader e css-loader" no meu index.ejs na pasta "src" do projeto, o bundle não é carregado no navegador e gera os seguintes erros no console do navegador 

* O recurso de “http://localhost:3000/public/bundle.js” foi bloqueado devido ao tipo MIME (“text/html”) não corresponder (X-Content-Type-Options: nosniff).
* Falha no carregamento do <script> com origem em “http://localhost:3000/public/bundle.js”.
