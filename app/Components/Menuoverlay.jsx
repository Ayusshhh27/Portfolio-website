import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

MenuOverlay.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuOverlay;
