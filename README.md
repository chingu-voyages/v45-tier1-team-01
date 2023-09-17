# ☄️ MeteorHub

## Overview

This app was created for Chingu Voyage 45. It uses data from the
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

- The search field lets the user search data based on user input for the following criteria:
  - Name
  - Year of strike
  - Meteorite composition (`recclass`)
  
- The filter button lets the user filter data based on user input of Mass range (e.g. low to high, inclusive)

- Clicking on the `x` button inside the search bar will clear the input field as well as update the DOM to show all the meteor landings.

- The data is displayed in the form of a scrollable table. Each row shows data about a particular meteor landing. When a specific meteor landing is clicked it brings up a pop-up containing more details about the meteor landing.

- All the data is summarized in the Summary Metric. Summary Metric displays the following metrics for the data that has been selected:

  - Total number of strikes
  - Average mass
  - Histogram showing the number of strikes by year
  - Histogram showing the number of strikes by meteorite composition (`recclass`).

( **If no search criteria have been selected then the summary metrics will be for all meteorite strikes.** )

## ✨ All the awesome contributors
<div>
  <div>
      <strong>Designed by :</strong>  <a target="_blank" href="https://github.com/CharanMN7" >Charan</a>, <a target="_blank" href="https://github.com/Sushants-Git">Sushant Mishra</a>, <a target="_blank" href="https://github.com/ashiyaman" class="circle">Ashiya Banu</a>,  <a target="_blank" href="https://github.com/itzmidinesh"
        >Dinesh Anbazhagan</a>
  </div>
  <br />
  <div>
      <a target="_blank" href="https://github.com/CharanMN7" >
      <img
        src="https://avatars.githubusercontent.com/u/103265133?s=64&amp;v=4"
        alt="@CharanMN7"
        size="60"
        height="60"
        width="60"
        style="border-radius: 100%;"
        title="Charan"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/Sushants-Git"
        >
      <img
        src="https://avatars.githubusercontent.com/u/100516354?s=64&amp;v=4"
        alt="@Sushants-Git"
        size="60"
        height="60"
        width="60"
        style="border-radius: 100%;"
        title="Sushant Mishra"
        />
      </a>
      <a target="_blank" href="https://github.com/ashiyaman" class="circle">
      <img
        src="https://avatars.githubusercontent.com/u/14231344?s=64&amp;v=4"
        alt="@ashiyaman"
        size="60"
        height="60"
        width="60"
        style="border-radius: 100%;"
        title="Ashiya Banu"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/itzmidinesh"
        class="circle"
        >
      <img
        src="https://avatars.githubusercontent.com/u/5523347?s=64&amp;v=4"
        alt="@itzmidinesh"
        size="60"
        height="60"
        width="60"
        style="border-radius: 100%;"
        title="Dinesh Anbazhagan"
        />
      </a>
  </div>
</div>
<div>
  <div>
      <strong>A special thanks to <a href="https://github.com/jdmedlock" target="_black">Jim Medlock</a> from Chingu: </strong>
  </div>
      <a href="https://github.com/jdmedlock" target="_black">
      <img
      src="https://avatars.githubusercontent.com/u/1287072?s=64&amp;v=4" alt="@jdmedlock"
      size="60"
      height="60"
      width="60"
      style="border-radius: 100%;"
      title="Jim Medlock">
      </a>
</div>

## ✨ Acknowledgement

Thanks to NASA and it's partners for open sourcing this data. You can find more at [NASA Open Data Portal](https://data.nasa.gov/).

## ✨ About Chingu

   <div> This project was made for :
      <a
         href="https://www.chingu.io/"
         target="_blank"
         >
         Chingu Voyage 45 &copy; 2023
      </a>
   </div>
If you aren’t yet a member of Chingu we invite you to join us. We help our members transform what they’ve learned in courses & tutorials into the practical experience employers need and want.
