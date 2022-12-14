// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModuleType = {
  "LESSON": "LESSON",
  "LOTM": "LOTM",
  "MICROLESSON": "MICROLESSON"
};

const { Lesson, APS, User, Company, RegistrationCode, LessonSource } = initSchema(schema);

export {
  Lesson,
  APS,
  User,
  Company,
  ModuleType,
  RegistrationCode,
  LessonSource
};