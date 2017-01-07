/**
 * Created by Mohamed on 29/12/2015.
 */

Router.configure({
    layoutTemplate : 'layout'
});
Router.route('/', function () {
    this.render('home');
});
Router.route('/posts', function () {
    this.render('posts');
});
Router.route('/about', function () {
    this.render('about');
});
Router.route('/contact', function () {
    this.render('contact');
});

Router.route('/posts/add', function () {
    this.render('addpost');
});

Router.route('/user/information', function () {
    this.render('userInfo');
});
Router.route('/post', function () {
    this.render('post');
});
Router.route('/postItem', function () {
    this.render('postItem');
});
Router.route('/modify', function () {
    this.render('modify');
});
Router.route('/user/admin', function () {
    this.render('msg-contact');
});