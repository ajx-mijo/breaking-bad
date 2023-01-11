# Fixing-Good ReadMe

## Description

fixing-good is a pair project that I undertook with a classmate during my studies at General Assembly. The focus of the project was using the React JS framework to create a React application which consumed a public API that would allow users to discover more about the television series Breaking Bad.


## Deployment link - [Fixing-Good](https://fixing-good.netlify.app/)














## Timeframe & Working Team

fixing-good was a pair project that took a form similar to a mini-hackathon where we had 2 days (around 48hrs) to plan, build and deliver our applications.


## Technologies Used

- React JS
- 3rd Party Public APIs
- SCSS
- Bootstrap
- React Router
- Yarn
- Axios
- GitHub
- Google Chrome DevTools

## Brief
The brief set out by the instructional team was to build out a React Application which consumed a public API as a pair. We were given independence as to how we divided the work within the team with the main aim being an interactive, fully-functional and aesthetically pleasing user experience. The most significant challenges were likely to be the incorporation of multiple endpoints into our final products and effectively using conditional logic to improve the dynamic nature of our code and application.



## Planning

To plan the project, Alex and I initially drew out a rough list of the main functionalities and the target interface design that we preferred. We then sketched a wireframe using Excalidraw and planned the general division of labor and best-working practices that we would follow during the project. As this was a hackathon, we pair-coded using Visual Studio Code Live Share.

We finally discuss a few stretch objectives of the basic requirements of our application as well as more specific design themes and the utilization of React-Bootstrap Cards and NavBar to form the structure of our pages.

The day-to-day planning was established in a predetermined but flexible manner which continually reviewed as we met our project objectives.

## Build/Code Process

In line with our planning, Alex and I created our repository on GitHub (from which I created a forked version) but we coded our application through the VSCODE Live Share functionality allowing us to work in tandem or separately on components when necessary. To begin with we both worked together to create the skeleton of our application installing all necessary packages (React-Router, Bootstrap, Axios etc.), setting out our routes, importing our MVP components and creating our NavBar and Landing Page.

Following this, we split off to work independently on the index page and single-display page to accelerate our development cycle. We utilized get requests to access the relevant data and the useState, useEffect and useParams React Hooks to create a responsive application that facilitated the users ability to select an individual character and view their biographical information. Once we had achieved our objectives, we came back together to implement basic styles across our web pages to achieve a more cohesive and consistent look for our application.

The next challenge was the dynamic implementation of our Search bar, and drop-down menus. We tackled this challenge together as we knew it would be one of the trickier aspects of the project and we managed to create a fully functional Search Bar that responded to the selected filters applied by the drop-down menus. 

After hitting our MVP, we split off to pursue our stretch targets and flesh out the styling. I managed to create a responsive element on the single-display page which retrieved character information from several endpoints after user interaction which was only an interactive feature within the character bio when there was relevant information pertaining to them within the secondary or tertiary endpoint. ‘Rubber-ducking’ this issue with Alex was very helpful to successfully implementing the function. Alex and I then manipulated some of the API data to make it display correctly on our application before applying final styling.





## Challenges

Dynamically creating a double drop-down and search-bar functionality was one of the more significant challenges that we faced. However, after breaking the challenge down into step-by-step components and implementing conditional logic we managed to get the search functionalities to work as required.
As this was the first time I had built an app that consumed a third-party API bringing together multiple endpoints manipulating the data to retrieve the information we required took some time but through the useState functionality, logical JavaScript functions and conditional logic we were able to find solutions and obtain the data we required to provide content on our web pages.


## Wins
- In relation to the above challenges implementing multiple API endpoints across the app and hitting all of the stretch targets was a big win.
- Implementing good styling across our application.
- We worked well together as a team both building out functionalities individually and then coming together to problem solve or bounce ideas off each other.



## Key Learnings/Takeaways

- Confident and more proficient use of the React JS framework as well as React-Bootstrap, APIs and conditional JavaScript.
- Working in a team effectively was a core learning in this project, especially the collaborative creation of a well-structured plan but also with a flexibility that allowed for a more efficient use of limited time and towards a tight deadline .
- Another great takeaway was joint-coding and rubber-ducking when dealing with challenges in your own objectives as a means to overcome them.



# Bugs

- There is some incomplete styling when viewing the application below ~576px.



# Future Improvements

- Further and more extensive use of endpoints available from The-Breaking-Bad API is a potential area of improvement.