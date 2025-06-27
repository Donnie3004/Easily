export default class JobModel{
  constructor(_id, _jobCategory, _jobDesignation, _jobLocation, _companyName, _salary, _applyBy, _skillsRequired, _noo, _jobPosted, _applicants, _employees, _experience){
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

}


const JOBS = [
  new JobModel(1,"technical", "Senior frontend developer", "Gurgaon", "Google", 20, "19/5/2025", ["REACT", "Node js"], 5, "1/1/2025", 0, 190000, "0-2 years"),
  new JobModel(2,"technical", "Senior backend developer", "bangalore", "Amazon", 20, "19/5/2025", ["REACT", "Node js"], 10, "1/1/2025", 0, 200000, "4-5 years"),
]


