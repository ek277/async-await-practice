const {taskOne, taskTwo} = require('./tasks')

async function main() {
    try {
        console.time('Miendiendo el tiempo')
        const valueOne = await taskOne()
        const valueTwo = await taskTwo()
        console.timeEnd('Miendiendo el tiempo')
    
        console.log('Task One returned', valueOne)
        console.log('Task Two returned', valueTwo)
    } catch (e) {
        console.log(e)
    }

}

main()