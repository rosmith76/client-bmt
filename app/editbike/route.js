import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('bike', params.bike_id);
  },
  actions: {
    update (params) {
      let bike = this.get('store').updateRecord('bike', params.bike_id);
        console.log(bike);
        debugger;
      return bike.save()
      .then(() => this.transitionTo('bikes'))
      .catch((err) => {
        console.error(err);
      });
    },
  },
});
