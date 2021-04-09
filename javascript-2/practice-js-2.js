/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'A free tool you can use for code development that provides a version control system for developers to save, review and push their changes during code development.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'A online service that houses code repositories in "the cloud."'
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: 'initializes git, where git will start to listen to changes made in your code to compare against the original source and identify where changes were made.',
    code: 'git init'
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'As the name suggests, the clone command will clone the repository given during the command to your local environment.',
    code: 'git clone {{url}}'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/
const status = {
    description: 'Status will review the current changes made to your repository, and evaluate whether changes need to be added, staged, or committed.', 
    code: 'git status'
}
//CODE HERE

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: 'The command stage whichever file provided during the command to the git which readies the file to be committed.',
    code: 'git add {{file}}'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'Gathers the staged changes and commits them to git, which updates the local repository. Requires a message to describe what changes were made to the repo.', 
    code: 'git commit -m"message"'
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: 'Add a remote branch or repository to which the local repo can push, pull, fetch, or clone files based on the url provided during the command.',
    code: 'git remote add origin {{url}}'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: 'Sends the committed changes from your local copy of the repository you are working in to the remote repository.',
    code: 'git push'
}