const hotelSearch = {
    "sort_filters": {
        "top-deals": "Top Deals",
        "price-desc": "Price (high-low)",
        "price-asc": "Price (low-high)",
        "name-asc": "Name (A-Z)"
    },
    "query": {
        "location": "Sydney"
    },
    "hotels": [
        {
        "id": "cxd650nuyo",
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4",
        "rating_type": "self",
        "promotion": "Exclusive Deal",
        "rooms": [{
                "name": "Deluxe Balcony Room",
                "price": "$329",
                "currency": "AUD",
                "savings": "$30~",
                "points_earned": "0",
                "free_cancellation": "true"
            }]
        }, {
        "id": "mesq6mggyn",
        "title": "Primus Hotel Sydney",
        "address": "339 Pitt St, Sydney",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "5",
        "rating_type": "self",
        "promotion": "Exclusive Deal",
        "rooms": [{
                "name": "Deluxe King",
                "price": "$375",
                "currency": "AUD",
                "savings": "$28",
                "points_earned": "2250",
                "free_cancellation": "true"
            }]
        }, {
        "id": "xbtlihs45t",
        "title": "Rydges World Square Sydney",
        "address": "389 Pitt Street, Sydney",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4.5",
        "rating_type": "star",
        "promotion": "Red Hot",
        "rooms": [{
                "name": "Deluxe King Room",
                "price": "$227",
                "currency": "AUD",
                "savings": "0",
                "points_earned": "831",
                "free_cancellation": "false"
            }]
        }, {
        "id": "5lm8loqk1s",
        "title": "PARKROYAL Darling Harbour Sydney",
        "address": "150 Day Street, Sydney",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4.5",
        "rating_type": "star",
        "promotion": "Red Hot",
        "rooms": [{
                "name": "Darling Harbour Club Room",
                "price": "$535",
                "currency": "AUD",
                "savings": "0",
                "points_earned": "0",
                "free_cancellation": "true"
            }]
        }, {
        "id": "kwjf8jlxg9",
        "title": "Metro Hotel Marlow Sydney Central",
        "address": "431-439 Pitt Street, Sydney",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "3.5",
        "rating_type": "star",
        "promotion": "Bonus Points",
        "rooms": [{
                "name": "Delue Triple",
                "price": "$295",
                "currency": "AUD",
                "savings": "0",
                "points_earned": "1770",
                "free_cancellation": "true"
            }]
        }
    ]
};

const hotelSearchStore = {
    "sort_filters": {
        "top-deals": "Top Deals",
        "price-desc": "Price (high-low)",
        "price-asc": "Price (low-high)",
        "name-asc": "Name (A-Z)"
    },
    "query": {
        "location": "Sydney"
    },
    hotelsIds: ["cxd650nuyo", "mesq6mggyn", "xbtlihs45t", "5lm8loqk1s", "kwjf8jlxg9",],
    "hotelsById": {
        "cxd650nuyo": {
            "id": "cxd650nuyo",
            "title": "Courtyard by Marriott Sydney-North Ryde",
            "address": "7-11 Talavera Rd, North Ryde",
            "image": "https://unsplash.it/145/125/?random",
            "rating": "4",
            "rating_type": "self",
            "promotion": "Exclusive Deal",
            "room": {
                    qtyNights: 1,
                    "name": "Deluxe Balcony Room",
                    "price": "$329",
                    "currency": "AUD",
                    "savings": "$30~",
                    "pointsEarned": "0",
                    "freeCancellation": "true"
                }
        }, 
        "mesq6mggyn": {
            "id": "mesq6mggyn",
            "title": "Primus Hotel Sydney",
            "address": "339 Pitt St, Sydney",
            "image": "https://unsplash.it/145/125/?random",
            "rating": "5",
            "rating_type": "self",
            "promotion": "Exclusive Deal",
            "room": {
                    qtyNights: 1,
                    "name": "Deluxe King",
                    "price": "$375",
                    "currency": "AUD",
                    "savings": "$28",
                    "pointsEarned": "2250",
                    "freeCancellation": "true"
                }
        }, 
        "xbtlihs45t": {
            "id": "xbtlihs45t",
            "title": "Rydges World Square Sydney",
            "address": "389 Pitt Street, Sydney",
            "image": "https://unsplash.it/145/125/?random",
            "rating": "4.5",
            "rating_type": "star",
            "promotion": "Red Hot",
            "room": {
                    qtyNights: 1,
                    "name": "Deluxe King Room",
                    "price": "$227",
                    "currency": "AUD",
                    "savings": "0",
                    "pointsEarned": "831",
                    "freeCancellation": "false"
                }
        }, 
        "5lm8loqk1s": {
            "id": "5lm8loqk1s",
            "title": "PARKROYAL Darling Harbour Sydney",
            "address": "150 Day Street, Sydney",
            "image": "https://unsplash.it/145/125/?random",
            "rating": "4.5",
            "rating_type": "star",
            "promotion": "Red Hot",
            "room": {
                    qtyNights: 1,
                    "name": "Darling Harbour Club Room",
                    "price": "$535",
                    "currency": "AUD",
                    "savings": "0",
                    "pointsEarned": "0",
                    "freeCancellation": "true"
                }
        }, 
        "kwjf8jlxg9": {
            "id": "kwjf8jlxg9",
            "title": "Metro Hotel Marlow Sydney Central",
            "address": "431-439 Pitt Street, Sydney",
            "image": "https://unsplash.it/145/125/?random",
            "rating": "3.5",
            "rating_type": "star",
            "promotion": "Bonus Points",
            "room": {
                    qtyNights: 1,
                    "name": "Delue Triple",
                    "price": "$295",
                    "currency": "AUD",
                    "savings": "0",
                    "pointsEarned": "1770",
                    "freeCancellation": "true"
                }
        }
    },
};

module.exports = Object.freeze({
    hotelSearch,
    hotelSearchStore,
    hotelIdsByPrice: ["xbtlihs45t","kwjf8jlxg9","cxd650nuyo","mesq6mggyn","5lm8loqk1s"]
});
