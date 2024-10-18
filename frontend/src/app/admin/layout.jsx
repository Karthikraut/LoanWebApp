"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: '' },
    { label: 'Applications', path: '/admin/Applications', icon: '' },
    { label: 'Admin Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <button onClick={toggleSidebar} className="p-4">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <nav className="mt-10">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.path} className="block py-2 px-4 hover:bg-gray-700">
              <div className="flex items-center">
                <span>{item.icon}</span>
                {isExpanded && <span className="ml-2">{item.label}</span>}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">
          {menuItems.find((item) => item.path === window.location.pathname)?.label || 'Admin Panel'}
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
}