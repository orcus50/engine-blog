/* Generates the blog files from md files */

// Imports
const fs = require('fs')
const showdown = require('showdown')

// Setup converter
let converter = new showdown.Converter()

// Loads in the blog files
const target_dir_path = './markdown/'
const output_dir_path = './HTML/posts/'
let blog_names = fs.readdirSync( target_dir_path )


// Process each one
blog_names.forEach ( name => {
    
    // Get the file as html
    let file_path = target_dir_path + name
    let file_content = fs.readFileSync( file_path, 'utf8' )
    let html_output = converter.makeHtml(file_content)

    // Export it
    let output_path = output_dir_path + name.split('.')[0] + '.html'
    fs.writeFileSync( output_path, html_output )

})
