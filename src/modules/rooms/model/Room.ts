import { v4 as uuidV4 } from 'uuid';

interface Address {
    logradouro: string;
    roomNumber: number;
    complemento?: string;
}

class Room {
    id: string;

    name: string;

    description: string;

    address: Address;

    created_at: Date;

    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Room };