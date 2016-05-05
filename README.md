![](./public/images/SentimentImage.png)

# SENTiment

Retrieves your twitter posts, sends them through IBM Watson's Tone Analyzer, and then composes a sentiment analysis of your tweets.

## Technologies Used: 

- __Core Back End__: MongoDB, Express, Node.js
- __Node packages__: Passport, twitter-passport, Mongoose, Express-session, dotenv, twitter (third party API library), Watson-developer-cloud
- __APIs__: Twitter, IBM Watson Tone Analyzer
- __Front-end__: jQuery, AJAX, Bootstrap, Google Charts

## How's it work

When you log in with Twitter you're sent to a profile page where you can enter a date range to retrieve your tweets.  The tweets within these dates are passed on to Watson which performs the analysis.  Watson's response is then saved in our database.  Results are retrieved from our own API through AJAX and are displayed graphically with a Google Charts library.

## Issues

We were struggling to come up with a good way to give an overall report of many tweets.  Our biggest obstacle was that Watson could only analyze one document at a time. We came up with two solutions: __1__: perform one analysis per tweet and then average the scores, and __2__: concatenate the tweets into one string and do a single analysis on it.  We decided on option 2 since Watson was assumed to have a better idea on how to do the overall analysis and it would reduce the number of API requests to one.

## Links

[Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1582337)

[API Docs](https://github.com/chinibi/empathy/wiki/API-Docs)

Created by 

- [Carlos Allende](https://github.com/vanpeta) (Back-end and Scrum master)
- [Trevor Pham](https://github.com/chinibi) (Back-end and Github manager)
- [Joseph del Castillo](https://github.com/josephdc) (Front-end)
