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
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
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
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
            status
            displayOrder
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
            status
            displayOrder
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
            status
            displayOrder
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
export const onCreateCertificateObject = /* GraphQL */ `
  subscription OnCreateCertificateObject {
    onCreateCertificateObject {
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
            status
            displayOrder
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
      status
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCertificateObject = /* GraphQL */ `
  subscription OnUpdateCertificateObject {
    onUpdateCertificateObject {
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
            status
            displayOrder
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
      status
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCertificateObject = /* GraphQL */ `
  subscription OnDeleteCertificateObject {
    onDeleteCertificateObject {
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
            status
            displayOrder
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
      status
      displayOrder
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreateAPSBoard = /* GraphQL */ `
  subscription OnCreateAPSBoard {
    onCreateAPSBoard {
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
export const onUpdateAPSBoard = /* GraphQL */ `
  subscription OnUpdateAPSBoard {
    onUpdateAPSBoard {
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
export const onDeleteAPSBoard = /* GraphQL */ `
  subscription OnDeleteAPSBoard {
    onDeleteAPSBoard {
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
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
export const onCreateAPSRegistrant = /* GraphQL */ `
  subscription OnCreateAPSRegistrant {
    onCreateAPSRegistrant {
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
export const onUpdateAPSRegistrant = /* GraphQL */ `
  subscription OnUpdateAPSRegistrant {
    onUpdateAPSRegistrant {
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
export const onDeleteAPSRegistrant = /* GraphQL */ `
  subscription OnDeleteAPSRegistrant {
    onDeleteAPSRegistrant {
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
export const onCreateAPSTicketRegistrant = /* GraphQL */ `
  subscription OnCreateAPSTicketRegistrant {
    onCreateAPSTicketRegistrant {
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
export const onUpdateAPSTicketRegistrant = /* GraphQL */ `
  subscription OnUpdateAPSTicketRegistrant {
    onUpdateAPSTicketRegistrant {
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
export const onDeleteAPSTicketRegistrant = /* GraphQL */ `
  subscription OnDeleteAPSTicketRegistrant {
    onDeleteAPSTicketRegistrant {
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
export const onCreateAPSSpeaker2024 = /* GraphQL */ `
  subscription OnCreateAPSSpeaker2024 {
    onCreateAPSSpeaker2024 {
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
export const onUpdateAPSSpeaker2024 = /* GraphQL */ `
  subscription OnUpdateAPSSpeaker2024 {
    onUpdateAPSSpeaker2024 {
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
export const onDeleteAPSSpeaker2024 = /* GraphQL */ `
  subscription OnDeleteAPSSpeaker2024 {
    onDeleteAPSSpeaker2024 {
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
export const onCreateAPSCompany = /* GraphQL */ `
  subscription OnCreateAPSCompany {
    onCreateAPSCompany {
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
export const onUpdateAPSCompany = /* GraphQL */ `
  subscription OnUpdateAPSCompany {
    onUpdateAPSCompany {
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
export const onDeleteAPSCompany = /* GraphQL */ `
  subscription OnDeleteAPSCompany {
    onDeleteAPSCompany {
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
export const onCreateAPSAddOn2025 = /* GraphQL */ `
  subscription OnCreateAPSAddOn2025 {
    onCreateAPSAddOn2025 {
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
export const onUpdateAPSAddOn2025 = /* GraphQL */ `
  subscription OnUpdateAPSAddOn2025 {
    onUpdateAPSAddOn2025 {
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
export const onDeleteAPSAddOn2025 = /* GraphQL */ `
  subscription OnDeleteAPSAddOn2025 {
    onDeleteAPSAddOn2025 {
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
export const onCreateAPSCodeRequest25 = /* GraphQL */ `
  subscription OnCreateAPSCodeRequest25 {
    onCreateAPSCodeRequest25 {
      id
      email
      company
      status
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPSCodeRequest25 = /* GraphQL */ `
  subscription OnUpdateAPSCodeRequest25 {
    onUpdateAPSCodeRequest25 {
      id
      email
      company
      status
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPSCodeRequest25 = /* GraphQL */ `
  subscription OnDeleteAPSCodeRequest25 {
    onDeleteAPSCodeRequest25 {
      id
      email
      company
      status
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAPSRegistrant2025 = /* GraphQL */ `
  subscription OnCreateAPSRegistrant2025 {
    onCreateAPSRegistrant2025 {
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
export const onUpdateAPSRegistrant2025 = /* GraphQL */ `
  subscription OnUpdateAPSRegistrant2025 {
    onUpdateAPSRegistrant2025 {
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
export const onDeleteAPSRegistrant2025 = /* GraphQL */ `
  subscription OnDeleteAPSRegistrant2025 {
    onDeleteAPSRegistrant2025 {
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
export const onCreateAPSCode2025 = /* GraphQL */ `
  subscription OnCreateAPSCode2025 {
    onCreateAPSCode2025 {
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
export const onUpdateAPSCode2025 = /* GraphQL */ `
  subscription OnUpdateAPSCode2025 {
    onUpdateAPSCode2025 {
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
export const onDeleteAPSCode2025 = /* GraphQL */ `
  subscription OnDeleteAPSCode2025 {
    onDeleteAPSCode2025 {
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
export const onCreateAPSActivity2025 = /* GraphQL */ `
  subscription OnCreateAPSActivity2025 {
    onCreateAPSActivity2025 {
      id
      type
      activity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAPSActivity2025 = /* GraphQL */ `
  subscription OnUpdateAPSActivity2025 {
    onUpdateAPSActivity2025 {
      id
      type
      activity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAPSActivity2025 = /* GraphQL */ `
  subscription OnDeleteAPSActivity2025 {
    onDeleteAPSActivity2025 {
      id
      type
      activity
      createdAt
      updatedAt
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
export const onCreateAddOnRegistrant = /* GraphQL */ `
  subscription OnCreateAddOnRegistrant {
    onCreateAddOnRegistrant {
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
export const onUpdateAddOnRegistrant = /* GraphQL */ `
  subscription OnUpdateAddOnRegistrant {
    onUpdateAddOnRegistrant {
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
export const onDeleteAddOnRegistrant = /* GraphQL */ `
  subscription OnDeleteAddOnRegistrant {
    onDeleteAddOnRegistrant {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
export const onCreateMorrisetteForm = /* GraphQL */ `
  subscription OnCreateMorrisetteForm {
    onCreateMorrisetteForm {
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
export const onUpdateMorrisetteForm = /* GraphQL */ `
  subscription OnUpdateMorrisetteForm {
    onUpdateMorrisetteForm {
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
export const onDeleteMorrisetteForm = /* GraphQL */ `
  subscription OnDeleteMorrisetteForm {
    onDeleteMorrisetteForm {
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
export const onCreateAristosForm = /* GraphQL */ `
  subscription OnCreateAristosForm {
    onCreateAristosForm {
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
export const onUpdateAristosForm = /* GraphQL */ `
  subscription OnUpdateAristosForm {
    onUpdateAristosForm {
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
export const onDeleteAristosForm = /* GraphQL */ `
  subscription OnDeleteAristosForm {
    onDeleteAristosForm {
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
export const onCreateGuardianForm = /* GraphQL */ `
  subscription OnCreateGuardianForm {
    onCreateGuardianForm {
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
export const onUpdateGuardianForm = /* GraphQL */ `
  subscription OnUpdateGuardianForm {
    onUpdateGuardianForm {
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
export const onDeleteGuardianForm = /* GraphQL */ `
  subscription OnDeleteGuardianForm {
    onDeleteGuardianForm {
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
export const onCreateClemsonForm = /* GraphQL */ `
  subscription OnCreateClemsonForm {
    onCreateClemsonForm {
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
export const onUpdateClemsonForm = /* GraphQL */ `
  subscription OnUpdateClemsonForm {
    onUpdateClemsonForm {
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
export const onDeleteClemsonForm = /* GraphQL */ `
  subscription OnDeleteClemsonForm {
    onDeleteClemsonForm {
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
export const onCreateSurgereForm = /* GraphQL */ `
  subscription OnCreateSurgereForm {
    onCreateSurgereForm {
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
export const onUpdateSurgereForm = /* GraphQL */ `
  subscription OnUpdateSurgereForm {
    onUpdateSurgereForm {
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
export const onDeleteSurgereForm = /* GraphQL */ `
  subscription OnDeleteSurgereForm {
    onDeleteSurgereForm {
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
export const onCreateBoschForm = /* GraphQL */ `
  subscription OnCreateBoschForm {
    onCreateBoschForm {
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
export const onUpdateBoschForm = /* GraphQL */ `
  subscription OnUpdateBoschForm {
    onUpdateBoschForm {
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
export const onDeleteBoschForm = /* GraphQL */ `
  subscription OnDeleteBoschForm {
    onDeleteBoschForm {
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
export const onCreateEmailTracking = /* GraphQL */ `
  subscription OnCreateEmailTracking {
    onCreateEmailTracking {
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
export const onUpdateEmailTracking = /* GraphQL */ `
  subscription OnUpdateEmailTracking {
    onUpdateEmailTracking {
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
export const onDeleteEmailTracking = /* GraphQL */ `
  subscription OnDeleteEmailTracking {
    onDeleteEmailTracking {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
            userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      userXp {
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
        }
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        progress
        createdAt
        updatedAt
        userXpUserId
      }
      createdAt
      updatedAt
      userUserXpId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
            userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      userXp {
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
        }
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        progress
        createdAt
        updatedAt
        userXpUserId
      }
      createdAt
      updatedAt
      userUserXpId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
            userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      userXp {
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
          userXp {
            id
            totalXp
            thinkificXp
            psXp
            level
            xpToNextLevel
            lastLogin
            dailyStreak
            progress
            createdAt
            updatedAt
            userXpUserId
          }
          createdAt
          updatedAt
          userUserXpId
        }
        totalXp
        thinkificXp
        psXp
        level
        xpToNextLevel
        lastLogin
        dailyStreak
        progress
        createdAt
        updatedAt
        userXpUserId
      }
      createdAt
      updatedAt
      userUserXpId
    }
  }
`;
export const onCreateUserXp = /* GraphQL */ `
  subscription OnCreateUserXp {
    onCreateUserXp {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
    }
  }
`;
export const onUpdateUserXp = /* GraphQL */ `
  subscription OnUpdateUserXp {
    onUpdateUserXp {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
    }
  }
`;
export const onDeleteUserXp = /* GraphQL */ `
  subscription OnDeleteUserXp {
    onDeleteUserXp {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
    }
  }
`;
export const onCreateCohort = /* GraphQL */ `
  subscription OnCreateCohort {
    onCreateCohort {
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
            userUserXpId
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
export const onUpdateCohort = /* GraphQL */ `
  subscription OnUpdateCohort {
    onUpdateCohort {
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
            userUserXpId
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
export const onDeleteCohort = /* GraphQL */ `
  subscription OnDeleteCohort {
    onDeleteCohort {
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
            userUserXpId
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
export const onCreateLearningPath = /* GraphQL */ `
  subscription OnCreateLearningPath {
    onCreateLearningPath {
      id
      title
      description
      courses {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
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
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLearningPath = /* GraphQL */ `
  subscription OnUpdateLearningPath {
    onUpdateLearningPath {
      id
      title
      description
      courses {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
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
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLearningPath = /* GraphQL */ `
  subscription OnDeleteLearningPath {
    onDeleteLearningPath {
      id
      title
      description
      courses {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
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
            userUserXpId
          }
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
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
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLearningPathCourse = /* GraphQL */ `
  subscription OnCreateLearningPathCourse {
    onCreateLearningPathCourse {
      id
      courseId
      course {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
            lMSCourseLearningPathsId
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
        status
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
      lMSCourseLearningPathsId
    }
  }
`;
export const onUpdateLearningPathCourse = /* GraphQL */ `
  subscription OnUpdateLearningPathCourse {
    onUpdateLearningPathCourse {
      id
      courseId
      course {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
            lMSCourseLearningPathsId
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
        status
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
      lMSCourseLearningPathsId
    }
  }
`;
export const onDeleteLearningPathCourse = /* GraphQL */ `
  subscription OnDeleteLearningPathCourse {
    onDeleteLearningPathCourse {
      id
      courseId
      course {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
            lMSCourseLearningPathsId
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
        status
        createdAt
        updatedAt
      }
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
      lMSCourseLearningPathsId
    }
  }
`;
export const onCreateCMPMSession = /* GraphQL */ `
  subscription OnCreateCMPMSession {
    onCreateCMPMSession {
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
export const onUpdateCMPMSession = /* GraphQL */ `
  subscription OnUpdateCMPMSession {
    onUpdateCMPMSession {
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
export const onDeleteCMPMSession = /* GraphQL */ `
  subscription OnDeleteCMPMSession {
    onDeleteCMPMSession {
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
export const onCreateCMPMForm = /* GraphQL */ `
  subscription OnCreateCMPMForm {
    onCreateCMPMForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onUpdateCMPMForm = /* GraphQL */ `
  subscription OnUpdateCMPMForm {
    onUpdateCMPMForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onDeleteCMPMForm = /* GraphQL */ `
  subscription OnDeleteCMPMForm {
    onDeleteCMPMForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onCreateCPSForm = /* GraphQL */ `
  subscription OnCreateCPSForm {
    onCreateCPSForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onUpdateCPSForm = /* GraphQL */ `
  subscription OnUpdateCPSForm {
    onUpdateCPSForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onDeleteCPSForm = /* GraphQL */ `
  subscription OnDeleteCPSForm {
    onDeleteCPSForm {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onCreateApplicationStart = /* GraphQL */ `
  subscription OnCreateApplicationStart {
    onCreateApplicationStart {
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
export const onUpdateApplicationStart = /* GraphQL */ `
  subscription OnUpdateApplicationStart {
    onUpdateApplicationStart {
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
export const onDeleteApplicationStart = /* GraphQL */ `
  subscription OnDeleteApplicationStart {
    onDeleteApplicationStart {
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
export const onCreateCertAppStart = /* GraphQL */ `
  subscription OnCreateCertAppStart {
    onCreateCertAppStart {
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
export const onUpdateCertAppStart = /* GraphQL */ `
  subscription OnUpdateCertAppStart {
    onUpdateCertAppStart {
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
export const onDeleteCertAppStart = /* GraphQL */ `
  subscription OnDeleteCertAppStart {
    onDeleteCertAppStart {
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
export const onCreateLMSCourse = /* GraphQL */ `
  subscription OnCreateLMSCourse {
    onCreateLMSCourse {
      id
      thinkificId
      learningPaths {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
        }
        nextToken
      }
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
      achievements {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
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
export const onUpdateLMSCourse = /* GraphQL */ `
  subscription OnUpdateLMSCourse {
    onUpdateLMSCourse {
      id
      thinkificId
      learningPaths {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
        }
        nextToken
      }
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
      achievements {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
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
export const onDeleteLMSCourse = /* GraphQL */ `
  subscription OnDeleteLMSCourse {
    onDeleteLMSCourse {
      id
      thinkificId
      learningPaths {
        items {
          id
          courseId
          course {
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
          learningPath {
            id
            title
            description
            displayOrder
            hours
            slug
            status
            createdAt
            updatedAt
          }
          order
          thinkificId
          createdAt
          updatedAt
          learningPathCoursesId
          lMSCourseLearningPathsId
        }
        nextToken
      }
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
      achievements {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
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
export const onCreateLMSLesson = /* GraphQL */ `
  subscription OnCreateLMSLesson {
    onCreateLMSLesson {
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
export const onUpdateLMSLesson = /* GraphQL */ `
  subscription OnUpdateLMSLesson {
    onUpdateLMSLesson {
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
export const onDeleteLMSLesson = /* GraphQL */ `
  subscription OnDeleteLMSLesson {
    onDeleteLMSLesson {
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
export const onCreateLMSModule = /* GraphQL */ `
  subscription OnCreateLMSModule {
    onCreateLMSModule {
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
export const onUpdateLMSModule = /* GraphQL */ `
  subscription OnUpdateLMSModule {
    onUpdateLMSModule {
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
export const onDeleteLMSModule = /* GraphQL */ `
  subscription OnDeleteLMSModule {
    onDeleteLMSModule {
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
export const onCreateLMSQuiz = /* GraphQL */ `
  subscription OnCreateLMSQuiz {
    onCreateLMSQuiz {
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
export const onUpdateLMSQuiz = /* GraphQL */ `
  subscription OnUpdateLMSQuiz {
    onUpdateLMSQuiz {
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
export const onDeleteLMSQuiz = /* GraphQL */ `
  subscription OnDeleteLMSQuiz {
    onDeleteLMSQuiz {
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
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
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
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor {
    onUpdateInstructor {
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
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor {
    onDeleteInstructor {
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
export const onCreateObjective = /* GraphQL */ `
  subscription OnCreateObjective {
    onCreateObjective {
      id
      objective
      completed
      createdAt
      updatedAt
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
      lMSModuleSlidesId
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
      lMSModuleSlidesId
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
      lMSModuleSlidesId
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
export const onCreateTrackedCourse = /* GraphQL */ `
  subscription OnCreateTrackedCourse {
    onCreateTrackedCourse {
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
export const onUpdateTrackedCourse = /* GraphQL */ `
  subscription OnUpdateTrackedCourse {
    onUpdateTrackedCourse {
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
export const onDeleteTrackedCourse = /* GraphQL */ `
  subscription OnDeleteTrackedCourse {
    onDeleteTrackedCourse {
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
export const onCreateIncludedCourse = /* GraphQL */ `
  subscription OnCreateIncludedCourse {
    onCreateIncludedCourse {
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
export const onUpdateIncludedCourse = /* GraphQL */ `
  subscription OnUpdateIncludedCourse {
    onUpdateIncludedCourse {
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
export const onDeleteIncludedCourse = /* GraphQL */ `
  subscription OnDeleteIncludedCourse {
    onDeleteIncludedCourse {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateCustomerLibary = /* GraphQL */ `
  subscription OnCreateCustomerLibary {
    onCreateCustomerLibary {
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
export const onUpdateCustomerLibary = /* GraphQL */ `
  subscription OnUpdateCustomerLibary {
    onUpdateCustomerLibary {
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
export const onDeleteCustomerLibary = /* GraphQL */ `
  subscription OnDeleteCustomerLibary {
    onDeleteCustomerLibary {
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
export const onCreateSalesBar = /* GraphQL */ `
  subscription OnCreateSalesBar {
    onCreateSalesBar {
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
export const onUpdateSalesBar = /* GraphQL */ `
  subscription OnUpdateSalesBar {
    onUpdateSalesBar {
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
export const onDeleteSalesBar = /* GraphQL */ `
  subscription OnDeleteSalesBar {
    onDeleteSalesBar {
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
export const onCreateTestimonial = /* GraphQL */ `
  subscription OnCreateTestimonial {
    onCreateTestimonial {
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
export const onUpdateTestimonial = /* GraphQL */ `
  subscription OnUpdateTestimonial {
    onUpdateTestimonial {
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
export const onDeleteTestimonial = /* GraphQL */ `
  subscription OnDeleteTestimonial {
    onDeleteTestimonial {
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
export const onCreateWorkshopForm = /* GraphQL */ `
  subscription OnCreateWorkshopForm {
    onCreateWorkshopForm {
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
export const onUpdateWorkshopForm = /* GraphQL */ `
  subscription OnUpdateWorkshopForm {
    onUpdateWorkshopForm {
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
export const onDeleteWorkshopForm = /* GraphQL */ `
  subscription OnDeleteWorkshopForm {
    onDeleteWorkshopForm {
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
export const onCreateCourseClick = /* GraphQL */ `
  subscription OnCreateCourseClick {
    onCreateCourseClick {
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
export const onUpdateCourseClick = /* GraphQL */ `
  subscription OnUpdateCourseClick {
    onUpdateCourseClick {
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
export const onDeleteCourseClick = /* GraphQL */ `
  subscription OnDeleteCourseClick {
    onDeleteCourseClick {
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
export const onCreateSalesbarClick = /* GraphQL */ `
  subscription OnCreateSalesbarClick {
    onCreateSalesbarClick {
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
export const onUpdateSalesbarClick = /* GraphQL */ `
  subscription OnUpdateSalesbarClick {
    onUpdateSalesbarClick {
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
export const onDeleteSalesbarClick = /* GraphQL */ `
  subscription OnDeleteSalesbarClick {
    onDeleteSalesbarClick {
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
export const onCreateLessonClick = /* GraphQL */ `
  subscription OnCreateLessonClick {
    onCreateLessonClick {
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
export const onUpdateLessonClick = /* GraphQL */ `
  subscription OnUpdateLessonClick {
    onUpdateLessonClick {
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
export const onDeleteLessonClick = /* GraphQL */ `
  subscription OnDeleteLessonClick {
    onDeleteLessonClick {
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
export const onCreateCourseSearch = /* GraphQL */ `
  subscription OnCreateCourseSearch {
    onCreateCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseSearch = /* GraphQL */ `
  subscription OnUpdateCourseSearch {
    onUpdateCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseSearch = /* GraphQL */ `
  subscription OnDeleteCourseSearch {
    onDeleteCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCyberMondayClick = /* GraphQL */ `
  subscription OnCreateCyberMondayClick {
    onCreateCyberMondayClick {
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
export const onUpdateCyberMondayClick = /* GraphQL */ `
  subscription OnUpdateCyberMondayClick {
    onUpdateCyberMondayClick {
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
export const onDeleteCyberMondayClick = /* GraphQL */ `
  subscription OnDeleteCyberMondayClick {
    onDeleteCyberMondayClick {
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
export const onCreateAPSPresentationClick = /* GraphQL */ `
  subscription OnCreateAPSPresentationClick {
    onCreateAPSPresentationClick {
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
export const onUpdateAPSPresentationClick = /* GraphQL */ `
  subscription OnUpdateAPSPresentationClick {
    onUpdateAPSPresentationClick {
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
export const onDeleteAPSPresentationClick = /* GraphQL */ `
  subscription OnDeleteAPSPresentationClick {
    onDeleteAPSPresentationClick {
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
export const onCreateCategoryClick = /* GraphQL */ `
  subscription OnCreateCategoryClick {
    onCreateCategoryClick {
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
export const onUpdateCategoryClick = /* GraphQL */ `
  subscription OnUpdateCategoryClick {
    onUpdateCategoryClick {
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
export const onDeleteCategoryClick = /* GraphQL */ `
  subscription OnDeleteCategoryClick {
    onDeleteCategoryClick {
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
export const onCreateClick = /* GraphQL */ `
  subscription OnCreateClick {
    onCreateClick {
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
export const onUpdateClick = /* GraphQL */ `
  subscription OnUpdateClick {
    onUpdateClick {
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
export const onDeleteClick = /* GraphQL */ `
  subscription OnDeleteClick {
    onDeleteClick {
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
export const onCreateIndiaClick = /* GraphQL */ `
  subscription OnCreateIndiaClick {
    onCreateIndiaClick {
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
export const onUpdateIndiaClick = /* GraphQL */ `
  subscription OnUpdateIndiaClick {
    onUpdateIndiaClick {
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
export const onDeleteIndiaClick = /* GraphQL */ `
  subscription OnDeleteIndiaClick {
    onDeleteIndiaClick {
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
export const onCreateIndiaCourseSearch = /* GraphQL */ `
  subscription OnCreateIndiaCourseSearch {
    onCreateIndiaCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIndiaCourseSearch = /* GraphQL */ `
  subscription OnUpdateIndiaCourseSearch {
    onUpdateIndiaCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIndiaCourseSearch = /* GraphQL */ `
  subscription OnDeleteIndiaCourseSearch {
    onDeleteIndiaCourseSearch {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIndexTemplate = /* GraphQL */ `
  subscription OnCreateIndexTemplate {
    onCreateIndexTemplate {
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
export const onUpdateIndexTemplate = /* GraphQL */ `
  subscription OnUpdateIndexTemplate {
    onUpdateIndexTemplate {
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
export const onDeleteIndexTemplate = /* GraphQL */ `
  subscription OnDeleteIndexTemplate {
    onDeleteIndexTemplate {
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
export const onCreateIndexRow = /* GraphQL */ `
  subscription OnCreateIndexRow {
    onCreateIndexRow {
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
export const onUpdateIndexRow = /* GraphQL */ `
  subscription OnUpdateIndexRow {
    onUpdateIndexRow {
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
export const onDeleteIndexRow = /* GraphQL */ `
  subscription OnDeleteIndexRow {
    onDeleteIndexRow {
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
export const onCreateIndexPage = /* GraphQL */ `
  subscription OnCreateIndexPage {
    onCreateIndexPage {
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
export const onUpdateIndexPage = /* GraphQL */ `
  subscription OnUpdateIndexPage {
    onUpdateIndexPage {
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
export const onDeleteIndexPage = /* GraphQL */ `
  subscription OnDeleteIndexPage {
    onDeleteIndexPage {
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
export const onCreateFaq = /* GraphQL */ `
  subscription OnCreateFaq {
    onCreateFaq {
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
export const onUpdateFaq = /* GraphQL */ `
  subscription OnUpdateFaq {
    onUpdateFaq {
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
export const onDeleteFaq = /* GraphQL */ `
  subscription OnDeleteFaq {
    onDeleteFaq {
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
export const onCreateEventTemplate = /* GraphQL */ `
  subscription OnCreateEventTemplate {
    onCreateEventTemplate {
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
export const onUpdateEventTemplate = /* GraphQL */ `
  subscription OnUpdateEventTemplate {
    onUpdateEventTemplate {
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
export const onDeleteEventTemplate = /* GraphQL */ `
  subscription OnDeleteEventTemplate {
    onDeleteEventTemplate {
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
export const onCreateEventPhoto = /* GraphQL */ `
  subscription OnCreateEventPhoto {
    onCreateEventPhoto {
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
export const onUpdateEventPhoto = /* GraphQL */ `
  subscription OnUpdateEventPhoto {
    onUpdateEventPhoto {
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
export const onDeleteEventPhoto = /* GraphQL */ `
  subscription OnDeleteEventPhoto {
    onDeleteEventPhoto {
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
export const onCreateUserEventPhoto = /* GraphQL */ `
  subscription OnCreateUserEventPhoto {
    onCreateUserEventPhoto {
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
export const onUpdateUserEventPhoto = /* GraphQL */ `
  subscription OnUpdateUserEventPhoto {
    onUpdateUserEventPhoto {
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
export const onDeleteUserEventPhoto = /* GraphQL */ `
  subscription OnDeleteUserEventPhoto {
    onDeleteUserEventPhoto {
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
export const onCreateEventPresentation = /* GraphQL */ `
  subscription OnCreateEventPresentation {
    onCreateEventPresentation {
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
export const onUpdateEventPresentation = /* GraphQL */ `
  subscription OnUpdateEventPresentation {
    onUpdateEventPresentation {
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
export const onDeleteEventPresentation = /* GraphQL */ `
  subscription OnDeleteEventPresentation {
    onDeleteEventPresentation {
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
export const onCreateEventAgenda = /* GraphQL */ `
  subscription OnCreateEventAgenda {
    onCreateEventAgenda {
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
export const onUpdateEventAgenda = /* GraphQL */ `
  subscription OnUpdateEventAgenda {
    onUpdateEventAgenda {
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
export const onDeleteEventAgenda = /* GraphQL */ `
  subscription OnDeleteEventAgenda {
    onDeleteEventAgenda {
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
export const onCreateEventAgendaItem = /* GraphQL */ `
  subscription OnCreateEventAgendaItem {
    onCreateEventAgendaItem {
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
export const onUpdateEventAgendaItem = /* GraphQL */ `
  subscription OnUpdateEventAgendaItem {
    onUpdateEventAgendaItem {
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
export const onDeleteEventAgendaItem = /* GraphQL */ `
  subscription OnDeleteEventAgendaItem {
    onDeleteEventAgendaItem {
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
export const onCreateEventSpeaker = /* GraphQL */ `
  subscription OnCreateEventSpeaker {
    onCreateEventSpeaker {
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
export const onUpdateEventSpeaker = /* GraphQL */ `
  subscription OnUpdateEventSpeaker {
    onUpdateEventSpeaker {
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
export const onDeleteEventSpeaker = /* GraphQL */ `
  subscription OnDeleteEventSpeaker {
    onDeleteEventSpeaker {
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
export const onCreateEventClick = /* GraphQL */ `
  subscription OnCreateEventClick {
    onCreateEventClick {
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
export const onUpdateEventClick = /* GraphQL */ `
  subscription OnUpdateEventClick {
    onUpdateEventClick {
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
export const onDeleteEventClick = /* GraphQL */ `
  subscription OnDeleteEventClick {
    onDeleteEventClick {
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
export const onCreateCertificateClick = /* GraphQL */ `
  subscription OnCreateCertificateClick {
    onCreateCertificateClick {
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
export const onUpdateCertificateClick = /* GraphQL */ `
  subscription OnUpdateCertificateClick {
    onUpdateCertificateClick {
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
export const onDeleteCertificateClick = /* GraphQL */ `
  subscription OnDeleteCertificateClick {
    onDeleteCertificateClick {
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
export const onCreateIndexClick = /* GraphQL */ `
  subscription OnCreateIndexClick {
    onCreateIndexClick {
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
export const onUpdateIndexClick = /* GraphQL */ `
  subscription OnUpdateIndexClick {
    onUpdateIndexClick {
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
export const onDeleteIndexClick = /* GraphQL */ `
  subscription OnDeleteIndexClick {
    onDeleteIndexClick {
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
export const onCreateEmailSubscription = /* GraphQL */ `
  subscription OnCreateEmailSubscription {
    onCreateEmailSubscription {
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
export const onUpdateEmailSubscription = /* GraphQL */ `
  subscription OnUpdateEmailSubscription {
    onUpdateEmailSubscription {
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
export const onDeleteEmailSubscription = /* GraphQL */ `
  subscription OnDeleteEmailSubscription {
    onDeleteEmailSubscription {
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
export const onCreateImageObject = /* GraphQL */ `
  subscription OnCreateImageObject {
    onCreateImageObject {
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
export const onUpdateImageObject = /* GraphQL */ `
  subscription OnUpdateImageObject {
    onUpdateImageObject {
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
export const onDeleteImageObject = /* GraphQL */ `
  subscription OnDeleteImageObject {
    onDeleteImageObject {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase {
    onCreatePurchase {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase {
    onUpdatePurchase {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase {
    onDeletePurchase {
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
export const onCreateAnalysis = /* GraphQL */ `
  subscription OnCreateAnalysis {
    onCreateAnalysis {
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
export const onUpdateAnalysis = /* GraphQL */ `
  subscription OnUpdateAnalysis {
    onUpdateAnalysis {
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
export const onDeleteAnalysis = /* GraphQL */ `
  subscription OnDeleteAnalysis {
    onDeleteAnalysis {
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
export const onCreateAchievement = /* GraphQL */ `
  subscription OnCreateAchievement {
    onCreateAchievement {
      id
      title
      description
      image
      courses {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
export const onUpdateAchievement = /* GraphQL */ `
  subscription OnUpdateAchievement {
    onUpdateAchievement {
      id
      title
      description
      image
      courses {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
export const onDeleteAchievement = /* GraphQL */ `
  subscription OnDeleteAchievement {
    onDeleteAchievement {
      id
      title
      description
      image
      courses {
        items {
          id
          lMSCourseId
          achievementId
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
          achievement {
            id
            title
            description
            image
            coursesRequired
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
            userUserXpId
          }
          achievement {
            id
            title
            description
            image
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
export const onCreateLessonTags = /* GraphQL */ `
  subscription OnCreateLessonTags {
    onCreateLessonTags {
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
export const onUpdateLessonTags = /* GraphQL */ `
  subscription OnUpdateLessonTags {
    onUpdateLessonTags {
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
export const onDeleteLessonTags = /* GraphQL */ `
  subscription OnDeleteLessonTags {
    onDeleteLessonTags {
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
export const onCreateCertificateByCategory = /* GraphQL */ `
  subscription OnCreateCertificateByCategory {
    onCreateCertificateByCategory {
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
        status
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCertificateByCategory = /* GraphQL */ `
  subscription OnUpdateCertificateByCategory {
    onUpdateCertificateByCategory {
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
        status
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCertificateByCategory = /* GraphQL */ `
  subscription OnDeleteCertificateByCategory {
    onDeleteCertificateByCategory {
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
        status
        displayOrder
        createdAt
        updatedAt
      }
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
export const onCreateUserCompletedLessons = /* GraphQL */ `
  subscription OnCreateUserCompletedLessons {
    onCreateUserCompletedLessons {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCompletedLessons = /* GraphQL */ `
  subscription OnUpdateUserCompletedLessons {
    onUpdateUserCompletedLessons {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCompletedLessons = /* GraphQL */ `
  subscription OnDeleteUserCompletedLessons {
    onDeleteUserCompletedLessons {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuthorTemplates = /* GraphQL */ `
  subscription OnCreateAuthorTemplates {
    onCreateAuthorTemplates {
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
export const onUpdateAuthorTemplates = /* GraphQL */ `
  subscription OnUpdateAuthorTemplates {
    onUpdateAuthorTemplates {
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
export const onDeleteAuthorTemplates = /* GraphQL */ `
  subscription OnDeleteAuthorTemplates {
    onDeleteAuthorTemplates {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            userUserXpId
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
            userUserXpId
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
            userUserXpId
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
export const onCreateApsRegistrantAddOns25 = /* GraphQL */ `
  subscription OnCreateApsRegistrantAddOns25 {
    onCreateApsRegistrantAddOns25 {
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
export const onUpdateApsRegistrantAddOns25 = /* GraphQL */ `
  subscription OnUpdateApsRegistrantAddOns25 {
    onUpdateApsRegistrantAddOns25 {
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
export const onDeleteApsRegistrantAddOns25 = /* GraphQL */ `
  subscription OnDeleteApsRegistrantAddOns25 {
    onDeleteApsRegistrantAddOns25 {
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
export const onCreateAchievementUsers = /* GraphQL */ `
  subscription OnCreateAchievementUsers {
    onCreateAchievementUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      achievement {
        id
        title
        description
        image
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onUpdateAchievementUsers = /* GraphQL */ `
  subscription OnUpdateAchievementUsers {
    onUpdateAchievementUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      achievement {
        id
        title
        description
        image
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onDeleteAchievementUsers = /* GraphQL */ `
  subscription OnDeleteAchievementUsers {
    onDeleteAchievementUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
      }
      achievement {
        id
        title
        description
        image
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onCreateCohortUsers = /* GraphQL */ `
  subscription OnCreateCohortUsers {
    onCreateCohortUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onUpdateCohortUsers = /* GraphQL */ `
  subscription OnUpdateCohortUsers {
    onUpdateCohortUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onDeleteCohortUsers = /* GraphQL */ `
  subscription OnDeleteCohortUsers {
    onDeleteCohortUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
export const onCreateLearningPathUsers = /* GraphQL */ `
  subscription OnCreateLearningPathUsers {
    onCreateLearningPathUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            lMSCourseLearningPathsId
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
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLearningPathUsers = /* GraphQL */ `
  subscription OnUpdateLearningPathUsers {
    onUpdateLearningPathUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            lMSCourseLearningPathsId
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
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLearningPathUsers = /* GraphQL */ `
  subscription OnDeleteLearningPathUsers {
    onDeleteLearningPathUsers {
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
            userUserXpId
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
            userUserXpId
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
        userXp {
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
            userUserXpId
          }
          totalXp
          thinkificXp
          psXp
          level
          xpToNextLevel
          lastLogin
          dailyStreak
          progress
          createdAt
          updatedAt
          userXpUserId
        }
        createdAt
        updatedAt
        userUserXpId
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
            lMSCourseLearningPathsId
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
        status
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
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
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
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
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
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
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
export const onCreateCourseLessons = /* GraphQL */ `
  subscription OnCreateCourseLessons {
    onCreateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onUpdateCourseLessons = /* GraphQL */ `
  subscription OnUpdateCourseLessons {
    onUpdateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onDeleteCourseLessons = /* GraphQL */ `
  subscription OnDeleteCourseLessons {
    onDeleteCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onCreateCourseInstructors = /* GraphQL */ `
  subscription OnCreateCourseInstructors {
    onCreateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onUpdateCourseInstructors = /* GraphQL */ `
  subscription OnUpdateCourseInstructors {
    onUpdateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onDeleteCourseInstructors = /* GraphQL */ `
  subscription OnDeleteCourseInstructors {
    onDeleteCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onCreateAchievementCourses = /* GraphQL */ `
  subscription OnCreateAchievementCourses {
    onCreateAchievementCourses {
      id
      lMSCourseId
      achievementId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onUpdateAchievementCourses = /* GraphQL */ `
  subscription OnUpdateAchievementCourses {
    onUpdateAchievementCourses {
      id
      lMSCourseId
      achievementId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onDeleteAchievementCourses = /* GraphQL */ `
  subscription OnDeleteAchievementCourses {
    onDeleteAchievementCourses {
      id
      lMSCourseId
      achievementId
      lMSCourse {
        id
        thinkificId
        learningPaths {
          items {
            id
            courseId
            order
            thinkificId
            createdAt
            updatedAt
            learningPathCoursesId
            lMSCourseLearningPathsId
          }
          nextToken
        }
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
        achievements {
          items {
            id
            lMSCourseId
            achievementId
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
        courses {
          items {
            id
            lMSCourseId
            achievementId
            createdAt
            updatedAt
          }
          nextToken
        }
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
export const onCreateIndexTemplateRows = /* GraphQL */ `
  subscription OnCreateIndexTemplateRows {
    onCreateIndexTemplateRows {
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
export const onUpdateIndexTemplateRows = /* GraphQL */ `
  subscription OnUpdateIndexTemplateRows {
    onUpdateIndexTemplateRows {
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
export const onDeleteIndexTemplateRows = /* GraphQL */ `
  subscription OnDeleteIndexTemplateRows {
    onDeleteIndexTemplateRows {
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
