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
      lesson {
        items {
          id
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
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
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
      id
      tag
      lesson {
        items {
          id
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
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
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
      id
      tag
      lesson {
        items {
          id
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      value
      certificates {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      value
      certificates {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      value
      certificates {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
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
export const createCertificateObject = /* GraphQL */ `
  mutation CreateCertificateObject(
    $input: CreateCertificateObjectInput!
    $condition: ModelCertificateObjectConditionInput
  ) {
    createCertificateObject(input: $input, condition: $condition) {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      category {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whereText
      whatText
      howText
      deadline
      sessions {
        items {
          startDate
          endDate
          deadline
          title
          id
          createdAt
          updatedAt
          certificateObjectSessionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCertificateObject = /* GraphQL */ `
  mutation UpdateCertificateObject(
    $input: UpdateCertificateObjectInput!
    $condition: ModelCertificateObjectConditionInput
  ) {
    updateCertificateObject(input: $input, condition: $condition) {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      category {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whereText
      whatText
      howText
      deadline
      sessions {
        items {
          startDate
          endDate
          deadline
          title
          id
          createdAt
          updatedAt
          certificateObjectSessionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertificateObject = /* GraphQL */ `
  mutation DeleteCertificateObject(
    $input: DeleteCertificateObjectInput!
    $condition: ModelCertificateObjectConditionInput
  ) {
    deleteCertificateObject(input: $input, condition: $condition) {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      category {
        items {
          id
          categoryId
          certificateObjectId
          category {
            id
            name
            value
            createdAt
            updatedAt
          }
          certificateObject {
            id
            courseId
            title
            description
            seoImage
            hours
            courses
            video
            price
            link
            applicationLink
            callout
            purchaseLink
            categoryArray
            abbreviation
            whereText
            whatText
            howText
            deadline
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      whereText
      whatText
      howText
      deadline
      sessions {
        items {
          startDate
          endDate
          deadline
          title
          id
          createdAt
          updatedAt
          certificateObjectSessionsId
        }
        nextToken
      }
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
            tags
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
            tags
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
            tags
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
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          createdAt
          updatedAt
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
      screengrab
      analysis {
        id
        wordCount
        readingTime
        quizQuestion
        quizOptions
        quizCorrectAnswer
        lessonId
        createdAt
        updatedAt
      }
      usersCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
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
      lessonAnalysisId
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
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          createdAt
          updatedAt
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
      screengrab
      analysis {
        id
        wordCount
        readingTime
        quizQuestion
        quizOptions
        quizCorrectAnswer
        lessonId
        createdAt
        updatedAt
      }
      usersCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
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
      lessonAnalysisId
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
          tagsId
          lessonId
          tags {
            id
            tag
            createdAt
            updatedAt
          }
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          createdAt
          updatedAt
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
      screengrab
      analysis {
        id
        wordCount
        readingTime
        quizQuestion
        quizOptions
        quizCorrectAnswer
        lessonId
        createdAt
        updatedAt
      }
      usersCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
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
      lessonAnalysisId
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
      templates {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
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
      templates {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
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
      templates {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
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
      tags
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
      tags
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
      tags
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
      tags
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
            tags
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
      tags
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
            tags
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
      tags
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
            tags
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
export const createAPSBoard = /* GraphQL */ `
  mutation CreateAPSBoard(
    $input: CreateAPSBoardInput!
    $condition: ModelAPSBoardConditionInput
  ) {
    createAPSBoard(input: $input, condition: $condition) {
      id
      name
      title
      bio
      company
      email
      linkedin
      profilePic
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSBoard = /* GraphQL */ `
  mutation UpdateAPSBoard(
    $input: UpdateAPSBoardInput!
    $condition: ModelAPSBoardConditionInput
  ) {
    updateAPSBoard(input: $input, condition: $condition) {
      id
      name
      title
      bio
      company
      email
      linkedin
      profilePic
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSBoard = /* GraphQL */ `
  mutation DeleteAPSBoard(
    $input: DeleteAPSBoardInput!
    $condition: ModelAPSBoardConditionInput
  ) {
    deleteAPSBoard(input: $input, condition: $condition) {
      id
      name
      title
      bio
      company
      email
      linkedin
      profilePic
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
export const createAPSCompany = /* GraphQL */ `
  mutation CreateAPSCompany(
    $input: CreateAPSCompanyInput!
    $condition: ModelAPSCompanyConditionInput
  ) {
    createAPSCompany(input: $input, condition: $condition) {
      name
      email
      apsRegistrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      type
      registrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSCompany = /* GraphQL */ `
  mutation UpdateAPSCompany(
    $input: UpdateAPSCompanyInput!
    $condition: ModelAPSCompanyConditionInput
  ) {
    updateAPSCompany(input: $input, condition: $condition) {
      name
      email
      apsRegistrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      type
      registrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSCompany = /* GraphQL */ `
  mutation DeleteAPSCompany(
    $input: DeleteAPSCompanyInput!
    $condition: ModelAPSCompanyConditionInput
  ) {
    deleteAPSCompany(input: $input, condition: $condition) {
      name
      email
      apsRegistrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      type
      registrants {
        items {
          id
          firstName
          lastName
          email
          phone
          company {
            name
            email
            type
            id
            createdAt
            updatedAt
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          speedNetworking
          speedNetworkingStatus
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          addOns {
            nextToken
          }
          morrisetteTransportation
          morrisetteStatus
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          magnaStatus
          magnaTransportation
          aristoStatus
          aristoTransportation
          bio
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSCompanyRegistrantsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAPSAddOn2025 = /* GraphQL */ `
  mutation CreateAPSAddOn2025(
    $input: CreateAPSAddOn2025Input!
    $condition: ModelAPSAddOn2025ConditionInput
  ) {
    createAPSAddOn2025(input: $input, condition: $condition) {
      title
      description
      subheadline
      location
      date
      time
      company
      altLink
      apsRegistrants {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      limit
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSAddOn2025 = /* GraphQL */ `
  mutation UpdateAPSAddOn2025(
    $input: UpdateAPSAddOn2025Input!
    $condition: ModelAPSAddOn2025ConditionInput
  ) {
    updateAPSAddOn2025(input: $input, condition: $condition) {
      title
      description
      subheadline
      location
      date
      time
      company
      altLink
      apsRegistrants {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      limit
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSAddOn2025 = /* GraphQL */ `
  mutation DeleteAPSAddOn2025(
    $input: DeleteAPSAddOn2025Input!
    $condition: ModelAPSAddOn2025ConditionInput
  ) {
    deleteAPSAddOn2025(input: $input, condition: $condition) {
      title
      description
      subheadline
      location
      date
      time
      company
      altLink
      apsRegistrants {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      limit
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAPSRegistrant2025 = /* GraphQL */ `
  mutation CreateAPSRegistrant2025(
    $input: CreateAPSRegistrant2025Input!
    $condition: ModelAPSRegistrant2025ConditionInput
  ) {
    createAPSRegistrant2025(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      company {
        name
        email
        apsRegistrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        type
        registrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      jobTitle
      attendeeType
      termsAccepted
      interests
      otherInterest
      speedNetworking
      speedNetworkingStatus
      billingAddressFirstName
      billingAddressLastName
      billingAddressEmail
      billingAddressPhone
      billingAddressStreet
      billingAddressCity
      billingAddressState
      billingAddressZip
      sameAsAttendee
      speakerTopic
      learningObjectives
      totalAmount
      discountCode
      status
      addOns {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      morrisetteTransportation
      morrisetteStatus
      paymentConfirmation
      registrationEmailSent
      registrationEmailSentDate
      registrationEmailReceived
      registrationEmailReceivedDate
      welcomeEmailSent
      welcomeEmailSentDate
      welcomeEmailReceived
      welcomeEmailReceivedDate
      paymentMethod
      paymentLast4
      approvedAt
      headshot
      presentation
      presentationTitle
      presentationSummary
      magnaStatus
      magnaTransportation
      aristoStatus
      aristoTransportation
      bio
      createdAt
      updatedAt
      aPSCompanyApsRegistrantsId
      aPSCompanyRegistrantsId
    }
  }
`;
export const updateAPSRegistrant2025 = /* GraphQL */ `
  mutation UpdateAPSRegistrant2025(
    $input: UpdateAPSRegistrant2025Input!
    $condition: ModelAPSRegistrant2025ConditionInput
  ) {
    updateAPSRegistrant2025(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      company {
        name
        email
        apsRegistrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        type
        registrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      jobTitle
      attendeeType
      termsAccepted
      interests
      otherInterest
      speedNetworking
      speedNetworkingStatus
      billingAddressFirstName
      billingAddressLastName
      billingAddressEmail
      billingAddressPhone
      billingAddressStreet
      billingAddressCity
      billingAddressState
      billingAddressZip
      sameAsAttendee
      speakerTopic
      learningObjectives
      totalAmount
      discountCode
      status
      addOns {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      morrisetteTransportation
      morrisetteStatus
      paymentConfirmation
      registrationEmailSent
      registrationEmailSentDate
      registrationEmailReceived
      registrationEmailReceivedDate
      welcomeEmailSent
      welcomeEmailSentDate
      welcomeEmailReceived
      welcomeEmailReceivedDate
      paymentMethod
      paymentLast4
      approvedAt
      headshot
      presentation
      presentationTitle
      presentationSummary
      magnaStatus
      magnaTransportation
      aristoStatus
      aristoTransportation
      bio
      createdAt
      updatedAt
      aPSCompanyApsRegistrantsId
      aPSCompanyRegistrantsId
    }
  }
`;
export const deleteAPSRegistrant2025 = /* GraphQL */ `
  mutation DeleteAPSRegistrant2025(
    $input: DeleteAPSRegistrant2025Input!
    $condition: ModelAPSRegistrant2025ConditionInput
  ) {
    deleteAPSRegistrant2025(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      company {
        name
        email
        apsRegistrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        type
        registrants {
          items {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      jobTitle
      attendeeType
      termsAccepted
      interests
      otherInterest
      speedNetworking
      speedNetworkingStatus
      billingAddressFirstName
      billingAddressLastName
      billingAddressEmail
      billingAddressPhone
      billingAddressStreet
      billingAddressCity
      billingAddressState
      billingAddressZip
      sameAsAttendee
      speakerTopic
      learningObjectives
      totalAmount
      discountCode
      status
      addOns {
        items {
          id
          aPSAddOn2025Id
          aPSRegistrant2025Id
          aPSAddOn2025 {
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            id
            createdAt
            updatedAt
          }
          aPSRegistrant2025 {
            id
            firstName
            lastName
            email
            phone
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            speedNetworking
            speedNetworkingStatus
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            morrisetteTransportation
            morrisetteStatus
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            magnaStatus
            magnaTransportation
            aristoStatus
            aristoTransportation
            bio
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSCompanyRegistrantsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      morrisetteTransportation
      morrisetteStatus
      paymentConfirmation
      registrationEmailSent
      registrationEmailSentDate
      registrationEmailReceived
      registrationEmailReceivedDate
      welcomeEmailSent
      welcomeEmailSentDate
      welcomeEmailReceived
      welcomeEmailReceivedDate
      paymentMethod
      paymentLast4
      approvedAt
      headshot
      presentation
      presentationTitle
      presentationSummary
      magnaStatus
      magnaTransportation
      aristoStatus
      aristoTransportation
      bio
      createdAt
      updatedAt
      aPSCompanyApsRegistrantsId
      aPSCompanyRegistrantsId
    }
  }
`;
export const createAPSCode2025 = /* GraphQL */ `
  mutation CreateAPSCode2025(
    $input: CreateAPSCode2025Input!
    $condition: ModelAPSCode2025ConditionInput
  ) {
    createAPSCode2025(input: $input, condition: $condition) {
      code
      limit
      used
      discount
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSCode2025 = /* GraphQL */ `
  mutation UpdateAPSCode2025(
    $input: UpdateAPSCode2025Input!
    $condition: ModelAPSCode2025ConditionInput
  ) {
    updateAPSCode2025(input: $input, condition: $condition) {
      code
      limit
      used
      discount
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSCode2025 = /* GraphQL */ `
  mutation DeleteAPSCode2025(
    $input: DeleteAPSCode2025Input!
    $condition: ModelAPSCode2025ConditionInput
  ) {
    deleteAPSCode2025(input: $input, condition: $condition) {
      code
      limit
      used
      discount
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAPSActivity2025 = /* GraphQL */ `
  mutation CreateAPSActivity2025(
    $input: CreateAPSActivity2025Input!
    $condition: ModelAPSActivity2025ConditionInput
  ) {
    createAPSActivity2025(input: $input, condition: $condition) {
      id
      type
      activity
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSActivity2025 = /* GraphQL */ `
  mutation UpdateAPSActivity2025(
    $input: UpdateAPSActivity2025Input!
    $condition: ModelAPSActivity2025ConditionInput
  ) {
    updateAPSActivity2025(input: $input, condition: $condition) {
      id
      type
      activity
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSActivity2025 = /* GraphQL */ `
  mutation DeleteAPSActivity2025(
    $input: DeleteAPSActivity2025Input!
    $condition: ModelAPSActivity2025ConditionInput
  ) {
    deleteAPSActivity2025(input: $input, condition: $condition) {
      id
      type
      activity
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
export const createAristosForm = /* GraphQL */ `
  mutation CreateAristosForm(
    $input: CreateAristosFormInput!
    $condition: ModelAristosFormConditionInput
  ) {
    createAristosForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAristosForm = /* GraphQL */ `
  mutation UpdateAristosForm(
    $input: UpdateAristosFormInput!
    $condition: ModelAristosFormConditionInput
  ) {
    updateAristosForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAristosForm = /* GraphQL */ `
  mutation DeleteAristosForm(
    $input: DeleteAristosFormInput!
    $condition: ModelAristosFormConditionInput
  ) {
    deleteAristosForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createGuardianForm = /* GraphQL */ `
  mutation CreateGuardianForm(
    $input: CreateGuardianFormInput!
    $condition: ModelGuardianFormConditionInput
  ) {
    createGuardianForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateGuardianForm = /* GraphQL */ `
  mutation UpdateGuardianForm(
    $input: UpdateGuardianFormInput!
    $condition: ModelGuardianFormConditionInput
  ) {
    updateGuardianForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteGuardianForm = /* GraphQL */ `
  mutation DeleteGuardianForm(
    $input: DeleteGuardianFormInput!
    $condition: ModelGuardianFormConditionInput
  ) {
    deleteGuardianForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createClemsonForm = /* GraphQL */ `
  mutation CreateClemsonForm(
    $input: CreateClemsonFormInput!
    $condition: ModelClemsonFormConditionInput
  ) {
    createClemsonForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateClemsonForm = /* GraphQL */ `
  mutation UpdateClemsonForm(
    $input: UpdateClemsonFormInput!
    $condition: ModelClemsonFormConditionInput
  ) {
    updateClemsonForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteClemsonForm = /* GraphQL */ `
  mutation DeleteClemsonForm(
    $input: DeleteClemsonFormInput!
    $condition: ModelClemsonFormConditionInput
  ) {
    deleteClemsonForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createSurgereForm = /* GraphQL */ `
  mutation CreateSurgereForm(
    $input: CreateSurgereFormInput!
    $condition: ModelSurgereFormConditionInput
  ) {
    createSurgereForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateSurgereForm = /* GraphQL */ `
  mutation UpdateSurgereForm(
    $input: UpdateSurgereFormInput!
    $condition: ModelSurgereFormConditionInput
  ) {
    updateSurgereForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteSurgereForm = /* GraphQL */ `
  mutation DeleteSurgereForm(
    $input: DeleteSurgereFormInput!
    $condition: ModelSurgereFormConditionInput
  ) {
    deleteSurgereForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createBoschForm = /* GraphQL */ `
  mutation CreateBoschForm(
    $input: CreateBoschFormInput!
    $condition: ModelBoschFormConditionInput
  ) {
    createBoschForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      topicOne
      topicTwo
      topicThree
      topicFour
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateBoschForm = /* GraphQL */ `
  mutation UpdateBoschForm(
    $input: UpdateBoschFormInput!
    $condition: ModelBoschFormConditionInput
  ) {
    updateBoschForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      topicOne
      topicTwo
      topicThree
      topicFour
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteBoschForm = /* GraphQL */ `
  mutation DeleteBoschForm(
    $input: DeleteBoschFormInput!
    $condition: ModelBoschFormConditionInput
  ) {
    deleteBoschForm(input: $input, condition: $condition) {
      name
      email
      company
      title
      topicOne
      topicTwo
      topicThree
      topicFour
      approved
      id
      createdAt
      updatedAt
    }
  }
`;
export const createEmailTracking = /* GraphQL */ `
  mutation CreateEmailTracking(
    $input: CreateEmailTrackingInput!
    $condition: ModelEmailTrackingConditionInput
  ) {
    createEmailTracking(input: $input, condition: $condition) {
      id
      email
      sent
      opened
      openedDate
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailTracking = /* GraphQL */ `
  mutation UpdateEmailTracking(
    $input: UpdateEmailTrackingInput!
    $condition: ModelEmailTrackingConditionInput
  ) {
    updateEmailTracking(input: $input, condition: $condition) {
      id
      email
      sent
      opened
      openedDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailTracking = /* GraphQL */ `
  mutation DeleteEmailTracking(
    $input: DeleteEmailTrackingInput!
    $condition: ModelEmailTrackingConditionInput
  ) {
    deleteEmailTracking(input: $input, condition: $condition) {
      id
      email
      sent
      opened
      openedDate
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
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
        paymentType
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        status
        createdOn
        updatedOn
        cPSFormUserId
      }
      savedCourses
      savedLessons
      savedArticles
      source
      achievements {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      cohorts {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      allAccess
      allAccessStartDate
      allAccessEndDate
      lessonsCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      learningPaths {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
        paymentType
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        status
        createdOn
        updatedOn
        cPSFormUserId
      }
      savedCourses
      savedLessons
      savedArticles
      source
      achievements {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      cohorts {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      allAccess
      allAccessStartDate
      allAccessEndDate
      lessonsCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      learningPaths {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
          thinkificId
          name
          title
          company
          email
          office
          bio
          interests
          goals
          cell
          picture
          linkedin
          location
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
            paymentType
            moreAboutYou
            elective
            optOut
            paymentConfirmation
            status
            createdOn
            updatedOn
            cPSFormUserId
          }
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          onboardingComplete
          onboardingCompleteDate
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          cohorts {
            nextToken
          }
          allAccess
          allAccessStartDate
          allAccessEndDate
          lessonsCompleted {
            nextToken
          }
          learningPaths {
            nextToken
          }
          createdAt
          updatedAt
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
        paymentType
        moreAboutYou
        elective
        optOut
        paymentConfirmation
        status
        createdOn
        updatedOn
        cPSFormUserId
      }
      savedCourses
      savedLessons
      savedArticles
      source
      achievements {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      cohorts {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      allAccess
      allAccessStartDate
      allAccessEndDate
      lessonsCompleted {
        items {
          id
          lessonId
          userId
          lesson {
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
            screengrab
            createdAt
            updatedAt
            lessonAnalysisId
          }
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      learningPaths {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
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
export const createCohort = /* GraphQL */ `
  mutation CreateCohort(
    $input: CreateCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    createCohort(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      deadline
      users {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
    }
  }
`;
export const updateCohort = /* GraphQL */ `
  mutation UpdateCohort(
    $input: UpdateCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    updateCohort(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      deadline
      users {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
    }
  }
`;
export const deleteCohort = /* GraphQL */ `
  mutation DeleteCohort(
    $input: DeleteCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    deleteCohort(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      deadline
      users {
        items {
          id
          userId
          cohortId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          cohort {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
    }
  }
`;
export const createLearningPath = /* GraphQL */ `
  mutation CreateLearningPath(
    $input: CreateLearningPathInput!
    $condition: ModelLearningPathConditionInput
  ) {
    createLearningPath(input: $input, condition: $condition) {
      id
      title
      description
      courses {
        items {
          id
          courseId
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
        }
        nextToken
      }
      users {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      hours
      slug
      createdAt
      updatedAt
    }
  }
`;
export const updateLearningPath = /* GraphQL */ `
  mutation UpdateLearningPath(
    $input: UpdateLearningPathInput!
    $condition: ModelLearningPathConditionInput
  ) {
    updateLearningPath(input: $input, condition: $condition) {
      id
      title
      description
      courses {
        items {
          id
          courseId
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
        }
        nextToken
      }
      users {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      hours
      slug
      createdAt
      updatedAt
    }
  }
`;
export const deleteLearningPath = /* GraphQL */ `
  mutation DeleteLearningPath(
    $input: DeleteLearningPathInput!
    $condition: ModelLearningPathConditionInput
  ) {
    deleteLearningPath(input: $input, condition: $condition) {
      id
      title
      description
      courses {
        items {
          id
          courseId
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
        }
        nextToken
      }
      users {
        items {
          id
          userId
          learningPathId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      hours
      slug
      createdAt
      updatedAt
    }
  }
`;
export const createLearningPathCourse = /* GraphQL */ `
  mutation CreateLearningPathCourse(
    $input: CreateLearningPathCourseInput!
    $condition: ModelLearningPathCourseConditionInput
  ) {
    createLearningPathCourse(input: $input, condition: $condition) {
      id
      courseId
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
    }
  }
`;
export const updateLearningPathCourse = /* GraphQL */ `
  mutation UpdateLearningPathCourse(
    $input: UpdateLearningPathCourseInput!
    $condition: ModelLearningPathCourseConditionInput
  ) {
    updateLearningPathCourse(input: $input, condition: $condition) {
      id
      courseId
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
    }
  }
`;
export const deleteLearningPathCourse = /* GraphQL */ `
  mutation DeleteLearningPathCourse(
    $input: DeleteLearningPathCourseInput!
    $condition: ModelLearningPathCourseConditionInput
  ) {
    deleteLearningPathCourse(input: $input, condition: $condition) {
      id
      courseId
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
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
      certificateObjectSessionsId
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
      certificateObjectSessionsId
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
      certificateObjectSessionsId
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
      paymentType
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
      paymentType
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
      paymentType
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
export const createApplicationStart = /* GraphQL */ `
  mutation CreateApplicationStart(
    $input: CreateApplicationStartInput!
    $condition: ModelApplicationStartConditionInput
  ) {
    createApplicationStart(input: $input, condition: $condition) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const updateApplicationStart = /* GraphQL */ `
  mutation UpdateApplicationStart(
    $input: UpdateApplicationStartInput!
    $condition: ModelApplicationStartConditionInput
  ) {
    updateApplicationStart(input: $input, condition: $condition) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const deleteApplicationStart = /* GraphQL */ `
  mutation DeleteApplicationStart(
    $input: DeleteApplicationStartInput!
    $condition: ModelApplicationStartConditionInput
  ) {
    deleteApplicationStart(input: $input, condition: $condition) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const createCertAppStart = /* GraphQL */ `
  mutation CreateCertAppStart(
    $input: CreateCertAppStartInput!
    $condition: ModelCertAppStartConditionInput
  ) {
    createCertAppStart(input: $input, condition: $condition) {
      id
      type
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      country
      ipAddress
      updatedAt
    }
  }
`;
export const updateCertAppStart = /* GraphQL */ `
  mutation UpdateCertAppStart(
    $input: UpdateCertAppStartInput!
    $condition: ModelCertAppStartConditionInput
  ) {
    updateCertAppStart(input: $input, condition: $condition) {
      id
      type
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      country
      ipAddress
      updatedAt
    }
  }
`;
export const deleteCertAppStart = /* GraphQL */ `
  mutation DeleteCertAppStart(
    $input: DeleteCertAppStartInput!
    $condition: ModelCertAppStartConditionInput
  ) {
    deleteCertAppStart(input: $input, condition: $condition) {
      id
      type
      createdAt
      firstName
      lastName
      email
      phone
      source
      sourceUrl
      country
      ipAddress
      updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
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
export const createLMSCourse = /* GraphQL */ `
  mutation CreateLMSCourse(
    $input: CreateLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    createLMSCourse(input: $input, condition: $condition) {
      id
      thinkificId
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
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
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
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
      thinkificId
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
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
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
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
      thinkificId
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
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
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
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
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cohorts {
        items {
          id
          name
          startDate
          endDate
          deadline
          users {
            nextToken
          }
          type
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          description
          link
          createdAt
          updatedAt
          instructorCohortsId
          cohortInstructorId
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
      name
      image
      bio
      linkedIn
      company
      title
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cohorts {
        items {
          id
          name
          startDate
          endDate
          deadline
          users {
            nextToken
          }
          type
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          description
          link
          createdAt
          updatedAt
          instructorCohortsId
          cohortInstructorId
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
      name
      image
      bio
      linkedIn
      company
      title
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            thinkificId
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
            shortDescription
            subscriptionLink
            subscriptionPrice
            stripeLink
            callout
            createdAt
            updatedAt
          }
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cohorts {
        items {
          id
          name
          startDate
          endDate
          deadline
          users {
            nextToken
          }
          type
          instructor {
            id
            userId
            name
            image
            bio
            linkedIn
            company
            title
            createdAt
            updatedAt
          }
          description
          link
          createdAt
          updatedAt
          instructorCohortsId
          cohortInstructorId
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const createIncludedCourse = /* GraphQL */ `
  mutation CreateIncludedCourse(
    $input: CreateIncludedCourseInput!
    $condition: ModelIncludedCourseConditionInput
  ) {
    createIncludedCourse(input: $input, condition: $condition) {
      id
      courseId
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const updateIncludedCourse = /* GraphQL */ `
  mutation UpdateIncludedCourse(
    $input: UpdateIncludedCourseInput!
    $condition: ModelIncludedCourseConditionInput
  ) {
    updateIncludedCourse(input: $input, condition: $condition) {
      id
      courseId
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const deleteIncludedCourse = /* GraphQL */ `
  mutation DeleteIncludedCourse(
    $input: DeleteIncludedCourseInput!
    $condition: ModelIncludedCourseConditionInput
  ) {
    deleteIncludedCourse(input: $input, condition: $condition) {
      id
      courseId
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
        pscourses {
          items {
            id
            courseId
            customerId
            createdAt
            updatedAt
          }
          nextToken
        }
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
      pscourses {
        items {
          id
          courseId
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
      pscourses {
        items {
          id
          courseId
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
      pscourses {
        items {
          id
          courseId
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
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      clientCourses
      pschoolCourses
      addOns
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
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      clientCourses
      pschoolCourses
      addOns
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
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      clientCourses
      pschoolCourses
      addOns
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
      type
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
      type
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
      type
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
      nextPath
      format
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
      nextPath
      format
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
      nextPath
      format
      createdAt
      updatedAt
    }
  }
`;
export const createSalesbarClick = /* GraphQL */ `
  mutation CreateSalesbarClick(
    $input: CreateSalesbarClickInput!
    $condition: ModelSalesbarClickConditionInput
  ) {
    createSalesbarClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateSalesbarClick = /* GraphQL */ `
  mutation UpdateSalesbarClick(
    $input: UpdateSalesbarClickInput!
    $condition: ModelSalesbarClickConditionInput
  ) {
    updateSalesbarClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteSalesbarClick = /* GraphQL */ `
  mutation DeleteSalesbarClick(
    $input: DeleteSalesbarClickInput!
    $condition: ModelSalesbarClickConditionInput
  ) {
    deleteSalesbarClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      link
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
      format
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
      format
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
      format
      createdAt
      updatedAt
    }
  }
`;
export const createCourseSearch = /* GraphQL */ `
  mutation CreateCourseSearch(
    $input: CreateCourseSearchInput!
    $condition: ModelCourseSearchConditionInput
  ) {
    createCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseSearch = /* GraphQL */ `
  mutation UpdateCourseSearch(
    $input: UpdateCourseSearchInput!
    $condition: ModelCourseSearchConditionInput
  ) {
    updateCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseSearch = /* GraphQL */ `
  mutation DeleteCourseSearch(
    $input: DeleteCourseSearchInput!
    $condition: ModelCourseSearchConditionInput
  ) {
    deleteCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const createCyberMondayClick = /* GraphQL */ `
  mutation CreateCyberMondayClick(
    $input: CreateCyberMondayClickInput!
    $condition: ModelCyberMondayClickConditionInput
  ) {
    createCyberMondayClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      createdAt
      updatedAt
    }
  }
`;
export const updateCyberMondayClick = /* GraphQL */ `
  mutation UpdateCyberMondayClick(
    $input: UpdateCyberMondayClickInput!
    $condition: ModelCyberMondayClickConditionInput
  ) {
    updateCyberMondayClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      createdAt
      updatedAt
    }
  }
`;
export const deleteCyberMondayClick = /* GraphQL */ `
  mutation DeleteCyberMondayClick(
    $input: DeleteCyberMondayClickInput!
    $condition: ModelCyberMondayClickConditionInput
  ) {
    deleteCyberMondayClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      createdAt
      updatedAt
    }
  }
`;
export const createAPSPresentationClick = /* GraphQL */ `
  mutation CreateAPSPresentationClick(
    $input: CreateAPSPresentationClickInput!
    $condition: ModelAPSPresentationClickConditionInput
  ) {
    createAPSPresentationClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateAPSPresentationClick = /* GraphQL */ `
  mutation UpdateAPSPresentationClick(
    $input: UpdateAPSPresentationClickInput!
    $condition: ModelAPSPresentationClickConditionInput
  ) {
    updateAPSPresentationClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteAPSPresentationClick = /* GraphQL */ `
  mutation DeleteAPSPresentationClick(
    $input: DeleteAPSPresentationClickInput!
    $condition: ModelAPSPresentationClickConditionInput
  ) {
    deleteAPSPresentationClick(input: $input, condition: $condition) {
      id
      object
      ipAddress
      country
      device
      email
      createdAt
      updatedAt
    }
  }
`;
export const createCategoryClick = /* GraphQL */ `
  mutation CreateCategoryClick(
    $input: CreateCategoryClickInput!
    $condition: ModelCategoryClickConditionInput
  ) {
    createCategoryClick(input: $input, condition: $condition) {
      id
      category
      ipAddress
      country
      device
      email
      page
      createdAt
      updatedAt
    }
  }
`;
export const updateCategoryClick = /* GraphQL */ `
  mutation UpdateCategoryClick(
    $input: UpdateCategoryClickInput!
    $condition: ModelCategoryClickConditionInput
  ) {
    updateCategoryClick(input: $input, condition: $condition) {
      id
      category
      ipAddress
      country
      device
      email
      page
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategoryClick = /* GraphQL */ `
  mutation DeleteCategoryClick(
    $input: DeleteCategoryClickInput!
    $condition: ModelCategoryClickConditionInput
  ) {
    deleteCategoryClick(input: $input, condition: $condition) {
      id
      category
      ipAddress
      country
      device
      email
      page
      createdAt
      updatedAt
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
export const createIndiaClick = /* GraphQL */ `
  mutation CreateIndiaClick(
    $input: CreateIndiaClickInput!
    $condition: ModelIndiaClickConditionInput
  ) {
    createIndiaClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      nextPath
      format
      createdAt
      updatedAt
    }
  }
`;
export const updateIndiaClick = /* GraphQL */ `
  mutation UpdateIndiaClick(
    $input: UpdateIndiaClickInput!
    $condition: ModelIndiaClickConditionInput
  ) {
    updateIndiaClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      nextPath
      format
      createdAt
      updatedAt
    }
  }
`;
export const deleteIndiaClick = /* GraphQL */ `
  mutation DeleteIndiaClick(
    $input: DeleteIndiaClickInput!
    $condition: ModelIndiaClickConditionInput
  ) {
    deleteIndiaClick(input: $input, condition: $condition) {
      id
      courseID
      page
      ipAddress
      country
      lat
      long
      referrer
      nextPath
      format
      createdAt
      updatedAt
    }
  }
`;
export const createIndiaCourseSearch = /* GraphQL */ `
  mutation CreateIndiaCourseSearch(
    $input: CreateIndiaCourseSearchInput!
    $condition: ModelIndiaCourseSearchConditionInput
  ) {
    createIndiaCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateIndiaCourseSearch = /* GraphQL */ `
  mutation UpdateIndiaCourseSearch(
    $input: UpdateIndiaCourseSearchInput!
    $condition: ModelIndiaCourseSearchConditionInput
  ) {
    updateIndiaCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteIndiaCourseSearch = /* GraphQL */ `
  mutation DeleteIndiaCourseSearch(
    $input: DeleteIndiaCourseSearchInput!
    $condition: ModelIndiaCourseSearchConditionInput
  ) {
    deleteIndiaCourseSearch(input: $input, condition: $condition) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const createIndexTemplate = /* GraphQL */ `
  mutation CreateIndexTemplate(
    $input: CreateIndexTemplateInput!
    $condition: ModelIndexTemplateConditionInput
  ) {
    createIndexTemplate(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      authors {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      rows {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const updateIndexTemplate = /* GraphQL */ `
  mutation UpdateIndexTemplate(
    $input: UpdateIndexTemplateInput!
    $condition: ModelIndexTemplateConditionInput
  ) {
    updateIndexTemplate(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      authors {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      rows {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const deleteIndexTemplate = /* GraphQL */ `
  mutation DeleteIndexTemplate(
    $input: DeleteIndexTemplateInput!
    $condition: ModelIndexTemplateConditionInput
  ) {
    deleteIndexTemplate(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      authors {
        items {
          id
          authorId
          indexTemplateId
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
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      rows {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const createIndexRow = /* GraphQL */ `
  mutation CreateIndexRow(
    $input: CreateIndexRowInput!
    $condition: ModelIndexRowConditionInput
  ) {
    createIndexRow(input: $input, condition: $condition) {
      id
      headline
      subhead
      type
      content
      templates {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const updateIndexRow = /* GraphQL */ `
  mutation UpdateIndexRow(
    $input: UpdateIndexRowInput!
    $condition: ModelIndexRowConditionInput
  ) {
    updateIndexRow(input: $input, condition: $condition) {
      id
      headline
      subhead
      type
      content
      templates {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const deleteIndexRow = /* GraphQL */ `
  mutation DeleteIndexRow(
    $input: DeleteIndexRowInput!
    $condition: ModelIndexRowConditionInput
  ) {
    deleteIndexRow(input: $input, condition: $condition) {
      id
      headline
      subhead
      type
      content
      templates {
        items {
          id
          indexTemplateId
          indexRowId
          indexTemplate {
            id
            slug
            title
            subhead
            createdAt
            updatedAt
          }
          indexRow {
            id
            headline
            subhead
            type
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
export const createIndexPage = /* GraphQL */ `
  mutation CreateIndexPage(
    $input: CreateIndexPageInput!
    $condition: ModelIndexPageConditionInput
  ) {
    createIndexPage(input: $input, condition: $condition) {
      id
      content
      seoImage
      slug
      discount
      status
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateIndexPage = /* GraphQL */ `
  mutation UpdateIndexPage(
    $input: UpdateIndexPageInput!
    $condition: ModelIndexPageConditionInput
  ) {
    updateIndexPage(input: $input, condition: $condition) {
      id
      content
      seoImage
      slug
      discount
      status
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteIndexPage = /* GraphQL */ `
  mutation DeleteIndexPage(
    $input: DeleteIndexPageInput!
    $condition: ModelIndexPageConditionInput
  ) {
    deleteIndexPage(input: $input, condition: $condition) {
      id
      content
      seoImage
      slug
      discount
      status
      type
      createdAt
      updatedAt
    }
  }
`;
export const createFaq = /* GraphQL */ `
  mutation CreateFaq(
    $input: CreateFaqInput!
    $condition: ModelFaqConditionInput
  ) {
    createFaq(input: $input, condition: $condition) {
      id
      question
      answer
      type
      order
      createdAt
      updatedAt
    }
  }
`;
export const updateFaq = /* GraphQL */ `
  mutation UpdateFaq(
    $input: UpdateFaqInput!
    $condition: ModelFaqConditionInput
  ) {
    updateFaq(input: $input, condition: $condition) {
      id
      question
      answer
      type
      order
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaq = /* GraphQL */ `
  mutation DeleteFaq(
    $input: DeleteFaqInput!
    $condition: ModelFaqConditionInput
  ) {
    deleteFaq(input: $input, condition: $condition) {
      id
      question
      answer
      type
      order
      createdAt
      updatedAt
    }
  }
`;
export const createEventTemplate = /* GraphQL */ `
  mutation CreateEventTemplate(
    $input: CreateEventTemplateInput!
    $condition: ModelEventTemplateConditionInput
  ) {
    createEventTemplate(input: $input, condition: $condition) {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      photos {
        items {
          id
          photo
          caption
          uploadedBy
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePhotosId
        }
        nextToken
      }
      presentations {
        items {
          id
          presentation
          hero
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePresentationsId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      slug
      logo
      clicks {
        items {
          id
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          page
          ipAddress
          country
          email
          type
          object
          objectId
          createdAt
          updatedAt
          eventTemplateClicksId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateAgendaId
    }
  }
`;
export const updateEventTemplate = /* GraphQL */ `
  mutation UpdateEventTemplate(
    $input: UpdateEventTemplateInput!
    $condition: ModelEventTemplateConditionInput
  ) {
    updateEventTemplate(input: $input, condition: $condition) {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      photos {
        items {
          id
          photo
          caption
          uploadedBy
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePhotosId
        }
        nextToken
      }
      presentations {
        items {
          id
          presentation
          hero
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePresentationsId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      slug
      logo
      clicks {
        items {
          id
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          page
          ipAddress
          country
          email
          type
          object
          objectId
          createdAt
          updatedAt
          eventTemplateClicksId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateAgendaId
    }
  }
`;
export const deleteEventTemplate = /* GraphQL */ `
  mutation DeleteEventTemplate(
    $input: DeleteEventTemplateInput!
    $condition: ModelEventTemplateConditionInput
  ) {
    deleteEventTemplate(input: $input, condition: $condition) {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      photos {
        items {
          id
          photo
          caption
          uploadedBy
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePhotosId
        }
        nextToken
      }
      presentations {
        items {
          id
          presentation
          hero
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventTemplatePresentationsId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      slug
      logo
      clicks {
        items {
          id
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          page
          ipAddress
          country
          email
          type
          object
          objectId
          createdAt
          updatedAt
          eventTemplateClicksId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateAgendaId
    }
  }
`;
export const createEventPhoto = /* GraphQL */ `
  mutation CreateEventPhoto(
    $input: CreateEventPhotoInput!
    $condition: ModelEventPhotoConditionInput
  ) {
    createEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePhotosId
    }
  }
`;
export const updateEventPhoto = /* GraphQL */ `
  mutation UpdateEventPhoto(
    $input: UpdateEventPhotoInput!
    $condition: ModelEventPhotoConditionInput
  ) {
    updateEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePhotosId
    }
  }
`;
export const deleteEventPhoto = /* GraphQL */ `
  mutation DeleteEventPhoto(
    $input: DeleteEventPhotoInput!
    $condition: ModelEventPhotoConditionInput
  ) {
    deleteEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePhotosId
    }
  }
`;
export const createUserEventPhoto = /* GraphQL */ `
  mutation CreateUserEventPhoto(
    $input: CreateUserEventPhotoInput!
    $condition: ModelUserEventPhotoConditionInput
  ) {
    createUserEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      eventID
      event
      approved
      approvedId
      createdAt
      updatedAt
    }
  }
`;
export const updateUserEventPhoto = /* GraphQL */ `
  mutation UpdateUserEventPhoto(
    $input: UpdateUserEventPhotoInput!
    $condition: ModelUserEventPhotoConditionInput
  ) {
    updateUserEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      eventID
      event
      approved
      approvedId
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserEventPhoto = /* GraphQL */ `
  mutation DeleteUserEventPhoto(
    $input: DeleteUserEventPhotoInput!
    $condition: ModelUserEventPhotoConditionInput
  ) {
    deleteUserEventPhoto(input: $input, condition: $condition) {
      id
      photo
      caption
      uploadedBy
      eventID
      event
      approved
      approvedId
      createdAt
      updatedAt
    }
  }
`;
export const createEventPresentation = /* GraphQL */ `
  mutation CreateEventPresentation(
    $input: CreateEventPresentationInput!
    $condition: ModelEventPresentationConditionInput
  ) {
    createEventPresentation(input: $input, condition: $condition) {
      id
      presentation
      hero
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePresentationsId
    }
  }
`;
export const updateEventPresentation = /* GraphQL */ `
  mutation UpdateEventPresentation(
    $input: UpdateEventPresentationInput!
    $condition: ModelEventPresentationConditionInput
  ) {
    updateEventPresentation(input: $input, condition: $condition) {
      id
      presentation
      hero
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePresentationsId
    }
  }
`;
export const deleteEventPresentation = /* GraphQL */ `
  mutation DeleteEventPresentation(
    $input: DeleteEventPresentationInput!
    $condition: ModelEventPresentationConditionInput
  ) {
    deleteEventPresentation(input: $input, condition: $condition) {
      id
      presentation
      hero
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventTemplatePresentationsId
    }
  }
`;
export const createEventAgenda = /* GraphQL */ `
  mutation CreateEventAgenda(
    $input: CreateEventAgendaInput!
    $condition: ModelEventAgendaConditionInput
  ) {
    createEventAgenda(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventAgendaEventId
    }
  }
`;
export const updateEventAgenda = /* GraphQL */ `
  mutation UpdateEventAgenda(
    $input: UpdateEventAgendaInput!
    $condition: ModelEventAgendaConditionInput
  ) {
    updateEventAgenda(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventAgendaEventId
    }
  }
`;
export const deleteEventAgenda = /* GraphQL */ `
  mutation DeleteEventAgenda(
    $input: DeleteEventAgendaInput!
    $condition: ModelEventAgendaConditionInput
  ) {
    deleteEventAgenda(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      createdAt
      updatedAt
      eventAgendaEventId
    }
  }
`;
export const createEventAgendaItem = /* GraphQL */ `
  mutation CreateEventAgendaItem(
    $input: CreateEventAgendaItemInput!
    $condition: ModelEventAgendaItemConditionInput
  ) {
    createEventAgendaItem(input: $input, condition: $condition) {
      id
      title
      description
      location
      type
      start
      end
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      createdAt
      updatedAt
      eventAgendaItemsId
      eventSpeakerAgendaItemsId
    }
  }
`;
export const updateEventAgendaItem = /* GraphQL */ `
  mutation UpdateEventAgendaItem(
    $input: UpdateEventAgendaItemInput!
    $condition: ModelEventAgendaItemConditionInput
  ) {
    updateEventAgendaItem(input: $input, condition: $condition) {
      id
      title
      description
      location
      type
      start
      end
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      createdAt
      updatedAt
      eventAgendaItemsId
      eventSpeakerAgendaItemsId
    }
  }
`;
export const deleteEventAgendaItem = /* GraphQL */ `
  mutation DeleteEventAgendaItem(
    $input: DeleteEventAgendaItemInput!
    $condition: ModelEventAgendaItemConditionInput
  ) {
    deleteEventAgendaItem(input: $input, condition: $condition) {
      id
      title
      description
      location
      type
      start
      end
      speakers {
        items {
          id
          name
          title
          company
          email
          image
          logo
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          agendaItems {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateSpeakersId
          eventAgendaItemSpeakersId
        }
        nextToken
      }
      agenda {
        id
        items {
          items {
            id
            title
            description
            location
            type
            start
            end
            createdAt
            updatedAt
            eventAgendaItemsId
            eventSpeakerAgendaItemsId
          }
          nextToken
        }
        event {
          id
          title
          startDate
          endDate
          description
          location
          hero
          link
          photos {
            nextToken
          }
          presentations {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          speakers {
            nextToken
          }
          slug
          logo
          clicks {
            nextToken
          }
          createdAt
          updatedAt
          eventTemplateAgendaId
        }
        createdAt
        updatedAt
        eventAgendaEventId
      }
      createdAt
      updatedAt
      eventAgendaItemsId
      eventSpeakerAgendaItemsId
    }
  }
`;
export const createEventSpeaker = /* GraphQL */ `
  mutation CreateEventSpeaker(
    $input: CreateEventSpeakerInput!
    $condition: ModelEventSpeakerConditionInput
  ) {
    createEventSpeaker(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      image
      logo
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      agendaItems {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateSpeakersId
      eventAgendaItemSpeakersId
    }
  }
`;
export const updateEventSpeaker = /* GraphQL */ `
  mutation UpdateEventSpeaker(
    $input: UpdateEventSpeakerInput!
    $condition: ModelEventSpeakerConditionInput
  ) {
    updateEventSpeaker(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      image
      logo
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      agendaItems {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateSpeakersId
      eventAgendaItemSpeakersId
    }
  }
`;
export const deleteEventSpeaker = /* GraphQL */ `
  mutation DeleteEventSpeaker(
    $input: DeleteEventSpeakerInput!
    $condition: ModelEventSpeakerConditionInput
  ) {
    deleteEventSpeaker(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      image
      logo
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      agendaItems {
        items {
          id
          title
          description
          location
          type
          start
          end
          speakers {
            nextToken
          }
          agenda {
            id
            createdAt
            updatedAt
            eventAgendaEventId
          }
          createdAt
          updatedAt
          eventAgendaItemsId
          eventSpeakerAgendaItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      eventTemplateSpeakersId
      eventAgendaItemSpeakersId
    }
  }
`;
export const createEventClick = /* GraphQL */ `
  mutation CreateEventClick(
    $input: CreateEventClickInput!
    $condition: ModelEventClickConditionInput
  ) {
    createEventClick(input: $input, condition: $condition) {
      id
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      page
      ipAddress
      country
      email
      type
      object
      objectId
      createdAt
      updatedAt
      eventTemplateClicksId
    }
  }
`;
export const updateEventClick = /* GraphQL */ `
  mutation UpdateEventClick(
    $input: UpdateEventClickInput!
    $condition: ModelEventClickConditionInput
  ) {
    updateEventClick(input: $input, condition: $condition) {
      id
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      page
      ipAddress
      country
      email
      type
      object
      objectId
      createdAt
      updatedAt
      eventTemplateClicksId
    }
  }
`;
export const deleteEventClick = /* GraphQL */ `
  mutation DeleteEventClick(
    $input: DeleteEventClickInput!
    $condition: ModelEventClickConditionInput
  ) {
    deleteEventClick(input: $input, condition: $condition) {
      id
      event {
        id
        title
        startDate
        endDate
        description
        location
        hero
        link
        photos {
          items {
            id
            photo
            caption
            uploadedBy
            createdAt
            updatedAt
            eventTemplatePhotosId
          }
          nextToken
        }
        presentations {
          items {
            id
            presentation
            hero
            createdAt
            updatedAt
            eventTemplatePresentationsId
          }
          nextToken
        }
        agenda {
          id
          items {
            nextToken
          }
          event {
            id
            title
            startDate
            endDate
            description
            location
            hero
            link
            slug
            logo
            createdAt
            updatedAt
            eventTemplateAgendaId
          }
          createdAt
          updatedAt
          eventAgendaEventId
        }
        speakers {
          items {
            id
            name
            title
            company
            email
            image
            logo
            createdAt
            updatedAt
            eventTemplateSpeakersId
            eventAgendaItemSpeakersId
          }
          nextToken
        }
        slug
        logo
        clicks {
          items {
            id
            page
            ipAddress
            country
            email
            type
            object
            objectId
            createdAt
            updatedAt
            eventTemplateClicksId
          }
          nextToken
        }
        createdAt
        updatedAt
        eventTemplateAgendaId
      }
      page
      ipAddress
      country
      email
      type
      object
      objectId
      createdAt
      updatedAt
      eventTemplateClicksId
    }
  }
`;
export const createCertificateClick = /* GraphQL */ `
  mutation CreateCertificateClick(
    $input: CreateCertificateClickInput!
    $condition: ModelCertificateClickConditionInput
  ) {
    createCertificateClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      object
      device
      createdAt
      updatedAt
    }
  }
`;
export const updateCertificateClick = /* GraphQL */ `
  mutation UpdateCertificateClick(
    $input: UpdateCertificateClickInput!
    $condition: ModelCertificateClickConditionInput
  ) {
    updateCertificateClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      object
      device
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertificateClick = /* GraphQL */ `
  mutation DeleteCertificateClick(
    $input: DeleteCertificateClickInput!
    $condition: ModelCertificateClickConditionInput
  ) {
    deleteCertificateClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      object
      device
      createdAt
      updatedAt
    }
  }
`;
export const createIndexClick = /* GraphQL */ `
  mutation CreateIndexClick(
    $input: CreateIndexClickInput!
    $condition: ModelIndexClickConditionInput
  ) {
    createIndexClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      device
      createdAt
      updatedAt
    }
  }
`;
export const updateIndexClick = /* GraphQL */ `
  mutation UpdateIndexClick(
    $input: UpdateIndexClickInput!
    $condition: ModelIndexClickConditionInput
  ) {
    updateIndexClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      device
      createdAt
      updatedAt
    }
  }
`;
export const deleteIndexClick = /* GraphQL */ `
  mutation DeleteIndexClick(
    $input: DeleteIndexClickInput!
    $condition: ModelIndexClickConditionInput
  ) {
    deleteIndexClick(input: $input, condition: $condition) {
      id
      page
      ipAddress
      country
      type
      device
      createdAt
      updatedAt
    }
  }
`;
export const createEmailSubscription = /* GraphQL */ `
  mutation CreateEmailSubscription(
    $input: CreateEmailSubscriptionInput!
    $condition: ModelEmailSubscriptionConditionInput
  ) {
    createEmailSubscription(input: $input, condition: $condition) {
      id
      email
      ipAddress
      country
      device
      page
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailSubscription = /* GraphQL */ `
  mutation UpdateEmailSubscription(
    $input: UpdateEmailSubscriptionInput!
    $condition: ModelEmailSubscriptionConditionInput
  ) {
    updateEmailSubscription(input: $input, condition: $condition) {
      id
      email
      ipAddress
      country
      device
      page
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailSubscription = /* GraphQL */ `
  mutation DeleteEmailSubscription(
    $input: DeleteEmailSubscriptionInput!
    $condition: ModelEmailSubscriptionConditionInput
  ) {
    deleteEmailSubscription(input: $input, condition: $condition) {
      id
      email
      ipAddress
      country
      device
      page
      createdAt
      updatedAt
    }
  }
`;
export const createImageObject = /* GraphQL */ `
  mutation CreateImageObject(
    $input: CreateImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    createImageObject(input: $input, condition: $condition) {
      id
      url
      caption
      uploadedBy
      alt
      createdAt
      updatedAt
    }
  }
`;
export const updateImageObject = /* GraphQL */ `
  mutation UpdateImageObject(
    $input: UpdateImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    updateImageObject(input: $input, condition: $condition) {
      id
      url
      caption
      uploadedBy
      alt
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageObject = /* GraphQL */ `
  mutation DeleteImageObject(
    $input: DeleteImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    deleteImageObject(input: $input, condition: $condition) {
      id
      url
      caption
      uploadedBy
      alt
      createdAt
      updatedAt
    }
  }
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
      id
      email
      name
      company
      title
      phone
      address
      zip
      state
      city
      country
      code
      status
      total
      subtotal
      shippingMethod
      shipping
      tax
      items
      paymentConfirmation
      paymentMethod
      paymentLast4
      printfulConfirmed
      printfulOrderId
      createdAt
      updatedAt
    }
  }
`;
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
      id
      email
      name
      company
      title
      phone
      address
      zip
      state
      city
      country
      code
      status
      total
      subtotal
      shippingMethod
      shipping
      tax
      items
      paymentConfirmation
      paymentMethod
      paymentLast4
      printfulConfirmed
      printfulOrderId
      createdAt
      updatedAt
    }
  }
`;
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
      id
      email
      name
      company
      title
      phone
      address
      zip
      state
      city
      country
      code
      status
      total
      subtotal
      shippingMethod
      shipping
      tax
      items
      paymentConfirmation
      paymentMethod
      paymentLast4
      printfulConfirmed
      printfulOrderId
      createdAt
      updatedAt
    }
  }
`;
export const createAnalysis = /* GraphQL */ `
  mutation CreateAnalysis(
    $input: CreateAnalysisInput!
    $condition: ModelAnalysisConditionInput
  ) {
    createAnalysis(input: $input, condition: $condition) {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const updateAnalysis = /* GraphQL */ `
  mutation UpdateAnalysis(
    $input: UpdateAnalysisInput!
    $condition: ModelAnalysisConditionInput
  ) {
    updateAnalysis(input: $input, condition: $condition) {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnalysis = /* GraphQL */ `
  mutation DeleteAnalysis(
    $input: DeleteAnalysisInput!
    $condition: ModelAnalysisConditionInput
  ) {
    deleteAnalysis(input: $input, condition: $condition) {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const createAchievement = /* GraphQL */ `
  mutation CreateAchievement(
    $input: CreateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    createAchievement(input: $input, condition: $condition) {
      id
      title
      description
      image
      courses
      coursesRequired
      users {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
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
export const updateAchievement = /* GraphQL */ `
  mutation UpdateAchievement(
    $input: UpdateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    updateAchievement(input: $input, condition: $condition) {
      id
      title
      description
      image
      courses
      coursesRequired
      users {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
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
export const deleteAchievement = /* GraphQL */ `
  mutation DeleteAchievement(
    $input: DeleteAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    deleteAchievement(input: $input, condition: $condition) {
      id
      title
      description
      image
      courses
      coursesRequired
      users {
        items {
          id
          userId
          achievementId
          user {
            id
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
          }
          achievement {
            id
            title
            description
            image
            courses
            coursesRequired
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
export const createLessonTags = /* GraphQL */ `
  mutation CreateLessonTags(
    $input: CreateLessonTagsInput!
    $condition: ModelLessonTagsConditionInput
  ) {
    createLessonTags(input: $input, condition: $condition) {
      id
      tagsId
      lessonId
      tags {
        id
        tag
        lesson {
          items {
            id
            tagsId
            lessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLessonTags = /* GraphQL */ `
  mutation UpdateLessonTags(
    $input: UpdateLessonTagsInput!
    $condition: ModelLessonTagsConditionInput
  ) {
    updateLessonTags(input: $input, condition: $condition) {
      id
      tagsId
      lessonId
      tags {
        id
        tag
        lesson {
          items {
            id
            tagsId
            lessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLessonTags = /* GraphQL */ `
  mutation DeleteLessonTags(
    $input: DeleteLessonTagsInput!
    $condition: ModelLessonTagsConditionInput
  ) {
    deleteLessonTags(input: $input, condition: $condition) {
      id
      tagsId
      lessonId
      tags {
        id
        tag
        lesson {
          items {
            id
            tagsId
            lessonId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCertificateByCategory = /* GraphQL */ `
  mutation CreateCertificateByCategory(
    $input: CreateCertificateByCategoryInput!
    $condition: ModelCertificateByCategoryConditionInput
  ) {
    createCertificateByCategory(input: $input, condition: $condition) {
      id
      categoryId
      certificateObjectId
      category {
        id
        name
        value
        certificates {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificateObject {
        id
        courseId
        title
        description
        seoImage
        hours
        courses
        video
        price
        link
        applicationLink
        callout
        purchaseLink
        categoryArray
        abbreviation
        category {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        whereText
        whatText
        howText
        deadline
        sessions {
          items {
            startDate
            endDate
            deadline
            title
            id
            createdAt
            updatedAt
            certificateObjectSessionsId
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
export const updateCertificateByCategory = /* GraphQL */ `
  mutation UpdateCertificateByCategory(
    $input: UpdateCertificateByCategoryInput!
    $condition: ModelCertificateByCategoryConditionInput
  ) {
    updateCertificateByCategory(input: $input, condition: $condition) {
      id
      categoryId
      certificateObjectId
      category {
        id
        name
        value
        certificates {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificateObject {
        id
        courseId
        title
        description
        seoImage
        hours
        courses
        video
        price
        link
        applicationLink
        callout
        purchaseLink
        categoryArray
        abbreviation
        category {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        whereText
        whatText
        howText
        deadline
        sessions {
          items {
            startDate
            endDate
            deadline
            title
            id
            createdAt
            updatedAt
            certificateObjectSessionsId
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
export const deleteCertificateByCategory = /* GraphQL */ `
  mutation DeleteCertificateByCategory(
    $input: DeleteCertificateByCategoryInput!
    $condition: ModelCertificateByCategoryConditionInput
  ) {
    deleteCertificateByCategory(input: $input, condition: $condition) {
      id
      categoryId
      certificateObjectId
      category {
        id
        name
        value
        certificates {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificateObject {
        id
        courseId
        title
        description
        seoImage
        hours
        courses
        video
        price
        link
        applicationLink
        callout
        purchaseLink
        categoryArray
        abbreviation
        category {
          items {
            id
            categoryId
            certificateObjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        whereText
        whatText
        howText
        deadline
        sessions {
          items {
            startDate
            endDate
            deadline
            title
            id
            createdAt
            updatedAt
            certificateObjectSessionsId
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
        tags
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
        tags
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
        tags
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
export const createUserCompletedLessons = /* GraphQL */ `
  mutation CreateUserCompletedLessons(
    $input: CreateUserCompletedLessonsInput!
    $condition: ModelUserCompletedLessonsConditionInput
  ) {
    createUserCompletedLessons(input: $input, condition: $condition) {
      id
      lessonId
      userId
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
export const updateUserCompletedLessons = /* GraphQL */ `
  mutation UpdateUserCompletedLessons(
    $input: UpdateUserCompletedLessonsInput!
    $condition: ModelUserCompletedLessonsConditionInput
  ) {
    updateUserCompletedLessons(input: $input, condition: $condition) {
      id
      lessonId
      userId
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
export const deleteUserCompletedLessons = /* GraphQL */ `
  mutation DeleteUserCompletedLessons(
    $input: DeleteUserCompletedLessonsInput!
    $condition: ModelUserCompletedLessonsConditionInput
  ) {
    deleteUserCompletedLessons(input: $input, condition: $condition) {
      id
      lessonId
      userId
      lesson {
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
            tagsId
            lessonId
            createdAt
            updatedAt
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
        screengrab
        analysis {
          id
          wordCount
          readingTime
          quizQuestion
          quizOptions
          quizCorrectAnswer
          lessonId
          createdAt
          updatedAt
        }
        usersCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        lessonAnalysisId
      }
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
export const createAuthorTemplates = /* GraphQL */ `
  mutation CreateAuthorTemplates(
    $input: CreateAuthorTemplatesInput!
    $condition: ModelAuthorTemplatesConditionInput
  ) {
    createAuthorTemplates(input: $input, condition: $condition) {
      id
      authorId
      indexTemplateId
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        templates {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
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
export const updateAuthorTemplates = /* GraphQL */ `
  mutation UpdateAuthorTemplates(
    $input: UpdateAuthorTemplatesInput!
    $condition: ModelAuthorTemplatesConditionInput
  ) {
    updateAuthorTemplates(input: $input, condition: $condition) {
      id
      authorId
      indexTemplateId
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        templates {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
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
export const deleteAuthorTemplates = /* GraphQL */ `
  mutation DeleteAuthorTemplates(
    $input: DeleteAuthorTemplatesInput!
    $condition: ModelAuthorTemplatesConditionInput
  ) {
    deleteAuthorTemplates(input: $input, condition: $condition) {
      id
      authorId
      indexTemplateId
      author {
        id
        name
        headshot
        linkedIn
        title
        company
        templates {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
export const createApsRegistrantAddOns25 = /* GraphQL */ `
  mutation CreateApsRegistrantAddOns25(
    $input: CreateApsRegistrantAddOns25Input!
    $condition: ModelApsRegistrantAddOns25ConditionInput
  ) {
    createApsRegistrantAddOns25(input: $input, condition: $condition) {
      id
      aPSAddOn2025Id
      aPSRegistrant2025Id
      aPSAddOn2025 {
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        apsRegistrants {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        limit
        id
        createdAt
        updatedAt
      }
      aPSRegistrant2025 {
        id
        firstName
        lastName
        email
        phone
        company {
          name
          email
          apsRegistrants {
            nextToken
          }
          type
          registrants {
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        speedNetworking
        speedNetworkingStatus
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        addOns {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        morrisetteTransportation
        morrisetteStatus
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        magnaStatus
        magnaTransportation
        aristoStatus
        aristoTransportation
        bio
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSCompanyRegistrantsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateApsRegistrantAddOns25 = /* GraphQL */ `
  mutation UpdateApsRegistrantAddOns25(
    $input: UpdateApsRegistrantAddOns25Input!
    $condition: ModelApsRegistrantAddOns25ConditionInput
  ) {
    updateApsRegistrantAddOns25(input: $input, condition: $condition) {
      id
      aPSAddOn2025Id
      aPSRegistrant2025Id
      aPSAddOn2025 {
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        apsRegistrants {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        limit
        id
        createdAt
        updatedAt
      }
      aPSRegistrant2025 {
        id
        firstName
        lastName
        email
        phone
        company {
          name
          email
          apsRegistrants {
            nextToken
          }
          type
          registrants {
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        speedNetworking
        speedNetworkingStatus
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        addOns {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        morrisetteTransportation
        morrisetteStatus
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        magnaStatus
        magnaTransportation
        aristoStatus
        aristoTransportation
        bio
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSCompanyRegistrantsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteApsRegistrantAddOns25 = /* GraphQL */ `
  mutation DeleteApsRegistrantAddOns25(
    $input: DeleteApsRegistrantAddOns25Input!
    $condition: ModelApsRegistrantAddOns25ConditionInput
  ) {
    deleteApsRegistrantAddOns25(input: $input, condition: $condition) {
      id
      aPSAddOn2025Id
      aPSRegistrant2025Id
      aPSAddOn2025 {
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        apsRegistrants {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        limit
        id
        createdAt
        updatedAt
      }
      aPSRegistrant2025 {
        id
        firstName
        lastName
        email
        phone
        company {
          name
          email
          apsRegistrants {
            nextToken
          }
          type
          registrants {
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        speedNetworking
        speedNetworkingStatus
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        addOns {
          items {
            id
            aPSAddOn2025Id
            aPSRegistrant2025Id
            createdAt
            updatedAt
          }
          nextToken
        }
        morrisetteTransportation
        morrisetteStatus
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        magnaStatus
        magnaTransportation
        aristoStatus
        aristoTransportation
        bio
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSCompanyRegistrantsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAchievementUsers = /* GraphQL */ `
  mutation CreateAchievementUsers(
    $input: CreateAchievementUsersInput!
    $condition: ModelAchievementUsersConditionInput
  ) {
    createAchievementUsers(input: $input, condition: $condition) {
      id
      userId
      achievementId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      achievement {
        id
        title
        description
        image
        courses
        coursesRequired
        users {
          items {
            id
            userId
            achievementId
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
export const updateAchievementUsers = /* GraphQL */ `
  mutation UpdateAchievementUsers(
    $input: UpdateAchievementUsersInput!
    $condition: ModelAchievementUsersConditionInput
  ) {
    updateAchievementUsers(input: $input, condition: $condition) {
      id
      userId
      achievementId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      achievement {
        id
        title
        description
        image
        courses
        coursesRequired
        users {
          items {
            id
            userId
            achievementId
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
export const deleteAchievementUsers = /* GraphQL */ `
  mutation DeleteAchievementUsers(
    $input: DeleteAchievementUsersInput!
    $condition: ModelAchievementUsersConditionInput
  ) {
    deleteAchievementUsers(input: $input, condition: $condition) {
      id
      userId
      achievementId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      achievement {
        id
        title
        description
        image
        courses
        coursesRequired
        users {
          items {
            id
            userId
            achievementId
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
export const createCohortUsers = /* GraphQL */ `
  mutation CreateCohortUsers(
    $input: CreateCohortUsersInput!
    $condition: ModelCohortUsersConditionInput
  ) {
    createCohortUsers(input: $input, condition: $condition) {
      id
      userId
      cohortId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      cohort {
        id
        name
        startDate
        endDate
        deadline
        users {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        instructor {
          id
          userId
          name
          image
          bio
          linkedIn
          company
          title
          coursesTaught {
            nextToken
          }
          cohorts {
            nextToken
          }
          createdAt
          updatedAt
        }
        description
        link
        createdAt
        updatedAt
        instructorCohortsId
        cohortInstructorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCohortUsers = /* GraphQL */ `
  mutation UpdateCohortUsers(
    $input: UpdateCohortUsersInput!
    $condition: ModelCohortUsersConditionInput
  ) {
    updateCohortUsers(input: $input, condition: $condition) {
      id
      userId
      cohortId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      cohort {
        id
        name
        startDate
        endDate
        deadline
        users {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        instructor {
          id
          userId
          name
          image
          bio
          linkedIn
          company
          title
          coursesTaught {
            nextToken
          }
          cohorts {
            nextToken
          }
          createdAt
          updatedAt
        }
        description
        link
        createdAt
        updatedAt
        instructorCohortsId
        cohortInstructorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCohortUsers = /* GraphQL */ `
  mutation DeleteCohortUsers(
    $input: DeleteCohortUsersInput!
    $condition: ModelCohortUsersConditionInput
  ) {
    deleteCohortUsers(input: $input, condition: $condition) {
      id
      userId
      cohortId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      cohort {
        id
        name
        startDate
        endDate
        deadline
        users {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        instructor {
          id
          userId
          name
          image
          bio
          linkedIn
          company
          title
          coursesTaught {
            nextToken
          }
          cohorts {
            nextToken
          }
          createdAt
          updatedAt
        }
        description
        link
        createdAt
        updatedAt
        instructorCohortsId
        cohortInstructorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLearningPathUsers = /* GraphQL */ `
  mutation CreateLearningPathUsers(
    $input: CreateLearningPathUsersInput!
    $condition: ModelLearningPathUsersConditionInput
  ) {
    createLearningPathUsers(input: $input, condition: $condition) {
      id
      userId
      learningPathId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLearningPathUsers = /* GraphQL */ `
  mutation UpdateLearningPathUsers(
    $input: UpdateLearningPathUsersInput!
    $condition: ModelLearningPathUsersConditionInput
  ) {
    updateLearningPathUsers(input: $input, condition: $condition) {
      id
      userId
      learningPathId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLearningPathUsers = /* GraphQL */ `
  mutation DeleteLearningPathUsers(
    $input: DeleteLearningPathUsersInput!
    $condition: ModelLearningPathUsersConditionInput
  ) {
    deleteLearningPathUsers(input: $input, condition: $condition) {
      id
      userId
      learningPathId
      user {
        id
        thinkificId
        name
        title
        company
        email
        office
        bio
        interests
        goals
        cell
        picture
        linkedin
        location
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
            thinkificId
            name
            title
            company
            email
            office
            bio
            interests
            goals
            cell
            picture
            linkedin
            location
            companyID
            cmpmFormID
            cpsFormID
            savedCourses
            savedLessons
            savedArticles
            source
            onboardingComplete
            onboardingCompleteDate
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            allAccess
            allAccessStartDate
            allAccessEndDate
            createdAt
            updatedAt
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
          paymentType
          moreAboutYou
          elective
          optOut
          paymentConfirmation
          status
          createdOn
          updatedOn
          cPSFormUserId
        }
        savedCourses
        savedLessons
        savedArticles
        source
        achievements {
          items {
            id
            userId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
        onboardingComplete
        onboardingCompleteDate
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        cohorts {
          items {
            id
            userId
            cohortId
            createdAt
            updatedAt
          }
          nextToken
        }
        allAccess
        allAccessStartDate
        allAccessEndDate
        lessonsCompleted {
          items {
            id
            lessonId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        learningPaths {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      learningPath {
        id
        title
        description
        courses {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
          }
          nextToken
        }
        users {
          items {
            id
            userId
            learningPathId
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        hours
        slug
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
      }
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
      }
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
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
        thinkificId
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
        shortDescription
        subscriptionLink
        subscriptionPrice
        stripeLink
        callout
        createdAt
        updatedAt
      }
      instructor {
        id
        userId
        name
        image
        bio
        linkedIn
        company
        title
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
        cohorts {
          items {
            id
            name
            startDate
            endDate
            deadline
            type
            description
            link
            createdAt
            updatedAt
            instructorCohortsId
            cohortInstructorId
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
export const createIndexTemplateRows = /* GraphQL */ `
  mutation CreateIndexTemplateRows(
    $input: CreateIndexTemplateRowsInput!
    $condition: ModelIndexTemplateRowsConditionInput
  ) {
    createIndexTemplateRows(input: $input, condition: $condition) {
      id
      indexTemplateId
      indexRowId
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexRow {
        id
        headline
        subhead
        type
        content
        templates {
          items {
            id
            indexTemplateId
            indexRowId
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
export const updateIndexTemplateRows = /* GraphQL */ `
  mutation UpdateIndexTemplateRows(
    $input: UpdateIndexTemplateRowsInput!
    $condition: ModelIndexTemplateRowsConditionInput
  ) {
    updateIndexTemplateRows(input: $input, condition: $condition) {
      id
      indexTemplateId
      indexRowId
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexRow {
        id
        headline
        subhead
        type
        content
        templates {
          items {
            id
            indexTemplateId
            indexRowId
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
export const deleteIndexTemplateRows = /* GraphQL */ `
  mutation DeleteIndexTemplateRows(
    $input: DeleteIndexTemplateRowsInput!
    $condition: ModelIndexTemplateRowsConditionInput
  ) {
    deleteIndexTemplateRows(input: $input, condition: $condition) {
      id
      indexTemplateId
      indexRowId
      indexTemplate {
        id
        slug
        title
        subhead
        authors {
          items {
            id
            authorId
            indexTemplateId
            createdAt
            updatedAt
          }
          nextToken
        }
        rows {
          items {
            id
            indexTemplateId
            indexRowId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      indexRow {
        id
        headline
        subhead
        type
        content
        templates {
          items {
            id
            indexTemplateId
            indexRowId
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
