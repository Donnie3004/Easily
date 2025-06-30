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
    res.render("job-details", {data : job});
  }


  postJobPage(req, res){
    res.render("new-job");
  }
  newJobData(req, res){
    let {job_category,job_designation,job_location,company_name,company_founded,employees,salary,number_of_openings,experience,skills_required,apply_by} = req.body;

    if(typeof skills_required === 'string'){
      skills_required = [skills_required];
    }

    const logo = `http://localhost:8000/logos/${req.file.filename}`;

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
      res.redirect('/jobs');
    }

  }


  updatePage(req, res){
    const {id} = req.params;
    const job = JobModel.getJobByID(id);
    res.render('update-job',{job:job}); 
  }
  updatePageSave(req, res){
    let {job_category,job_designation,job_location,company_name,company_founded,employees,salary,number_of_openings,experience,skills_required,apply_by} = req.body;

    const {id} = req.params;
   
    if(typeof skills_required === 'string'){
      skills_required = [skills_required];
    }

   const logo = `http://localhost:8000/logos/${req.file.filename}`;

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

    let job_updated = JobModel.EditJobById(job_obj, id);
    if(job_updated){
      const jobs = JobModel.sendAllJobs();
      res.render("list-all-jobs", {jobs:jobs});
    }else{
      res.render('404');
    }
    
  }


  deleteJobByID(req, res){
    const {id} = req.params;
    const isDeleted = JobModel.deleteJob(id);
    if(isDeleted){
      const jobs = JobModel.sendAllJobs();
      res.render('list-all-jobs', {jobs:jobs});
    }
  }

}

