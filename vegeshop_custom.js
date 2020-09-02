// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

/*
// Add delivery day selection for customer
ec.order.extraFields.delivery_date = {
    'available': false,
    'title': 'Preferred delivery day',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info',
}*/


// The field "how_did_you_find_us" asks user about how they found the store. Drop down type
ec.order.extraFields.auto_renew = {
    'available': true,
    'title': 'Auto-renew',
    'tip': 'Automatically renew my order and charge my saved card. The same delivery time and method will be used each time.',
    'type': 'select',
    'required': true,
    'selectOptions': ['Weekly', 'Fortnightly'],
    'checkoutDisplaySection': 'payment_details',
    'orderDetailsDisplaySection': 'payment_details',
};

/*
// Add pickup time selection for customer
ec.order.extraFields.ecwid_pickup_time = {
    'title': '_msg_ShippingDetails.pickup.customer_header',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'pickup_details',
    'orderDetailsDisplaySection': 'payment_details',
}*/


/*

// The field "how_did_you_find_us" asks user about how they found the store. Drop down type
ec.order.extraFields.how_did_you_find_us = {
    'title': 'How did you find us?',
    'type': 'select',
    'required': false,
    'selectOptions': ['Facebook', 'Friend', 'Other'],
    'value': 'Friend', // Default value
    'checkoutDisplaySection': 'payment_details'
};

// Add pickup time selection for customer
ec.order.extraFields.ecwid_pickup_time = {
    'title': '_msg_ShippingDetails.pickup.customer_header',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'pickup_details',
    'orderDetailsDisplaySection': 'payment_details',
}

Ecwid.refreshConfig(); */

/*
// Hidden field, which is not shown at checkout
ec.order.extraFields.my_custom_field = {
    'value': 'abcd12345'
};

Ecwid.refreshConfig(); */