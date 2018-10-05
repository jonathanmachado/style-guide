// import whatInput from 'what-input';

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependancies';

window.libs = libs;

$(document).foundation();

libs.AOS.init();

// SVG Injector
// Elements to inject
const mySVGsToInject = document.querySelectorAll('img.inject-me');

// Options
const injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

const afterAllInjectionsFinishedCallback = totalSVGsInjected => {
  // Callback after all SVGs are injected
  console.log(`We injected ${totalSVGsInjected} SVG(s)!`);
};

const perInjectionCallback = function(svg) {
  // Callback after each SVG is injected
  console.log(`SVG injected: ${svg}`);
};

// create injector configured by options
const injector = new libs.SvgInjector(injectorOptions);

// Trigger the injection
injector.inject(mySVGsToInject, afterAllInjectionsFinishedCallback, perInjectionCallback);

// app dashboard toggle
$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this)
    .parents('.app-dashboard')
    .toggleClass('shrink-medium')
    .toggleClass('shrink-large');
});
