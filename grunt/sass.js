module.exports = {
    dev: {
        options: {
            sourceMap: true,
        },
        files: {
            '<%= conf.distStyles %>/all.css': '<%= conf.devStyles %>/all.scss'
        }
    },
};
