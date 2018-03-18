var projet = 'portfolio_relifting';
var dest = '../wp-content/themes/bones/library';
var src = '../sources';
var maps = 'maps';


module.exports = {

	clean: {
		src: [
			dest,
			maps
		]
	},

	production: {
		src: [
			dest + '/**/*.+(js|css).map',
		],
		dest: maps
	},

	browserSync: {
		proxy: "localhost:8888/"+projet,
		watchOptions: {
			ignoreInitial: true
		}
	},

	sass: {
		watch: [
			src + '/**/*.scss'
		],
		src: [
			src + '/scss/style.scss'
		],
		dest: dest + '/css'
	},

	images: {
		src: [
			src + '/images/**/*'
		],
		dest: dest + '/images'
	},

	medias: {
		src: [
			src + '/medias/**/*'
		],
		dest: dest + '/medias'
	},

	fonts: {
		src: [
			src + '/fonts/**/*'
		],
		dest: dest + '/fonts'
	},

	browserify: {

		libs: [
			'lodash',
			'debug'
		],

		bundles: [{
			debug: true,
			paths: src,
			entries: '' + 'js/scripts.js',
			dest: dest + '/js/',
			outputName: 'scripts.js'
		}],

		vendors: {
			debug: true,
			paths: src,
			entries: [],
			dest: dest + '/js/',
			outputName: 'libs.js'
		}
	},

	css: {
		src: [src + '/scss/libs/**/*.css'],
		dest: dest + '/css/',
		outputName: 'libs.css'
	},

	js: {
		src: [src + '/js/libs/**/*.js'],
		dest: dest + '/js/',
		outputName: 'libs.js'
	}
};
