module.exports = {
    all: {
        files: {
            '<%= conf.distScripts %>/all.js': '<%= conf.devScripts %>/main.js'
        },
        options: {
            watch: true
        }
    }
};
