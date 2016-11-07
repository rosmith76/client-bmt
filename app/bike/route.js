import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('bike');
  },

  actions: {
    deleteBike (data) {
      let bike = data;
      console.log('getting to destroyRecord');
      console.log(bike);
      bike.destroyRecord();
      this.transitionTo('bikes');
  },
},

});
