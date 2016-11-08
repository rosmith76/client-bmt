import Ember from 'ember';

export default Ember.Component.extend({
  delete () {
  return this.sendAction('delete', this.get('bike'));
},
tagName: 'li',

  bike: {},
  actions: {
    delete () {
      // console.log('getting to the delete action in my-bike component');
      // console.log(this.get('bike'));
      this.sendAction('delete', this.get('bike'));
    },
  },
});
