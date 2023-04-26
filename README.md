
# Getting the user data from database

In this task we get the data from MongoDB data through RESTful api and display the data in the table form.

Render Deployment Link - https://mobilicis-krjh.onrender.com



## API Reference in ExpressJS

#### Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

```http
  GET /api/getcar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to get the data which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”|

#### Male Users which have phone price greater than 10,000

```http
  GET /api/getphone
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to get data of all Male Users which have phone price greater than 10,000 |

#### Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

```http
  GET /api/lastname
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to get those Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

#### Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

```http
  GET /api/getallcar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to get those Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit. |

#### Show the data of top 10 cities which have the highest number of users and their average income

```http
  GET /api/getavgincome
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to Show the data of top 10 cities which have the highest number of users and their average income |



## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    