 ![N|Solid](https://qa6jlg.ch.files.1drv.com/y4piWucjSWj4FeuY3i7201rC0bAyq6JjAiVbKst7kO6mXoaQ44h1gviUBgPC22JSBXD51ULbtyaJgwBW1Cl0oCD7Ans8S8zSpJ8CbYyt2aQ740OPxtbTVFH5mS_22sJ8bxsCStUC0YNlZk9WrNjXYDzz73_kilMiL4Mw1w3fe6MWg7QFAMroLsCmnNcrCBEg8bol5UJ54WBXowuYv_EhYgONQ/logo%403x.png?psid=1)
 
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



# Segue imagens do aplicativo bem como link para testar via Expo.
### https://expo.io/@rogerionascimento.dev/Afazeres

![N|Solid](https://rq5trq.ch.files.1drv.com/y4plV-5i8Jx1DewATDV70_nLpp43F3H5cYShnKeiUCMMJC6DqRpEj5dJoTibXZviiDTo29uai5p0KbKcc3HoQMOJJDA0eZEIWktpGvip8XqnVw7enTB1SEyC3aTvETWiqOqSqalXNEwvSIEFRWJNuuiR0olXKNtq3E6bm4N8-Xxq-AyyShDZF_MNZ2QlHtSWgirNq4u5_9y6pC3PODqNOVSSQ/print-login.jpeg?psid=1) ![N|Solid](https://rq5trq.ch.files.1drv.com/y4pCnL5kfDNvYvW94WfW3rKGHvD9OYohY_hukoXpHC3kCBAmUFYwgkVXTlwlB3eY0Yfjc1j84kT2nwTR4CaJDH4yZ2byYtwjlK13z9Y4spcke8KhIq0S6isvWyEJZ1HK9ogW1dhQMlyhXBWZY0yisAH-8nDllv_1qs1fi2NZqs6T_VQ1gzcE7kJAyhUc-TTMW7Te0gWgTMV3M7Mng7oH24d9Q/print-cadastro-usuario.jpeg?psid=1)![N|Solid](https://rq5trq.ch.files.1drv.com/y4pS_hOA90vroInIQHsWyec_ilVm_FeRU8dc0r5eqrRTDm_blng63Fu7mCgzJZRVZwHbycPQzrWSt4CW9XH4jwr324xJCfRe38SxJ-PKDRTh0BZI85i2yx2qfhAgyrmhbzUnhDsDtwuUTJcOvqE0yk_xFz-u99CAM1lqRMAjGI6hGMOJA2zAKeIACzjxj-OqQyw0MGZ5_Z_jwL8ZhJmsgR_Iw/print-lista.jpeg?psid=1)  ![N|Solid](https://ok7uuq.ch.files.1drv.com/y4pJ9d6O7K601cGncHvP0DbtNKTiUYJT9jDTvZr8CyfcmN_RfSOilOQSFr_ZP5DmBOzvUatapZhJz37-_7qOxg9fAMrm4lLqOFvOe6T4z5zXQtg6Mg8iS3C_8YTJR_4TUm69bmD3w2wZWsBzz8g-AeWbXTe1-V74h8Zku66Igeh6940-N9hmYAw8TxGI8EcA6ZxizNLRtsTAIXTgv-LwHaQcg/print-visualizar.jpeg?psid=1)   ![N|Solid](https://rq5trq.ch.files.1drv.com/y4pVAAoiKI9Rks-w02SnMhifMtm6ax0Sd4dkUNnrFCbiF_naHYsfpOioeZa7Wtx4zb0LSfvW5k9mwAGC9whR7MJIX3B7acZaBUoHELEfT7BTw7V60QQeY8AY-lo2DfGcWq14uPgmQFnthav22v8pbBQOcTrsjBmcDHr27-QEvi5lndxz3CIZwzF1yDkqFCosziD-yn1Q4w4AwGkrTfQnWzwXA/print-excluir-editar.jpeg?psid=1)  ![N|Solid](https://rq5trq.ch.files.1drv.com/y4p2VYGUlGw-Gez4I_47ko4PnUD3WMe6sWWJbPZpWCcofMbJ8yp1Vs82rd8zIGhfezva8YkSD17nKWFukkbAgWcV8EzoMILuoMzpgSOUr4ROGZ9BaKYaixjc8L8GSpJmr76pWVmk6Uibpc8YsJZOfIO7gdDAva6XVeW5LOJw-EiMzvetLf2vXv9um8WKIL1D3cyb5HfPlVJK0ecAVMz4rjX6g/print-cadastro2.jpeg?psid=1)![N|Solid](https://rq5trq.ch.files.1drv.com/y4p2lv7Zpg-HPBr9Ya6FqJdFsPxzKMqdds1XhiPr0P3bbiEA-0YXI_SrUDJCUCFJnlh-BPXnzeW_-vvfnJ8RQR-iPh3wSXnn1tAyG4ueGkODvzoCF0k9u8XFap26UrkkqtHKg0wUMHi1hQ6WNtykzCIbhTIxKj7GHNZB4keck_FPEEI0wnElJRQs1sGJBcYso3GF8tdky7Xd8_DSx2nPcu-CQ/print-cadastro-tarefa.jpeg?psid=1)


