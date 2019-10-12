/* Uses the site-format to generate the index for the site */

// Imports
const fs = require('fs')
const showdown = require('showdown')

// Setup converter
let converter = new showdown.Converter()

// Load files
let header = './markdown/header.md'
let footer = './markdown/footer.md'
let header_content = fs.readFileSync( header, 'utf8' )
let footer_content = fs.readFileSync( header, 'utf8' )

// Generate html
let header_html = converter.makeHtml(header_content)
let footer_html = converter.makeHtml(footer_content)

let 