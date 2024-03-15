import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { ParentPlatform } from "../services/parentPlatform-service";

interface Props {
  onSelectPlatform: (platform: ParentPlatform) => void;
  selectedPlatform: ParentPlatform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform } : Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {console.log (data)}
      <Menu>
        <MenuButton as={Button} color='none' rightIcon={<BsChevronDown />}>
          Platforms {selectedPlatform?.name && ' (' + selectedPlatform?.name +  ')'}
          {/* {selectedPlatform?.name || 'Platforms'} */}
        </MenuButton>
        <MenuList>
          {data.map(platform => {
            return <MenuItem onClick={() => onSelectPlatform (platform)} key={platform.id}>{platform.name}</MenuItem>
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
