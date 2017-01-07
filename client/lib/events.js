/**
 * Created by Fadlaoui on 10/01/2016.
 */
Template.contact.events({
    'click #btn_sub': function (evt) {
        console.log(evt);
        var mail=$("#mail");
        var msg=$("#message");

        Meteor.call('addMessageContact', mail.val(), msg.val());
        txt.val('').focus();
        msg.val('');
    }
});

Template.layout.events({
    'click #btn-add-post': function (evt) {
        Router.go('/posts/add');
    },
    'click #btn-user': function (evt) {
        Router.go('/user/information');
    }, 'click #administration': function (evt) {
        Router.go('/user/admin');
    }
});

Template.addpost.events({
    'click #add-post-btn': function (evt) {
        var titre=$("#post-title");
        var content=$("#post-content");
        if(!titre.val()) return alert("Veuiller Entrer un titre ")   ;
        if(content.val()==="") return alert("Veuiller Entrer un contenu ")   ;

        Meteor.call('addPost', titre.val() ,  content.val());
        titre.val('');
        content.val('');
    }
});

var pictu=null;
Template.userInfo.events({
    'click #btn-photo': function(){
        MeteorCameraUI.getPicture({
            width: 300,
            quality: 100
        }, function(er,data){
            if(er)
                return console.log(er);
             pictu=data;

        })
    },
    'click #btn-enr-user': function(evt) {
        var file=pictu;
        if(file==null){
            file = $("#btn-photo-upload").val();
        }
        var name=$("#nom-user");
        var prenomm=$("#prenom-user");
        Meteor.call('updInfoUser', name.val() , prenomm.val() , file);


    }

    });

Template.home.events({

    'click a.click': function(evt) {
        var id =  evt.target.id;

        Session.set('id-post',evt.target.id);
        Router.go('/post');


}
});

Template.postItem.events({
    'click .previous':function(evt ,tmpl){
        if(Number(Session.get('zipCursor')) > 3){
            Session.set('zipCursor',Number(Session.get('zipCursor')) -4);
        }

    },'click .next':function(evt ,tmpl){
            Session.set('zipCursor',Number(Session.get('zipCursor')) +4);



    }

});
Template.postItems.events({
    'click a.supprimer':function(evt ,tmpl){
    var id= evt.target.name;
 Meteor.call('removePost', id);



    },'click .modifier':function(evt ,tmpl){
        var id= evt.target.id;
        Session.set('post-modify',id);

        Router.go('/modify');



    } ,'click .previous':function(evt ,tmpl){
        if(Number(Session.get('zipCursor')) > 3){
            Session.set('zipCursor',Number(Session.get('zipCursor')) -4);
        }

    },'click .next':function(evt ,tmpl){
        Session.set('zipCursor',Number(Session.get('zipCursor')) +4);



    }

});
Template.modify.events({

    'click #upd-post-btn': function (evt) {
        var titre=$("#post-title");
        var content=$("#post-content");
        if(!titre.val()) return alert("Veuiller Entrer un titre ")   ;
        if(content.val()==="") return alert("Veuiller Entrer un contenu ")   ;

        Meteor.call('updPost', titre.val() ,  content.val(),Session.get('post-modify'));
        Router.go('/');


    }
});
Template.msgItems.events({
    'click a.supprimer':function(evt ,tmpl){
        var id= evt.target.name;
        Meteor.call('removeMsg', id);

    },'click .previous':function(evt ,tmpl){
        if(Number(Session.get('zipCursor3')) > 9){
            Session.set('zipCursor3',Number(Session.get('zipCursor3')) -10);
        }

    },'click .next':function(evt ,tmpl){
        Session.set('zipCursor3',Number(Session.get('zipCursor3')) +10);



    }

});