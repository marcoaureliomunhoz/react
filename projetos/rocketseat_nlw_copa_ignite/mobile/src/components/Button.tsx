import { Button as ButtonNativeBase, IButtonProps, Icon, Text } from 'native-base';
import {Fontisto, Octicons} from '@expo/vector-icons';

interface Props extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
  leftIconName?: string;
  sourceIcon?: 'Fontisto'|'Octicons'
}

export function Button({
  title,
  leftIconName,
  type = 'PRIMARY',
  sourceIcon = 'Fontisto',
  ...rest
}: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === 'SECONDARY' ? 'red.500' : "yellow.500"}
      leftIcon={leftIconName ? 
        <Icon
          as={sourceIcon === 'Octicons' ? Octicons : Fontisto}
          name={leftIconName}
          color={type === 'SECONDARY' ? 'white' : "black"}
          size='sm'
        /> 
      : null}
      _pressed={{
        bg: type === 'SECONDARY' ? "red.400" : "yellow.600"
      }}
      _loading={{
        _spinner: { color: "black" }
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === 'SECONDARY' ? 'white' : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}