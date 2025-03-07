
export class INotificationService {
    send(to, message, name) {
        throw new Error('Method not implemented');
    }
}

export class EmailService extends INotificationService {
    send(to, message, name) {
        console.log(`📧 EMAIL-${to}: ${message} and my name is ${name}`);
    }
}


export class SMSService extends INotificationService {
    send(to, message, name) {
        console.log(`📩  SMS -${to}: ${message} and my name is ${name}`);
    }
}


export class WhatsAppService extends INotificationService {
    send(to, message, name) {
        console.log(`💬 WhatsApp -${to}: ${message} and my name is ${name}`);
    }
}



export class User {
    constructor(public name) {
        this.name = name
    }
}

export class Nutification extends User {
    constructor(public typeService, name) {
        super(name)
        this.typeService = typeService
    }

    send(to, message) {
        this.typeService.send(to, message, this.name);
    }

}


export const user_1 = new Nutification(new EmailService(), "Porat")
user_1.send("haim", "whatsapppppp")


