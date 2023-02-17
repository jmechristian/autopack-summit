// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModuleType = {
  "LESSON": "LESSON",
  "LOTM": "LOTM",
  "MICROLESSON": "MICROLESSON"
};

const { Lesson, APS, User, Company, APSSpeaker, APSUser, APSSponsor, LessonSource, RegistrationCode } = initSchema(schema);

export {
  Lesson,
  APS,
  User,
  Company,
  APSSpeaker,
  APSUser,
  APSSponsor,
  ModuleType,
  LessonSource,
  RegistrationCode
};