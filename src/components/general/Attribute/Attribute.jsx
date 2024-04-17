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
import { firstToUpperCase, makePluralOrSingular } from '../../../misc/utils';

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
      text = firstToUpperCase(attribute);
      break;
    case 'beds':
      IconComponent = Bed;
      text = makePluralOrSingular(text, attribute);
      break;
    case 'CD':
      IconComponent = CD;
      text = attribute;
      break;
    case 'freezer':
      IconComponent = Freezer;
      text = firstToUpperCase(attribute);
      break;
    case 'gas':
      IconComponent = Gas;
      break;
    case 'hob':
      IconComponent = Hob;
      text = makePluralOrSingular(text, attribute);
      break;
    case 'kitchen':
      IconComponent = Kitchen;
      text = firstToUpperCase(attribute);
      break;
    case 'microwave':
      IconComponent = Microwave;
      text = firstToUpperCase(attribute);
      break;
    case 'engine':
      IconComponent = Petrol;
      text = 'Petrol';
      break;
    case 'radio':
      IconComponent = Radio;
      text = firstToUpperCase(attribute);
      break;
    case 'shower':
      IconComponent = Shower;
      text = makePluralOrSingular(text, attribute);
      break;
    case 'toilet':
      IconComponent = ToiletPaper;
      text = makePluralOrSingular(text, attribute);
      break;
    case 'transmission':
      IconComponent = Transmission;
      text = firstToUpperCase(text);
      break;
    case 'TV':
      IconComponent = TV;
      text = attribute;
      break;
    case 'adults':
      IconComponent = Users;
      text = makePluralOrSingular(text, attribute);
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
