const fs = require('fs')

const content = fs.readFileSync('app/data/stories.ts', 'utf8')

let result = ''
let inText = false
let currentText = ''

for (let i = 0; i < content.length; i++) {
  if (!inText && content.substring(i, i + 7) === 'text: \'') {
    inText = true
    result += 'text: \''
    i += 6 // skip the rest of "text: '"
    continue
  }

  if (inText) {
    if (content[i] === '\\' && content[i + 1] === '\'') {
      currentText += '\\\''
      i++ // skip the escaped quote
      continue
    }
    if (content[i] === '\'') {
      inText = false
      // replace newlines with space, and collapse multiple spaces
      currentText = currentText.replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' ')
      result += currentText + '\''
      currentText = ''
      continue
    }
    currentText += content[i]
  } else {
    result += content[i]
  }
}

if (result !== content) {
  fs.writeFileSync('app/data/stories.ts', result, 'utf8')
  console.log('Fixed stories.ts')
}

// node fix-stories.cjs
