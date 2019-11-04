 ![logo@2x](https://user-images.githubusercontent.com/40906099/68122066-3ebdba80-fee8-11e9-8b25-703edbb3220c.png)


 # Lista de afazeres em React Native
 ##### Solicitação
- O aplicativo deve ser protegido por senha.
- Deve ser criado uma interface para listar, criar, atualizar e remover tarefas.
- Cada tarefa é composta de um identificador, um nome e uma descrição.
- As tarefas e informações de login devem ser armazenadas no celular.

# Condições de desenvolvimento
- Deve ser usado React Native + Redux, e desenvolvido no Expo.io
- O design e os componentes podem ser feitos à mão, ou usando bibliotecas de componentes como: [Shoutem](https://github.com/shoutem/ui) UI ou [Ant Design Mobile](https://github.com/ant-design/ant-design-mobile)


# Processo de desenvolvimento

O Desenvolvimento deste app visa cumprir com todos os critérios técnicos de desenvolvimento solicitado, bem como utilizar da melhor forma os recursos das bibliotecas mencionadas.

### Do cumprimento dos requisitos

- O aplicativo foi desenvolvido utilizando react-native com expo como solicitado.
- Implementado sistema de login, com a possibilidade de cadastro de usuário.
- Tela principal lista todas as tarefas do usuário especificamente autenticado.
- Como solução para persistência dos dados no celular utilizei a biblioteca [redux-persist](https://redux.js.org/) em conjunto com o [react-redux](https://redux.js.org/), desta forma alem de ter os states da aplicação centralizado as informações ficam armazenadas tambem no AsyncStorage do react-native.
- Swipeable implementado para ao deslizar o item da lista para direita visualizar informações do ítem.
- Swipeable implementado para ao deslizar para direita exibir a possíbilidade de editar ou excluir o item da lista.
- Action button implementado para navegar até a tela de criação de tarefa.
- E react-navigation para navegação entre os componentes.



## Segue imagens do aplicativo bem como link para testar via Expo.
### https://expo.io/@rogerionascimento.dev/Afazeres

![print-login](https://user-images.githubusercontent.com/40906099/68122238-a116bb00-fee8-11e9-8fc4-046a01db4bc1.jpeg) ![print-cadastro-usuario](https://user-images.githubusercontent.com/40906099/68122242-a3791500-fee8-11e9-88c9-d667304ba8d5.jpeg) ![print-lista](https://user-images.githubusercontent.com/40906099/68122252-a7a53280-fee8-11e9-9a3e-699115449d0f.jpeg) ![print-visualizar](https://user-images.githubusercontent.com/40906099/68122254-a96ef600-fee8-11e9-9b1c-5b9dbd533174.jpeg) ![print-excluir-editar](https://user-images.githubusercontent.com/40906099/68122274-b4c22180-fee8-11e9-813e-8c8c5a4c72de.jpeg) ![print-cadastro-tarefa](https://user-images.githubusercontent.com/40906099/68122295-c86d8800-fee8-11e9-9e41-a439d81d81a2.jpeg) ![print-cadastro2](https://user-images.githubusercontent.com/40906099/68122306-cc99a580-fee8-11e9-84e7-85c39eb76311.jpeg)
