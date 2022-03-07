## React Redux Login, Logout, Registration example using Hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Set port

.env

```
PORT=3000
```

```js
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken }; // for Node.js Express back-end
  } else {
    return {};
  }
}
```

### Project setup

In the project directory, you can run:

```
cp .env.example .env
npm install
# or
cp .env.example .env
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
