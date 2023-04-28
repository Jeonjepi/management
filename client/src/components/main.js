import React, { useState } from 'react';

function MenuBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    {
      label: 'Home',
      subMenu: ['Home 1', 'Home 2', 'Home 3']
    },
    {
      label: 'About',
      subMenu: ['About 1', 'About 2', 'About 3']
    },
    {
      label: 'Services',
      subMenu: ['Services 1', 'Services 2', 'Services 3']
    },
    {
      label: 'Products',
      subMenu: ['Products 1', 'Products 2', 'Products 3']
    },
    {
      label: 'Contact',
      subMenu: ['Contact 1', 'Contact 2', 'Contact 3']
    },
    {
      label: 'Blog',
      subMenu: ['Blog 1', 'Blog 2', 'Blog 3']
    }
  ];

  const handleMenuItemHover = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index} onMouseEnter={() => handleMenuItemHover(index)} onMouseLeave={() => setActiveMenuItem(null)}>
          <a href="#">{item.label}</a>
          <ul className={activeMenuItem === index ? 'sub-menu active' : 'sub-menu'}>
            {item.subMenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a href="#">{subItem}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MenuBar;