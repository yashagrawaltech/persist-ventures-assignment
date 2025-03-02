import { Router } from "express";
import {
  createChallenge,
  getChallenges,
  addFounder,
  getFounders,
  getCompanies,
  addPerson,
  addCompany,
  getPersons,
  updateChallengeStatus
} from "../controllers/admin.controller.js";
import {
  newChallengeValidator,
  newFounderValidator,
  newPersonValidator,
  newCompanyValidator,
  challengeStatusChangeValidator
} from "../validators/admin.validator.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post(
  "/create-challenge",
  upload.single("image"),
  newChallengeValidator,
  createChallenge
);

router.post(
  "/change-challenge-status/:id",
  challengeStatusChangeValidator,
  updateChallengeStatus
);

router.post(
  "/add-founder",
  upload.single("image"),
  newFounderValidator,
  addFounder
);

router.post(
  "/add-person",
  upload.single("image"),
  newPersonValidator,
  addPerson
);

router.post(
  "/add-company",
  upload.single("image"),
  newCompanyValidator,
  addCompany
);

router.get("/get-challenges", getChallenges);
router.get("/get-founders", getFounders);
router.get("/get-companies", getCompanies);
router.get("/get-persons", getPersons);

export default router;
