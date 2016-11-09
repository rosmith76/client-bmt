import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bikes'],
  bike: {},
  actions: {
    update () {
      let editBike = this.get('bike');
      console.log('edit-bike component');
      console.log(editBike);
      this.sendAction('update', editBike);
    },
    reset() {
      this.set('bike', null);
    },
  }
});
