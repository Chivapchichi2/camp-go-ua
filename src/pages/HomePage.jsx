import Attribute from '../components/general/Attribute';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Attribute attribute={'engine'} text={'petrol'} />
      <Attribute attribute={'CD'} text={1} />
      <Attribute attribute={'hob'} text={3} />
      <Attribute attribute={'adults'} text={3} />
      <Attribute attribute={'water'} text={'76l'} />
    </>
  );
};

export default HomePage;
