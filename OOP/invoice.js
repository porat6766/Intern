


//<<<Single Responsibility Principle>>>//

class Invoice {
    constructor(name, address, phoneNumber, email, price) {
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.price = price;
    }

    getInvoiceDetails() {
        return {
            name: this.name,
            address: this.address,
            phoneNumber: this.phoneNumber,
            email: this.email,
            price: this.price
        };
    }
}


class EmailService {
    sendInvoice(invoice) {
        console.log(`Invoice for ${invoice.name} sent to ${invoice.email}`);
    }
}


const invoice1 = new Invoice("Goodo", "Some Street 123", 5215461, "svcbj@gmail.com", 200);


const emailService = new EmailService();


emailService.sendInvoice(invoice1.getInvoiceDetails());
