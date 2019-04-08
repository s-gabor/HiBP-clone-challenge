# Have I Been PWNED clone application

This is the site: https://haveibeenpwned.com/
Have I been PWNED lets you check if you have an account that has been compromised in a data breach

## Requirements

Using the HiBP API : https://haveibeenpwned.com/API/v2 , create a front end having the following functionalities:

- search for breaches and display them (with pagination and total number)
  + if nothing was searched for the default page should display all the breaches
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

## Use postman to test the API:
- https://www.getpostman.com/
- https://www.youtube.com/watch?v=t5n07Ybz7yI&t

## Basic mocks - you can add any design you want, the mocks are made just to describe the functionality

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-06%2520at%252017.07.06.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-06%2520at%252017.07.15.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-08%2520at%252010.43.50.png)

![mockup](https://gist.github.com/alexonaci/2e433aa8623f310128ef1c6cf8d21766/raw/60ee01b8e1ee15905dcb48ad3cf23f4a61191bb0/Screen%2520Shot%25202019-04-08%2520at%252010.43.58.png)

