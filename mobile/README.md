### Interface (Front-End)
- ReactNative

### Como rodar?

#### Configurando o Ambiente
[Ambiente NLW](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)

```sh
# Instala as dependências
foo@bar:~$ yarn install
# Executa o projeto
foo@bar:~$ yarn start
```

### Criando o Projeto e Instalando dependências
```sh
# Instalando Expo Ubuntu e derivados
foo@bar:~$ sudo yarn global add expo-cli

# Iniciando o projeto
foo@bar:~$ expo init mobile

# Muda o diretório para a pasta mobile
foo@bar:~$ cd mobile

# Instalando as fontes utilizadas no projeto
foo@bar:~$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Instalando dependências de navegação
foo@bar:~$ yarn add @react-navigation/native

# https://reactnavigation.org/docs/getting-started
foo@bar:~$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# Stack navigation
foo@bar:~$ yarn add @react-navigation/stack

# Tab navigation
foo@bar:~$ yarn add @react-navigation/bottom-tabs
```

[Estilo das Abas](https://www.notion.so/Ajustando-estilo-das-abas-no-iOS-28a059b0c443405da195f0ebf7307905)
