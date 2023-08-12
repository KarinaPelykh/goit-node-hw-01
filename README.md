# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://monosnap.com/file/9OAzcp8AUByZi2AiNaAwvulDqRTxij

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/O5vBPPpOXELdDQzMIE1cuZo2j5ne8x

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/xKiIucjrypKhfI2FT1QB2B1eR1ISYo

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/g8cmc4gbhAcQpfHZ3kGmRnzG6eiHtS
