import multer from "multer";
import path from "path";

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    throw new Error("El archivo no es una imagen");
  }
};

function crearImageMiddleware(config) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.dest);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${req.body.dni} - ${req.body.apellido} ${
          req.body.nombre
        }${path.extname(file.originalname)}`
      );
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  }).single(config.fieldName);

  return function (req, res, next) {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res
          .status(400)
          .send(new Error("Error subiendo imagen", err.message));
      }

      req.body.foto = {
        fileName: req.file.filename,
        filePath: `${req.file.destination}/${req.file.filename}`,
        root: req.file.destination,
      };
      next();
    });
  };
}

export { crearImageMiddleware };
