import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  profilepicture: DS.attr('string'),
  posts: DS.hasMany('blog-post'),
});
