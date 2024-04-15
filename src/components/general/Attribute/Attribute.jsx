import { ReactComponent as AirConditioner } from '../../../icons/AirConditioner.svg';
import { ReactComponent as Bed } from '../../../icons/Bed.svg';
import { ReactComponent as CD } from '../../../icons/CD.svg';
import { ReactComponent as Freezer } from '../../../icons/Freezer.svg';
import { ReactComponent as Gas } from '../../../icons/Gas.svg';
import { ReactComponent as Hob } from '../../../icons/Hob.svg';
import { ReactComponent as Kitchen } from '../../../icons/Kitchen.svg';
import { ReactComponent as Microwave } from '../../../icons/Microwave.svg';
import { ReactComponent as Petrol } from '../../../icons/Petrol.svg';
import { ReactComponent as Radio } from '../../../icons/Radio.svg';
import { ReactComponent as Shower } from '../../../icons/Shower.svg';
import { ReactComponent as ToiletPaper } from '../../../icons/ToiletPaper.svg';
import { ReactComponent as Transmission } from '../../../icons/Transmission.svg';
import { ReactComponent as TV } from '../../../icons/TV.svg';
import { ReactComponent as Users } from '../../../icons/Users.svg';
import { ReactComponent as Water } from '../../../icons/Water.svg';

import styles from './Attribute.module.css';

const Attribute = ({ attribute, text }) => {
  if (!text) return null;

  let IconComponent;

  switch (attribute) {
    case 'airConditioner':
      IconComponent = AirConditioner;
      text += ' Air Conditioner';
      break;
    case 'bathroom':
      IconComponent = Shower;
      text = 'Bathroom';
      break;
    case 'beds':
      IconComponent = Bed;
      text += text > 1 ? ' beds' : ' bed';
      break;
    case 'CD':
      IconComponent = CD;
      text = 'CD';
      break;
    case 'freezer':
      IconComponent = Freezer;
      text = 'Freezer';
      break;
    case 'gas':
      IconComponent = Gas;
      break;
    case 'hob':
      IconComponent = Hob;
      text += ' hob';
      break;
    case 'kitchen':
      IconComponent = Kitchen;
      text = 'Kitchen';
      break;
    case 'microwave':
      IconComponent = Microwave;
      text = 'Microwave';
      break;
    case 'engine':
      IconComponent = Petrol;
      text = 'Petrol';
      break;
    case 'radio':
      IconComponent = Radio;
      text = 'Radio';
      break;
    case 'shower':
      IconComponent = Shower;
      text = 'Shower';
      break;
    case 'toilet':
      IconComponent = ToiletPaper;
      text = 'Toilet';
      break;
    case 'transmission':
      IconComponent = Transmission;
      break;
    case 'TV':
      IconComponent = TV;
      text = 'TV';
      break;
    case 'adults':
      IconComponent = Users;
      text += text > 1 ? ' adults' : ' adult';
      break;
    case 'water':
      IconComponent = Water;
      break;
    default:
      IconComponent = null;
      text = '';
  }

  return (
    <div className={styles.Attribute}>
      {IconComponent && <IconComponent width="20px" height="20px" />}
      <span>{text}</span>
    </div>
  );
};

export default Attribute;
