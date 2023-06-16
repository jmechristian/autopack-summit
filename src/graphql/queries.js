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
      createdAt
      updatedAt
      lessonTagsId
      blogTagsId
      articleTagsId
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
        createdAt
        updatedAt
        lessonTagsId
        blogTagsId
        articleTagsId
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
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
            savedCourses
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
            createdOn
            updatedOn
            cMPMFormUserId
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
        createdOn
        updatedOn
        cMPMFormUserId
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            createdOn
            updatedOn
            cMPMFormUserId
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
      createdAt
      updatedAt
      userInstructorIdId
      userStudentIdId
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
        createdAt
        updatedAt
        userInstructorIdId
        userStudentIdId
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
            createdOn
            updatedOn
            cMPMFormUserId
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
        createdOn
        updatedOn
        cMPMFormUserId
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
export const getLMSCirriculum = /* GraphQL */ `
  query GetLMSCirriculum($id: ID!) {
    getLMSCirriculum(id: $id) {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
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
export const listLMSCirriculums = /* GraphQL */ `
  query ListLMSCirriculums(
    $filter: ModelLMSCirriculumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCirriculums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
      courseId
      category
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            createdAt
            updatedAt
          }
          lMSCourse {
            id
            courseId
            category
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
      createdAt
      updatedAt
      studentCourseEnrolledId
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
        courseId
        category
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
        createdAt
        updatedAt
        studentCourseEnrolledId
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
        courseId
        category
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
        createdAt
        updatedAt
        studentCourseEnrolledId
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
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            category
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
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            createdAt
            updatedAt
            studentCourseEnrolledId
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
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
            createdOn
            updatedOn
            cMPMFormUserId
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
      lMSLessonObjectivesId
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
        lMSLessonObjectivesId
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
      lMSLessonSlidesId
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
        lMSLessonSlidesId
      }
      nextToken
    }
  }
`;
export const getLessonVideo = /* GraphQL */ `
  query GetLessonVideo($id: ID!) {
    getLessonVideo(id: $id) {
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
export const listLessonVideos = /* GraphQL */ `
  query ListLessonVideos(
    $filter: ModelLessonVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      lessonVideoTimestampsId
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
        lessonVideoTimestampsId
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
          tags {
            nextToken
          }
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
          tags {
            nextToken
          }
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
          tags {
            nextToken
          }
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
            savedCourses
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
          createdOn
          updatedOn
          cMPMFormUserId
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
            savedCourses
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
            savedCourses
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            createdOn
            updatedOn
            cMPMFormUserId
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
            savedCourses
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
export const getCirriculumCourses = /* GraphQL */ `
  query GetCirriculumCourses($id: ID!) {
    getCirriculumCourses(id: $id) {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
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
        createdAt
        updatedAt
        studentCourseEnrolledId
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
          title
          Courses {
            nextToken
          }
          createdAt
          updatedAt
        }
        lMSCourse {
          id
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
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
          title
          Courses {
            nextToken
          }
          createdAt
          updatedAt
        }
        lMSCourse {
          id
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
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
          title
          Courses {
            nextToken
          }
          createdAt
          updatedAt
        }
        lMSCourse {
          id
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
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
        courseId
        category
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
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        lMSLesson {
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
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        lMSLesson {
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
          courseId
          category
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
          createdAt
          updatedAt
          studentCourseEnrolledId
        }
        lMSLesson {
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
        courseId
        category
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
            createdOn
            updatedOn
            cMPMFormUserId
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
          courseId
          category
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
            cmpmFormID
            savedCourses
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
          courseId
          category
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
            cmpmFormID
            savedCourses
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
          courseId
          category
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
            cmpmFormID
            savedCourses
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
