import { HStack, Text } from 'native-base';
import CountryFlag from "react-native-country-flag";

import { Input } from './Input';

interface Props {
  code: string;
  position: 'left' | 'right';
  guessTeamPointsValue?: number;
  gameAlreadyHappened?: boolean;
  onChangeText: (value: string) => void;
}

export function Team({
  code,
  position,
  guessTeamPointsValue,
  gameAlreadyHappened,
  onChangeText,
}: Props) {
  return (
    <HStack alignItems="center">
      {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />}

      {guessTeamPointsValue > 0 || gameAlreadyHappened
      ? 
        <Input
          w={10}
          h={9}
          textAlign="center"
          fontSize="xs"
          keyboardType="numeric"
          value={guessTeamPointsValue?.toString()}
          isReadOnly={true}
        />
      :
        <Input
          w={10}
          h={9}
          textAlign="center"
          fontSize="xs"
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
      }

      {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />}
    </HStack>
  );
}