import { Injectable } from '@angular/core';
import { ReportFormData, ReportDetails, ReportCars, ReportItems, ReportOfficers, ReportPerson, ReportWeapon, PersonAddress } from '../models/reportForm.model'

@Injectable()
export class ReportService {
    private reportFormData: ReportFormData = new ReportFormData();

    getFormData(): ReportFormData {
        return this.reportFormData;
    }

    getReportDetails(): ReportDetails {
        let reportInfo: ReportDetails = {
            reportTitle: this.reportFormData.reportTitle,
            incidentNum: this.reportFormData.incidentNum,
            occurranceLoc: this.reportFormData.occurranceLoc,
            occurranceStart: this.reportFormData.occurranceStart,
            occurranceEnd: this.reportFormData.occurranceEnd,
            reportSummary: this.reportFormData.reportSummary
        };
        return reportInfo;
    }

    setReportDetails(data: ReportDetails) {
        this.reportFormData.reportTitle = data.reportTitle;
        this.reportFormData.incidentNum = data.incidentNum;
        this.reportFormData.occurranceLoc = data.occurranceLoc;
        this.reportFormData.occurranceStart = data.occurranceStart;
        this.reportFormData.occurranceEnd = data.occurranceEnd;
        this.reportFormData.reportSummary = data.reportSummary;
    }

    getReportPeople(): ReportPerson[] {
        let reportPersonList = new Array();
        let p = new ReportPerson;
        let addressList = new Array();
        let a = new PersonAddress;

        if (this.reportFormData.people != null) {
            for (let per of this.reportFormData.people) {
                // p.id = per.id;
                // p.personRole = per.personRole;
                // p.idNumber = per.idNumber;
                // p.idState = per.idState;
                p.lastName = per.lastName;
                p.firstName = per.firstName;
                p.middleName = per.middleName;
                //p.gender = per.gender;
                //p.race = per.race;
                //p.hairColor = per.hairColor;
                //p.eyeColor = per.eyeColor;
                //p.height = per.height;
                //p.weight = per.weight;
                //p.dateOfBirth = per.dateOfBirth;
                //p.age = per.age;
                //p.clothing = per.clothing;
                //p.phoneNumber = per.phoneNumber;
                //p.email = per.email;
                //p.ssNumber = per.ssNumber;

                for (let add of per.addresses) {
                    a.addressType = add.addressType;
                    a.street = add.street;
                    //a.city = add.city;
                    //a.state = add.state;
                    //a.zipCode = add.zipCode;
                    addressList.push(a);
                }
                reportPersonList.push(p);
            }
        }
        else p = new ReportPerson();
        reportPersonList.push(p);

        return reportPersonList;
    }

    setReportPeople(data: ReportPerson[]) {
        this.reportFormData.people = data;
    }
}