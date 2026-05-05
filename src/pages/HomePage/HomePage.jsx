import { About } from '@/widgets/About/About.jsx';
import { HomePageTop } from '@/widgets/HomePageTop/HomePageTop.jsx';
import { HowItWork } from '@/widgets/HowItWork/HowItWork.jsx';
import { Reviews } from '@/widgets/Reviews/Reviews.jsx';

export const HomePage = () => {
  return (
    <>
      <HomePageTop/>
      <About />
      <HowItWork />
      <Reviews />
    </>
  );
};
