# ☄️ Meteorhub

## Overview

This app was created for the Chingu Voyage 45. It uses data from the
[NASA Meteor Landing API](https://data.nasa.gov/resource/gh4g-9sfh.json) and presents it in an engaging and user-friendly manner, making it both informative and enjoyable!!

#### LIVE LINK : https://meteorhub.netlify.app/

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 🧾 Prerequisites

Before starting, you need to install the following on your computer.

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/)

[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads)

[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

### 🛠️ Installation

1. Clone the repository `git clone https://github.com/chingu-voyages/v45-tier1-team-01.git`
2. Run `cd 45-tier1-team-01/meteorhub` to change the working directory
3. Run `npm i` or `npm install` to install all dependencies
4. Run `npm run dev` to start the application
5. Visit [http://localhost:3000](http://localhost:3000) to view the application

## 📒 Features

**Note**: Instead of fetching the data from [NASA Meteor landing API](https://data.nasa.gov/resource/gh4g-9sfh.json), we created a file `data.js` in `src/assets/data.js` which contains all the fetched data. Since, at the time of making this project the data pulled from the API is static and not changing.


- The search field lets the user search data on the bases of:

    - Name
    - Year of strike
    - Meteorite composition (`recclass`)
    - Mass range (e.g. low to high, inclusive)

- Clicking on the clear button will clear the input field as well as update the DOM to show all the meteor landings.

- The data is displayed in the form of a scrollable table. Each row shows data about a particular meteor landing. When a specific meteor landing is clicked it brings up a pop-up containing more details about the meteor landing.

- Clicking on the Geolocation coordinates of any particular meteor landing launches Google Maps to display the
  geolocation.

- All the data is summarized in the Summary Metric. Summary Metric displays the following metrics for the data that has been selected:

    - Total number of strikes
    - Average mass
    - Histogram showing the number of strikes by year
    - Histogram showing the number of strikes by meteorite composition (`recclass`).

 ( **If no search criteria have been selected then the summary metrics will be for all meteorite strikes.** )
 

## ✨ All the awesome contributors

<img src="https://contrib.rocks/image?repo=chingu-voyages/v45-tier1-team-01"/>
