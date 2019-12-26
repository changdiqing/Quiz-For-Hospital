# Quiz-For-Hospital
The first app of Team Health Angels. An quiz app for collecting patient's information at entrance.

# How to start the App
1. Clone the repository to any of your development directory, open the folder "Quiz-For-Hospital"
2. command line: **npm install** This installs all the dependencies.
3. command line: **npm start** You will see *Starting developer server*, wait few minutes till you see *Compiled*.
4. Open your browser and visit "127.0.0.1:3000", there you will see the app:)

# How to work together on Git
1. Clone the master repository to any of your development directory
2. Use **git branch randomname** to create you own branch. For example: **git branch tc_daniel**. Go to the new branch with **git checkout tc_daniel**.
3. Do any change and test on branch *tc_daniel*. Till you think a module is finished and can be merged to the master.
4. command line: **git add filename** to add changes to staging area. Example: I want to add everything that are modified: **git add .**
5. command line: **git commit** to actually record the changes. Example: I want to just commit everything I added with one comment: **git commit -am 'your comment<-this is required'**
6. Now your branch *tc_daniel* is clean. switch back to master branch with **git checkout master**
7. Now you are in master branch. Do command line **git pull** to synchronize your local *master* and the *master* on git server. Because you never know if the other 3 bros has changed anything in the cloud master!
8. command line: **git merge tc_daniel** to synchronize the master with your branch. This is the step where conflicts may occur and must be solved. Because Diqing and Daniel could just edited the same file, and there is no way that git should know how to merge the two different versions.
9. Now you have your local development merged into your local master. repeat step 4 and 5 to commit the changes.
10. command line: **git push** to synchronize the cloud *master* with your local *master*. Great! Now your name is logged on git, and if anything goes wrong we know who is the Schwarzer Täter:)
