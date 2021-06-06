
let project_folder = "dist"
let source_folder = "#src"

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
	},
	src: {
		html: project_folder + "/",
		css: project_folder + "/scss/style.scss",
		js: project_folder + "/js/script.js",
		img: project_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: project_folder + "/fonts/*.ttf",
	},
	watch: {
		html: project_folder + "/**/*.html",
		css: project_folder + "/scss/**/*.scss",
		js: project_folder + "/js/**/*.js",
		img: project_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
	}
	clean: "./" + project_folder + "/"
}

let {src,dest} = require('gulp'),
	gulp = require('gulp')