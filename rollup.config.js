export default {
    input: 'dist/index.js',
    
    output: {
        file: 'dist/bundles/ngx-db-modal.umd.js',
        format: 'umd',
        name: 'ngxDbModal',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/router': 'ng.router',
            'rxjs': 'Rx'
        },
        sourcemap: false
    },
    external: [
        '@angular/core',
        'rxjs'
    ]
};
