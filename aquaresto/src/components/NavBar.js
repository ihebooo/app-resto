/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { BsCartPlusFill } from 'react-icons/bs';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

import logo from "../assets/logo.png"
import LoginModal from './popup-login'
import RegisterModal from "./popup-register"
import CartModal from './cart';
//import CartModal from "./cart"
import { icons } from 'react-icons'

const navigation = [
  { name: 'Menu', href: '/menu', current: false },
  { name: 'Reservation', href: 'Restaurant', current: false },
  { name: 'Contact', href: '/footer', current: false },

  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  const { cart : cartList } = useCart();

  const { state,logout } = useAuth();

  const { isAuthenticated} = state

  const [loginOpen,setLoginOpen] = React.useState(false)
  
  const [registerOpen,setRegisterOpen] = React.useState(false)

  const [CartOpen,setCartOpen] = React.useState(false)



  //const [panierOpen,setpanierOpen] = React.useState(false)

  
  return (
    <>
    {loginOpen && <LoginModal open={loginOpen} setOpen={setLoginOpen} />}
    {registerOpen && <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />}
    {CartOpen && <CartModal open={CartOpen} setOpen={setCartOpen} />}

    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <a href="/">
  <img
    className="block lg:hidden h-8 w-auto"
    src={logo}
    alt="Workflow"
  />
  <img
    className="hidden lg:block h-8 w-auto"
    src={logo}
    alt="Workflow"
  />
</a>

                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  onClick={()=> setCartOpen(!CartOpen)}

                  className="inline-flex  bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="bg-red-500 p-1 rounded-full text-white font-bold mr-2">{cartList.length}</span>
                  <BsCartPlusFill 
                  
                  //onClick={()=> setpanierOpen(!panierOpen)}
                   className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                
                
                {isAuthenticated ? (<Menu as="div" className="ml-3 relative">
                  <div>
                  <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
                      </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            historique des commandes
                          </a>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
  {({ active }) => (
    <a
      href="#"
      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      onClick={logout} // call logout function on click
    >
      Se deconnecter 
    </a>
  )}
</Menu.Item>

                    </Menu.Items>
                  </Transition>
                        </Menu>) : (              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <button
                    onClick={()=> setRegisterOpen(!registerOpen)}
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Register
                    </button>
                    <button
                      onClick={()=> setLoginOpen(!loginOpen)}
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Login
                    </button>
                  </span>)}

            </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}
