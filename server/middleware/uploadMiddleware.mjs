import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedType = [
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    if (allowedType.includes(file.mimetype)) {
      cb(null, true);
    }
    else {
      cb(new Error("Invalid Image Type"),false);
    }
  },
});

export default upload;