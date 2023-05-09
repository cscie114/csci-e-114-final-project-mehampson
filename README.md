As my final project for CSCI E-114, I've built a public front-end for the recipe manager application Mealie.

## Why?

I run Mealie on my home network to keep track of recipes I come across. I've found it handy enough that I keep a small Kindle Fire tablet in the kitchen to view recipes as I'm cooking. It's quite convenient, but as Mealie approaches its 1.0 release, I'm going to lose a very useful feature: a public view.

Currently Mealie doesn't require a visitor to
authenticate to actually view recipes, which is nice because my tablet doesn't support my password manager's biometric login. It's going to be a real hassle having to type "AG4EUkz4pX%$NBCiMmC7MznJL" or whatever my password is while I'm trying to make dinner. I've actually been holding off on upgrading to the beta specifically because of this.

Mealie does have a REST API, so rather than upgrade to a tablet with a fingerprint reader what I'm going instead to do is treat Mealie as if it were a headless CMS and pull its content into Gatsby. It has some functionality for external notifications, which we can use to trigger a build hook on Netlify whenever a recipe is updated.

And lastly, since we know the specific device I plan to actually use this on, we're going to make sure it's easy to use on an 800x1280 touchscreen interface.

## Mealie

To use this app, you must have an instance of Mealie 1.0 beta 5 running (or later, if you read this in the future). You must be an admin, and it must be reachable by Netlify or wherever you build this app.

I've set up a test instance of the latest Mealie beta and imported some recipes into it for use in this project. The .env file includes the URL and the username + password of the test user. Please log into Mealie and make updates! CRUD operations will trigger a build hook that causes Meal Board to rebuild on Netlify.

(And don't worry about leaving the Mealie recipes in any particular state. This is only a test instance, and nothing you do in it will impact my actual day-to-day instance, which is a different site.)

If you prefer to recreate the entire setup from scratch, you can get Mealie up and running with Docker pretty easily. The documentation for the beta is [here](https://nightly.mealie.io/).

## Steps

These are the general steps to run this:

1. Set up a Github repo for this app and connect it to a new Netlify site. Other CI/CD pipelines could work as long as they support build hooks.
2. Set your environment variables:
   1. MEALIE_API_KEY = 'your key from Mealie'
   1. GATSBY_MEALIE_URL = 'https://your.mealie.instance'
3. Configure a build hook, so you can trigger a build from Mealie. In Netlify, this is in _Site Settings > Build & deploy > Build Hooks_
4. In Mealie, navigate to _GATSBY_MEALIE_URL/group/notifiers_, and create a new notification.
   1. URL: the endpoint of your build hook, except with the protocol changed from 'https://' to 'form://'
   1. Recipe Events: Create, Update, Delete.
   1. Other settings: Totally up to you, though this app doesn't do anything with the rest of the data types.
5. Build your app in Netlify.
