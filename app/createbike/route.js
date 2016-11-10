import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    createBike (newBike) {
      console.log("insdie the createBike action in the createbike route");

      let bike = this.get('store').createRecord('bike', newBike);
      return bike.save()
        .then(() => this.transitionTo('bikes'));
        // .catch((err) => {
        // console.error(err);
      // });
    },
  },
});
