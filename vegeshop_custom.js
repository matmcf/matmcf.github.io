// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};


// Add delivery day selection for customer
ec.order.extraFields.delivery_date = {
    'available': false,
    'title': 'Preferred delivery day',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info',
}

// The field "how_did_you_find_us" asks user about how they found the store. Drop down type
ec.order.extraFields.delivery_day = {
    'available': true,
    'title': 'Preferred delivery day',
    'tip': 'Orders must be placed by 9pm the previous day.'
    'type': 'select',
    'required': true,
    'selectOptions': ['Tuesday', 'Thursday', 'Saturday'],
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info',
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

// Hidden field, which is not shown at checkout
ec.order.extraFields.my_custom_field = {
    'value': 'abcd12345'
};

Ecwid.refreshConfig();