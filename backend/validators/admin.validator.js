import { body } from "express-validator";
import { parse, isDate } from "date-fns";

export const newChallengeValidator = [
  body("title").notEmpty().withMessage("title is required"),
  body("initialFundingOffered")
    .notEmpty()
    .withMessage("initialFundingOffered is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("deadline").custom((value) => {
    const parsedDate = parse(value, "yyyy-MM-dd", new Date());
    if (!isDate(parsedDate)) {
      throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
    }
    return true; // Indicates the value is valid
  }),
  body("status")
    .isIn(["active", "inactive"])
    .notEmpty()
    .withMessage("status is required"),
];

export const newPersonValidator = [
  body("name").notEmpty().withMessage("title is required"),
  body("initialFundingOffered")
    .notEmpty()
    .withMessage("initialFundingOffered is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("role").notEmpty().withMessage("role is required"),
  body("linkedin").notEmpty().withMessage("linkedin is required"),
  body("company").notEmpty().withMessage("company is required"),

];

export const newFounderValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("role").notEmpty().withMessage("role is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("linkedin").notEmpty().withMessage("linkedin is required"),
];

export const newCompanyValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("description").notEmpty().withMessage("description is required"),
];

export const challengeStatusChangeValidator = [
  body("status")
    .isIn(["active", "inactive"])
    .notEmpty()
    .withMessage("status is required"),
]
