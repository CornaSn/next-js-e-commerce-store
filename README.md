# Next.js e-Commerce Store

## About the project

The Next.js e-Commerce Store is a project that is build as a full-stack web application. It is part of the curriculum for the UpLeveled Fullstack Web Development Bootcamp and a work in progress at the moment.

- Workshop Page: Displays a list of all upcoming workshops for users to browse.
- Single Workshop Page: When a user clicks on a workshop, they are directed to this page. Here, they can find detailed descriptions, adjust the quantity, and add the workshop to their cart.
- Cart Page: Shows all workshops added to the cart, including their quantities (which can be edited), prices, a delete button to remove items, the total price, and a checkout button.
- Checkout Page: Displays the total cost, an order summary, and asks the user for shipping and payment information.
- Thank You Page: After confirming the order, the user is directed to this page to receive a confirmation and thank you message.

## Technologies

- Next.js
- Javascript
- React
- Typescript
- Sass
- Postgres

## Screenshots

# Prototype on Figma

![image](https://github.com/CornaSn/next-js-e-commerce-store/assets/165194143/de3a735f-15bf-4cc6-a9b3-e33042effc0b 'Screenshot of Prototype on Figma')

## Technologies

- Next.js
- Sass
- Postgres

## Setup

1. Clone the repository

```
git clone https://github.com/CornaSn/next-js-e-commerce-store
cd next-js-e-commerce-store
```

2. Install dependencies using

```
pnpm install
```

3. Setup postgres database
   Create a file called `.env`(ignored from Git) and paste the following information inside, change it to your own username, password and database:

```
PGHOST=localhost
PGUSERNAME=<your username>
PGPASSWORD=<your password>
PGDATABASE=<your database>
```

4. Connect to postgres database
   WINDOWS and macOS:

```
psql -U <user name> <database name>
```

LINUX:

```
sudo -u <user name> psql -U <user name> <database name>
```

5. Run application

```
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Credits

This is a React project I completed during the PERN-extensive (Immersive) Spring 2024 bootcamp at [UpLeveled](https://github.com/upleveled)
