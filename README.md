# Hi World (Social Media Project w/ GraphQL)

This is a platform that allows you to make posts, leave comments and likes to other users' posts. Also authorization is implemented with help of JWT.

Stack: **Javascript**, **React**, **Semantic UI**, **Node.JS**, **GraphQL**, **Apollo GraphQL**, **JWT**

[Check It Out Here](https://social-media-graphql-project.vercel.app/)

Alternatively you can start it locally by running the following:

- In the main directory:

```bash
npm run dev
```

- In the `client` directory:

```bash
npm start
```

And navigating to [localhost:3000](http://localhost:3000). You should see your app running.

P.S. You will need to install the dependencies if you haven't previously done it:

```bash
npm install
```

P.P.S. If you want to start it locally you also need to create a `.env` file in the main directory and fill out the following fields:

```env
PORT=5000
JWT_SECRET_KEY=*******
MONGO_URI=************
```

Replace the stars with your secret key for JWT and MongoDB URI to connect to your database instance

![App Image](https://i.imgur.com/5ZPr0bh.png)
