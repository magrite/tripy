module.exports = function (grunt) {
    'use strict';
    var task = grunt.cli.tasks[0];

    var aliases = grunt.file.readYAML('grunt/aliases.yaml');

    require('load-grunt-config')(grunt, {
        config: {
            conf: {
                web: 'web',
                config: 'app/config',
                distDir: 'web/dist',
                distStyles: 'web/dist/debug',
                distScripts: 'web/dist/debug',
                distReleaseScripts: 'web/dist/debug',
                devDir: 'web/dev/',
                devStyles: 'web/dev/scss',
                devReleaseStyles: 'web/dev/scss',
                devScripts: 'web/dev/js',
            },
        }
    });

};
