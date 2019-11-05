module.exports = {
    init: async (req, res) => {
        res.io.emit("Hello", "Hello World")
        res.json('Hello World')
    }
}
