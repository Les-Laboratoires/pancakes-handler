const fs = require('fs').promises
const path = require('path')
module.exports = async function read(folder) {
  const files = await fs.readdir(folder, {
    withFileTypes: true
  })
  const filesProcessed = {
    type: 'folder',
    name: path.basename(folder),
    children: []
  }
  for (const file of files) {
    if (file.isDirectory()) {
      filesProcessed.children.push({
        type: "folder",
        name: file.name,
        path: path.join(__dirname, path.normalize(folder), file.name),
        children: [await read(path.join(folder, file.name))]
      })
    } else {
      filesProcessed.children.push({
        type: "file",
        path: path.join(__dirname, path.normalize(folder), file.name),
        name: file.name
      })
    }
  }
  return filesProcessed
}