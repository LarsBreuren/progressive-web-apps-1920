# My progressive web app with SWAPI

## Table of contents
- [API](#about-swapi)
- [Install](#installation)
- [Live prototype](#live-prototype)
- [Audits performance](#audits-performance)
- [Conclusion](#conclusion)
- [Sources](#sources)

![Screenshot_5](https://user-images.githubusercontent.com/43336468/76844943-59ad1d80-683e-11ea-8a24-b14bf41eae25.png)

## About SWAPI
With SWAPI you can fetch all kinds of data from the star wars movies. And see what characters are connected to what plant/movie/vehicle.

### API limits
SWAPI has a limit of 10.000 API requests per day, should be enough for the average star wars fan right?
There is no API limit needed.

## installation
  1. Clone the repository
  2. Open the terminal on the docs folder
  3 Install dependencies with `npm install`
  3. Give the command `npm run dev`
  4. navigate to localhost:3000
  
  ### Dependencies
  dependencies
  
    "ejs": "^2.6.1"
    
    "express": "^4.16.4"
    
    "node-fetch": "^2.6.0"
    
   devDependencies
   
      "gulp": "^4.0.2",
      
      "gulp-clean-css": "^4.3.0",
      
      "gulp-concat-css": "^3.1.0",
      
      "nodemon": "^2.0.2"

  
## Live prototype
<a href="https://fierce-mesa-63813.herokuapp.com/people/" target="_blank">Live prototype link</a>


## Audits performance
I had a hard time trying to make the app as fast as possible. The API has very slow response times and from time to time a bit unreliable.
I've used gulp with gulp clean css & gulp concat to combine and minify all my CSS files. This worked pretty good as the file size was minimized and so was the download time for that file.
### First audit:
![First audit](https://user-images.githubusercontent.com/43336468/77434617-7074e680-6de1-11ea-8915-d2032a84b9fc.png)

### Second audit:
This time i've made the app responsive and i have added a manifest file, seems to work well.
![audit2](https://user-images.githubusercontent.com/43336468/77447088-90130b80-6def-11ea-9165-19df5f56e349.png)

### Third audit
Removed unnecesairy blocks of code and packages. No performance boost unfortunatly but the code is cleaner now.
![Screenshot_3](https://user-images.githubusercontent.com/43336468/77692166-6ea85000-6fa6-11ea-9f96-11bb06b1eef8.png)

## Conclusion
It is a bit hard to determene how much improvement you make because the app is very small. The audits do show show improvement so you can tell what you're doing is working but i think the PWA functionalities will shine more on bigger projects. Personally i was suprised what you could do with PWA's. I didn't even know you could use websites offline besides the offline page, cool stuff. The steps i made in the audits did make some improvement every step so that was cool to see. Overal very happy and learned a lot :).

#### Server vs client side
I've learned how to server side render and what the advantages are if you render server side vs client side.

When rendering client side the browser does most of the work filling in pages with a JavaScript file.
While with server side rendering the rendering is done at the server with a templating engine (ejs/pug etc.). This means the server will serve pages filled in with content allready, so no need for JS to run client side to load the content, cool right?

The inital page load is faster while using server side rendering, SPA's download a almost complete website but this means page loads after the initial load are faster since they only have to render that page.

A good thing about server side is that low-end devices don't have to render as much, so using server side would be a good thing for users that use low-end devices.

I've learned that server side rendering is better for the SEO since the data is served the way people would read it. This makes it easier for google bots to read your website.

#### Service workers
I've learned that you can use a serviceworker for alot of cool stuff (with promises). 
For example that you can cache pages and if a user request a page that is cached the SW will grab the cached page instead of going to the server, great performance. So it's basicly a intermediary for the user and server. With this you can make websites work offline for when the user loses connection or send them push notifications like a real app. The SW keeps being registered even when the internet connection is gone.
You can determine when or when not to use SW's to make them perform the way you want them to.

Service worker life cycle:
1. Installing
2. Activate / error
3. Idle
4. Terminated / fetch / message

#### Critical render path
Improving the critical render path is a must have if you want to improve your app performance. The goal is to basicly prioritize what a user needs on a page and render that first. So for example the main text is better to load first rather then a decorative background image. A thing to keep in mind is the time to interactive, nothing more anoying then a button that doesn't respond for over 5 seconds.

A big diffrence is reducing the size of the used files, this directly reduces download speed and so on boosts performance.
You can use minifiers to remove unnecessary characters, this proces can also be done automaticly with for example gulp. 
A good practice would be to bundle your CSS files to 1 minified file.
Another thing you could do is caching pages to reduce the waiting time on reloads.
Another thing you could do is preventing the CSS from render blocking with preloads, these remove the stylesheet tag temporarily so the rendering of the CSS is not blocking but asynchronously.

## Sources
- Docs of the used packages
- EJS & Express documentation
- Declan Rek his code for the service worker





