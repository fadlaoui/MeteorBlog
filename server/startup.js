/**
 * Created by Mohamed on 09/01/2016.
 */


Accounts.onCreateUser(function(o,user){
    user.profile={};
    return user;
});

Meteor.publish('#users',function(){
    return Meteor.users.find({});
});

Meteor.publish('#messages',function(zipcursor) {
    return Messages.find({}, {
        sort :{timestamp : -1}
        , skip: zipcursor
        , limit:  10
    });
});

Meteor.publish('#posts',function(zipcursor,limit) {
    return Posts.find({}, {
        sort :{createdAt : -1}
        , skip: zipcursor
        , limit:   limit || 4
    });
});
Meteor.publish('#posts2',function(zipcursor,limit) {
    return Posts.find({}, {
        sort :{createdAt : -1}
        , skip: zipcursor
        , limit:   limit || 4
    });
});