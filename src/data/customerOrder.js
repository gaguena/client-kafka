class Customer {
  constructor (buyer) {
    this.name = buyer.name;
    this.fiscalIdentifier = buyer.fiscalId;
    this.email = buyer.email;
    this.phoneNumber = buyer.phone;
  }
}

class DeliveryAddress {
  constructor (shippingAddress) {
    this.streetName = shippingAddress.street;
    this.streetNumber = shippingAddress.streetNumber;
    this.complement = shippingAddress.complement;
    this.districtName = shippingAddress.district;
    this.cityName = shippingAddress.city;
    this.postalCode = shippingAddress.zipCode;
    this.federatedUnit = shippingAddress.state;
  }
}

class Payment {
  constructor (payment) {
    this.type = payment.method;
    this.bankSlipBarcode = payment.bankSlipBarcode;
    this.pixQrcodeUrl = '';
    this.approvalDate = payment.approvalDate;
    this.bankSlipIdentifier = payment.bankslipIdentifier;
    this.bankSlipUrl = payment.bankSlipUrl;
    this.installmentsQuantity = payment.installments;
    this.method = payment.brand;
    this.pixKey = payment.pixKey;
  }
}

class Item {
  constructor (entry) {
    this.sequencialNumber = entry.externalEntryNumber;
    this.trackingCode = entry.status;
    this.trackingDateTime = entry.lastStatusUpdate;
    this.materialCode = entry.product;
    this.materialType = entry.productType;
    this.quantity = entry.quantity;
    this.promisedDeliveryDate = entry.expectedDeliveryDate;
    this.shippingSiteIdentifier = entry.expeditionCenter;
    this.stockAvailabilityIndicator = entry.stockAvailabilityIndicator;
    this.commercialDeliveryMode = entry.outgoingFlow;
    this.commercialDeliveryServiceLevel = '';
    this.deliveryShift = entry.deliveryShift;
    this.freightAmount = entry.deliveryCost;
    this.totalAmount = entry.totalPrice;
  }
}

module.exports = class CustomerOrder {
  constructor (data) {
    this.customer = new Customer(data.buyer);
    this.number = data.orderNumber;
    this.ecommerceNumber = data.externalOrderNumber;
    this.creationDateTime = data.creationDate;
    this.trackingCode = data.status;
    this.trackingDateTime = data.lastStatusUpdate;
    this.freightTotalAmount = data.deloveryCost;
    this.salesChannelName = data.channel;
    this.totalAmount = data.totalPrice;
    this.itemTotalQuantity = data.itemTotalQuantity;
    this.deliveryAddress = new DeliveryAddress(data.buyer.shippingAddress);
    this.payment = data.paymentTransactions.map(transaction => new Payment(transaction));
    this.item = data.entries.map(entry => new Item(entry));
  }
}
