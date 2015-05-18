# Camelot Leegstandscan

App to scan leegstand.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

  * Clone the repo and `cd` into it
  * Run `bower install` to install all components

Then when you're working on your project, just run the following commands:

```bash
bundle exec compass watch
npm install
SPREADSHEET_KEY=abcde GOOGLE_EMAIL=you@example.com GOOGLE_PASSWORD=secret npm start
```

The server is now running at http://localhost:5000

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```

## Deployment

```bash
git push heroku master
```
