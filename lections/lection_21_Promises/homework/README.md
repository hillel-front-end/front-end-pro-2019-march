# Изучить материал

# Практика

1) Сделать 3 асинхронные операции (симулируем при помощи getPromise(), но еще с таймером).
В каждом промисе возвращается число от 0 до 100. Создать обертку runAfter, которая получает аргументами функции в массиве, которые выполнятся после окончания всех 3-х асинхронных операций.

2) Три асинхронные операции оборачиваются в фунцию asyncFetch(sync), которая получает один аргумент sync который может быть true\false.
Если sync == true, тогда необходимо выполнить три асинхронные операции последовательно. Иначе - параллельно