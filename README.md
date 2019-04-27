# Expenses 💰💵💴💶💷💰

O Expenses é um projeto que desenvolvi em meu canal do YouTube a fim de disseminar conhecimento.
Se trata de uma SPA (Single Page Application) utilizando o Vue.js e o Firebase para inserir gastos
pessoais e ter um controle dos mesmos. Os dados são salvos no realtime database do Firebase e utilizo
tambem o storage para salvar a imagem do comprovante caso o usuário queira inserí-la.

## Tecnologias principais
- Vue.js v2.5
- Vue Router v3.0
- Firebase v5.8
- Bootstrap v4.2

### Rodando o projeto local

- Clone o projeto na sua máquina;
- Instale as dependências usando `npm i`
- Renomeie o arquivo `.env.local.example` para `.env.local`;
- Crie uma conta no [Firebase](https://firebase.google.com/) (basta ter uma conta do Google);
- No console, adicione um novo projeto e dê o nome que preferir;
- Copie as credenciais do projeto para o ambiente Web e coloque-as em seus devidos locais dentro do arquivo `.env.local`;
- Ative o realtime database dentro do console do Firebase;
- Execute `npm run serve` para subir um servidor local para desenvolvimento com hot reload ativado.

### Compilar arquivos minificados para produção

Para criar os arquivos minificados prontos para serem colocados em um servidor web basta executar
``` 
npm run build
```

### Fazer o deploy para o firebase

Para usar o serviço de hosting do firebase basta executar os seguintes passos:

- Crie uma pasta deploy na raiz do projeto;
- Com o [firebase-tools](https://github.com/firebase/firebase-tools) instalado na máquina execute `firebase init` dentro da pasta deploy recém criada;

Se estiver no Linux ou MacOS basta executar 
```
npm run deploy
```

No windows é preciso fazer o procedimento na mão:

- Execute `npm run build`;
- Copie o conteúdo de dentro da pasta /dist para dentro da pasta /deploy/public;
- Execute `firebase deploy` dentro da pasta /deploy;

## That's all folks!
 
### Caso desejar, o link para os vídeos estão a seguir

- [Playlist completa](https://www.youtube.com/playlist?list=PL7SyCwLzd5jt7zcDoBjGt7v7zViBt7WgA)
- [#01 - Instalação e conceitos](https://youtu.be/g5CuiTpx6Sg)
- [#02 - ESLint e Primeiro componente](https://youtu.be/A6MiP4-r154)
- [#03 - Finalizando componente Spinner](https://youtu.be/1EhehnGDrDA)
- [#04 - Instalando Firebase no projeto](https://youtu.be/GoimeX5pYWQ)
- [#05 - Rotas e página de login](https://youtu.be/f-6mq8Gou_Y)
- [#06 - Autenticando usuário no Firebase](https://youtu.be/aPae4ye9TyE)
- [#07 - Impendindo visualização sem login](https://youtu.be/TX1f8m1GoUg)
- [#08 - Criação do menu de navegação](https://youtu.be/eHUfHXwcCvc)
- [#09 - Botões logout e adicionar gasto](https://youtu.be/2fhHeIb3zfE)
- [#10 - Incluindo dados no firebase](https://youtu.be/lgu_PhYNW2g)
- [#11 - Fazendo upload de imagem](https://youtu.be/6ReuV2wSImQ)
- [#12 - Criando componente de notificação](https://youtu.be/yw3x64glBOc)
- [#13 - Montando a estrutura de layout da Home](https://youtu.be/ecIRpas4K_U)
- [#14 - Finalizando a página Home](https://youtu.be/eLWLOv6JfQo)
- [#15 - Iniciando página da lista de gastos](https://youtu.be/gygePLUeFuc)
- [#16 - Listando gastos por mês](https://youtu.be/Y8OY9QuDUfE)
- [#17 - Abrindo comprovante e adicionando rolagem nos itens](https://youtu.be/5J9CKq5RLCc)