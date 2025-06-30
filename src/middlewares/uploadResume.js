import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

//storing in local storage.
const storageConfig = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, 'public/resumes');
  },
  filename : (req, file, cb)=>{
    let file_name = `${uuidv4()}_${file.originalname}`;
    cb(null, file_name);
  }
})

const uploadResume = multer({
  storage: storageConfig
});

export default uploadResume;