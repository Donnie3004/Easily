import JobModel from "../models/jobsModel.js";


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
}