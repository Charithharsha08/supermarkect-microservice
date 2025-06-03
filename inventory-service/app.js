
// Import express from 'express';
const express = require('express');
const { Eureka } = require('eureka-js-client');

const port = 3000;
const app = express();

const router = express.Router();
router.get('/api/v1/inventory', (req, res) => {
    res.json({
        items: [
            { id: 1, name: 'Item 1', quantity: 100 },
            { id: 2, name: 'Item 2', quantity: 200 },
        ],
    })

})
app.use('/inventory-service', router);

app.listen(port, () => {
    console.log(`Inventory service is running on http://localhost:${port}`);
})

const client = new Eureka({
    // application instance information
    instance: {
        app: 'INVENTORY-SERVICE',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': port,
            '@enabled': 'true'
        },
        vipAddress: 'inventory-service',
        dataCenterInfo: {
            name: 'MyOwn',
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
        },
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.start((err) => {
    if (err) {
        console.log("Failed to eureka registration: " + err);
    }else {
        console.log("Eureka registration successful");
    }
});