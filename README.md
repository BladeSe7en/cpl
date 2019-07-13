# My Application
To run this project use use either npm run dev or npm start and in a seperate terminal run npm sass for the css.
To aquire the .env file please contact CanuckSoldier on our discord server at https://discord.gg/ubwTNdd

Here is a list of all of the fixes or features that need to be added to the poject. Please speak with Canuck regarding instructions and guidelins he wants added.
    New Features:
fully edit player stats, and account info(name)
    -This should be a component for admins only. Add a player search input to find the player you want to edit. Once you select the player you wish to edit,
    that players stats are fetched from the db and the players data acts as a placeholder/default value in a form. The admin then can edit any field that is nessicary.
    upon submission the new stats will be updated in the DB and this action would be recorded in the admin logs with the previous state and the updated state.

 reset stats function
    -This could be either just a remote method with an automatic onTime function that triggers on the 1st of every 3rd month, or it could just be a button in the admin
    dashboard that requires a confirm or cancel. Once confirmed, this function will reset all seasonal stats only back to the default values. Its important that it
    DOES NOT reset any of the life time CAREER, FFA, DUEL or TEAM stats. Talk to Codenaugh and Canuck about this. Its possible that Codenaugh could write this feature
    in his own bots. Ideally though, it should also be triggerable via the website.

 report games
    -Game reporting is currently handled by Codenaugh's report bots. Talk to Canuck to see if he wants a backup reporting interface on the admin dashboard or if the
    current bots are fine as is.

 screen that displays player logs
  -I tried getting this to work with the log.csv file. You could continue to read/write to/from the csv file or perhaps it might be better to create new models in the DB and post/get the data from there. It also needs a front end component on the admin dashboard to display all of the data. It needs to record every
  SteamID, Steam name, time stamp of every member signing in. In one or two other charts record when a player edits/deletes a message in the forum with time stamps, old and new messages.

 screen that displays Admin/mod logs
    -This page will look exactly like the player log recording admin logins, edit/deletes in the forum but also have charts for recording admin player stats edits amd seasonal stat resets with the old sesonal data

 ban/suspend player function
    -we want a component to list all of our banned players. Be sure to include steamID, name, steamProfile timestamp and any known alias'

 screen that produces a family share account list
    -Right now Codenaugh is working on a project to monitor and record any family shared account. Once his work is done talk to him to coordinate how to pull his data into
    the website. This component should have a list of pending approved and approved. The pending list will be all of the accounts that have been identified as a shared account but has not been approved yet. Any account that has been approved should go in its own chart. Be sure to include steamID, steamName, and profile of both accounts. If a shared account is found to be linked to a banned player, be sure to add that data to the known alias log in the banned players chart.

 have a screen to make a player account an Admin/Mod/TD/HTD/HAdmin etc, and also be able to remove those roles.  And a screen that lets me the HAdmin assign powers to these roles.  A list of check boxes is fine or something like that.
    -This code is partially complete and can be found in the Admins component. For the time being, all this component needs to do is display a list of all users with the admin role, search the player DB for a player because you need to be sure to get the steamID of said player to add the admin role, and then remove the admin role from someone. If in the future we could add a mod role that only has access to monitor the forum but its not nesccicary at this time. For now any admin/mod in our discord server will have the same access. Same goes for Tournament Director, Head Tournament Director and Head Admin. Theyre not needed at this time. Head Admin could be optional role. talk to Canuck to see if he wants it.

 screen that allows the HAdmin (or admin) to change the Glicko2/Trueskill factors like RD, start skill etc
    -Talk to Codenaugh about this. Pretty sure he will handle this within his own code, but Canuck might want the option to edit it via the website as well.

 edit the home page blog, post announcements etc
    -Right now the home page, Rules, and FAQ are just hardcoded. It would be nice to have the ability to edit those three pages from the admin dashboard. That would of course require a complete refactor on the components. You would have to create new models in the DB to store the data, post the existing data in the db, write actions to fetch the data and then rework the current html into a map. Along with creating UI inputs in the dashboard to post/edit additional changes.

Be sure the boot script create-admin is working properly
    -this script is designed upon inital load to find or create an admin role. With my limited knowlage of ACL's and roles I am not sure if this is working.
    -also would be a good idea to change out .env variable names to CanuckSoldidier's info when the site goes live. While in development you could add in your own steamID for the time being.

server/utils/discordNewsletterBot.js
    -This remote method functions just fine. However I did leave comments on a possible feature to add to it.

server/utils/discordReportBot.js && server/utils/glicko_docs.js && server/utils/glicko.js
    -in all likelihood these files could be deleted. I started working on the report bot and Codenaugh took it over.

server/utils/updateNewsletter.js
    -I created this method in an attempt to handle this character limit issue as described in server/utils/discordNewsletterBot.js If you could get the issue figured out awesome. Otherwise I am sure it would be fine as is without it.

server/datasources.json
    -Talk to Codenaugh about this file. right now I am on my own test collection. You will need to coordinate with him to change the datasource to the actual db with real player stats. Afterwards, If you are having issues with the leaderboard make sure that my Player model has the same property names as what his database has. After I had the leaderboard done Codenaugh decided to make changes to his model. I am pretty sure we are on the same page now, but it would be good to double check it.

src/components/AdminNav/AdminNav.jsx
    -When building out the admin dashboard links in this navbar will need to be edited/added to the list.

src/components/Admins/Admins.jsx
    -This component needs to be modified sligtly. Instead of using emails and passwords it needs to use steamName and SteamID. Also needs to add remove the admin roles

src/components/Faq/Faq.jsx && src/components/Home/Home.jsx && src/components/Rules/Rules.jsx
    -these components could be refactored to allow the admin dashboard to edit or create new content for each component.

src/components/ForumTopics/ForumTopics.jsx
    -when you add admin and player roles this component will need to be refactored. You can add show/hide to the edit and or delete buttons so the user doesnt think they have the ability to use those features. Also be sure to limit the access to those functions.

src/components/Newsletters/Newsletters.jsx
    -I am quite proud of this component. I created an infinity scroll that not only automatically fetches new posts as you scroll down, but also automatically updates the navbar with what element is currently in view.
    -I do however have a few suggestions to improve this feature. Currently the infinity scroll fetches data in blocks of 10. If you could change the infinity scroll filter to fetch data based on months. It would be nice if we could fetch say all posts in june 2018. Then you scroll down and the infinity scroll would fetch july 2018
    -Then if you click on one of the nav buttons it will fetch that months data. Currently if you click on one of the buttons, it fetches all data from the first post to the date clicked. Ideally it would be nice if the button fetched at least the selected month or 'oneMonthEarlier, month, and oneMonthLater'. That would reduce the api call times instead of fetching all data. Issue I was having with this method was that if you scrolled back up on the page it would be missing data. For example, news posts start on June 2018 and ends July 2019. If the user were to click on August 2018, August's data would be fetched. However, if you scrolled up you would be missing data from July. You would need to detect if the above data is sequential to whats currently in view and if its not, fetch the appropiate data. Perhaps you could use the state currentPageNews and pageInView by stracking the previous state. You could probably keep track that you jumped from currentPageNews=1,currentPageNews=2,currentPageNews=5. then if you scrolled up you could check that 2 is not sequential to 5 and fetch page 4. As you kept scrollimg up the next check would see that page 2 is not sequential to 4 resulting in fetching page 3.
    Theres probably an easier or more elegent solution. Thats just my initial thoughts on how to tackle the issue.

The project is generated by [LoopBack](http://loopback.io).