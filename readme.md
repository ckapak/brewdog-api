Brief: Building a single page React application to consume to Brewdog JSON API

BrewDog Base URL: https://api.punkapi.com/v2/beers/

Taken from BrewDog Punk API

Collection URL - /beers
GET - return a list of all the beers in the collection - Index Page

Member URL - /beers/:id
: is the placeholder
GET - return one specific beer - Show page

FRONT END PAGES CHECKLIST:
- Home Page - url="/", the front page of our site with a navbar

- Beer Index page = url="/beers" - display all the beers, backend-request-url="GET /beers"

- Beer Show page - url="/beers/:id" - display a single beer, linked from the index page - 
backend-request-url="GET /beers/:id"


Expand to:
- Random Picker - urls="/random" - display a single beer at random
- Beer of the day





