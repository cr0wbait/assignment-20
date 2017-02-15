import $ from 'jquery'

console.log('wat')

$.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
    console.log(serverRes)
})
