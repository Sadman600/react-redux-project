import React from "react";

import { Menubar } from "primereact/menubar";

const Header = () => {
  return (
    <div>
      <Menubar 
      className="bg-primary p-3" 
      start={'Welcome'}
      />
    </div>
  );
};

export default Header;
