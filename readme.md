# Table of Contents
1. [Visão Geral](#overview)
2. [Backlog](#Backlog)
3. [Arquitetura](#Arquitetura)
4. [Setup] (#Setup)
5. [Usando](#Usando)


# overview

Esse contempla o fonte do desenvolvimento do app, referente ao teste técnico aplicado pela Accenture e qual compõe um passo do processo seletivo para vaga de tecnologia.

O exercício proposto cita algumas habilidades de engenharia e tecnologias como preferenciais, como também a possibilidade de aumento da pontuação quando utilizado certos requisitos:

A vontade era implementar os mínimos detalhes propostos, demonstrando todos os conhecimentos envolvendo visão arquitetural tendo como alto valor o isolamento do domínio do problema e suas fronteiras, esteira para integração contínua e deploy, demonstração de Clean Code e princípios Solid, dentre outros. Infelizmente utilizei o pouco tempo que tenho, e ainda muito próximo dos dias de festas de final de ano, então:

1. Alguns pontos realmente não tive tempo de implementar e peço desculpas.
2. Tentei mostrar alguns patterns (exemplo: Adapter, Factory, Anti Corrupção) e princípios (exemplo OCP, LSP ) no backend. Sei que no mundo real nem sempre faria sentido muitos deles, pois algumas vezes poderia ser um esforço desnecessário, decisão sempre embasada na cultura ágil, inclusive dentro dos princípios de XP (YAGNI, DRY, KISS, ETC), mas por questões de demonstração preferi colocar alguns no código, então, peço que olhe por esse lado.
3. Não tive tempo de configurar a esteira (iria utilizar o github action e publicar em algum serviço do GCP)
4. Fiz testes unitários apenas de algumas classes e componentes, também por questão de tempo, por mais que acho testabilidade a parte mais importante de qualquer projeto, mas precisava demonstrar outros pontos para avaliação de vocês.
5. Tentei demonstrar um pouco do desenho da aplicação utilizando Hexagonal Architecture, pois achei que ficaria melhor nesse cenário, mas poderia ter feito utilizando outras abordagens. MDemonstrei só um pouco e sei que muitos pontos poderiam ter sido melhor abstraido, mas acho que dá para medir um pouco do meu conhecimento :).

Os pontos que na minha visão, serão avaliados com mais ênfase e que foram os que tentei dar mais destaque:

## Habilidades

1. Boa interpretação dos requisitos propostos
2. Conhecimento Fullstack.
3. Bons conceitos, padrões e práticas para definição do desenho da aplicação e codificação. 
4. Conhecimento sobre montagem de ambiente de DEV, utilizando containização.


## Backend

1. JS/Typescript (Imagino que com NodeJS)
2. Melhor se: Utilizar interface web para navegação na documentação de API contendo OAS (Open Api Specification) via Swagger  
3. Melhor se: Utilizar como persistência base NoSql
4. Melhor se: Fizer testes unitários

## Frontend

1. React


# Backlog

## 1. Extração de logs via arquivos de logs de sistemas externos

Por conta de ataque em sistema da companhia XPTO, o time de desenvolvimento foi envolvido para analisar os logs, mas para melhoria dessa tarefa de analise, precisamos que seja disponiblizadas algumas funcionalidades via app web

Eu, como engenheiro de segurança, quero que seja desenvolvido um aplicativo web contendo a funcionalidade que utilizarei para extrair e armazenar dados de arquivos de logs de sistemas, para posterirmente ser consumido de maneira mais amigavel por todos, facilitando analise e tomada de deciões:

1. O arquivo de log possui colunas posicionais, mas pode variar por sistemas. Por isso, os logs devem ser armazenados, classificando-os por categoria, sendo a categoria o nome do sistema de qual ele pertence. 

2. Cada categoria deve respeitar o layout específico de colunas, durante a extração e armazenamento.

3. Inicialmente temos o log do microserviço de autenticação, que possui seu próprio layout de colunas, então esse arquivo de log será o primeiro a ser carregado via essa nova funcionalidade.

4. O log precisa também ter um tipo, dentre esses estão: (Informação, Alerta ou Crítico), data/hora que o log foi gerado, IP do usuário e ID do processo.


5. Para efetuar a extração, o usuário precisa ser um membro da empresa.

Validação:

Será utilizado para validação, consulta na base de dados, verificando se a carga foi feita corretamente.

## 2. Visualização de Logs por categoria

Por conta de ataque em sistema da companhia XPTO, o time de desenvolvimento foi envolvido para analisar os logs, mas para melhoria dessa tarefa de analise, precisamos que seja disponiblizadas algumas funcionalidades via app web.

Eu, como engenheiro de segurança, quero visualizar via web, os logs que foram extraídos de arquivos de sistemas. 

1. Preciso visualizar todos os logs, de acordo com a categoria selecionada como pré-requisito. A lista deve exibir os logs contendo as seguintes colunas (tipo, data/hora que foi gerado, ip, id do processo e texto)
2. Ao selecionar um log específico, preciso ver tipo, data/hora, ip, id do processo e texto.

## 3. Filtrar logs por período

Por conta de ataque em sistema da companhia XPTO, o time de desenvolvimento foi envolvido para analisar os logs, mas para melhoria dessa tarefa de analise, precisamos que seja disponiblizadas algumas funcionalidades via app web.

Eu, como engenheiro de segurança, dentro da aplicação web (XPTO), na funcionalidade de listagem de logs por categoria, quero também pesquisar logs por período de data. Então além de selecionar a categoria, poderei também fazer filtros por período.

# Arquitetura
![hexagonal architecture with anti-corruption pattern](https://github.com/fernandoPrudente/loganalizer/blob/master/readme-images/arc-diagram.png)


# Setup
Ainda não tem. :(

# Usando
Ainda não tem. :(