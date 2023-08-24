/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonSource = /* GraphQL */ `
  subscription OnCreateLessonSource {
    onCreateLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      lessonSourcesId
    }
  }
`;
export const onUpdateLessonSource = /* GraphQL */ `
  subscription OnUpdateLessonSource {
    onUpdateLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      lessonSourcesId
    }
  }
`;
export const onDeleteLessonSource = /* GraphQL */ `
  subscription OnDeleteLessonSource {
    onDeleteLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      lessonSourcesId
    }
  }
`;
export const onCreateLessonLink = /* GraphQL */ `
  subscription OnCreateLessonLink {
    onCreateLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const onUpdateLessonLink = /* GraphQL */ `
  subscription OnUpdateLessonLink {
    onUpdateLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const onDeleteLessonLink = /* GraphQL */ `
  subscription OnDeleteLessonLink {
    onDeleteLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
      id
      tag
      createdAt
      updatedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
      id
      tag
      createdAt
      updatedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
      id
      tag
      createdAt
      updatedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          lessonSourcesId
        }
        nextToken
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          lessonLinksId
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      lessonAuthorId
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          lessonSourcesId
        }
        nextToken
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          lessonLinksId
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      lessonAuthorId
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          lessonSourcesId
        }
        nextToken
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          lessonLinksId
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      lessonAuthorId
    }
  }
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            createdAt
            updatedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDayInLifeItem = /* GraphQL */ `
  subscription OnCreateDayInLifeItem {
    onCreateDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      careerDayInLifeId
    }
  }
`;
export const onUpdateDayInLifeItem = /* GraphQL */ `
  subscription OnUpdateDayInLifeItem {
    onUpdateDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      careerDayInLifeId
    }
  }
`;
export const onDeleteDayInLifeItem = /* GraphQL */ `
  subscription OnDeleteDayInLifeItem {
    onDeleteDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      careerDayInLifeId
    }
  }
