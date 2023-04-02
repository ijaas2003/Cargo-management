var easyinvoice = require('easyinvoice');
const fs = require('fs')
const express = require('express')
const router = express.Router()
data = {};
var data = {
    "customize": {
    },
    "images": {
        "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
        "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
    }, 
    "sender": {
        "company": "CargoFlash",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Rajapalayam",
        "country": "India"
    },
    "client": {
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": ""
    },
    "information": {
        
        "number": "2021.0001",
        "date": "12-12-2021",
        "due-date": "31-12-2021"
    },
    "products": [
        {
            "quantity": 2,
            "description": "Railway",
            "tax-rate": 6,
            "price": 100
        },
        {
            "quantity": 4.1,
            "description": "Product 2",
            "tax-rate": 6,
            "price": 100
        },
        {
            "quantity": 4.5678,
            "description": "Product 3",
            "tax-rate": 21,
            "price": 6324.453456
        }
    ],
    "bottom-notice": "Kindly pay your invoice within 15 days.",
    "settings": {
        "currency": "USD",
    },
    "translate": {
    },
};
easyinvoice.createInvoice(data, async function (result) {
    //The response will contain a base64 encoded PDF file
    await fs.writeFileSync('receip.pdf',result.pdf,'base64')
});