# Camelot Leegstandscan

iPad app to answer a risk assessment for vacant properties.

## Requirements

  * [Node.js](http://nodejs.org)
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

Watch the .scss files and compile them to .css:

```
gulp sass:watch
```

The following runs the server locally:

```bash
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

## CSV Export

The data is stored in a free MongoDB instance from Mongolabs.

To export the database to CSV, paste this:

```
mongoexport -h ds037647.mongolab.com:37647 -d heroku_app36698906 -c contacts -u <user> -p <password> -o contacts.csv --csv -f voornaam,achternaam,email
```
