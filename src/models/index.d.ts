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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonSource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly position: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonSourcesId?: string | null;
  constructor(init: ModelInit<LessonSource>);
  static copyOf(source: LessonSource, mutator: (draft: MutableModel<LessonSource>) => MutableModel<LessonSource> | void): LessonSource;
}

export declare class LessonLink {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonLink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonLinksId?: string | null;
  constructor(init: ModelInit<LessonLink>);
  static copyOf(source: LessonLink, mutator: (draft: MutableModel<LessonLink>) => MutableModel<LessonLink> | void): LessonLink;
}

export declare class Tags {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonTagsId?: string | null;
  constructor(init: ModelInit<Tags>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

export declare class Lesson {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subhead?: string | null;
  readonly type?: ModuleType | keyof typeof ModuleType | null;
  readonly media?: string | null;
  readonly seoImage?: string | null;
  readonly content?: string | null;
  readonly sources?: (LessonSource | null)[] | null;
  readonly links?: (LessonLink | null)[] | null;
  readonly tags?: (Tags | null)[] | null;
  readonly objectives?: (string | null)[] | null;
  readonly actionCTA?: string | null;
  readonly actionSubhead?: string | null;
  readonly actionLink?: string | null;
  readonly actionLinkTitle?: string | null;
  readonly actionExample?: string | null;
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
  readonly Speakers?: (APSSpeaker | null)[] | null;
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

export declare class APSSpeaker {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSSpeaker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly company: string;
  readonly title: string;
  readonly phone?: string | null;
  readonly linkedin?: string | null;
  readonly bio: string;
  readonly presentationTitle?: string | null;
  readonly presentationSummary?: string | null;
  readonly headshot: string;
  readonly mediaConsent?: boolean | null;
  readonly privacyConsent?: boolean | null;
  readonly apsHistory?: APS | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aPSSpeakersId?: string | null;
  constructor(init: ModelInit<APSSpeaker>);
  static copyOf(source: APSSpeaker, mutator: (draft: MutableModel<APSSpeaker>) => MutableModel<APSSpeaker> | void): APSSpeaker;
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