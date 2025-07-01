import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <header>
        {/* You can add a navbar or header here */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
