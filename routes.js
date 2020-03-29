module.exports = function (app) {
    const fetch = require('node-fetch');
    // Create a home route
    app.get('/', function (req, res) {
        res.render('overview')
    })
    app.get('/about', function (req, res) {
        res.render('about')
    })
    app.get('/offline', function (req, res) {
        res.render('offline')
    })

    app.get('/:cato', function (req, res) {

        let cat = req.params.cato;
        console.log("catogorie is " + cat);

        fetch('https://swapi.co/api/' + req.params.cato)
            .then(res => {
                return res.json()
            })

            .then((items) => {
                const itemsWithId = items.results.map(item => {
                    const id = item.url.split(req.params.cato + '/')[1]
                    return {
                        id: id,
                        ...item
                    }
                })
                res.render(req.params.cato, {
                    Data: itemsWithId,
                });
            })
    });

    app.get('/:cato/:id', function (req, res) {
        let cat = req.params.cato;
        let id = req.params.id;
        console.log("Je bekijkt " + id + " uit de catogorie " + cat);
        fetch("https://swapi.co/api/" + req.params.cato + "/" + req.params.id)
            .then(res => {
                return res.json()
            })

            .then((json) => {
                res.render('details', {
                    details: json,
                    link: req.params.cato,
                });
            })
    });

}