import { validationResult } from "express-validator";
import { Challenge } from "../models/challenge.model.js";
import { Founder } from "../models/founder.model.js";
import { Company } from "../models/company.model.js";
import { People } from "../models/people.model.js";
import { uploadOnCloudinary } from "../middlewares/multer.middleware.js";

export const createChallenge = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ error: errors.array() });
  }

  const { title, initialFundingOffered, description, deadline, status } =
    req.body;

  const image = req.file;
  if (!image) return res.status(401).json({ message: "image is required" });

  try {
    const response = await uploadOnCloudinary(image);

    if (!response)
      return res.status(500).json({ message: "internal server error" });

    const challenge = await Challenge.insertOne({
      image: response.url,
      title,
      initialFundingOffered,
      description,
      deadline,
      status,
    });

    if (!challenge)
      return res.status(500).json({ message: "internal server error" });

    return res.status(200).json({ challenge });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const addFounder = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ error: errors.array() });
  }

  const { name, description, role, linkedin } = req.body;

  const image = req.file;
  if (!image) return res.status(401).json({ message: "image is required" });

  try {
    const response = await uploadOnCloudinary(image);

    if (!response)
      return res.status(500).json({ message: "internal server error" });

    const founder = await Founder.insertOne({
      image: response.url,
      name,
      description,
      role,
      linkedin,
    });

    if (!founder)
      return res.status(500).json({ message: "internal server error" });

    return res.status(200).json({ founder });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const addCompany = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ error: errors.array() });
  }

  const { name, description } = req.body;

  const image = req.file;
  if (!image) return res.status(401).json({ message: "image is required" });

  try {
    const response = await uploadOnCloudinary(image);

    if (!response)
      return res.status(500).json({ message: "internal server error" });

    const company = await Company.insertOne({
      logo: response.url,
      name,
      description,
    });

    if (!company)
      return res.status(500).json({ message: "internal server error" });

    return res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const addPerson = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ error: errors.array() });
  }

  const {
    name,
    initialFundingOffered,
    description,
    linkedin,
    company,
    role,
  } = req.body;

  const image = req.file;
  if (!image) return res.status(401).json({ message: "image is required" });

  try {
    const response = await uploadOnCloudinary(image);

    if (!response)
      return res.status(500).json({ message: "internal server error" });

    const person = await People.insertOne({
      image: response.url,
      name,
      initialFundingOffered,
      description,
      linkedin,
      company,
      role,
    });

    if (!person)
      return res.status(500).json({ message: "internal server error" });

    return res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const getCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find({});
    return res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const getPersons = async (req, res, next) => {
  try {
    const persons = await People.find({}).populate("company");
    return res.status(200).json({ persons });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const getChallenges = async (req, res, next) => {
  try {
    const {status} = req.query;
    // console.log(status)
    if(status) {
      const challenges = await Challenge.find({}).where({status: status});
      return res.status(200).json({ challenges });
    }
    const challenges = await Challenge.find({});
    return res.status(200).json({ challenges });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const getFounders = async (req, res, next) => {
  try {
    const founders = await Founder.find({});
    return res.status(200).json({ founders });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};

export const updateChallengeStatus = async (req, res, next) => {
  const {status} = req.body
  const {id} = req.params
  try {
    const challenge = await Challenge.findByIdAndUpdate(id, {status}, {new: true});
    return res.status(200).json({ challenge });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    throw new Error(error);
  }
};
