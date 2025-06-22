[![Build status](https://ci.appveyor.com/api/projects/status/no2bewkpvjcrxd7k?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-50-typescript)
![Netology](https://img.shields.io/badge/Netology-JavaScript-blue)

# 🧾 [Домашнее задание к лекции «TypeScript»](./README_for_Netology.md)

[Учебный проект](./README_for_Netology.md) по курсу **"TypeScript"** от Нетологии.  
Цель — освоить работу с типами, интерфейсами, классами и тестированием в среде TypeScript.  
Проект включает реализацию корзины покупок с поддержкой различных типов товаров и полной проверкой через Jest.

---

## 🚀 Стек технологий

- **TypeScript** — строгая типизация и современные возможности JavaScript.
- **Jest** — модульное тестирование с покрытием.
- **ESLint (Flat config)** — линтинг с поддержкой TypeScript и import-правил.
- **Babel** — поддержка современных возможностей JS.
- **Webpack** — сборка проекта в разных режимах (dev/prod/common).
- **AppVeyor CI** — автоматический запуск тестов при пуше.
- **Husky** — pre-commit проверки и автоматизация.
- **VSCode** — конфигурации редактора для удобной разработки.
- **Node.js + npm** — среда выполнения и менеджер пакетов.


---

## 📦 Функциональность

### Модуль `Cart.ts`

- Добавление товаров в корзину (в т.ч. контроль countable/uncountable)
- Поддержка количества товаров
- Удаление товаров по ID
- Уменьшение количества countable товаров
- Подсчёт общей стоимости и стоимости со скидкой
- 100% покрытие автотестами

---

## 📁 Структура проекта

```

.
├── src/
│   ├── ts/
│   │   ├── Cart.ts           # Основной класс корзины
│   │   ├── task1.ts          # Пример с Product\[]
│   │   └── domain/
│   │       └── Buyable.ts    # Интерфейс покупаемого товара
├── __tests__/                # Автотесты (Jest)
├── index.ts                  # Точка входа
├── jest.config.js            # Конфиг для тестов
├── eslint.config.mjs         # Flat ESLint config
├── tsconfig.json             # Настройки TypeScript

````

---

## 🛠 Установка и запуск

1. **Установка зависимостей**
```bash
npm install
````

2. **Запуск линтера**

```bash
npm run lint
```

3. **Автоисправление ESLint**

```bash
npm run lint:fix
```

4. **Запуск тестов**

```bash
npm test
```

5. **Запуск с покрытием**

```bash
npm run test -- --coverage
```

---

## 🧪 Покрытие кода

Проект полностью покрыт unit-тестами (100% строк и логики):

```
Statements   : 100% (✔️)
Branches     : 100% (✔️)
Functions    : 100% (✔️)
Lines        : 100% (✔️)
```

---

## 📧 Контакты

Если возникнут вопросы, пишите:

* ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
* ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
* ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
