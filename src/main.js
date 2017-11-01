import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .feature('feature-audiotour');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  let featureName = $(aurelia.host).data('feature');
  console.log("Setting aurelia root", featureName)
  aurelia.start().then(() => aurelia.setRoot(featureName));
}
