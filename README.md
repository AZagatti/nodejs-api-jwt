# NodeJS Api with JWT Authentication

Simple API with authetication for tests.

## Dependencies

Use `yarn` or `yarn install` for install dependencies

## Dot Env

In root of project you can create `.env` file with you URL connection of Mongodb for use in database index.

## Server

Use `yarn dev` for start developer server with Nodemon or use `yarn start` for node server.

## Routes

Register:
`baseURL/auth/register` (POST Method)

Authenticate:
`baseURL/auth/authenticate`(POST Method)

Projects:
`baseURL/projects/`(GET Method)

Show:
`baseURL/projects/:projectId`(GET Method)

Create:
`baseURL/projects` (POST Method)

Update:
`baseURL/projects/:projectId` (PUT Method)

Delete:
`baseURL/projects/:projectId` (DELETE Method)
