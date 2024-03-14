import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {console.log (data)}
      <Menu>
        <MenuButton as={Button} color='none' rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map(platform => {
            return <MenuItem key={platform.id}>{platform.name}</MenuItem>
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
