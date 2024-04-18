/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLessonSource = /* GraphQL */ `
  mutation CreateLessonSource(
    $input: CreateLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    createLessonSource(input: $input, condition: $condition) {
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
export const updateLessonSource = /* GraphQL */ `
  mutation UpdateLessonSource(
    $input: UpdateLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    updateLessonSource(input: $input, condition: $condition) {
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
export const deleteLessonSource = /* GraphQL */ `
  mutation DeleteLessonSource(
    $input: DeleteLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    deleteLessonSource(input: $input, condition: $condition) {
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
export const createLessonLink = /* GraphQL */ `
  mutation CreateLessonLink(
    $input: CreateLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    createLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const updateLessonLink = /* GraphQL */ `
  mutation UpdateLessonLink(
    $input: UpdateLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    updateLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const deleteLessonLink = /* GraphQL */ `
  mutation DeleteLessonLink(
    $input: DeleteLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    deleteLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
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
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
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
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      createdAt
      updatedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      createdAt
      updatedAt
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createDayInLifeItem = /* GraphQL */ `
  mutation CreateDayInLifeItem(
    $input: CreateDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    createDayInLifeItem(input: $input, condition: $condition) {
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
export const updateDayInLifeItem = /* GraphQL */ `
  mutation UpdateDayInLifeItem(
    $input: UpdateDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    updateDayInLifeItem(input: $input, condition: $condition) {
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
export const deleteDayInLifeItem = /* GraphQL */ `
  mutation DeleteDayInLifeItem(
    $input: DeleteDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    deleteDayInLifeItem(input: $input, condition: $condition) {
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
export const createCareer = /* GraphQL */ `
  mutation CreateCareer(
    $input: CreateCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    createCareer(input: $input, condition: $condition) {
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
export const updateCareer = /* GraphQL */ `
  mutation UpdateCareer(
    $input: UpdateCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    updateCareer(input: $input, condition: $condition) {
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
export const deleteCareer = /* GraphQL */ `
  mutation DeleteCareer(
    $input: DeleteCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    deleteCareer(input: $input, condition: $condition) {
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
export const createAPS = /* GraphQL */ `
  mutation CreateAPS(
    $input: CreateAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    createAPS(input: $input, condition: $condition) {
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
export const updateAPS = /* GraphQL */ `
  mutation UpdateAPS(
    $input: UpdateAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    updateAPS(input: $input, condition: $condition) {
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
export const deleteAPS = /* GraphQL */ `
  mutation DeleteAPS(
    $input: DeleteAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    deleteAPS(input: $input, condition: $condition) {
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
export const createAPSRegistrant = /* GraphQL */ `
  mutation CreateAPSRegistrant(
    $input: CreateAPSRegistrantInput!
    $condition: ModelAPSRegistrantConditionInput
  ) {
    createAPSRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      code
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      codeRequested
      codeSent
      registrationReceived
      welcomeEmailSent
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSRegistrant = /* GraphQL */ `
  mutation UpdateAPSRegistrant(
    $input: UpdateAPSRegistrantInput!
    $condition: ModelAPSRegistrantConditionInput
  ) {
    updateAPSRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      code
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      codeRequested
      codeSent
      registrationReceived
      welcomeEmailSent
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSRegistrant = /* GraphQL */ `
  mutation DeleteAPSRegistrant(
    $input: DeleteAPSRegistrantInput!
    $condition: ModelAPSRegistrantConditionInput
  ) {
    deleteAPSRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      code
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      codeRequested
      codeSent
      registrationReceived
      welcomeEmailSent
      createdAt
      updatedAt
    }
  }
`;
export const createAPSTicketRegistrant = /* GraphQL */ `
  mutation CreateAPSTicketRegistrant(
    $input: CreateAPSTicketRegistrantInput!
    $condition: ModelAPSTicketRegistrantConditionInput
  ) {
    createAPSTicketRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      registrationReceived
      welcomeEmailSent
      code
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSTicketRegistrant = /* GraphQL */ `
  mutation UpdateAPSTicketRegistrant(
    $input: UpdateAPSTicketRegistrantInput!
    $condition: ModelAPSTicketRegistrantConditionInput
  ) {
    updateAPSTicketRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      registrationReceived
      welcomeEmailSent
      code
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSTicketRegistrant = /* GraphQL */ `
  mutation DeleteAPSTicketRegistrant(
    $input: DeleteAPSTicketRegistrantInput!
    $condition: ModelAPSTicketRegistrantConditionInput
  ) {
    deleteAPSTicketRegistrant(input: $input, condition: $condition) {
      year
      id
      name
      email
      company
      title
      phone
      worksWith
      speedNetworking
      innovationWorkshop
      plantTour
      registrationReceived
      welcomeEmailSent
      code
      createdAt
      updatedAt
    }
  }
`;
export const createAPSSpeaker2024 = /* GraphQL */ `
  mutation CreateAPSSpeaker2024(
    $input: CreateAPSSpeaker2024Input!
    $condition: ModelAPSSpeaker2024ConditionInput
  ) {
    createAPSSpeaker2024(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateAPSSpeaker2024 = /* GraphQL */ `
  mutation UpdateAPSSpeaker2024(
    $input: UpdateAPSSpeaker2024Input!
    $condition: ModelAPSSpeaker2024ConditionInput
  ) {
    updateAPSSpeaker2024(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteAPSSpeaker2024 = /* GraphQL */ `
  mutation DeleteAPSSpeaker2024(
    $input: DeleteAPSSpeaker2024Input!
    $condition: ModelAPSSpeaker2024ConditionInput
  ) {
    deleteAPSSpeaker2024(input: $input, condition: $condition) {
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
    }
  }
`;
export const createAPSTicket = /* GraphQL */ `
  mutation CreateAPSTicket(
    $input: CreateAPSTicketInput!
    $condition: ModelAPSTicketConditionInput
  ) {
    createAPSTicket(input: $input, condition: $condition) {
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
export const updateAPSTicket = /* GraphQL */ `
  mutation UpdateAPSTicket(
    $input: UpdateAPSTicketInput!
    $condition: ModelAPSTicketConditionInput
  ) {
    updateAPSTicket(input: $input, condition: $condition) {
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
export const deleteAPSTicket = /* GraphQL */ `
  mutation DeleteAPSTicket(
    $input: DeleteAPSTicketInput!
    $condition: ModelAPSTicketConditionInput
  ) {
    deleteAPSTicket(input: $input, condition: $condition) {
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
export const createTourist = /* GraphQL */ `
  mutation CreateTourist(
    $input: CreateTouristInput!
    $condition: ModelTouristConditionInput
  ) {
    createTourist(input: $input, condition: $condition) {
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
export const updateTourist = /* GraphQL */ `
  mutation UpdateTourist(
    $input: UpdateTouristInput!
    $condition: ModelTouristConditionInput
  ) {
    updateTourist(input: $input, condition: $condition) {
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
export const deleteTourist = /* GraphQL */ `
  mutation DeleteTourist(
    $input: DeleteTouristInput!
    $condition: ModelTouristConditionInput
  ) {
    deleteTourist(input: $input, condition: $condition) {
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
export const createAddOnRegistrant = /* GraphQL */ `
  mutation CreateAddOnRegistrant(
    $input: CreateAddOnRegistrantInput!
    $condition: ModelAddOnRegistrantConditionInput
  ) {
    createAddOnRegistrant(input: $input, condition: $condition) {
      id
      fullName
      email
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const updateAddOnRegistrant = /* GraphQL */ `
  mutation UpdateAddOnRegistrant(
    $input: UpdateAddOnRegistrantInput!
    $condition: ModelAddOnRegistrantConditionInput
  ) {
    updateAddOnRegistrant(input: $input, condition: $condition) {
      id
      fullName
      email
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddOnRegistrant = /* GraphQL */ `
  mutation DeleteAddOnRegistrant(
    $input: DeleteAddOnRegistrantInput!
    $condition: ModelAddOnRegistrantConditionInput
  ) {
    deleteAddOnRegistrant(input: $input, condition: $condition) {
      id
      fullName
      email
      tour
      company
      createdAt
      updatedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
            status
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
            status
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
            status
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
            status
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
            status
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
            status
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
export const createAPSSpeaker = /* GraphQL */ `
  mutation CreateAPSSpeaker(
    $input: CreateAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    createAPSSpeaker(input: $input, condition: $condition) {
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
export const updateAPSSpeaker = /* GraphQL */ `
  mutation UpdateAPSSpeaker(
    $input: UpdateAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    updateAPSSpeaker(input: $input, condition: $condition) {
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
export const deleteAPSSpeaker = /* GraphQL */ `
  mutation DeleteAPSSpeaker(
    $input: DeleteAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    deleteAPSSpeaker(input: $input, condition: $condition) {
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
export const createMorrisetteForm = /* GraphQL */ `
  mutation CreateMorrisetteForm(
    $input: CreateMorrisetteFormInput!
    $condition: ModelMorrisetteFormConditionInput
  ) {
    createMorrisetteForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      preference
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateMorrisetteForm = /* GraphQL */ `
  mutation UpdateMorrisetteForm(
    $input: UpdateMorrisetteFormInput!
    $condition: ModelMorrisetteFormConditionInput
  ) {
    updateMorrisetteForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      preference
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteMorrisetteForm = /* GraphQL */ `
  mutation DeleteMorrisetteForm(
    $input: DeleteMorrisetteFormInput!
    $condition: ModelMorrisetteFormConditionInput
  ) {
    deleteMorrisetteForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      preference
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
            status
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
            status
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
        status
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
            status
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
            status
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
        status
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
            status
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
            status
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
            status
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
            status
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
            categoryArray
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
            partOf
            altLink
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
            status
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
            status
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
        status
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
            status
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
            status
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
        status
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
            status
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
            status
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
            status
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
            status
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
            categoryArray
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
            partOf
            altLink
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
            status
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
            status
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
        status
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
            status
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
            status
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
        status
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
            status
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
            status
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
            status
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
            status
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
            categoryArray
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
            partOf
            altLink
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
export const createCMPMSession = /* GraphQL */ `
  mutation CreateCMPMSession(
    $input: CreateCMPMSessionInput!
    $condition: ModelCMPMSessionConditionInput
  ) {
    createCMPMSession(input: $input, condition: $condition) {
      startDate
      endDate
      deadline
      title
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCMPMSession = /* GraphQL */ `
  mutation UpdateCMPMSession(
    $input: UpdateCMPMSessionInput!
    $condition: ModelCMPMSessionConditionInput
  ) {
    updateCMPMSession(input: $input, condition: $condition) {
      startDate
      endDate
      deadline
      title
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCMPMSession = /* GraphQL */ `
  mutation DeleteCMPMSession(
    $input: DeleteCMPMSessionInput!
    $condition: ModelCMPMSessionConditionInput
  ) {
    deleteCMPMSession(input: $input, condition: $condition) {
      startDate
      endDate
      deadline
      title
      id
      createdAt
      updatedAt
    }
  }
`;
export const createCMPMForm = /* GraphQL */ `
  mutation CreateCMPMForm(
    $input: CreateCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    createCMPMForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const updateCMPMForm = /* GraphQL */ `
  mutation UpdateCMPMForm(
    $input: UpdateCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    updateCMPMForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const deleteCMPMForm = /* GraphQL */ `
  mutation DeleteCMPMForm(
    $input: DeleteCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    deleteCMPMForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cMPMFormUserId
    }
  }
`;
export const createCPSForm = /* GraphQL */ `
  mutation CreateCPSForm(
    $input: CreateCPSFormInput!
    $condition: ModelCPSFormConditionInput
  ) {
    createCPSForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const updateCPSForm = /* GraphQL */ `
  mutation UpdateCPSForm(
    $input: UpdateCPSFormInput!
    $condition: ModelCPSFormConditionInput
  ) {
    updateCPSForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const deleteCPSForm = /* GraphQL */ `
  mutation DeleteCPSForm(
    $input: DeleteCPSFormInput!
    $condition: ModelCPSFormConditionInput
  ) {
    deleteCPSForm(input: $input, condition: $condition) {
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
          status
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
          status
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
      status
      createdOn
      updatedOn
      cPSFormUserId
    }
  }
`;
export const createAppStart = /* GraphQL */ `
  mutation CreateAppStart(
    $input: CreateAppStartInput!
    $condition: ModelAppStartConditionInput
  ) {
    createAppStart(input: $input, condition: $condition) {
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
export const updateAppStart = /* GraphQL */ `
  mutation UpdateAppStart(
    $input: UpdateAppStartInput!
    $condition: ModelAppStartConditionInput
  ) {
    updateAppStart(input: $input, condition: $condition) {
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
export const deleteAppStart = /* GraphQL */ `
  mutation DeleteAppStart(
    $input: DeleteAppStartInput!
    $condition: ModelAppStartConditionInput
  ) {
    deleteAppStart(input: $input, condition: $condition) {
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
export const createLMSCollection = /* GraphQL */ `
  mutation CreateLMSCollection(
    $input: CreateLMSCollectionInput!
    $condition: ModelLMSCollectionConditionInput
  ) {
    createLMSCollection(input: $input, condition: $condition) {
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
export const updateLMSCollection = /* GraphQL */ `
  mutation UpdateLMSCollection(
    $input: UpdateLMSCollectionInput!
    $condition: ModelLMSCollectionConditionInput
  ) {
    updateLMSCollection(input: $input, condition: $condition) {
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
export const deleteLMSCollection = /* GraphQL */ `
  mutation DeleteLMSCollection(
    $input: DeleteLMSCollectionInput!
    $condition: ModelLMSCollectionConditionInput
  ) {
    deleteLMSCollection(input: $input, condition: $condition) {
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
export const createLMSCirriculum = /* GraphQL */ `
  mutation CreateLMSCirriculum(
    $input: CreateLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    createLMSCirriculum(input: $input, condition: $condition) {
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
            categoryArray
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
            partOf
            altLink
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
export const updateLMSCirriculum = /* GraphQL */ `
  mutation UpdateLMSCirriculum(
    $input: UpdateLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    updateLMSCirriculum(input: $input, condition: $condition) {
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
            categoryArray
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
            partOf
            altLink
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
export const deleteLMSCirriculum = /* GraphQL */ `
  mutation DeleteLMSCirriculum(
    $input: DeleteLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    deleteLMSCirriculum(input: $input, condition: $condition) {
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
            categoryArray
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
            partOf
            altLink
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
export const createLMSCourse = /* GraphQL */ `
  mutation CreateLMSCourse(
    $input: CreateLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    createLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      category
      categoryArray
      type
      cirriculum {
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
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      lmsLessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
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
      partOf
      altLink
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const updateLMSCourse = /* GraphQL */ `
  mutation UpdateLMSCourse(
    $input: UpdateLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    updateLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      category
      categoryArray
      type
      cirriculum {
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
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      lmsLessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
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
      partOf
      altLink
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const deleteLMSCourse = /* GraphQL */ `
  mutation DeleteLMSCourse(
    $input: DeleteLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    deleteLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      category
      categoryArray
      type
      cirriculum {
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
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      lmsLessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
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
      partOf
      altLink
      createdAt
      updatedAt
      studentCourseEnrolledId
    }
  }
`;
export const createCourseClick = /* GraphQL */ `
  mutation CreateCourseClick(
    $input: CreateCourseClickInput!
    $condition: ModelCourseClickConditionInput
  ) {
    createCourseClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseClick = /* GraphQL */ `
  mutation UpdateCourseClick(
    $input: UpdateCourseClickInput!
    $condition: ModelCourseClickConditionInput
  ) {
    updateCourseClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseClick = /* GraphQL */ `
  mutation DeleteCourseClick(
    $input: DeleteCourseClickInput!
    $condition: ModelCourseClickConditionInput
  ) {
    deleteCourseClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const createLessonClick = /* GraphQL */ `
  mutation CreateLessonClick(
    $input: CreateLessonClickInput!
    $condition: ModelLessonClickConditionInput
  ) {
    createLessonClick(input: $input, condition: $condition) {
      id
      LessonID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const updateLessonClick = /* GraphQL */ `
  mutation UpdateLessonClick(
    $input: UpdateLessonClickInput!
    $condition: ModelLessonClickConditionInput
  ) {
    updateLessonClick(input: $input, condition: $condition) {
      id
      LessonID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const deleteLessonClick = /* GraphQL */ `
  mutation DeleteLessonClick(
    $input: DeleteLessonClickInput!
    $condition: ModelLessonClickConditionInput
  ) {
    deleteLessonClick(input: $input, condition: $condition) {
      id
      LessonID
      page
      ipAddress
      country
      lat
      long
      referrer
      createdAt
      updatedAt
    }
  }
`;
export const createLMSLesson = /* GraphQL */ `
  mutation CreateLMSLesson(
    $input: CreateLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    createLMSLesson(input: $input, condition: $condition) {
      id
      title
      course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      modules {
        items {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        nextToken
      }
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
    }
  }
`;
export const updateLMSLesson = /* GraphQL */ `
  mutation UpdateLMSLesson(
    $input: UpdateLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    updateLMSLesson(input: $input, condition: $condition) {
      id
      title
      course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      modules {
        items {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        nextToken
      }
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
    }
  }
`;
export const deleteLMSLesson = /* GraphQL */ `
  mutation DeleteLMSLesson(
    $input: DeleteLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    deleteLMSLesson(input: $input, condition: $condition) {
      id
      title
      course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
            categoryArray
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
            partOf
            altLink
            createdAt
            updatedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      modules {
        items {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        nextToken
      }
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
    }
  }
`;
export const createLMSModule = /* GraphQL */ `
  mutation CreateLMSModule(
    $input: CreateLMSModuleInput!
    $condition: ModelLMSModuleConditionInput
  ) {
    createLMSModule(input: $input, condition: $condition) {
      id
      title
      lesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      subheadline
      objectives
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSModuleSlidesId
        }
        nextToken
      }
      media
      quiz {
        id
        module {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        prompt
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        updatedAt
        lMSQuizModuleId
      }
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
    }
  }
`;
export const updateLMSModule = /* GraphQL */ `
  mutation UpdateLMSModule(
    $input: UpdateLMSModuleInput!
    $condition: ModelLMSModuleConditionInput
  ) {
    updateLMSModule(input: $input, condition: $condition) {
      id
      title
      lesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      subheadline
      objectives
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSModuleSlidesId
        }
        nextToken
      }
      media
      quiz {
        id
        module {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        prompt
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        updatedAt
        lMSQuizModuleId
      }
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
    }
  }
`;
export const deleteLMSModule = /* GraphQL */ `
  mutation DeleteLMSModule(
    $input: DeleteLMSModuleInput!
    $condition: ModelLMSModuleConditionInput
  ) {
    deleteLMSModule(input: $input, condition: $condition) {
      id
      title
      lesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      subheadline
      objectives
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          lMSModuleSlidesId
        }
        nextToken
      }
      media
      quiz {
        id
        module {
          id
          title
          lesson {
            id
            title
            subheadline
            objectives
            media
            percentComplete
            content
            slug
            createdAt
            updatedAt
          }
          subheadline
          objectives
          mediaType
          slides {
            nextToken
          }
          media
          quiz {
            id
            prompt
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            updatedAt
            lMSQuizModuleId
          }
          content
          slug
          createdAt
          updatedAt
          lMSLessonModulesId
          lMSModuleQuizId
        }
        prompt
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        updatedAt
        lMSQuizModuleId
      }
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
    }
  }
`;
export const createLMSQuiz = /* GraphQL */ `
  mutation CreateLMSQuiz(
    $input: CreateLMSQuizInput!
    $condition: ModelLMSQuizConditionInput
  ) {
    createLMSQuiz(input: $input, condition: $condition) {
      id
      module {
        id
        title
        lesson {
          id
          title
          course {
            nextToken
          }
          modules {
            nextToken
          }
          subheadline
          objectives
          media
          percentComplete
          content
          slug
          createdAt
          updatedAt
        }
        subheadline
        objectives
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSModuleSlidesId
          }
          nextToken
        }
        media
        quiz {
          id
          module {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          prompt
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          updatedAt
          lMSQuizModuleId
        }
        content
        slug
        createdAt
        updatedAt
        lMSLessonModulesId
        lMSModuleQuizId
      }
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
    }
  }
`;
export const updateLMSQuiz = /* GraphQL */ `
  mutation UpdateLMSQuiz(
    $input: UpdateLMSQuizInput!
    $condition: ModelLMSQuizConditionInput
  ) {
    updateLMSQuiz(input: $input, condition: $condition) {
      id
      module {
        id
        title
        lesson {
          id
          title
          course {
            nextToken
          }
          modules {
            nextToken
          }
          subheadline
          objectives
          media
          percentComplete
          content
          slug
          createdAt
          updatedAt
        }
        subheadline
        objectives
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSModuleSlidesId
          }
          nextToken
        }
        media
        quiz {
          id
          module {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          prompt
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          updatedAt
          lMSQuizModuleId
        }
        content
        slug
        createdAt
        updatedAt
        lMSLessonModulesId
        lMSModuleQuizId
      }
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
    }
  }
`;
export const deleteLMSQuiz = /* GraphQL */ `
  mutation DeleteLMSQuiz(
    $input: DeleteLMSQuizInput!
    $condition: ModelLMSQuizConditionInput
  ) {
    deleteLMSQuiz(input: $input, condition: $condition) {
      id
      module {
        id
        title
        lesson {
          id
          title
          course {
            nextToken
          }
          modules {
            nextToken
          }
          subheadline
          objectives
          media
          percentComplete
          content
          slug
          createdAt
          updatedAt
        }
        subheadline
        objectives
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            lMSModuleSlidesId
          }
          nextToken
        }
        media
        quiz {
          id
          module {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          prompt
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          updatedAt
          lMSQuizModuleId
        }
        content
        slug
        createdAt
        updatedAt
        lMSLessonModulesId
        lMSModuleQuizId
      }
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
          status
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
          status
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
          categoryArray
          type
          cirriculum {
            nextToken
          }
          lmsLessons {
            nextToken
          }
          instructors {
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
          partOf
          altLink
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
          status
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
          status
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
          categoryArray
          type
          cirriculum {
            nextToken
          }
          lmsLessons {
            nextToken
          }
          instructors {
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
          partOf
          altLink
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
          status
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
          status
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
          categoryArray
          type
          cirriculum {
            nextToken
          }
          lmsLessons {
            nextToken
          }
          instructors {
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
          partOf
          altLink
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
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
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
          status
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
          status
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
            categoryArray
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
            partOf
            altLink
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
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
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
          status
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
          status
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
            categoryArray
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
            partOf
            altLink
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
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
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
          status
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
          status
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
            categoryArray
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
            partOf
            altLink
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
export const createObjective = /* GraphQL */ `
  mutation CreateObjective(
    $input: CreateObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    createObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
    }
  }
`;
export const updateObjective = /* GraphQL */ `
  mutation UpdateObjective(
    $input: UpdateObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    updateObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
    }
  }
`;
export const deleteObjective = /* GraphQL */ `
  mutation DeleteObjective(
    $input: DeleteObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    deleteObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSModuleSlidesId
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSModuleSlidesId
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSModuleSlidesId
    }
  }
`;
export const createTimestamp = /* GraphQL */ `
  mutation CreateTimestamp(
    $input: CreateTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    createTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTimestamp = /* GraphQL */ `
  mutation UpdateTimestamp(
    $input: UpdateTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    updateTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimestamp = /* GraphQL */ `
  mutation DeleteTimestamp(
    $input: DeleteTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    deleteTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
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
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
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
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
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
export const createTrackedCourse = /* GraphQL */ `
  mutation CreateTrackedCourse(
    $input: CreateTrackedCourseInput!
    $condition: ModelTrackedCourseConditionInput
  ) {
    createTrackedCourse(input: $input, condition: $condition) {
      id
      courseId
      clicks
      customer {
        id
        displayName
        link
        logo
        email
        primaryColor
        highlightColor
        pdf
        slide
        video
        offered
        courses {
          items {
            id
            courseId
            clicks
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
        offerings
        status
        createdAt
        updatedAt
      }
      customerId
      createdAt
      updatedAt
    }
  }
`;
export const updateTrackedCourse = /* GraphQL */ `
  mutation UpdateTrackedCourse(
    $input: UpdateTrackedCourseInput!
    $condition: ModelTrackedCourseConditionInput
  ) {
    updateTrackedCourse(input: $input, condition: $condition) {
      id
      courseId
      clicks
      customer {
        id
        displayName
        link
        logo
        email
        primaryColor
        highlightColor
        pdf
        slide
        video
        offered
        courses {
          items {
            id
            courseId
            clicks
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
        offerings
        status
        createdAt
        updatedAt
      }
      customerId
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrackedCourse = /* GraphQL */ `
  mutation DeleteTrackedCourse(
    $input: DeleteTrackedCourseInput!
    $condition: ModelTrackedCourseConditionInput
  ) {
    deleteTrackedCourse(input: $input, condition: $condition) {
      id
      courseId
      clicks
      customer {
        id
        displayName
        link
        logo
        email
        primaryColor
        highlightColor
        pdf
        slide
        video
        offered
        courses {
          items {
            id
            courseId
            clicks
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
        offerings
        status
        createdAt
        updatedAt
      }
      customerId
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      courses {
        items {
          id
          courseId
          clicks
          customer {
            id
            displayName
            link
            logo
            email
            primaryColor
            highlightColor
            pdf
            slide
            video
            offered
            offerings
            status
            createdAt
            updatedAt
          }
          customerId
          createdAt
          updatedAt
        }
        nextToken
      }
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      courses {
        items {
          id
          courseId
          clicks
          customer {
            id
            displayName
            link
            logo
            email
            primaryColor
            highlightColor
            pdf
            slide
            video
            offered
            offerings
            status
            createdAt
            updatedAt
          }
          customerId
          createdAt
          updatedAt
        }
        nextToken
      }
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      courses {
        items {
          id
          courseId
          clicks
          customer {
            id
            displayName
            link
            logo
            email
            primaryColor
            highlightColor
            pdf
            slide
            video
            offered
            offerings
            status
            createdAt
            updatedAt
          }
          customerId
          createdAt
          updatedAt
        }
        nextToken
      }
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerLibary = /* GraphQL */ `
  mutation CreateCustomerLibary(
    $input: CreateCustomerLibaryInput!
    $condition: ModelCustomerLibaryConditionInput
  ) {
    createCustomerLibary(input: $input, condition: $condition) {
      id
      displayName
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerLibary = /* GraphQL */ `
  mutation UpdateCustomerLibary(
    $input: UpdateCustomerLibaryInput!
    $condition: ModelCustomerLibaryConditionInput
  ) {
    updateCustomerLibary(input: $input, condition: $condition) {
      id
      displayName
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerLibary = /* GraphQL */ `
  mutation DeleteCustomerLibary(
    $input: DeleteCustomerLibaryInput!
    $condition: ModelCustomerLibaryConditionInput
  ) {
    deleteCustomerLibary(input: $input, condition: $condition) {
      id
      displayName
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
    }
  }
`;
export const createSalesBar = /* GraphQL */ `
  mutation CreateSalesBar(
    $input: CreateSalesBarInput!
    $condition: ModelSalesBarConditionInput
  ) {
    createSalesBar(input: $input, condition: $condition) {
      id
      text
      link
      icon
      createdAt
      updatedAt
    }
  }
`;
export const updateSalesBar = /* GraphQL */ `
  mutation UpdateSalesBar(
    $input: UpdateSalesBarInput!
    $condition: ModelSalesBarConditionInput
  ) {
    updateSalesBar(input: $input, condition: $condition) {
      id
      text
      link
      icon
      createdAt
      updatedAt
    }
  }
`;
export const deleteSalesBar = /* GraphQL */ `
  mutation DeleteSalesBar(
    $input: DeleteSalesBarInput!
    $condition: ModelSalesBarConditionInput
  ) {
    deleteSalesBar(input: $input, condition: $condition) {
      id
      text
      link
      icon
      createdAt
      updatedAt
    }
  }
`;
export const createTestimonial = /* GraphQL */ `
  mutation CreateTestimonial(
    $input: CreateTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    createTestimonial(input: $input, condition: $condition) {
      id
      content
      author
      company
      affiliation
      title
      tags
      linkedin
      headshot
      featured
      date
      video
      createdAt
      updatedAt
    }
  }
`;
export const updateTestimonial = /* GraphQL */ `
  mutation UpdateTestimonial(
    $input: UpdateTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    updateTestimonial(input: $input, condition: $condition) {
      id
      content
      author
      company
      affiliation
      title
      tags
      linkedin
      headshot
      featured
      date
      video
      createdAt
      updatedAt
    }
  }
`;
export const deleteTestimonial = /* GraphQL */ `
  mutation DeleteTestimonial(
    $input: DeleteTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    deleteTestimonial(input: $input, condition: $condition) {
      id
      content
      author
      company
      affiliation
      title
      tags
      linkedin
      headshot
      featured
      date
      video
      createdAt
      updatedAt
    }
  }
`;
export const createWorkshopForm = /* GraphQL */ `
  mutation CreateWorkshopForm(
    $input: CreateWorkshopFormInput!
    $condition: ModelWorkshopFormConditionInput
  ) {
    createWorkshopForm(input: $input, condition: $condition) {
      firstName
      lastName
      email
      phone
      companyName
      eventDate
      audienceSize
      eventLocation
      eventDescription
      id
      createdOn
      updatedOn
    }
  }
`;
export const updateWorkshopForm = /* GraphQL */ `
  mutation UpdateWorkshopForm(
    $input: UpdateWorkshopFormInput!
    $condition: ModelWorkshopFormConditionInput
  ) {
    updateWorkshopForm(input: $input, condition: $condition) {
      firstName
      lastName
      email
      phone
      companyName
      eventDate
      audienceSize
      eventLocation
      eventDescription
      id
      createdOn
      updatedOn
    }
  }
`;
export const deleteWorkshopForm = /* GraphQL */ `
  mutation DeleteWorkshopForm(
    $input: DeleteWorkshopFormInput!
    $condition: ModelWorkshopFormConditionInput
  ) {
    deleteWorkshopForm(input: $input, condition: $condition) {
      firstName
      lastName
      email
      phone
      companyName
      eventDate
      audienceSize
      eventLocation
      eventDescription
      id
      createdOn
      updatedOn
    }
  }
`;
export const createClick = /* GraphQL */ `
  mutation CreateClick(
    $input: CreateClickInput!
    $condition: ModelClickConditionInput
  ) {
    createClick(input: $input, condition: $condition) {
      id
      ref
      path
      type
      identifier
      nextPath
      ipAddress
      location
      createdAt
      updatedAt
    }
  }
`;
export const updateClick = /* GraphQL */ `
  mutation UpdateClick(
    $input: UpdateClickInput!
    $condition: ModelClickConditionInput
  ) {
    updateClick(input: $input, condition: $condition) {
      id
      ref
      path
      type
      identifier
      nextPath
      ipAddress
      location
      createdAt
      updatedAt
    }
  }
`;
export const deleteClick = /* GraphQL */ `
  mutation DeleteClick(
    $input: DeleteClickInput!
    $condition: ModelClickConditionInput
  ) {
    deleteClick(input: $input, condition: $condition) {
      id
      ref
      path
      type
      identifier
      nextPath
      ipAddress
      location
      createdAt
      updatedAt
    }
  }
`;
export const createCertificateCourses = /* GraphQL */ `
  mutation CreateCertificateCourses(
    $input: CreateCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    createCertificateCourses(input: $input, condition: $condition) {
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
export const updateCertificateCourses = /* GraphQL */ `
  mutation UpdateCertificateCourses(
    $input: UpdateCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    updateCertificateCourses(input: $input, condition: $condition) {
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
export const deleteCertificateCourses = /* GraphQL */ `
  mutation DeleteCertificateCourses(
    $input: DeleteCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    deleteCertificateCourses(input: $input, condition: $condition) {
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
export const createArticleRelatedCourses = /* GraphQL */ `
  mutation CreateArticleRelatedCourses(
    $input: CreateArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    createArticleRelatedCourses(input: $input, condition: $condition) {
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
export const updateArticleRelatedCourses = /* GraphQL */ `
  mutation UpdateArticleRelatedCourses(
    $input: UpdateArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    updateArticleRelatedCourses(input: $input, condition: $condition) {
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
export const deleteArticleRelatedCourses = /* GraphQL */ `
  mutation DeleteArticleRelatedCourses(
    $input: DeleteArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    deleteArticleRelatedCourses(input: $input, condition: $condition) {
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
export const createAPSUser = /* GraphQL */ `
  mutation CreateAPSUser(
    $input: CreateAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    createAPSUser(input: $input, condition: $condition) {
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
          status
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
          status
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
export const updateAPSUser = /* GraphQL */ `
  mutation UpdateAPSUser(
    $input: UpdateAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    updateAPSUser(input: $input, condition: $condition) {
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
          status
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
          status
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
export const deleteAPSUser = /* GraphQL */ `
  mutation DeleteAPSUser(
    $input: DeleteAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    deleteAPSUser(input: $input, condition: $condition) {
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
          status
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
          status
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
export const createAPSSponsor = /* GraphQL */ `
  mutation CreateAPSSponsor(
    $input: CreateAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    createAPSSponsor(input: $input, condition: $condition) {
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
export const updateAPSSponsor = /* GraphQL */ `
  mutation UpdateAPSSponsor(
    $input: UpdateAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    updateAPSSponsor(input: $input, condition: $condition) {
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
export const deleteAPSSponsor = /* GraphQL */ `
  mutation DeleteAPSSponsor(
    $input: DeleteAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    deleteAPSSponsor(input: $input, condition: $condition) {
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
export const createCirriculumCourses = /* GraphQL */ `
  mutation CreateCirriculumCourses(
    $input: CreateCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    createCirriculumCourses(input: $input, condition: $condition) {
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
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCirriculumCourses = /* GraphQL */ `
  mutation UpdateCirriculumCourses(
    $input: UpdateCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    updateCirriculumCourses(input: $input, condition: $condition) {
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
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCirriculumCourses = /* GraphQL */ `
  mutation DeleteCirriculumCourses(
    $input: DeleteCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    deleteCirriculumCourses(input: $input, condition: $condition) {
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
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourseLessons = /* GraphQL */ `
  mutation CreateCourseLessons(
    $input: CreateCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    createCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseLessons = /* GraphQL */ `
  mutation UpdateCourseLessons(
    $input: UpdateCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    updateCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseLessons = /* GraphQL */ `
  mutation DeleteCourseLessons(
    $input: DeleteCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    deleteCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
        createdAt
        updatedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        course {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        modules {
          items {
            id
            title
            subheadline
            objectives
            mediaType
            media
            content
            slug
            createdAt
            updatedAt
            lMSLessonModulesId
            lMSModuleQuizId
          }
          nextToken
        }
        subheadline
        objectives
        media
        percentComplete
        content
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourseInstructors = /* GraphQL */ `
  mutation CreateCourseInstructors(
    $input: CreateCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    createCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
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
            status
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
            status
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
export const updateCourseInstructors = /* GraphQL */ `
  mutation UpdateCourseInstructors(
    $input: UpdateCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    updateCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
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
            status
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
            status
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
export const deleteCourseInstructors = /* GraphQL */ `
  mutation DeleteCourseInstructors(
    $input: DeleteCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    deleteCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        category
        categoryArray
        type
        cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            createdAt
            updatedAt
          }
          nextToken
        }
        lmsLessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        instructors {
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
        partOf
        altLink
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
            status
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
            status
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
