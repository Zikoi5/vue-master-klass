// Будем регистрировать модули Vuex с использованием имён их файлов, приведённых к верблюжьему стилю.
import camelCase from "lodash/camelCase"

// Получаем все файлы
const requireModule = require.context(
  // Ищем файлы в текущей директории
  ".",
  // Ищем файлы в поддиректориях
  true,
  // Исключаем файл index.js, равно как и файлы, в именах которых
  // есть строки 'actions', 'mutations', или 'getters' .
  // Кроме того, включаем только файлы с расширением .js
  /^(?!.*(actions|mutations|getters)).*\.js$/
)

const modules = {}

// console.log("requireModule", requireModule.keys())

requireModule.keys().forEach(fileName => {
  // console.log("fileName", fileName)
  modules[camelCase(fileName.split("/")[1].replace(/(\.\/|\.js)/g, ""))] = {
    namespaced: true,
    ...requireModule(fileName)
  }
})

// console.log("modules", modules)

export default modules
