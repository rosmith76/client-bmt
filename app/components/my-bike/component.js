import Ember from 'ember';

export default Ember.Component.extend({
  delete () {
  return this.sendAction('delete', this.get('bike'));
},
tagName: 'li',

  bike: {},
  actions: {
    delete () {
      this.sendAction('delete', this.get('bike'));
    },
  },
});
