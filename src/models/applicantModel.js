export default class ApplicantModel {
  constructor(_applicantID, _applicantName, _applicantEmail, _applicantContact, _applicantResumePath, _job_id) {
   this.id = _applicantID;
   this.name = _applicantName;
   this.email = _applicantEmail;
   this.contact = _applicantContact;
   this.resume = _applicantResumePath; 
   this.jobID = _job_id;
  }

  static newApplicant(obj){
    try {
      const new_applicant = new ApplicantModel(APPLICANTS.length + 1, obj.name, obj.email, obj.contact, obj.resume, obj.jobID);
      APPLICANTS.push(new_applicant);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static allApplicantList(_jodID){
    try {
      const result = APPLICANTS.find(obj => obj.jobID === _jodID);
      return result;
    } catch (error) {
      console.log(error);
      return false; 
    }
  }
}

var APPLICANTS = [];