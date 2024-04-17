import Attribute from '../components/general/Attribute';
import Button from '../components/general/Button';
import EquipmentBtn from '../components/general/EquipmentBtn';
import Card from '../components/Card';
import { parseDataForCatalog } from '../misc/utils';

const testData = {
  _id: '8',
  name: 'Mavericks',
  price: 8000,
  rating: 4.4,
  location: 'Ukraine, Lviv',
  adults: 2,
  children: 0,
  engine: 'petrol',
  transmission: 'automatic',
  form: 'panelTruck',
  length: '5.4m',
  width: '2.01m',
  height: '2.05m',
  tank: '132l',
  consumption: '12.4l/100km',
  description:
    'Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.',
  details: {
    airConditioner: 1,
    bathroom: 0,
    kitchen: 1,
    beds: 1,
    TV: 0,
    CD: 1,
    radio: 1,
    shower: 0,
    toilet: 0,
    freezer: 0,
    hob: 2,
    microwave: 0,
    gas: '',
    water: '18l',
  },
  gallery: [
    'https://ftp.goit.study/img/campers-test-task/8-1.webp',
    'https://ftp.goit.study/img/campers-test-task/8-2.webp',
    'https://ftp.goit.study/img/campers-test-task/8-3.webp',
  ],
  reviews: [
    {
      reviewer_name: 'Alice',
      reviewer_rating: 5,
      comment:
        'The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.',
    },
    {
      reviewer_name: 'Bob',
      reviewer_rating: 3,
      comment:
        'A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.',
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Attribute attribute={'engine'} text={'petrol'} />
      <Attribute attribute={'CD'} text={1} />
      <Attribute attribute={'hob'} text={2} />
      <Attribute attribute={'adults'} text={1} />
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
      <Card {...parseDataForCatalog(testData)} />
    </>
  );
};

export default HomePage;
