export default class ApplicantModel {
  constructor(_applicantID, _applicantName, _applicantEmail, _applicantContact, _applicantResumePath) {
   this.id = _applicantID;
   this.name = _applicantName;
   this.email = _applicantEmail;
   this.contact = _applicantContact;
   this.resume = _applicantResumePath; 
  }
}

var APPLICANTS = [];