@ConduitApp

Feature: Login feature

Background: I open link "https://react-redux.realworld.io"

Scenario: Not able to sign in with not registered user
  Given: I have not registered user
  When:  I tried to login using provided credentials 
  Then:  I should see an error message


Scenario: Should be able to sign in with registered user
  Given: I have a registered user
  When:  I tried to login using provided credentials 
  Then:  I should username in the navigation bar menu

Scenario: Should be able to sign out
  Given: I have a registered user
  When:  I tried to login using provided credentials 
  And:   I open Settings page
  And:   I click "or click to logout" button
  Then:  I should see Conduit main page