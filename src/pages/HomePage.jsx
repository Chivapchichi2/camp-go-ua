import Attribute from '../components/general/Attribute';
import Button from '../components/general/Button';
import EquipmentBtn from '../components/general/EquipmentBtn';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Attribute attribute={'engine'} text={'petrol'} />
      <Attribute attribute={'CD'} text={1} />
      <Attribute attribute={'hob'} text={3} />
      <Attribute attribute={'adults'} text={3} />
      <Attribute attribute={'water'} text={'76l'} />
      <Button text={'Search'} />
      <Button text={'Show more'} />
      <EquipmentBtn text={'AC'} />
      <EquipmentBtn text={'Shower/WC'} />
      <EquipmentBtn text={'Automatic'} />
      <EquipmentBtn text={'Alcove'} />
      <EquipmentBtn text={'Fully Integrated'} />
      <EquipmentBtn
        text={'Van'}
        handleClick={e => {
          e.target.closest('button').classList.toggle('activated');
        }}
      />
      <Card />
    </>
  );
};

export default HomePage;
