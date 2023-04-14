// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModuleType = {
  "LESSON": "LESSON",
  "LOTM": "LOTM",
  "MICROLESSON": "MICROLESSON"
};

const CategoryType = {
  "MATERIALS": "MATERIALS",
  "INDUSTRY": "INDUSTRY",
  "FOODANDBEVERAGE": "FOODANDBEVERAGE",
  "BUSINESS": "BUSINESS",
  "SUPPLYCHAIN": "SUPPLYCHAIN",
  "DESIGN": "DESIGN"
};

const { LessonSource, LessonLink, Tags, Certificate, Course, Article, Lesson, Blog, DayInLifeItem, Career, APS, User, Company, APSSpeaker, CertificateCourses, ArticleRelatedCourses, APSUser, APSSponsor, RegistrationCode } = initSchema(schema);

export {
  LessonSource,
  LessonLink,
  Tags,
  Certificate,
  Course,
  Article,
  Lesson,
  Blog,
  DayInLifeItem,
  Career,
  APS,
  User,
  Company,
  APSSpeaker,
  CertificateCourses,
  ArticleRelatedCourses,
  APSUser,
  APSSponsor,
  ModuleType,
  CategoryType,
  RegistrationCode
};