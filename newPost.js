/* Run to insert new post onto the server */

if ( process.argv.length < 4 ) {
    console.log('format: node newPost.js <file name> <section name>')
    process.exit()
}

// Imports
const fs = require('fs')

// Setup info
let file = process.argv[2]
let section = process.argv[3]
let file_search_dir = './markdown/'
let format_file = './site-format.json'

// Make sure file exists
if ( ! fs.existsSync( file_search_dir + file + '.md') ){
    console.log('file not found')
    process.exit()
}

// Load in site-format and update
let site_format_raw = fs.readFileSync(format_file, 'utf8');
let site_format_json = JSON.parse(site_format_raw);

let date_str = new Date().toISOString().split('T')[0]
let insert_info = { date : date_str, link : file }

// Insert file info
if (! ( section in site_format_json ) )
    site_format_json[section] = [ insert_info ]
else 
    site_format_json[section].push( insert_info )

// Save

let raw_output = JSON.stringify(site_format_json, null, 2)
fs.writeFileSync(format_file, raw_output);


// Run generation
require('./generatePost.js')
require('./generateIndex.js')