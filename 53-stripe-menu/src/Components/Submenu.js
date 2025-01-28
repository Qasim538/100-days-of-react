import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../ContexApi/context';

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    if (location && container.current) {
      const submenu = container.current;
      const { center = 0, bottom = 0 } = location; // Fallback values for center and bottom

      // Apply styles only if center and bottom are numbers
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
    }
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'show submenu' : 'submenu'}`}
      ref={container}
    >
      <h4>{page?.page || 'Default Title'}</h4> {/* Fallback for title */}
      <div className="submenu-center">
        {page?.links?.length > 0 ? (
          page.links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          ))
        ) : (
          <p>No links available</p>
        )}
      </div>
    </aside>
  );
};

export default Submenu;
