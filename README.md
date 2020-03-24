# My progressive web app with SWAPI

## Table of contents
- [API](#about-swapi)
- [Install](#installation)
- [Live prototype](#live-prototype)
- [Audits performance](#audits-performance)
- [Conslusion](#conclusion)

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
  `  
  "dependencies": {
    "ejs": "^2.6.1",
    
    "express": "^4.16.4",
    
    "node-fetch": "^2.6.0"
  },
  "devDependencies": {
    "gulp": "^4.0.2",
    
    "gulp-clean-css": "^4.3.0",
    
    "gulp-concat-css": "^3.1.0",
    
    "nodemon": "^2.0.2"
  }`
  
## Live prototype
Link will appear at some point

## Audits performance
I had a hard time trying to make the app as fast as possible. The API has very slow response times and from time to time a bit unreliable.
I've used gulp with gulp clean css & gulp concat to combine and minify all my CSS files. This worked pretty good as the file size was minimized and so was the download time for that file.
### First audit:
![First audit](https://user-images.githubusercontent.com/43336468/77434617-7074e680-6de1-11ea-8915-d2032a84b9fc.png)

### Second audit:
This time i've made the app responsive and i have added a manifest file, seems to work well.
![audit2](https://user-images.githubusercontent.com/43336468/77447088-90130b80-6def-11ea-9165-19df5f56e349.png)

## conclusion




