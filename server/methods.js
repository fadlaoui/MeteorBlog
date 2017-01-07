/**
 * Created by Fadlaoui on 10/01/2016.
 */
Meteor.methods({
    addMessageContact: function(mail,msg){
        Messages.insert({
            author: Meteor.userId(),
            email: mail,
            message: msg,
            timestamp: Date.now()
        });
    },
    removePost: function(id){
        Posts.remove({
            _id: id
        });
    },
    addPost: function(title,content){
            Posts.insert({
                author: Meteor.userId(),
                titre: title,
                content:content,
                createdAt: Date.now()

            });
    }, updInfoUser: function(name,prenomm,pic){
        Meteor.users.update({
            _id: Meteor.userId()
        },{
            $set :
            {
                'profile.photo': pic,
                'profile.nom': name,
                'profile.prenom': prenomm,
                'profile.role' : ""
            }
        });
    },
    updPost: function(titre,content,id){
        Posts.update({
            _id: id
        },{
            $set :
            {
                'titre': titre,
                'content': content

            }
        });
    },
    removeMsg: function(id){
        Messages.remove({
            _id: id
        });
    }

});