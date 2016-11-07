import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('bike', params.bike_id);
  },

  actions: {
    edit (bike) {
      this.transitionTo('bike.edit', bike);
    },

    // toggleItemDone (part) {
    //   part.toggleProperty('done');
    //   part.save();
    // },
    //
    // deleteItem (part) {
    //   part.destroyRecord();
    // },
    //
    // createItem (newPart) {
    //   let part = this.get('store').createRecord('part', newPart);
    //   part.save();
    // },
  },
});
