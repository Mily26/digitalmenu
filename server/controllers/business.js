class BusinessController {
    getData(req, res) {
        const result = {
            title: 'FrontEnd Bar',
            adress: 'Avenida Sarmiento 1254',
            city: 'Santiago Temple',
            state: 'Córdoba',
            country: 'Argentina',
            mail: 'fontendbar@gmail.com',
            phone: '03574-15423222'
        };

        res.json(result);
    }
}

module.exports = BusinessController;