const {taskOne, taskTwo} = require('./tasks')

async function main() {
    try {
        console.time('Miendiendo el tiempo')
        const results = await Promise.all([taskOne(), taskTwo()])

        console.timeEnd('Miendiendo el tiempo')
    
        console.log('Task One returned', results[0])
        console.log('Task Two returned', results[1])
    } catch (e) {
        console.log(e)
    }

}

main()