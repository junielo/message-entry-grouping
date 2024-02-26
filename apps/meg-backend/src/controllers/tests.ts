
const TestMain = () => {
    const consoleTest = (req: any, res: any) => {
        res.send({ message: 'Welcome to meg-backend!' });
    }

    return {
        consoleTest
    }
}

module.exports = TestMain;