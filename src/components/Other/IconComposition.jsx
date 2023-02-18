import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { TbBrandMeta } from "react-icons/tb";

// function GeneralCircleIcon({ children, onClick, backgroundColor }) {
//   const generalIcon = React.Children.map(children, () => {
//     return React.cloneElement(children, { onClick, backgroundColor });
//   });
//   return <>{generalIcon}</>;
// }

const iconList = [
  { icon: FaTwitter, title: "Twitter" },
  { icon: TbBrandMeta, title: "Meta" },
  { icon: FaInstagram, title: "Instagram" },
];

export function CreateIconButtons() {
  return (
    <>
      {iconList.map((el) => (
        <IconButton
          key={el.title}
          title={el.title}
          isRound
          aria-label={el.title}
          icon={<el.icon />}
        />
      ))}
    </>
  );
}
