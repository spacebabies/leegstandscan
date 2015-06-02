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
contact details which are added to MongoDB.

  * npm install

## Running

Watch the .scss files and compile them to .css:

```
gulp sass:watch
```

The following runs the server locally:

```bash
MONGOLAB_URI=<uri> npm start
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

To export the database to CSV, paste this:

```
mongoexport -h <host:port> -d <database> -c contacts -u <user> -p <password> -o contacts.csv --csv -f voornaam,achternaam,email,telefoon,bedrijfsnaam,adviseur,criminele,technische,economische,totaal
```

You can get the values for those arguments with `heroku config`.

# Space Babies

We create internet. www.spacebabies.nl
