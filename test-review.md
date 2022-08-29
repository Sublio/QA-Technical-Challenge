## Test Approach
1. My test approach is to check every single feature with positive test cases. (Like logging in with valid credentials)
2. Also I would go with some negative testing. Like logging with invalid credentials or trying to create an article with empty name field.

### Bugs
1. "Your feed" is empty when user is logged in and there is no placeholders("No articles are here... yet."). Looks like it is only in Safari
2. User session and status is not stored. When user logged in and then close the tab and open conduit again - you need to login again.(Safari only)
3. Likes counter - If you want to unlike post back - counter is updating(minus one like) but element is still filled with green color.

### Areas for improvements
1. I suggest to put some set of posts in "Your feed" as it is strange to show absolutely empty feed.
2.  No need to reload all UI while switching between tabs "My Articles" and "Favourite Articles". I see that now when you switch between tabs - "user-info" element is      reloading as well.
3. Create a new Article - when there is one field is empty - we can highlight it with red color.