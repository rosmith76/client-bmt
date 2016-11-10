import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bikes'],
  bike: {},
  actions: {
    create () {
      let newBike = this.get('bike');
      this.sendAction('create', newBike);
      this.set('bike', {});
    },
    reset() {
      this.set('bike', {});
    },
  }
});
