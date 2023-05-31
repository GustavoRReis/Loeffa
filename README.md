
# Projeto Tech Hub Loeffa

Este é um protótipo de um sistema de reservas de salas para a empresa fictícia "Tech Hub". O objetivo do sistema é permitir que os funcionários da empresa possam reservar salas de acordo com a disponibilidade.

# Configuração mínima

## Backend

 - Python 3.6 ou superior
- Django 3.2 ou superior
 
 ## Frontend
 - Node.js 12 ou superior

# Tecnologias Utilizadas

- Backend: Python com Django
- Frontend: React e JavaScript


## Dependências Frontend
As dependências utilizadas no frontend do projeto são:

- @emotion/react: Biblioteca para estilização de componentes React com CSS em JavaScript.

- @emotion/styled: Biblioteca para estilização de componentes React com CSS em JavaScript.

- @mui/material: Componentes Material-UI para React.

- axios: Cliente HTTP para fazer requisições.

- prop-types: Biblioteca para validação de tipos das props de componentes React.

- react: Biblioteca principal do React.

- react-dom: Renderizador do React para manipulação do DOM.

- react-router-dom: Biblioteca de roteamento para React.

- styled-components: Biblioteca para estilização de componentes React com CSS em JavaScript.

- sweetalert2: Biblioteca para exibição de caixas de diálogo personalizadas.




# Funcionalidades
## O sistema possui as seguintes funcionalidades:

- Visualização de Salas Ocupadas: Os usuários podem visualizar todas as salas que estão ocupadas no momento.

- Reserva de Sala: Os funcionários podem fazer uma reserva de sala disponível para uso.

- Cancelamento de Reserva: Os usuários podem cancelar uma reserva de sala previamente feita.

# Usuario Admin Django:
## Para acessar a função de admnistrador você deve fornecer os seguintes dados:
- User: LoeffaAdmin
- Senha: Loeffa23

# Instalação
## Passo 1:
- Clone este repositório em sua máquina local.
`git clone git@github.com:GustavoRReis/Loeffa.git`

## Passo 2:
- Acesse o diretório do backend a partir da raiz do projeto
 `cd backend`

## Passo 3:
- Com o projeto em sua máquina local, crie um ambiente virtual para gerenciar as dependências do projeto.
- `python3 -m venv venv`
- Acesse com o comando:
- `source venv/bin/activate`
## Passo 4:
- Instale dentro do ambiente virtual as seguintes dependências.
- `pip install -r requirements.txt`
 
- Após a instalação você deve criar um arquivo .env na raiz do projeto com os seguintes dados dentro do arquivo:
- SECRET_KEY = "django-insecure-m5_(i3y=5$0jkn$rbqh37(2gvvpbnj%km^--)1s)qvleqr=^x8`
- É de suma importância que o arquivo .env tenha exatamente esse conteudo.
## Passo 5:
- Execute o comando para subir o projeto:
- `python manage.py runserver`

## Passo 6:
- Abra um novo terminal na pasta loeffa em front end e execute os seguintes comandos
- `npm install`
- `npm run dev` 

#  Execução
Após esses passos o projeto estara rodando na rota:
`http://localhost:5173/`


## Considerações Finais
- Este é um projeto de exemplo, não recomendado para uso em produção sem uma revisão criteriosa e ajustes nas configurações de segurança.

- O projeto foi idealizado como um protótipo, para apresentação de funcionalidades a um cliente. Ainda são necessárias implementações e validações de usuários. Além de futuras funcionalidades solicitadas pelo cliente.


