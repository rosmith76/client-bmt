import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('bike');
  },

  actions: {
    deleteBike (data) {
      let bike = data;

      return bike.destroyRecord()
            .then(() => this.transitionTo('bikes'))
            .catch((error) => console.error(error));

  },
},

});
