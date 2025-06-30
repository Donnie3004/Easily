import ApplicantModel from "../models/applicantModel.js";
import JobModel from "../models/jobsModel.js";

export default class ApplicantController {
  registerForJob(req, res){
    const {id} = req.params;
    const {name, email, contact} = req.body;

    const resume = `http://localhost:8000/resumes/${req.file.filename}`;


    const applicant_obj = {
      name:name,
      email:email,
      contact:contact,
      resume:resume,
      jobID:Number(id)
    }


    const applicant_created = ApplicantModel.newApplicant(applicant_obj);
    console.log(applicant_created);
    if(applicant_created){
      const applicant_increase = JobModel.increaseApplicant(id, applicant_obj);
      console.log(applicant_increase);
      if(applicant_increase){
        res.redirect('/');
      }
    }
  }

  getApplicantPage(req, res){
    const {id} = req.params;
    if(req.user){
      const allApplicants = [ApplicantModel.allApplicantList(Number(id))];
      res.render('all-applicants', {allApplicants:allApplicants});
    }else{
      res.render('404');
    }
  }

}