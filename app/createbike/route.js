import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    createBike (newBike) {
      let bike = this.get('store').createRecord('bike', newBike);
      return bike.save()
      .then(() => this.transitionTo('bikes'))
      .catch((err) => {
        console.error(err);
      });
    },
  },
});
