console.log('Module imported')

async function start() {
  return Promise.resolve('Async module loaded')
}

start().then(console.log)
