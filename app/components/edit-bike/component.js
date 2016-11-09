import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bikes'],
  bike: {},
  actions: {
    update () {
      console.log('edit-bike component');
      this.sendAction('update', this.get('bike'));
    },
    reset() {
      this.set('bike', null);
    },
  }
});
