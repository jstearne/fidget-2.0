# fidget-2.0
# Visit at: https://fidget2.herokuapp.com/

Rebuild an earlier project from the ground up. Sharpen up on my JS/Node/Express and MongoDB skills. A lightweight "reddit-clone" for posting and interacting. Final version will include authentication and user profile page.

Helpful and fun to build and design. Google Oauth produced issues, so I pulled it for the sake of deployment. I'll go in afterwards and add Google OAuth or use token-based login later. For now, everyone can edit/delete everything, and user names are optional at time of post. 

# Technologies
Javascript, Node, Express, MongoDB

dotenv, ejs, mongoose, morgan, path, serve-favicon, method-override (passport and passport-google-oauth are unused right now)

# Starting up
npm start to get started, will connect with Mongo Atlas server. 


# 3/3 OAUTH
Get the Google Oauth working on local
Get models adjusted to require a name (not input) ref Post model
Get UX/UI to match new process

Not showing my name when I make new posts. Right now a blank or a weird code string

My "fake" name shows up but not user name