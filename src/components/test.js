const fs = window.require('fs')
const youtubedl = window.require('youtube-dl')

function downloadVideo(str, name){
const video = youtubedl(String(str),
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})

video.pipe(fs.createWriteStream('../../data/'+name+'.mp3'))
}

DownloadVideo('https://www.youtube.com/watch?v=pICL9lHrlPo', 'CanonRock');