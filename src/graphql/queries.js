/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonSource = /* GraphQL */ `
  query GetLessonSource($id: ID!) {
    getLessonSource(id: $id) {
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
export const listLessonSources = /* GraphQL */ `
  query ListLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getLessonLink = /* GraphQL */ `
  query GetLessonLink($id: ID!) {
    getLessonLink(id: $id) {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
    }
  }
`;
export const listLessonLinks = /* GraphQL */ `
  query ListLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const tagsByTag = /* GraphQL */ `
  query TagsByTag(
    $tag: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByTag(
      tag: $tag
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const categoriesByValue = /* GraphQL */ `
  query CategoriesByValue(
    $value: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByValue(
      value: $value
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
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
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const certificatesBySlug = /* GraphQL */ `
  query CertificatesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificatesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCertificateObject = /* GraphQL */ `
  query GetCertificateObject($id: ID!) {
    getCertificateObject(id: $id) {
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
export const listCertificateObjects = /* GraphQL */ `
  query ListCertificateObjects(
    $filter: ModelCertificateObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateObjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const coursesBySlug = /* GraphQL */ `
  query CoursesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
      createdAt
      updatedAt
      lessonAnalysisId
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        lessonAnalysisId
      }
      nextToken
    }
  }
`;
export const lessonsBySlug = /* GraphQL */ `
  query LessonsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        lessonAnalysisId
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const blogsBySlug = /* GraphQL */ `
  query BlogsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const articlesBySlug = /* GraphQL */ `
  query ArticlesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getDayInLifeItem = /* GraphQL */ `
  query GetDayInLifeItem($id: ID!) {
    getDayInLifeItem(id: $id) {
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
export const listDayInLifeItems = /* GraphQL */ `
  query ListDayInLifeItems(
    $filter: ModelDayInLifeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDayInLifeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getCareer = /* GraphQL */ `
  query GetCareer($id: ID!) {
    getCareer(id: $id) {
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
export const listCareers = /* GraphQL */ `
  query ListCareers(
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const careersBySlug = /* GraphQL */ `
  query CareersBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    careersBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAPSBoard = /* GraphQL */ `
  query GetAPSBoard($id: ID!) {
    getAPSBoard(id: $id) {
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
export const listAPSBoards = /* GraphQL */ `
  query ListAPSBoards(
    $filter: ModelAPSBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAPS = /* GraphQL */ `
  query GetAPS($id: ID!) {
    getAPS(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
export const listAPS = /* GraphQL */ `
  query ListAPS($filter: ModelAPSFilterInput, $limit: Int, $nextToken: String) {
    listAPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAPSRegistrant = /* GraphQL */ `
  query GetAPSRegistrant($id: ID!) {
    getAPSRegistrant(id: $id) {
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
export const listAPSRegistrants = /* GraphQL */ `
  query ListAPSRegistrants(
    $filter: ModelAPSRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSRegistrants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const aPSRegistrantsByEmail = /* GraphQL */ `
  query APSRegistrantsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSRegistrantsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAPSTicketRegistrant = /* GraphQL */ `
  query GetAPSTicketRegistrant($id: ID!) {
    getAPSTicketRegistrant(id: $id) {
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
export const listAPSTicketRegistrants = /* GraphQL */ `
  query ListAPSTicketRegistrants(
    $filter: ModelAPSTicketRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSTicketRegistrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const aPSTicketRegistrantsByEmail = /* GraphQL */ `
  query APSTicketRegistrantsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSTicketRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSTicketRegistrantsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAPSSpeaker2024 = /* GraphQL */ `
  query GetAPSSpeaker2024($id: ID!) {
    getAPSSpeaker2024(id: $id) {
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
export const listAPSSpeaker2024s = /* GraphQL */ `
  query ListAPSSpeaker2024s(
    $filter: ModelAPSSpeaker2024FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeaker2024s(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const getAPSCompany = /* GraphQL */ `
  query GetAPSCompany($id: ID!) {
    getAPSCompany(id: $id) {
      name
      email
      apsRegistrants {
        items {
          id
          firstName
          lastName
          email
          phone
          companyName {
            name
            email
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
          registrationEmailReceived
          welcomeEmailSent
          welcomeEmailReceived
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          mangaStatus
          mangaTransportation
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSRegistrant2025CompanyNameId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAPSCompanies = /* GraphQL */ `
  query ListAPSCompanies(
    $filter: ModelAPSCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            registrationEmailReceived
            welcomeEmailSent
            welcomeEmailReceived
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            mangaStatus
            mangaTransportation
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSRegistrant2025CompanyNameId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSCompaniesByEmail = /* GraphQL */ `
  query APSCompaniesByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSCompaniesByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            registrationEmailReceived
            welcomeEmailSent
            welcomeEmailReceived
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            mangaStatus
            mangaTransportation
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSRegistrant2025CompanyNameId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSAddOn2025 = /* GraphQL */ `
  query GetAPSAddOn2025($id: ID!) {
    getAPSAddOn2025(id: $id) {
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
            registrationEmailReceived
            welcomeEmailSent
            welcomeEmailReceived
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            mangaStatus
            mangaTransportation
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSRegistrant2025CompanyNameId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAPSAddOn2025s = /* GraphQL */ `
  query ListAPSAddOn2025s(
    $filter: ModelAPSAddOn2025FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSAddOn2025s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSRegistrant2025 = /* GraphQL */ `
  query GetAPSRegistrant2025($id: ID!) {
    getAPSRegistrant2025(id: $id) {
      id
      firstName
      lastName
      email
      phone
      companyName {
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
            registrationEmailReceived
            welcomeEmailSent
            welcomeEmailReceived
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            mangaStatus
            mangaTransportation
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSRegistrant2025CompanyNameId
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
            registrationEmailReceived
            welcomeEmailSent
            welcomeEmailReceived
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            mangaStatus
            mangaTransportation
            createdAt
            updatedAt
            aPSCompanyApsRegistrantsId
            aPSRegistrant2025CompanyNameId
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
      registrationEmailReceived
      welcomeEmailSent
      welcomeEmailReceived
      paymentMethod
      paymentLast4
      approvedAt
      headshot
      presentation
      presentationTitle
      presentationSummary
      mangaStatus
      mangaTransportation
      createdAt
      updatedAt
      aPSCompanyApsRegistrantsId
      aPSRegistrant2025CompanyNameId
    }
  }
`;
export const listAPSRegistrant2025s = /* GraphQL */ `
  query ListAPSRegistrant2025s(
    $filter: ModelAPSRegistrant2025FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSRegistrant2025s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        companyName {
          name
          email
          apsRegistrants {
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
        registrationEmailReceived
        welcomeEmailSent
        welcomeEmailReceived
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        mangaStatus
        mangaTransportation
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSRegistrant2025CompanyNameId
      }
      nextToken
    }
  }
`;
export const aPSRegistrant2025sByEmail = /* GraphQL */ `
  query APSRegistrant2025sByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSRegistrant2025FilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSRegistrant2025sByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        companyName {
          name
          email
          apsRegistrants {
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
        registrationEmailReceived
        welcomeEmailSent
        welcomeEmailReceived
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        mangaStatus
        mangaTransportation
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSRegistrant2025CompanyNameId
      }
      nextToken
    }
  }
`;
export const getAPSCode2025 = /* GraphQL */ `
  query GetAPSCode2025($id: ID!) {
    getAPSCode2025(id: $id) {
      code
      limit
      used
      discount
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAPSCode2025s = /* GraphQL */ `
  query ListAPSCode2025s(
    $filter: ModelAPSCode2025FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCode2025s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
        limit
        used
        discount
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSActivity2025 = /* GraphQL */ `
  query GetAPSActivity2025($id: ID!) {
    getAPSActivity2025(id: $id) {
      id
      type
      activity
      createdAt
      updatedAt
    }
  }
`;
export const listAPSActivity2025s = /* GraphQL */ `
  query ListAPSActivity2025s(
    $filter: ModelAPSActivity2025FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSActivity2025s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        activity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSTicket = /* GraphQL */ `
  query GetAPSTicket($id: ID!) {
    getAPSTicket(id: $id) {
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
export const listAPSTickets = /* GraphQL */ `
  query ListAPSTickets(
    $filter: ModelAPSTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTourist = /* GraphQL */ `
  query GetTourist($id: ID!) {
    getTourist(id: $id) {
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
export const listTourists = /* GraphQL */ `
  query ListTourists(
    $filter: ModelTouristFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTourists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        phone
        tour
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const touristsByEmail = /* GraphQL */ `
  query TouristsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTouristFilterInput
    $limit: Int
    $nextToken: String
  ) {
    touristsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fullName
        email
        phone
        tour
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddOnRegistrant = /* GraphQL */ `
  query GetAddOnRegistrant($id: ID!) {
    getAddOnRegistrant(id: $id) {
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
export const listAddOnRegistrants = /* GraphQL */ `
  query ListAddOnRegistrants(
    $filter: ModelAddOnRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddOnRegistrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fullName
        email
        tour
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const addOnRegistrantsByEmail = /* GraphQL */ `
  query AddOnRegistrantsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAddOnRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addOnRegistrantsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fullName
        email
        tour
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
      nextToken
    }
  }
`;
export const getAPSSpeaker = /* GraphQL */ `
  query GetAPSSpeaker($id: ID!) {
    getAPSSpeaker(id: $id) {
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
export const listAPSSpeakers = /* GraphQL */ `
  query ListAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
      nextToken
    }
  }
`;
export const getMorrisetteForm = /* GraphQL */ `
  query GetMorrisetteForm($id: ID!) {
    getMorrisetteForm(id: $id) {
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
export const listMorrisetteForms = /* GraphQL */ `
  query ListMorrisetteForms(
    $filter: ModelMorrisetteFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMorrisetteForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAristosForm = /* GraphQL */ `
  query GetAristosForm($id: ID!) {
    getAristosForm(id: $id) {
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
export const listAristosForms = /* GraphQL */ `
  query ListAristosForms(
    $filter: ModelAristosFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAristosForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        company
        title
        approved
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGuardianForm = /* GraphQL */ `
  query GetGuardianForm($id: ID!) {
    getGuardianForm(id: $id) {
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
export const listGuardianForms = /* GraphQL */ `
  query ListGuardianForms(
    $filter: ModelGuardianFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuardianForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        company
        title
        approved
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClemsonForm = /* GraphQL */ `
  query GetClemsonForm($id: ID!) {
    getClemsonForm(id: $id) {
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
export const listClemsonForms = /* GraphQL */ `
  query ListClemsonForms(
    $filter: ModelClemsonFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClemsonForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        company
        title
        approved
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurgereForm = /* GraphQL */ `
  query GetSurgereForm($id: ID!) {
    getSurgereForm(id: $id) {
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
export const listSurgereForms = /* GraphQL */ `
  query ListSurgereForms(
    $filter: ModelSurgereFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurgereForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        company
        title
        approved
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBoschForm = /* GraphQL */ `
  query GetBoschForm($id: ID!) {
    getBoschForm(id: $id) {
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
export const listBoschForms = /* GraphQL */ `
  query ListBoschForms(
    $filter: ModelBoschFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoschForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmailTracking = /* GraphQL */ `
  query GetEmailTracking($id: ID!) {
    getEmailTracking(id: $id) {
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
export const listEmailTrackings = /* GraphQL */ `
  query ListEmailTrackings(
    $filter: ModelEmailTrackingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        sent
        opened
        openedDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const emailTrackingsByEmail = /* GraphQL */ `
  query EmailTrackingsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEmailTrackingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    emailTrackingsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        sent
        opened
        openedDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
      thinkificId
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByName = /* GraphQL */ `
  query UsersByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByCompanyID = /* GraphQL */ `
  query UsersByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCMPMSession = /* GraphQL */ `
  query GetCMPMSession($id: ID!) {
    getCMPMSession(id: $id) {
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
export const listCMPMSessions = /* GraphQL */ `
  query ListCMPMSessions(
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMPMSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const cMPMSessionsByEndDate = /* GraphQL */ `
  query CMPMSessionsByEndDate(
    $endDate: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cMPMSessionsByEndDate(
      endDate: $endDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const cMPMSessionsByDeadline = /* GraphQL */ `
  query CMPMSessionsByDeadline(
    $deadline: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cMPMSessionsByDeadline(
      deadline: $deadline
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCMPMForm = /* GraphQL */ `
  query GetCMPMForm($id: ID!) {
    getCMPMForm(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
export const listCMPMForms = /* GraphQL */ `
  query ListCMPMForms(
    $filter: ModelCMPMFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMPMForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
      nextToken
    }
  }
`;
export const getCPSForm = /* GraphQL */ `
  query GetCPSForm($id: ID!) {
    getCPSForm(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
export const listCPSForms = /* GraphQL */ `
  query ListCPSForms(
    $filter: ModelCPSFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCPSForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
      nextToken
    }
  }
`;
export const getAppStart = /* GraphQL */ `
  query GetAppStart($id: ID!) {
    getAppStart(id: $id) {
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
export const listAppStarts = /* GraphQL */ `
  query ListAppStarts(
    $filter: ModelAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const appStartsByEmail = /* GraphQL */ `
  query AppStartsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appStartsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getApplicationStart = /* GraphQL */ `
  query GetApplicationStart($id: ID!, $createdAt: String!) {
    getApplicationStart(id: $id, createdAt: $createdAt) {
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
export const listApplicationStarts = /* GraphQL */ `
  query ListApplicationStarts(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelApplicationStartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplicationStarts(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const applicationStartsByEmail = /* GraphQL */ `
  query ApplicationStartsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationStartsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCertAppStart = /* GraphQL */ `
  query GetCertAppStart($id: ID!) {
    getCertAppStart(id: $id) {
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
export const listCertAppStarts = /* GraphQL */ `
  query ListCertAppStarts(
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const certAppStartsByTypeAndCreatedAt = /* GraphQL */ `
  query CertAppStartsByTypeAndCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certAppStartsByTypeAndCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const certAppStartsByEmail = /* GraphQL */ `
  query CertAppStartsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certAppStartsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLMSCollection = /* GraphQL */ `
  query GetLMSCollection($id: ID!) {
    getLMSCollection(id: $id) {
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
export const listLMSCollections = /* GraphQL */ `
  query ListLMSCollections(
    $filter: ModelLMSCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const lMSCollectionsBySlug = /* GraphQL */ `
  query LMSCollectionsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLMSCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lMSCollectionsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLMSCirriculum = /* GraphQL */ `
  query GetLMSCirriculum($id: ID!) {
    getLMSCirriculum(id: $id) {
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
export const listLMSCirriculums = /* GraphQL */ `
  query ListLMSCirriculums(
    $filter: ModelLMSCirriculumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCirriculums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLMSCourse = /* GraphQL */ `
  query GetLMSCourse($id: ID!) {
    getLMSCourse(id: $id) {
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
            createdAt
            updatedAt
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
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      createdAt
      updatedAt
    }
  }
`;
export const listLMSCourses = /* GraphQL */ `
  query ListLMSCourses(
    $filter: ModelLMSCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lMSCoursesByThinkificId = /* GraphQL */ `
  query LMSCoursesByThinkificId(
    $thinkificId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLMSCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lMSCoursesByThinkificId(
      thinkificId: $thinkificId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lMSCoursesBySlug = /* GraphQL */ `
  query LMSCoursesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLMSCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lMSCoursesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLMSLesson = /* GraphQL */ `
  query GetLMSLesson($id: ID!) {
    getLMSLesson(id: $id) {
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
export const listLMSLessons = /* GraphQL */ `
  query ListLMSLessons(
    $filter: ModelLMSLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const lMSLessonsBySlug = /* GraphQL */ `
  query LMSLessonsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLMSLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lMSLessonsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLMSModule = /* GraphQL */ `
  query GetLMSModule($id: ID!) {
    getLMSModule(id: $id) {
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
export const listLMSModules = /* GraphQL */ `
  query ListLMSModules(
    $filter: ModelLMSModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const lMSModulesBySlug = /* GraphQL */ `
  query LMSModulesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLMSModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lMSModulesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLMSQuiz = /* GraphQL */ `
  query GetLMSQuiz($id: ID!) {
    getLMSQuiz(id: $id) {
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
export const listLMSQuizs = /* GraphQL */ `
  query ListLMSQuizs(
    $filter: ModelLMSQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      id
      userId
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
            createdAt
            updatedAt
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
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
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
      nextToken
    }
  }
`;
export const getObjective = /* GraphQL */ `
  query GetObjective($id: ID!) {
    getObjective(id: $id) {
      id
      objective
      completed
      createdAt
      updatedAt
    }
  }
`;
export const listObjectives = /* GraphQL */ `
  query ListObjectives(
    $filter: ModelObjectiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        objective
        completed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSModuleSlidesId
    }
  }
`;
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTimestamp = /* GraphQL */ `
  query GetTimestamp($id: ID!) {
    getTimestamp(id: $id) {
      id
      time
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTimestamps = /* GraphQL */ `
  query ListTimestamps(
    $filter: ModelTimestampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimestamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaff = /* GraphQL */ `
  query ListStaff(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        title
        image
        linkedIn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTrackedCourse = /* GraphQL */ `
  query GetTrackedCourse($id: ID!) {
    getTrackedCourse(id: $id) {
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
export const listTrackedCourses = /* GraphQL */ `
  query ListTrackedCourses(
    $filter: ModelTrackedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          pscourses {
            nextToken
          }
          courses {
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
      nextToken
    }
  }
`;
export const trackedCoursesByCustomerIdAndClicks = /* GraphQL */ `
  query TrackedCoursesByCustomerIdAndClicks(
    $customerId: ID!
    $clicks: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTrackedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    trackedCoursesByCustomerIdAndClicks(
      customerId: $customerId
      clicks: $clicks
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          pscourses {
            nextToken
          }
          courses {
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
      nextToken
    }
  }
`;
export const getIncludedCourse = /* GraphQL */ `
  query GetIncludedCourse($id: ID!) {
    getIncludedCourse(id: $id) {
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
export const listIncludedCourses = /* GraphQL */ `
  query ListIncludedCourses(
    $filter: ModelIncludedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncludedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          pscourses {
            nextToken
          }
          courses {
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
      nextToken
    }
  }
`;
export const includedCoursesByCustomerId = /* GraphQL */ `
  query IncludedCoursesByCustomerId(
    $customerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncludedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    includedCoursesByCustomerId(
      customerId: $customerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          pscourses {
            nextToken
          }
          courses {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomerLibary = /* GraphQL */ `
  query GetCustomerLibary($id: ID!) {
    getCustomerLibary(id: $id) {
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
export const listCustomerLibaries = /* GraphQL */ `
  query ListCustomerLibaries(
    $filter: ModelCustomerLibaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerLibaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const customerLibariesBySlug = /* GraphQL */ `
  query CustomerLibariesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerLibaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerLibariesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSalesBar = /* GraphQL */ `
  query GetSalesBar($id: ID!) {
    getSalesBar(id: $id) {
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
export const listSalesBars = /* GraphQL */ `
  query ListSalesBars(
    $filter: ModelSalesBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        link
        icon
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTestimonial = /* GraphQL */ `
  query GetTestimonial($id: ID!) {
    getTestimonial(id: $id) {
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
export const listTestimonials = /* GraphQL */ `
  query ListTestimonials(
    $filter: ModelTestimonialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestimonials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkshopForm = /* GraphQL */ `
  query GetWorkshopForm($id: ID!) {
    getWorkshopForm(id: $id) {
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
export const listWorkshopForms = /* GraphQL */ `
  query ListWorkshopForms(
    $filter: ModelWorkshopFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkshopForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const workshopFormsByEmail = /* GraphQL */ `
  query WorkshopFormsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkshopFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workshopFormsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseClick = /* GraphQL */ `
  query GetCourseClick($id: ID!) {
    getCourseClick(id: $id) {
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
export const listCourseClicks = /* GraphQL */ `
  query ListCourseClicks(
    $filter: ModelCourseClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const courseClicksByCourseID = /* GraphQL */ `
  query CourseClicksByCourseID(
    $courseID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseClicksByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSalesbarClick = /* GraphQL */ `
  query GetSalesbarClick($id: ID!) {
    getSalesbarClick(id: $id) {
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
export const listSalesbarClicks = /* GraphQL */ `
  query ListSalesbarClicks(
    $filter: ModelSalesbarClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesbarClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        page
        ipAddress
        country
        link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLessonClick = /* GraphQL */ `
  query GetLessonClick($id: ID!) {
    getLessonClick(id: $id) {
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
export const listLessonClicks = /* GraphQL */ `
  query ListLessonClicks(
    $filter: ModelLessonClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const lessonClicksByLessonID = /* GraphQL */ `
  query LessonClicksByLessonID(
    $LessonID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonClicksByLessonID(
      LessonID: $LessonID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseSearch = /* GraphQL */ `
  query GetCourseSearch($id: ID!) {
    getCourseSearch(id: $id) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const listCourseSearches = /* GraphQL */ `
  query ListCourseSearches(
    $filter: ModelCourseSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        term
        ipAddress
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseSearchesByTerm = /* GraphQL */ `
  query CourseSearchesByTerm(
    $term: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseSearchesByTerm(
      term: $term
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        term
        ipAddress
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCyberMondayClick = /* GraphQL */ `
  query GetCyberMondayClick($id: ID!) {
    getCyberMondayClick(id: $id) {
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
export const listCyberMondayClicks = /* GraphQL */ `
  query ListCyberMondayClicks(
    $filter: ModelCyberMondayClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCyberMondayClicks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        object
        ipAddress
        country
        device
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSPresentationClick = /* GraphQL */ `
  query GetAPSPresentationClick($id: ID!) {
    getAPSPresentationClick(id: $id) {
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
export const listAPSPresentationClicks = /* GraphQL */ `
  query ListAPSPresentationClicks(
    $filter: ModelAPSPresentationClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSPresentationClicks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        object
        ipAddress
        country
        device
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategoryClick = /* GraphQL */ `
  query GetCategoryClick($id: ID!) {
    getCategoryClick(id: $id) {
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
export const listCategoryClicks = /* GraphQL */ `
  query ListCategoryClicks(
    $filter: ModelCategoryClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClick = /* GraphQL */ `
  query GetClick($id: ID!) {
    getClick(id: $id) {
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
export const listClicks = /* GraphQL */ `
  query ListClicks(
    $filter: ModelClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIndiaClick = /* GraphQL */ `
  query GetIndiaClick($id: ID!) {
    getIndiaClick(id: $id) {
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
export const listIndiaClicks = /* GraphQL */ `
  query ListIndiaClicks(
    $filter: ModelIndiaClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndiaClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const indiaClicksByCourseID = /* GraphQL */ `
  query IndiaClicksByCourseID(
    $courseID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelIndiaClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indiaClicksByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getIndiaCourseSearch = /* GraphQL */ `
  query GetIndiaCourseSearch($id: ID!) {
    getIndiaCourseSearch(id: $id) {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
    }
  }
`;
export const listIndiaCourseSearches = /* GraphQL */ `
  query ListIndiaCourseSearches(
    $filter: ModelIndiaCourseSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndiaCourseSearches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        term
        ipAddress
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const indiaCourseSearchesByTerm = /* GraphQL */ `
  query IndiaCourseSearchesByTerm(
    $term: String!
    $sortDirection: ModelSortDirection
    $filter: ModelIndiaCourseSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indiaCourseSearchesByTerm(
      term: $term
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        term
        ipAddress
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIndexTemplate = /* GraphQL */ `
  query GetIndexTemplate($id: ID!) {
    getIndexTemplate(id: $id) {
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
export const listIndexTemplates = /* GraphQL */ `
  query ListIndexTemplates(
    $filter: ModelIndexTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const indexTemplatesBySlug = /* GraphQL */ `
  query IndexTemplatesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelIndexTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indexTemplatesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getIndexRow = /* GraphQL */ `
  query GetIndexRow($id: ID!) {
    getIndexRow(id: $id) {
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
export const listIndexRows = /* GraphQL */ `
  query ListIndexRows(
    $filter: ModelIndexRowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIndexPage = /* GraphQL */ `
  query GetIndexPage($id: ID!) {
    getIndexPage(id: $id) {
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
export const listIndexPages = /* GraphQL */ `
  query ListIndexPages(
    $filter: ModelIndexPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const indexPagesBySlug = /* GraphQL */ `
  query IndexPagesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelIndexPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indexPagesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFaq = /* GraphQL */ `
  query GetFaq($id: ID!) {
    getFaq(id: $id) {
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
export const listFaqs = /* GraphQL */ `
  query ListFaqs(
    $filter: ModelFaqFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFaqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        type
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventTemplate = /* GraphQL */ `
  query GetEventTemplate($id: ID!) {
    getEventTemplate(id: $id) {
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
export const listEventTemplates = /* GraphQL */ `
  query ListEventTemplates(
    $filter: ModelEventTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const eventTemplatesBySlug = /* GraphQL */ `
  query EventTemplatesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEventTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventTemplatesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventPhoto = /* GraphQL */ `
  query GetEventPhoto($id: ID!) {
    getEventPhoto(id: $id) {
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
export const listEventPhotos = /* GraphQL */ `
  query ListEventPhotos(
    $filter: ModelEventPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        eventTemplatePhotosId
      }
      nextToken
    }
  }
`;
export const getUserEventPhoto = /* GraphQL */ `
  query GetUserEventPhoto($id: ID!) {
    getUserEventPhoto(id: $id) {
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
export const listUserEventPhotos = /* GraphQL */ `
  query ListUserEventPhotos(
    $filter: ModelUserEventPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEventPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventPresentation = /* GraphQL */ `
  query GetEventPresentation($id: ID!) {
    getEventPresentation(id: $id) {
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
export const listEventPresentations = /* GraphQL */ `
  query ListEventPresentations(
    $filter: ModelEventPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventPresentations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        eventTemplatePresentationsId
      }
      nextToken
    }
  }
`;
export const getEventAgenda = /* GraphQL */ `
  query GetEventAgenda($id: ID!) {
    getEventAgenda(id: $id) {
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
export const listEventAgenda = /* GraphQL */ `
  query ListEventAgenda(
    $filter: ModelEventAgendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventAgendaItem = /* GraphQL */ `
  query GetEventAgendaItem($id: ID!) {
    getEventAgendaItem(id: $id) {
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
export const listEventAgendaItems = /* GraphQL */ `
  query ListEventAgendaItems(
    $filter: ModelEventAgendaItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventAgendaItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        eventAgendaItemsId
        eventSpeakerAgendaItemsId
      }
      nextToken
    }
  }
`;
export const getEventSpeaker = /* GraphQL */ `
  query GetEventSpeaker($id: ID!) {
    getEventSpeaker(id: $id) {
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
export const listEventSpeakers = /* GraphQL */ `
  query ListEventSpeakers(
    $filter: ModelEventSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        agendaItems {
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
        createdAt
        updatedAt
        eventTemplateSpeakersId
        eventAgendaItemSpeakersId
      }
      nextToken
    }
  }
`;
export const getEventClick = /* GraphQL */ `
  query GetEventClick($id: ID!) {
    getEventClick(id: $id) {
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
export const listEventClicks = /* GraphQL */ `
  query ListEventClicks(
    $filter: ModelEventClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getCertificateClick = /* GraphQL */ `
  query GetCertificateClick($id: ID!) {
    getCertificateClick(id: $id) {
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
export const listCertificateClicks = /* GraphQL */ `
  query ListCertificateClicks(
    $filter: ModelCertificateClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateClicks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getIndexClick = /* GraphQL */ `
  query GetIndexClick($id: ID!) {
    getIndexClick(id: $id) {
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
export const listIndexClicks = /* GraphQL */ `
  query ListIndexClicks(
    $filter: ModelIndexClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        page
        ipAddress
        country
        type
        device
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageObject = /* GraphQL */ `
  query GetImageObject($id: ID!) {
    getImageObject(id: $id) {
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
export const listImageObjects = /* GraphQL */ `
  query ListImageObjects(
    $filter: ModelImageObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        caption
        uploadedBy
        alt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const purchasesByEmail = /* GraphQL */ `
  query PurchasesByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasesByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAnalysis = /* GraphQL */ `
  query GetAnalysis($id: ID!) {
    getAnalysis(id: $id) {
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
export const listAnalyses = /* GraphQL */ `
  query ListAnalyses(
    $filter: ModelAnalysisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnalyses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAchievement = /* GraphQL */ `
  query GetAchievement($id: ID!) {
    getAchievement(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
export const listAchievements = /* GraphQL */ `
  query ListAchievements(
    $filter: ModelAchievementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLessonTags = /* GraphQL */ `
  query GetLessonTags($id: ID!) {
    getLessonTags(id: $id) {
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
        createdAt
        updatedAt
        lessonAnalysisId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLessonTags = /* GraphQL */ `
  query ListLessonTags(
    $filter: ModelLessonTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagsId
        lessonId
        tags {
          id
          tag
          lesson {
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
            nextToken
          }
          links {
            nextToken
          }
          tags {
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
          createdAt
          updatedAt
          lessonAnalysisId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonTagsByTagsId = /* GraphQL */ `
  query LessonTagsByTagsId(
    $tagsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonTagsByTagsId(
      tagsId: $tagsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagsId
        lessonId
        tags {
          id
          tag
          lesson {
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
            nextToken
          }
          links {
            nextToken
          }
          tags {
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
          createdAt
          updatedAt
          lessonAnalysisId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonTagsByLessonId = /* GraphQL */ `
  query LessonTagsByLessonId(
    $lessonId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonTagsByLessonId(
      lessonId: $lessonId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagsId
        lessonId
        tags {
          id
          tag
          lesson {
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
            nextToken
          }
          links {
            nextToken
          }
          tags {
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
          createdAt
          updatedAt
          lessonAnalysisId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCertificateByCategory = /* GraphQL */ `
  query GetCertificateByCategory($id: ID!) {
    getCertificateByCategory(id: $id) {
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
export const listCertificateByCategories = /* GraphQL */ `
  query ListCertificateByCategories(
    $filter: ModelCertificateByCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateByCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        certificateObjectId
        category {
          id
          name
          value
          certificates {
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
            nextToken
          }
          whereText
          whatText
          howText
          deadline
          sessions {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateByCategoriesByCategoryId = /* GraphQL */ `
  query CertificateByCategoriesByCategoryId(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateByCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateByCategoriesByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        certificateObjectId
        category {
          id
          name
          value
          certificates {
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
            nextToken
          }
          whereText
          whatText
          howText
          deadline
          sessions {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateByCategoriesByCertificateObjectId = /* GraphQL */ `
  query CertificateByCategoriesByCertificateObjectId(
    $certificateObjectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateByCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateByCategoriesByCertificateObjectId(
      certificateObjectId: $certificateObjectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        certificateObjectId
        category {
          id
          name
          value
          certificates {
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
            nextToken
          }
          whereText
          whatText
          howText
          deadline
          sessions {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCertificateCourses = /* GraphQL */ `
  query GetCertificateCourses($id: ID!) {
    getCertificateCourses(id: $id) {
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
export const listCertificateCourses = /* GraphQL */ `
  query ListCertificateCourses(
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          courses {
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
            nextToken
          }
          certificate {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateCoursesByCertificateId = /* GraphQL */ `
  query CertificateCoursesByCertificateId(
    $certificateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateCoursesByCertificateId(
      certificateId: $certificateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          courses {
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
            nextToken
          }
          certificate {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateCoursesByCourseId = /* GraphQL */ `
  query CertificateCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          courses {
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
            nextToken
          }
          certificate {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticleRelatedCourses = /* GraphQL */ `
  query GetArticleRelatedCourses($id: ID!) {
    getArticleRelatedCourses(id: $id) {
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
export const listArticleRelatedCourses = /* GraphQL */ `
  query ListArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          articles {
            nextToken
          }
          certificate {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const articleRelatedCoursesByCourseId = /* GraphQL */ `
  query ArticleRelatedCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          articles {
            nextToken
          }
          certificate {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const articleRelatedCoursesByArticleId = /* GraphQL */ `
  query ArticleRelatedCoursesByArticleId(
    $articleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByArticleId(
      articleId: $articleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          articles {
            nextToken
          }
          certificate {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthorTemplates = /* GraphQL */ `
  query GetAuthorTemplates($id: ID!) {
    getAuthorTemplates(id: $id) {
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
export const listAuthorTemplates = /* GraphQL */ `
  query ListAuthorTemplates(
    $filter: ModelAuthorTemplatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthorTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          templates {
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
            nextToken
          }
          rows {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const authorTemplatesByAuthorId = /* GraphQL */ `
  query AuthorTemplatesByAuthorId(
    $authorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorTemplatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    authorTemplatesByAuthorId(
      authorId: $authorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          templates {
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
            nextToken
          }
          rows {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const authorTemplatesByIndexTemplateId = /* GraphQL */ `
  query AuthorTemplatesByIndexTemplateId(
    $indexTemplateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorTemplatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    authorTemplatesByIndexTemplateId(
      indexTemplateId: $indexTemplateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          templates {
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
            nextToken
          }
          rows {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSUser = /* GraphQL */ `
  query GetAPSUser($id: ID!) {
    getAPSUser(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAPSUsers = /* GraphQL */ `
  query ListAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSUsersByAPSId = /* GraphQL */ `
  query APSUsersByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSUsersByUserId = /* GraphQL */ `
  query APSUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPSSponsor = /* GraphQL */ `
  query GetAPSSponsor($id: ID!) {
    getAPSSponsor(id: $id) {
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
export const listAPSSponsors = /* GraphQL */ `
  query ListAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSSponsorsByAPSId = /* GraphQL */ `
  query APSSponsorsByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSSponsorsByCompanyId = /* GraphQL */ `
  query APSSponsorsByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          Registrants {
            nextToken
          }
          Sponsors {
            nextToken
          }
          Speakers {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApsRegistrantAddOns25 = /* GraphQL */ `
  query GetApsRegistrantAddOns25($id: ID!) {
    getApsRegistrantAddOns25(id: $id) {
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
        companyName {
          name
          email
          apsRegistrants {
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
        registrationEmailReceived
        welcomeEmailSent
        welcomeEmailReceived
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        mangaStatus
        mangaTransportation
        createdAt
        updatedAt
        aPSCompanyApsRegistrantsId
        aPSRegistrant2025CompanyNameId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listApsRegistrantAddOns25s = /* GraphQL */ `
  query ListApsRegistrantAddOns25s(
    $filter: ModelApsRegistrantAddOns25FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsRegistrantAddOns25s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          apsRegistrants {
            nextToken
          }
          type
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
          companyName {
            name
            email
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
          registrationEmailReceived
          welcomeEmailSent
          welcomeEmailReceived
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          mangaStatus
          mangaTransportation
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSRegistrant2025CompanyNameId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const apsRegistrantAddOns25sByAPSAddOn2025Id = /* GraphQL */ `
  query ApsRegistrantAddOns25sByAPSAddOn2025Id(
    $aPSAddOn2025Id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsRegistrantAddOns25FilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsRegistrantAddOns25sByAPSAddOn2025Id(
      aPSAddOn2025Id: $aPSAddOn2025Id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          apsRegistrants {
            nextToken
          }
          type
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
          companyName {
            name
            email
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
          registrationEmailReceived
          welcomeEmailSent
          welcomeEmailReceived
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          mangaStatus
          mangaTransportation
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSRegistrant2025CompanyNameId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const apsRegistrantAddOns25sByAPSRegistrant2025Id = /* GraphQL */ `
  query ApsRegistrantAddOns25sByAPSRegistrant2025Id(
    $aPSRegistrant2025Id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsRegistrantAddOns25FilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsRegistrantAddOns25sByAPSRegistrant2025Id(
      aPSRegistrant2025Id: $aPSRegistrant2025Id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          apsRegistrants {
            nextToken
          }
          type
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
          companyName {
            name
            email
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
          registrationEmailReceived
          welcomeEmailSent
          welcomeEmailReceived
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          mangaStatus
          mangaTransportation
          createdAt
          updatedAt
          aPSCompanyApsRegistrantsId
          aPSRegistrant2025CompanyNameId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAchievementUsers = /* GraphQL */ `
  query GetAchievementUsers($id: ID!) {
    getAchievementUsers(id: $id) {
      id
      userId
      achievementId
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
            thinkificId
            savedCourses
            savedLessons
            savedArticles
            source
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
        thinkificId
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
export const listAchievementUsers = /* GraphQL */ `
  query ListAchievementUsers(
    $filter: ModelAchievementUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievementUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        achievementId
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const achievementUsersByUserId = /* GraphQL */ `
  query AchievementUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAchievementUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    achievementUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        achievementId
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const achievementUsersByAchievementId = /* GraphQL */ `
  query AchievementUsersByAchievementId(
    $achievementId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAchievementUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    achievementUsersByAchievementId(
      achievementId: $achievementId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        achievementId
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
          thinkificId
          savedCourses
          savedLessons
          savedArticles
          source
          achievements {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCirriculumCourses = /* GraphQL */ `
  query GetCirriculumCourses($id: ID!) {
    getCirriculumCourses(id: $id) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCirriculumCourses = /* GraphQL */ `
  query ListCirriculumCourses(
    $filter: ModelCirriculumCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCirriculumCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          Courses {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cirriculumCoursesByLMSCirriculumId = /* GraphQL */ `
  query CirriculumCoursesByLMSCirriculumId(
    $lMSCirriculumId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCirriculumCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cirriculumCoursesByLMSCirriculumId(
      lMSCirriculumId: $lMSCirriculumId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          Courses {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cirriculumCoursesByLMSCourseId = /* GraphQL */ `
  query CirriculumCoursesByLMSCourseId(
    $lMSCourseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCirriculumCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cirriculumCoursesByLMSCourseId(
      lMSCourseId: $lMSCourseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          Courses {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourseLessons = /* GraphQL */ `
  query GetCourseLessons($id: ID!) {
    getCourseLessons(id: $id) {
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
export const listCourseLessons = /* GraphQL */ `
  query ListCourseLessons(
    $filter: ModelCourseLessonsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        lMSLesson {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseLessonsByLMSCourseId = /* GraphQL */ `
  query CourseLessonsByLMSCourseId(
    $lMSCourseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseLessonsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseLessonsByLMSCourseId(
      lMSCourseId: $lMSCourseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        lMSLesson {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseLessonsByLMSLessonId = /* GraphQL */ `
  query CourseLessonsByLMSLessonId(
    $lMSLessonId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseLessonsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseLessonsByLMSLessonId(
      lMSLessonId: $lMSLessonId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        lMSLesson {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourseInstructors = /* GraphQL */ `
  query GetCourseInstructors($id: ID!) {
    getCourseInstructors(id: $id) {
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
        createdAt
        updatedAt
      }
      instructor {
        id
        userId
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
export const listCourseInstructors = /* GraphQL */ `
  query ListCourseInstructors(
    $filter: ModelCourseInstructorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        instructor {
          id
          userId
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseInstructorsByLMSCourseId = /* GraphQL */ `
  query CourseInstructorsByLMSCourseId(
    $lMSCourseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseInstructorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseInstructorsByLMSCourseId(
      lMSCourseId: $lMSCourseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        instructor {
          id
          userId
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseInstructorsByInstructorId = /* GraphQL */ `
  query CourseInstructorsByInstructorId(
    $instructorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseInstructorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseInstructorsByInstructorId(
      instructorId: $instructorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          shortDescription
          subscriptionLink
          subscriptionPrice
          stripeLink
          createdAt
          updatedAt
        }
        instructor {
          id
          userId
          coursesTaught {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIndexTemplateRows = /* GraphQL */ `
  query GetIndexTemplateRows($id: ID!) {
    getIndexTemplateRows(id: $id) {
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
export const listIndexTemplateRows = /* GraphQL */ `
  query ListIndexTemplateRows(
    $filter: ModelIndexTemplateRowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexTemplateRows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        indexTemplateId
        indexRowId
        indexTemplate {
          id
          slug
          title
          subhead
          authors {
            nextToken
          }
          rows {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const indexTemplateRowsByIndexTemplateId = /* GraphQL */ `
  query IndexTemplateRowsByIndexTemplateId(
    $indexTemplateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIndexTemplateRowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indexTemplateRowsByIndexTemplateId(
      indexTemplateId: $indexTemplateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        indexTemplateId
        indexRowId
        indexTemplate {
          id
          slug
          title
          subhead
          authors {
            nextToken
          }
          rows {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const indexTemplateRowsByIndexRowId = /* GraphQL */ `
  query IndexTemplateRowsByIndexRowId(
    $indexRowId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIndexTemplateRowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    indexTemplateRowsByIndexRowId(
      indexRowId: $indexRowId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        indexTemplateId
        indexRowId
        indexTemplate {
          id
          slug
          title
          subhead
          authors {
            nextToken
          }
          rows {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
