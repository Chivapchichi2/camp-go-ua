import { ReactComponent as AC } from '../../../icons/AC.svg';
import { ReactComponent as Transmission } from '../../../icons/Transmission.svg';
import { ReactComponent as Kitchen } from '../../../icons/Kitchen.svg';
import { ReactComponent as TV } from '../../../icons/TV.svg';
import { ReactComponent as Shower } from '../../../icons/Shower.svg';
import { ReactComponent as FullyIntegrated } from '../../../icons/FullyIntegrated.svg';
import { ReactComponent as Alcove } from '../../../icons/Alcove.svg';
import { ReactComponent as PanelTruck } from '../../../icons/PanelTruck.svg';
import style from './EquipmentBtn.module.css';

const EquipmentBtn = ({ text, handleClick, isActive }) => {
  if (!text) return null;
  console.log(isActive);
  let IconComponent;
  switch (text) {
    case 'AC':
      IconComponent = AC;
      break;
    case 'Automatic':
      IconComponent = Transmission;
      break;
    case 'Kitchen':
      IconComponent = Kitchen;
      break;
    case 'TV':
      IconComponent = TV;
      break;
    case 'Shower/WC':
      IconComponent = Shower;
      break;
    case 'Fully Integrated':
      IconComponent = FullyIntegrated;
      break;
    case 'Alcove':
      IconComponent = Alcove;
      break;
    case 'Van':
      IconComponent = PanelTruck;
      break;
    default:
      IconComponent = null;
  }

  return (
    <button
      type="submit"
      className={
        isActive ? style.EquipmentBtn + ' ' + isActive : style.EquipmentBtn
      }
      onClick={handleClick}
    >
      {IconComponent && <IconComponent />}
      {text}
    </button>
  );
};

export default EquipmentBtn;
