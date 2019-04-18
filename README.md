# Have I Been PWNED clone application

This is the site: https://haveibeenpwned.com/


Have I been PWNED lets you check if you have an account that has been compromised in a data breach

## Requirements

Using the HiBP API : https://haveibeenpwned.com/API/v2 , create a front end having the following functionalities:

- search for breaches and display them (with pagination and total number)
  + if nothing was searched for, the default page should display all the breaches
- search by account or email and display if your account was compromised in any breach. List them in the same way like in the previous view
- add a detailed view for the breach where you display the following data:
  + description
  + breach date
  + image
  + compromised data
  + compromised accounts
  + date added to HiBP
- the detailed view must contain a breadcrumb which, by clicking on the parent (Breaches or Accounts), it must redirect you to the search page where it must have the same state as before clicking.
- it should be a Single Page Application, so don't change the html file and don't add any ;) use only JS to generate the pages
- make the UI components as reusable as possible 
- don't use any external library or package
- have a look on this list and try to respect it as much as you see it fits your situation ;) : https://github.com/ryanmcdermott/clean-code-javascript ( url to the book: https://www.investigatii.md/uploads/resurse/Clean_Code.pdf )


Bonus points if you make the pagination dynamic, with adjacents like in the first example on this page:
- https://getuikit.com/v2/docs/pagination-js.html

## Use postman to test the API:
- https://www.getpostman.com/
- https://www.youtube.com/watch?v=t5n07Ybz7yI&t

## Useful links
- https://haveibeenpwned.com/API/v2#BreachesForAccount
- https://haveibeenpwned.com/API/v2#AllBreaches

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI ;)


## Basic mocks - you can add any design you want, the mocks are made just to describe the functionality

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-06%2520at%252017.07.06.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-06%2520at%252017.07.15.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-08%2520at%252010.43.50.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/730095dc43549df9f9d4964e03de07917d668c75/Screen%2520Shot%25202019-04-18%2520at%252013.24.02.png)

