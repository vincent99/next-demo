# Acorn Start - NextJS
This repo serves as an example for a full-stack NextJS app that is deployable via Acorn.

## Running
The Acornfile for this repository comes with customization to be flexible.

To get started locally, simply run:

```shell
$ acorn run -i .
```

For production you'll need to build, push and run this application.

```shell
$ acorn build -t repo/user:v0.0.1
$ acorn push repo/user:v0.0.1
$ acorn run repo/user:v0.0.1
```

When running in production, you'll also likely need a managed database or non-default configuration. Here are the available run options:

| Option               | Default                                              | Description                                                                                                                                       |
|----------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| --db-user            | secret://db-user-creds/username                      | Defaults to a generated basic secret's username.   If both the DB's user and password are non-default, a secret is not created.                   |
| --db-pass            | secret://db-user-creds/password                      | Defaults to a generated basic secret's password.   If both the DB's user and password are non-default, a secret is not created.                   |
| --db-host            | db:3306/app?charset=utf8mb4&parseTime=True&loc=Local | Defaults to an inferred host.  If this is set to be non-default, a DB container will not be created.                                              |
| --with-prisma-studio | false                                                | Enables [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio).  It is highly recommended to leave this off in production. |
