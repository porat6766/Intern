const { EmailService, SMSService, WhatsAppService, Nutification } = require("../../OOP/Nutification")

describe('Nutification Service Tests', () => {

    test('should send email notification', () => {
        const emailService = new EmailService();
        const user = new Nutification(emailService, "Porat");

        console.log = jest.fn(); // Mock console.log

        user.send("haim", "Hello via Email");

        expect(console.log).toHaveBeenCalledWith("📧 EMAIL-haim: Hello via Email and my name is Porat");
    });

    test('should send SMS notification', () => {
        const smsService = new SMSService();
        const user = new Nutification(smsService, "Porat");

        console.log = jest.fn();

        user.send("haim", "Hello via SMS");

        expect(console.log).toHaveBeenCalledWith("📩  SMS -haim: Hello via SMS and my name is Porat");
    });

    test('should send WhatsApp notification', () => {
        const whatsappService = new WhatsAppService();
        const user = new Nutification(whatsappService, "Porat");

        console.log = jest.fn();

        user.send("haim", "Hello via WhatsApp");

        expect(console.log).toHaveBeenCalledWith("💬 WhatsApp -haim: Hello via WhatsApp and my name is Porat");
    });

});
