/**
 * Created by Fadlaoui on 10/01/2016.
 */
Accounts.ui.config({
    requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
    },
    requestOfflineToken: {
        google: true
    },
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Meteor.autorun(function(){

    Meteor.subscribe("#posts", Session.get("zipCursor"));
    Meteor.subscribe("#messages",Session.get("zipCursor3"));


});