`;
export const onCreateCareer = /* GraphQL */ `
  subscription OnCreateCareer {
    onCreateCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          careerDayInLifeId
        }
        nextToken
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCareer = /* GraphQL */ `
  subscription OnUpdateCareer {
    onUpdateCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          careerDayInLifeId
        }
        nextToken
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCareer = /* GraphQL */ `
  subscription OnDeleteCareer {
    onDeleteCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          careerDayInLifeId
        }
        nextToken
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAPS = /* GraphQL */ `
  subscription OnCreateAPS {
    onCreateAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            year
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          aPSSpeakersId
        }
        nextToken
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPS = /* GraphQL */ `
  subscription OnUpdateAPS {
    onUpdateAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            year
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          aPSSpeakersId
        }
        nextToken
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPS = /* GraphQL */ `
  subscription OnDeleteAPS {
    onDeleteAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            year
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          aPSSpeakersId
        }
        nextToken
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          company {
            id
            name
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      title
      company
      email
      office
      bio
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        birthYear
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cMPMFormUserId
      }
      cpsFormID
      cpsForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        birthYear
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cpsGoals
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cPSFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      savedCourses
      savedLessons
      savedArticles
      source
      createdAt
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      title
      company
      email
      office
      bio
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        birthYear
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cMPMFormUserId
      }
      cpsFormID
      cpsForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        birthYear
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cpsGoals
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cPSFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      savedCourses
      savedLessons
      savedArticles
      source
      createdAt
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      title
      company
      email
      office
      bio
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            year
            createdAt
            updatedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        birthYear
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cMPMFormUserId
      }
      cpsFormID
      cpsForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        birthYear
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cpsGoals
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        createdOn
        updatedOn
        cPSFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      savedCourses
      savedLessons
      savedArticles
      source
      createdAt
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onCreateCMPMForm = /* GraphQL */ `
  subscription OnCreateCMPMForm {
    onCreateCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const onUpdateCMPMForm = /* GraphQL */ `
  subscription OnUpdateCMPMForm {
    onUpdateCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const onDeleteCMPMForm = /* GraphQL */ `
  subscription OnDeleteCMPMForm {
    onDeleteCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const onCreateCPSForm = /* GraphQL */ `
  subscription OnCreateCPSForm {
    onCreateCPSForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const onUpdateCPSForm = /* GraphQL */ `
  subscription OnUpdateCPSForm {
    onUpdateCPSForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const onDeleteCPSForm = /* GraphQL */ `
  subscription OnDeleteCPSForm {
    onDeleteCPSForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const onCreateAppStart = /* GraphQL */ `
  subscription OnCreateAppStart {
    onCreateAppStart {
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      id
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateAppStart = /* GraphQL */ `
  subscription OnUpdateAppStart {
    onUpdateAppStart {
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      id
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteAppStart = /* GraphQL */ `
  subscription OnDeleteAppStart {
    onDeleteAppStart {
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      id
      createdOn
      updatedOn
    }
  }
`;
export const onCreateAPSSpeaker = /* GraphQL */ `
  subscription OnCreateAPSSpeaker {
    onCreateAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      aPSSpeakersId
    }
  }
`;
export const onUpdateAPSSpeaker = /* GraphQL */ `
  subscription OnUpdateAPSSpeaker {
    onUpdateAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      aPSSpeakersId
    }
  }
`;
export const onDeleteAPSSpeaker = /* GraphQL */ `
  subscription OnDeleteAPSSpeaker {
    onDeleteAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      aPSSpeakersId
    }
  }
`;
export const onCreateAPSTicket = /* GraphQL */ `
  subscription OnCreateAPSTicket {
    onCreateAPSTicket {
      name
      email
      company
      title
      phone
      paymentConfirmation
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPSTicket = /* GraphQL */ `
  subscription OnUpdateAPSTicket {
    onUpdateAPSTicket {
      name
      email
      company
      title
      phone
      paymentConfirmation
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPSTicket = /* GraphQL */ `
  subscription OnDeleteAPSTicket {
    onDeleteAPSTicket {
      name
      email
      company
      title
      phone
      paymentConfirmation
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTourist = /* GraphQL */ `
  subscription OnCreateTourist {
    onCreateTourist {
      id
      fullName
      email
      phone
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTourist = /* GraphQL */ `
  subscription OnUpdateTourist {
    onUpdateTourist {
      id
      fullName
      email
      phone
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTourist = /* GraphQL */ `
  subscription OnDeleteTourist {
    onDeleteTourist {
      id
      fullName
      email
      phone
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLMSCirriculum = /* GraphQL */ `
  subscription OnCreateLMSCirriculum {
    onCreateLMSCirriculum {
      id
      shorthand
      title
      slug
      description
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLMSCirriculum = /* GraphQL */ `
  subscription OnUpdateLMSCirriculum {
    onUpdateLMSCirriculum {
      id
      shorthand
      title
      slug
      description
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLMSCirriculum = /* GraphQL */ `
  subscription OnDeleteLMSCirriculum {
    onDeleteLMSCirriculum {
      id
      shorthand
      title
      slug
      description
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLMSCourse = /* GraphQL */ `
  subscription OnCreateLMSCourse {
    onCreateLMSCourse {
      id
      courseId
      category
      type
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const onUpdateLMSCourse = /* GraphQL */ `
  subscription OnUpdateLMSCourse {
    onUpdateLMSCourse {
      id
      courseId
      category
      type
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const onDeleteLMSCourse = /* GraphQL */ `
  subscription OnDeleteLMSCourse {
    onDeleteLMSCourse {
      id
      courseId
      category
      type
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            shorthand
            title
            slug
            description
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const onCreateLMSCollection = /* GraphQL */ `
  subscription OnCreateLMSCollection {
    onCreateLMSCollection {
      id
      description
      title
      subtitle
      instructor
      instructorImage
      instructorDescription
      instructorLink
      courses
      hours
      price
      slug
      category
      collectionId
      lmsLink
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLMSCollection = /* GraphQL */ `
  subscription OnUpdateLMSCollection {
    onUpdateLMSCollection {
      id
      description
      title
      subtitle
      instructor
      instructorImage
      instructorDescription
      instructorLink
      courses
      hours
      price
      slug
      category
      collectionId
      lmsLink
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLMSCollection = /* GraphQL */ `
  subscription OnDeleteLMSCollection {
    onDeleteLMSCollection {
      id
      description
      title
      subtitle
      instructor
      instructorImage
      instructorDescription
      instructorLink
      courses
      hours
      price
      slug
      category
      collectionId
      lmsLink
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLMSLesson = /* GraphQL */ `
  subscription OnCreateLMSLesson {
    onCreateLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          lMSLessonObjectivesId
        }
        nextToken
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSLessonSlidesId
        }
        nextToken
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            lessonVideoTimestampsId
          }
          nextToken
        }
        lessonId
        lesson {
          id
          title
          Course {
            nextToken
          }
          subheadline
          objectives {
            nextToken
          }
          mediaType
          slides {
            nextToken
          }
          video {
            id
            lessonId
            createdAt
            updatedAt
          }
          percentComplete
          createdAt
          updatedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
      }
      percentComplete
      createdAt
      updatedAt
      lMSLessonVideoId
    }
  }
`;
export const onUpdateLMSLesson = /* GraphQL */ `
  subscription OnUpdateLMSLesson {
    onUpdateLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          lMSLessonObjectivesId
        }
        nextToken
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSLessonSlidesId
        }
        nextToken
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            lessonVideoTimestampsId
          }
          nextToken
        }
        lessonId
        lesson {
          id
          title
          Course {
            nextToken
          }
          subheadline
          objectives {
            nextToken
          }
          mediaType
          slides {
            nextToken
          }
          video {
            id
            lessonId
            createdAt
            updatedAt
          }
          percentComplete
          createdAt
          updatedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
      }
      percentComplete
      createdAt
      updatedAt
      lMSLessonVideoId
    }
  }
`;
export const onDeleteLMSLesson = /* GraphQL */ `
  subscription OnDeleteLMSLesson {
    onDeleteLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          lMSLessonObjectivesId
        }
        nextToken
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSLessonSlidesId
        }
        nextToken
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            lessonVideoTimestampsId
          }
          nextToken
        }
        lessonId
        lesson {
          id
          title
          Course {
            nextToken
          }
          subheadline
          objectives {
            nextToken
          }
          mediaType
          slides {
            nextToken
          }
          video {
            id
            lessonId
            createdAt
            updatedAt
          }
          percentComplete
          createdAt
          updatedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
      }
      percentComplete
      createdAt
      updatedAt
      lMSLessonVideoId
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          category
          type
          Cirriculum {
            nextToken
          }
          Lessons {
            nextToken
          }
          Instructors {
            nextToken
          }
          price
          hours
          lessons
          videos
          preview
          seoImage
          infoSheet
          title
          subheadline
          what_learned
          objectives
          link
          trial_link
          percentComplete
          slug
          collection
          demo
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          category
          type
          Cirriculum {
            nextToken
          }
          Lessons {
            nextToken
          }
          Instructors {
            nextToken
          }
          price
          hours
          lessons
          videos
          preview
          seoImage
          infoSheet
          title
          subheadline
          what_learned
          objectives
          link
          trial_link
          percentComplete
          slug
          collection
          demo
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          category
          type
          Cirriculum {
            nextToken
          }
          Lessons {
            nextToken
          }
          Instructors {
            nextToken
          }
          price
          hours
          lessons
          videos
          preview
          seoImage
          infoSheet
          title
          subheadline
          what_learned
          objectives
          link
          trial_link
          percentComplete
          slug
          collection
          demo
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor {
    onUpdateInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor {
    onDeleteInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            type
            price
            hours
            lessons
            videos
            preview
            seoImage
            infoSheet
            title
            subheadline
            what_learned
            objectives
            link
            trial_link
            percentComplete
            slug
            collection
            demo
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateObjective = /* GraphQL */ `
  subscription OnCreateObjective {
    onCreateObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onUpdateObjective = /* GraphQL */ `
  subscription OnUpdateObjective {
    onUpdateObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onDeleteObjective = /* GraphQL */ `
  subscription OnDeleteObjective {
    onDeleteObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSLessonSlidesId
    }
  }
`;
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSLessonSlidesId
    }
  }
`;
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSLessonSlidesId
    }
  }
`;
export const onCreateLessonVideo = /* GraphQL */ `
  subscription OnCreateLessonVideo {
    onCreateLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          lessonVideoTimestampsId
        }
        nextToken
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLessonVideo = /* GraphQL */ `
  subscription OnUpdateLessonVideo {
    onUpdateLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          lessonVideoTimestampsId
        }
        nextToken
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLessonVideo = /* GraphQL */ `
  subscription OnDeleteLessonVideo {
    onDeleteLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          lessonVideoTimestampsId
        }
        nextToken
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimestamp = /* GraphQL */ `
  subscription OnCreateTimestamp {
    onCreateTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onUpdateTimestamp = /* GraphQL */ `
  subscription OnUpdateTimestamp {
    onUpdateTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onDeleteTimestamp = /* GraphQL */ `
  subscription OnDeleteTimestamp {
    onDeleteTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff {
    onCreateStaff {
      id
      fullName
      title
      image
      linkedIn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff {
    onUpdateStaff {
      id
      fullName
      title
      image
      linkedIn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff {
    onDeleteStaff {
      id
      fullName
      title
      image
      linkedIn
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCertificateCourses = /* GraphQL */ `
  subscription OnCreateCertificateCourses {
    onCreateCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCertificateCourses = /* GraphQL */ `
  subscription OnUpdateCertificateCourses {
    onUpdateCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCertificateCourses = /* GraphQL */ `
  subscription OnDeleteCertificateCourses {
    onDeleteCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArticleRelatedCourses = /* GraphQL */ `
  subscription OnCreateArticleRelatedCourses {
    onCreateArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticleRelatedCourses = /* GraphQL */ `
  subscription OnUpdateArticleRelatedCourses {
    onUpdateArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticleRelatedCourses = /* GraphQL */ `
  subscription OnDeleteArticleRelatedCourses {
    onDeleteArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        certificate {
          items {
            id
            certificateId
            courseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAPSUser = /* GraphQL */ `
  subscription OnCreateAPSUser {
    onCreateAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPSUser = /* GraphQL */ `
  subscription OnUpdateAPSUser {
    onUpdateAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPSUser = /* GraphQL */ `
  subscription OnDeleteAPSUser {
    onDeleteAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        bio
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          birthYear
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cMPMFormUserId
        }
        cpsFormID
        cpsForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          birthYear
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cpsGoals
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          createdOn
          updatedOn
          cPSFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            nextToken
          }
          createdAt
          updatedAt
        }
        savedCourses
        savedLessons
        savedArticles
        source
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAPSSponsor = /* GraphQL */ `
  subscription OnCreateAPSSponsor {
    onCreateAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPSSponsor = /* GraphQL */ `
  subscription OnUpdateAPSSponsor {
    onUpdateAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPSSponsor = /* GraphQL */ `
  subscription OnDeleteAPSSponsor {
    onDeleteAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            id
            createdAt
            updatedAt
            aPSSpeakersId
          }
          nextToken
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            bio
            cell
            picture
            linkedin
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            createdAt
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCirriculumCourses = /* GraphQL */ `
  subscription OnCreateCirriculumCourses {
    onCreateCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        shorthand
        title
        slug
        description
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCirriculumCourses = /* GraphQL */ `
  subscription OnUpdateCirriculumCourses {
    onUpdateCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        shorthand
        title
        slug
        description
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCirriculumCourses = /* GraphQL */ `
  subscription OnDeleteCirriculumCourses {
    onDeleteCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        shorthand
        title
        slug
        description
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseLessons = /* GraphQL */ `
  subscription OnCreateCourseLessons {
    onCreateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseLessons = /* GraphQL */ `
  subscription OnUpdateCourseLessons {
    onUpdateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseLessons = /* GraphQL */ `
  subscription OnDeleteCourseLessons {
    onDeleteCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            lMSLessonObjectivesId
          }
          nextToken
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSLessonSlidesId
          }
          nextToken
        }
        video {
          id
          timestamps {
            nextToken
          }
          lessonId
          lesson {
            id
            title
            subheadline
            mediaType
            percentComplete
            createdAt
            updatedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
        }
        percentComplete
        createdAt
        updatedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseInstructors = /* GraphQL */ `
  subscription OnCreateCourseInstructors {
    onCreateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseInstructors = /* GraphQL */ `
  subscription OnUpdateCourseInstructors {
    onUpdateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseInstructors = /* GraphQL */ `
  subscription OnDeleteCourseInstructors {
    onDeleteCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        type
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        price
        hours
        lessons
        videos
        preview
        seoImage
        infoSheet
        title
        subheadline
        what_learned
        objectives
        link
        trial_link
        percentComplete
        slug
        collection
        demo
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          bio
          cell
          picture
          linkedin
          companyID
          apss {
            nextToken
          }
          cmpmFormID
          cmpmForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            birthYear
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cMPMFormUserId
          }
          cpsFormID
          cpsForm {
            id
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            birthYear
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cpsGoals
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            createdOn
            updatedOn
            cPSFormUserId
          }
          instructorId {
            id
            userId
            createdAt
            updatedAt
          }
          studentId {
            id
            studentId
            createdAt
            updatedAt
          }
          savedCourses
          savedLessons
          savedArticles
          source
          createdAt
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
