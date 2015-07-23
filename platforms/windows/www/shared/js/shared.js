var scripts = [
    'cordova.js',
    'shared/js/holder.js',
    'shared/js/ink-all.min.js',
    'shared/js/autoload.js'
];
for(var i = 0; i < scripts.length; i++) {
    $.getScript(scripts[i], function() {
        // on load
    });
}
