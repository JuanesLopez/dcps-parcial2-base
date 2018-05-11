import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr){
    switch(attr){
      case 'firstname':
        return 'first-name';
      case 'lastname':
        return 'last-name';
      default:
        return this._super(...arguments);
}}});
