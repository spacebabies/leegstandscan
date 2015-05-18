# Camelot Leegstandscan

App to scan leegstand.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart, front end

The front end is an Angular app with dependencies managed by Bower.

  * Clone the repo and `cd` into it
  * Run `bower install` to install all components

## Quickstart, back end

There is a small Node.js Express app to serve the Angular app and handle the
contact details which are added to a Google sheet.

  * npm install

## Running

Then when you're working on your project, just run the following commands:

```bash
bundle exec compass watch
SPREADSHEET_KEY=abcde GOOGLE_EMAIL=you@example.com GOOGLE_PASSWORD=secret npm start
```

The server is now running at http://localhost:5000

## Upgrading

If you'd like to upgrade to newer front end components:

```bash
bower update
```

## Deployment

```bash
git push heroku master
```
