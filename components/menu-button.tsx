import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function MenuButton({ handleMenu, isOpen }) {
  return (
    <button
      onClick={handleMenu}
      className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-100 ring hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      <span className="sr-only">Open main menu</span>
      
      {isOpen ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
}
