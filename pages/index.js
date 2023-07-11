import { createClient } from 'next-sanity';
import HeroMain from '../components/home/HeroMain';
import SecondMain from '../components/home/SecondMain';
import WhyMain from '../components/home/WhyMain';
import TestimonialMain from '../components/home/TestimonialMain';
import SpeakersMain from '../components/home/SpeakersMain';
import SponsorsMain from '../components/home/sponsors/SponsorsMain';

export default function Home({ homepageData }) {
  return (
    <>
      <div className='flex flex-col'>
        <HeroMain
          data={homepageData}
          headline={homepageData[0].heroHeadline}
          subheadline={homepageData[0].heroSubhead}
          text={homepageData[0].heroText}
          location={homepageData[0].location}
          date={homepageData[0].date}
          logos={homepageData[0].highlightedSponsors}
        />
        <SecondMain
          headline={homepageData[0].whoHeadline}
          subheadline={homepageData[0].whoSubheadline}
          text={homepageData[0].whoBodyText}
        />
        <WhyMain
          headline={homepageData[0].whyHeadline}
          subheadline={homepageData[0].whySubheadline}
          contentBlocks={homepageData[0].whyContentBlocks}
        />
        <TestimonialMain
          headline={homepageData[0].testimonialHeadline}
          subheadline={homepageData[0].testimonialSubheadline}
          text={homepageData[0].testimonialBodyContent}
          cta={homepageData[0].testimonialCta}
          testimonials={homepageData[0].testimonials}
        />
        {/* <SpeakersMain
        headline={homepageData[0].speakersHeadline}
        subheadline={homepageData[0].speakersSubheadline}
        text={homepageData[0].speakersBodyContent}
        speakers={homepageData[0].speakers}
      /> */}
        <SponsorsMain sponsors={homepageData[0].sponsorList} />
      </div>
    </>
  );
}

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: true,
});

export async function getStaticProps() {
  const homepageData = await client.fetch(`*[_type == "homepage"]{
    ..., speakers[]->, "sponsorList": *[_type == "sponsor"]{
      logo { asset-> { url }}, name, teir, website
    }
  }`);

  return {
    props: {
      homepageData,
    },
  };
}
