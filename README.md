Your project should include:

- Pages built through a Static Site Generator.
- Data that drives content for the site generation; this can be through local data or
  through a web-based API.
  \*Use of GitHub (for us, so we have easy access to code; for you, so can iteratively
  make commits as your project develops!).
- A CI/CD process that deploys your site to a hosting provider
- An "Extraordinary Distinction" -- dive into one of the following areas and do more
  than you have previously done for your assignments. For example, you could:
- Include a README.md that contains detailed instructions on running your project locally.
  If you have an .env file, you can submit it separately through Canvas -- your .env and
  any secrets it contains should not be part of your Git repository! Note: Your README.md
  file should also contain (up front) the URL to wherever your final project is hosted
  on the web.

This app pulls recipes from Mealie and generates a tablet-friendly view for my kitchen.

I use Mealie as a recipe organizer and keep a small Kindle Fire tablet in the kitchen to view recipes as I'm cooking. It's quite convenient, but as Mealie approaches its 1.0 release, I'm going to lose a very useful feature: a public view. My tablet doesn't support my password manager's biometric login, so logging in is a hassle when I don't intend to do anything but read a recipe -- and conveniently, Mealie doesn't currently require that.

Prerequisites:

- You must have an instance of Mealie 1.0 beta 5 running (or later, if you read this in the future). You must be an admin, and it must be reachable by Netlify or wherever you build this app.
- You must generate an [API key](https://nightly.mealie.io/documentation/getting-started/api-usage/) in Mealie.

Steps

1. Set up a Github repo for this app and connect it to a new Netlify site. Other CI/CD pipelines could work as long as they support build hooks.
2. Set your environment variables:
   a. MEALIE_API_KEY = 'your key from Mealie'
   b. GATSBY_MEALIE_URL = 'https://your.mealie.instance'
3. Configure a build hook, so you can trigger a build from Mealie. In Netlify, this is in _Site Settings > Build & deploy > Build Hooks_
4. In Mealie, navigate to _GATSBY_MEALIE_URL/group/notifiers_, and create a new notification.
   a. URL: the endpoint of your build hook, except with the protocol changed from 'https://' to 'form://'
   b. Recipe Events: Create, Update, Delete.
   c. Other settings: Totally up to you, though this app doesn't do anything with the rest of the data types.
5. Build your app in Netlify.
