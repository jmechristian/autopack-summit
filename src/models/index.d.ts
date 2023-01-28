import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

export enum ModuleType {
  LESSON = "LESSON",
  LOTM = "LOTM",
  MICROLESSON = "MICROLESSON"
}

export declare class RegistrationCode {
  readonly code?: string | null;
  constructor(init: ModelInit<RegistrationCode>);
}

export declare class LessonSource {
  readonly name?: string | null;
  readonly link?: string | null;
  constructor(init: ModelInit<LessonSource>);
}

export declare class Lesson {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type?: ModuleType | keyof typeof ModuleType | null;
  readonly media: string;
  readonly content?: string | null;
  readonly sources?: (LessonSource | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class APS {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Registrants?: (APSUser | null)[] | null;
  readonly Sponsors?: (APSSponsor | null)[] | null;
  readonly year: number;
  readonly codes?: (RegistrationCode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APS>);
  static copyOf(source: APS, mutator: (draft: MutableModel<APS>) => MutableModel<APS> | void): APS;
}

export declare class User {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly company?: string | null;
  readonly email?: string | null;
  readonly office?: string | null;
  readonly cell?: string | null;
  readonly companyID?: string | null;
  readonly apss?: (APSUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Company {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Employees?: (User | null)[] | null;
  readonly website?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly street_1?: string | null;
  readonly street_2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly apsID?: (APSSponsor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class APSUser {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aPSId?: string | null;
  readonly userId?: string | null;
  readonly aps: APS;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APSUser>);
  static copyOf(source: APSUser, mutator: (draft: MutableModel<APSUser>) => MutableModel<APSUser> | void): APSUser;
}

export declare class APSSponsor {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSSponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aPSId?: string | null;
  readonly companyId?: string | null;
  readonly aps: APS;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APSSponsor>);
  static copyOf(source: APSSponsor, mutator: (draft: MutableModel<APSSponsor>) => MutableModel<APSSponsor> | void): APSSponsor;
}