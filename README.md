# Artic

> My first SSR website ever! 😻

---

## How does it work?

- This is the **S**erver-**S**ide **R**endering website where you can post anything with markdown format.
- Articles, draft articles, etc. stored in the [MongoDB database](https://www.mongodb.com/).
- The template engine is [EJS](https://ejs.co/) which is an _"Embedded JavaScript templating"_.

## Using & developing

- Clone the github repository by running `git clone https://github.com/tinntran/artic.git`.
- Then, running `npm install` or `yarn` to download all required dependencies.
- Dont forget to create a `.env` file with `PORT` and `DB_URI`:
```dotenv
PORT=/*Any four lucky numbers*/
DB_URI=/*URL to the MongoDB database*/
```
- Finally, you can run `npm start` _(or `yarn start`)_ to run the wondeful app! 👍
