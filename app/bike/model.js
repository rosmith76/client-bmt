import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date_of_purchase: DS.attr('string'),
  make: DS.attr('string'),
  frame: DS.attr('string'),
  fork: DS.attr('string'),
  fork_service: DS.attr('string'),
  brakes: DS.attr('string'),
  brake_bleed: DS.attr('string'),
  pad_replaced: DS.attr('string'),
  rotors: DS.attr('string'),
  wheels: DS.attr('string'),
  tires: DS.attr('string'),
  sealant: DS.attr('string'),
  shifters: DS.attr('string'),
  front_derailleur: DS.attr('string'),
  rear_derailleur: DS.attr('string'),
  cassette: DS.attr('string'),
  chain: DS.attr('string'),
  cranks: DS.attr('string'),
  bottom_bracket: DS.attr('string'),
  saddle: DS.attr('string'),
  seatpost: DS.attr('string'),
  stem: DS.attr('string'),
  handlebars: DS.attr('string'),
  grips: DS.attr('string'),
  headset: DS.attr('string'),
  notes: DS.attr('string')

});
