import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('bike', params.bike_id);
  },

  actions: {
    deleteBike (data) {
      let bike = data;

      return bike.destroyRecord()
            .then(() => this.transitionTo('bikes'))
            .catch((error) => console.error(error));
},
    updateBike (params) {
      let bike = this.get('store').findRecord('bike', params.bike_id);

      return bike.updateRecord()
        .then(() => this.transitionTo('bikes'))
        .catch((error) => console.error(error));
  }
 }
});
