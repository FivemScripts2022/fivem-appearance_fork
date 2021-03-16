import Section from './components/Section';
import Item from './components/Item';
import SelectInput from './components/SelectInput';

import { PedSettings } from './interfaces';

interface PedProps {
  settings: PedSettings;
  storedData: string;
  data: string;
  handleModelChange: (value: string) => void;
}

const Ped: React.FC<PedProps> = ({ settings, storedData, data, handleModelChange }) => (
  <Section title="Ped">
    <Item>
      <SelectInput
        title="Model"
        items={settings.model.items}
        defaultValue={data}
        clientValue={storedData}
        onChange={value => handleModelChange(value)}
      />
    </Item>
  </Section>
);

export default Ped;
