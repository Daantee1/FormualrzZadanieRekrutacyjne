export interface Customer {
    name: string;
    vatIdentificationNumber: string;
    lastName: string;
    address: string;
    created: Date;
    end?: Date
}