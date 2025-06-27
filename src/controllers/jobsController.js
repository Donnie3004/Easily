import JobModel from "../models/jobsModel.js";
import validator from 'validator';

export default class JobController {
  getAllJobs(req, res){
    const jobs = JobModel.sendAllJobs();
    res.render("list-all-jobs", {jobs:jobs});
  }

  getJobFullDetails(req, res){
    const {id} = req.params;
    const job = JobModel.getJobByID(id);
    console.log(job);
    res.render("job-details", {data : job, user:"Arbaz"});
  }

  postJobPage(req, res){
    res.render("new-job");
  }

  newJobData(req, res){
    const {job_category,job_designation,job_location,company_name,company_founded,employees,salary,number_of_openings,experience,skills_required,logo,apply_by} = req.body;

    let job_obj = {
      job_category :job_category,
      job_designation:job_designation,
      job_location:job_location,
      company_name:company_name,
      company_founded:company_founded,
      employees:employees,
      salary:salary,
      number_of_openings:number_of_openings,
      experience:experience,
      skills_required:skills_required,
      logo:logo,
      apply_by:apply_by
    }

    let job_created = JobModel.newJobPosting(job_obj);

    if(job_created){
      res.redirect('/');
    }

  }

}

