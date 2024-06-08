# Используйте официальный Node.js образ в качестве базового
FROM node:16

# Установите рабочую директорию
WORKDIR /usr/src/app

# Скопируйте package.json и package-lock.json (если есть)
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте остальную часть приложения
COPY . .

# Укажите переменную окружения
ENV PORT=5000

# Укажите команду для запуска приложения
CMD ["npm", "start"]