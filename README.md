User Stories:

As _____
I want ___
so that ___

Given ____
When _____
Then ______

1.  As an anonomous user, I want to browse movies, so that I can see what movies are avaliable

Given an anonomous user, when they are on the home page, then they see a list of movies names.

Ref: Browsing Movies Design
____________________________________________________________________________________________________________________

3.  As an anonomous user, I want to look at a specific movie, so that I can see details and reviews.

Given an anonomous user, when they click on a movie, then they see details and reviews of the clicked movie.

Ref: Movie Details and Reviews Design
____________________________________________________________________________________________________________________

2.  As an anonomous user, I want to search for movies, so that I can see a list of movies that meet that search criteria.

Given an anonomous user, when they search for a movie, then they see a list of movies that have that title.

Ref: Search Bar Design
____________________________________________________________________________________________________________________

6.  As a logged in user, I want to post a review on a movie, so that I can have my voice heard.

Given a logged in user, when they populate the leave a comment box and click submit, then a post request to the back end service at /reviews that takes review.email && review.movieId && review.reviewTitle && review.reviewText.

Ref: Searching for Movie Details and Reviews Design / logged in user
____________________________________________________________________________________________________________________

4.  As a user, I want to be able to register my email and create a password, so that I can utilize all the features of the application.a

Given a non registered email, when you click on "register", then you can submit a email and password.

Given a registered user, when the registered user tries to submit their email for registration, then a response says "That email is already registered as a user".
_____________________________________________________________________________________________________________________

5.  As a user, I want to be able to log in, so that I can post reviews.

Given an anonomous user, when enter their email and password and press the 'login' button, then a response says "Successful Login" or "Unsuccessful Login" depending on a valid email and password.

Ref: Login Design