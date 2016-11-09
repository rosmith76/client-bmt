import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('bikes');
  this.route('bike', { path: '/bikes/:bike_id' });
  this.route('createbike');
  this.route('editbike', { path: '/bikes/:bike_id/edit' });
});

export default Router;
