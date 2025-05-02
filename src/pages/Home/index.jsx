import Banner from '../../components/Banner';
import PropertyList from '../../components/PropertyList';
import BannerImg from '../../assets/IMG.png';

function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" bannerImg={BannerImg}  />
      <PropertyList />
    </>
  );
}

export default Home
