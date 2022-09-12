# My Contacts API

The REST API to My Contacts application Built with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/).

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Getting Started

You´ll need to have [Node.js](https://nodejs.org/) and [Docker](https://www.docker.com/) installed in your machine to run the API project

Install the project dependencies:

```bash
npm i
```

Create a PostgresSQL Docker container:

```bash
docker run --name my_contacts_database -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Enter container in interactive mode:

```bash
docker exec -it [CONTAINER_NAME] bash
```

Enter on psql shell with created user:

```bash
psql -U [POSTGRES_USER]
```

Run the commands listed on [schema.sql](./src/database/schema.sql) on the psql shell.

## License

This project is licensed under the MIT. Consult the [LICENSE](LICENSE) for more information.
