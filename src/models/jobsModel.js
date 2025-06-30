import { v4 as uuidv4 } from 'uuid';

export default class JobModel{
  constructor(_id, _jobCategory, _jobDesignation, _jobLocation, _companyName, _salary, _applyBy, _skillsRequired, _noo, _jobPosted, _applicants, _employees, _experience, _company_founded, _logo){
    this.id = _id;
    this.job_category = _jobCategory;
    this.job_designation = _jobDesignation;
    this.job_location = _jobLocation;
    this.company_name = _companyName;
    this.salary = _salary;
    this.applyBy = _applyBy;
    this.skills_required = _skillsRequired;
    this.noo = _noo;
    this.job_posted = _jobPosted;
    this.applicants = _applicants;
    this.employees = _employees;
    this.experience = _experience;
    this.company_founded = _company_founded;
    this.logo = _logo;
  }

  static sendAllJobs(){
    return JOBS;
  }

  static getJobByID(_id){
    try {
      const foundObject = JOBS.find(item => item.id === Number(_id));
      return foundObject;
    } catch (error) {
      console.error(error);
    }
  }

  static newJobPosting(obj){
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    const finalDate =  `${day}/${month}/${year}`;
    
    try {
      const new_job = new JobModel(JOBS.length + 1, obj.job_category, obj.job_designation, obj.job_location, obj.company_name, obj.salary, obj.applyBy, obj.skills_required, obj.number_of_openings, finalDate,0, obj.employees, obj.experience, obj.company_founded, obj.logo);
      JOBS.push(new_job);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } 
  }

  static EditJobById(obj, _id){
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    const finalDate =  `${day}/${month}/${year}`;
    JOBS = JOBS.filter(obj => obj.id !== Number(_id));
    
    try {
      const update_job = new JobModel(Number(_id), obj.job_category, obj.job_designation, obj.job_location, obj.company_name, obj.salary, obj.applyBy, obj.skills_required, obj.number_of_openings, finalDate,0, obj.employees, obj.experience, obj.company_founded, obj.logo);
      JOBS.push(update_job);
    } catch (error) {
      console.error(error);
      return false;
    }

    let isThere = false;
    for(let obj of JOBS){
      if(obj.id == Number(_id)){
        isThere = true;
        JOBS.sort((a, b) => a.id - b.id);
        break;
      }
    }
    return isThere;
  }

  static deleteJob(_id){
    try {
      JOBS = JOBS.filter(obj => obj.id !== Number(_id));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}
var JOBS = [
  new JobModel(1,"technical", "Senior frontend developer", "Gurgaon", "Google", 20, "19/5/2025", ["REACT", "Node js"], 5, "1/1/2025", 0, 190000, "0-2 years"),
  new JobModel(2,"technical", "Senior backend developer", "bangalore", "Amazon", 20, "19/5/2025", ["REACT", "Node js"], 10, "1/1/2025", 0, 200000, "4-5 years"),
]


