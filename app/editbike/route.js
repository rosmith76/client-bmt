import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('bike', params.bike_id);
  },
  actions: {
    editBike (bike) {
      
      return bike.save()
      .then(() => this.transitionTo('bikes'))
      .catch((err) => {
        console.error(err);
      });
    },
  },
});
