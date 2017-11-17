export class ReportFormData {
    reportTitle: string ='ADW';
    incidentNum: number=1;
    occurranceLoc: string = '';
    occurranceStart: Date = new Date();
    occurranceEnd: Date = this.occurranceStart;
    reportSummary: string = '';
    people: ReportPerson[];
    weapons: [{}] ;
    cars: ReportCars[] =[];
    officers: ReportOfficers[];
    items: ReportItems[];
}

export class ReportDetails {
    reportTitle: string;
    incidentNum: number;
    occurranceLoc: string;
    occurranceStart: Date;
    occurranceEnd: Date;
    reportSummary: string;
}

export class ReportPerson {
    id: number;
    personRole: number;
    idNumber: string;
    idState: string = '';
    lastName: string ;
    firstName: string;
    middleName: string = '';
    gender: string = '';
    race: string = '';
    hairColor: string = '';
    eyeColor: string = '';
    height: number = 1;
    weight: number = 1;
    dateOfBirth: Date = new Date();
    age: number = 1;
    clothing: string = '';
    phoneNumber: number = 1;
    email: string = '';
    ssNumber: number = 1;
    addresses: PersonAddress[] = [];
}

export class PersonAddress {
    id: number;
    addressType: number = 0;
    street: string = '';
    city: string = '';
    state: string = '';
    zipCode: number = 90003;
}

export class ReportCars {
    id: number;
    year: number;
    make: string;
    model: string;
    color: string;
    licensePlate: string;
    type: string;
}

export class ReportWeapon {
    id: number;
    weaponType: string = '';
}

export class ReportOfficers {
    id: number;
    officerRole: number;
    officerId: number;

}

export class ReportItems {
    id: number;
    reportItemNum: number;
    quantity: number;
    article: string;
    serialNumber: string;
    brand: string;
    modelNum: string;
    description: string;
}