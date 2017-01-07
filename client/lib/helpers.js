/**
 * Created by Fadlaoui on 10/01/2016.
 */
Session.setDefault('zipCursor',0);
Session.setDefault('zipCursor1',0);
Session.setDefault('zipCursor3',0);
Session.setDefault('id-post',"4564");
Session.setDefault('id-delete',"");
Session.setDefault('id-modify',"");

Meteor.subscribe("#users");
//Meteor.subscribe("#posts", Session.get("zipCursor"));

Template.postItems.helpers({
    isMymsg : function(author){
        return author === Meteor.userId();
    },
    auteur : function(author){
        return Meteor.users.findOne({_id: author }).username;
    },
    postes : function () {
        return  Posts.find({},{
            sort:{ createdAt: -1}
        });
    },formateTime: function(ts){
        return (new Date(ts));

    },
    hasPhoto: function(owner){
        var user= Meteor.users.findOne({_id: owner });
        return user.profile.photo!=null ;
    },
    getPhoto: function(owner){
        return Meteor.users.findOne({_id: owner }).profile.photo;
    },
    totalCount:  function(){
        var tst = Posts.find({}).count()-Number(Session.get('zipCursor'));
        if(tst<0) return true;
        return false;
    }
});

Template.postItem.helpers({


    auteur : function(author){
        return Meteor.users.findOne({_id: author }).username;
    },
    postes : function () {
        return  Posts.find({},{
            sort:{ createdAt: -1}
        });
    },formateTime: function(ts){
        return (new Date(ts));

    },
    hasPhoto: function(owner){
        var user= Meteor.users.findOne({_id: owner });
        return user.profile.photo!=null ;
    },
    getPhoto: function(owner){
        return Meteor.users.findOne({_id: owner }).profile.photo;
    },
    totalCount:  function(){
        var tst = Posts.find({}).count()-Number(Session.get('zipCursor'));
        if(tst<0) return true;
        return false;
    }

});

Template.layout.helpers({

    connecte: function(){
        return Meteor.userId();
    },
    adminis: function(){
        return Meteor.users.findOne({_id: Meteor.userId() }).profile.role === "admin";
    }

});

Template.userInfo.helpers({

    owner: function(){
        return Meteor.user().username;
    }, hasPhoto: function(owner){
        var user= Meteor.users.findOne({username: owner });
        return user.profile.photo!=null ;
    },
    getPhoto: function(owner){
        return Meteor.users.findOne({username: owner }).profile.photo;
    }

});

Template.post.helpers({

    id: function(){
        return Session.get('id-post');
    },
    auteur : function(author){
        return Meteor.users.findOne({_id: author }).username;
    },
    postes : function () {
        return  Posts.find({_id: Session.get('id-post') });

    },formateTime: function(ts){
        return (new Date(ts));

    },
    hasPhoto: function(owner){
        var user= Meteor.users.findOne({_id: owner });
        return user.profile.photo!=null ;
    },
    getPhoto: function(owner){
        return Meteor.users.findOne({_id: owner }).profile.photo;
    }
});

Template.modify.helpers({

    id: function(){
        return Session.get('post-modify');
    },
    titre : function(){
        return Posts.findOne({_id: Session.get('post-modify') }).titre;
    },
    content : function () {
        return Posts.findOne({_id: Session.get('post-modify') }).content;

    }
});


Template.msgItems.helpers({

    auteur : function(author){
        return Meteor.users.findOne({_id: author }).username;
    },
    messages : function () {
        return  Messages.find({});

    },formateTime: function(ts){
        return (new Date(ts));

    },
    hasPhoto: function(owner){
        var user= Meteor.users.findOne({_id: owner });
        return user.profile.photo!=null ;
    },
    getPhoto: function(owner){
        return Meteor.users.findOne({_id: owner }).profile.photo;
    },
    totalCount:  function(){
        var tst = Messages.find({}).count()-Number(Session.get('zipCursor3'));
        if(tst<0) return true;
        return false;
    }
});