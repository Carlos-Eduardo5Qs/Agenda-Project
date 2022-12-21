exports.contactPost = (req, res) => {
    res.send(`O nome do cliente é: ${req.body.user}`);
};
