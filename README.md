#Readme v2.0 (milestone 2)
****

![](https://raw.githubusercontent.com/teamClocktower/orbital-timekeeper/master/img/tklogo.png)

#Timekeeper - Comparing timetables made easy
Take a look at [our preview site](http://128.199.205.168:8080/nicholas/preview/)

This project is part of NUS's orbital programme 2015.

This project helps NUS students find free time with their friends. Be it project meetings, or even a simple catchup - Timekeeper is here for you!

Contents of this README:

1. License
2. Source Code
3. Libraries/Frameworks
4. Features
5. User stories
6. Set up for local development

****

##1. License

This web-based application is distributed under the MIT license. Users looking to use all or any part of the code can do so but cannot hold Timekeeper liable for any use of the source code whether proper or improper. For a better understanding of the MIT license visit
[this link](https://tldrlegal.com/license/mit-license)

****
##2. Source Code

Timekeeper is a single-page application written using html, css, javascript, and various frameworks and tools in the respective languages.

The source code for this project will be maintained in this repository.

****
##3. Libraries/Frameworks

Timekeeper is built upon free libraries. Users need to make sure that their browsers and the corresponding JavaScript versions are updated to the latest versions for the best performances.

[Materializecss](http://materializecss.com/)<br />
A modern responsive front-end framework based on Material Design

[jQuery](https://jquery.com/)<br />
Query is a fast, small, and feature-rich JavaScript library

[BackboneJS](http://backbonejs.org/)<br />
Backbone supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.

[NUSMods API](https://github.com/nusmodifications/nusmods-api) <br />
NUSMods API consolidates and normalizes various bits of NUS module information.

****
##4.Features

* [x] Milestone 1
    * [x] MaterializeCSS for design
    * [x] Ability to add and/or remove users
    * [x] Button to refresh and update timetable
    * [x] Name field to identify user
    * [x] Tracking of URL entered
    * [x] Parsing URL

* [x] Milestone 2 :
    * [x] Logo
    * [x] Backbone framework for structuring data
    * [x] Dynamically refresh timetable render
    * [x] Identify Number of users' classes in a slot


* [ ] Allow for edits to url input to behave properly
* [ ] Rank available slots
    * [ ] Rank by custom criteria
* [ ] Cache API calls for faster performance
* [ ] Manually edit slots for customization
    * [ ] Remove manual changes
* [ ] Hide, show a user's timetable
* [ ] Social network integration for easy sharing
* [ ] Timetable/location matching

****

##5. User stories

|User Stories|Feature|Implemented?|
|-----|-----|-----|
|As a student, I would like to easily find free time with my friends. | Comparing of timetables |Y|
|As a meeting coordinator, I want to easily find free timeslots between lessons for my friends and me so that I will not have to spend a lot of time on scheduling the meet up.| Adding/removing users | Y |
|As a project leader, I may not have lessons at certain timeslots but I want to mark them as not free as I need to eat!|Mark a time slot as “not free” manually| N |
|My class has been cancelled. I want my friends to know I am now free to meet at that time.|Mark a time slot as “free” manually|N|
|Even though everything is automated for me, I still have a preference to when the meeting should be held, so that it is convenient for everyone.|Rank free time slots according to preferences| N |
|I want to be able to easily share the timeslots with everyone|User login connected to social media to enable easy sharing| N |

****

##6. Set up for local development

* Install nodejs
* `npm install express`
* `node server` basically starts `http://localhost:3000`
