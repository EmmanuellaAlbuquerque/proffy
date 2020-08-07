### Interface (Front-End)
- ReactNative

### Como rodar?

#### Configurando o Ambiente
[Ambiente NLW](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)

```sh
# Instala as dependências
~$ yarn install
# Executa o projeto
~$ yarn start
```

### Criando o Projeto e Instalando dependências
```sh
# Instalando Expo Ubuntu e derivados
~$ sudo yarn global add expo-cli

# Iniciando o projeto
~$ expo init mobile

# Muda o diretório para a pasta mobile
~$ cd mobile

# Instalando as fontes utilizadas no projeto
~$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Instalando dependências de navegação
~$ yarn add @react-navigation/native

# https://reactnavigation.org/docs/getting-started
~$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# Stack navigation
~$ yarn add @react-navigation/stack

# Tab navigation
~$ yarn add @react-navigation/bottom-tabs

# Consumindo APIs externas da forma que o Insomnia faz
~$ yarn add axios

# Armazenamento assíncrono local
~$ expo install @react-native-community/async-storage
```

<br />

[Estilo das Abas](https://www.notion.so/Ajustando-estilo-das-abas-no-iOS-28a059b0c443405da195f0ebf7307905)
[Ajuste do useFocusEffect](https://www.notion.so/Ajuste-do-useFocusEffect-86f2550799ad4caeb347597e1ffb0b1d)
