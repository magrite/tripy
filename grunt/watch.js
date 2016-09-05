module.exports = {
    sass: {
        files: ['<%= conf.devStyles %>/**/*.scss', '<%= conf.distScripts %>/**/*.js'],
        tasks: ['sass'],
        options: {
            livereload: true
        }
    },
    options: {
        livereload: true
    }
};
