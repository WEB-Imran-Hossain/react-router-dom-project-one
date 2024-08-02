import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from './Error'
import Contact from './Contact'
import { getContactLoader, getContactsLoader, } from './loaders/contactsLoader'
import { createContactAction, deleteContactAction, editContactAction, updateContactFavoriteAction } from './actions/contactsActions'
import EditContact from './Edit/EditContact'
import Index from './Index'
import { updateContact } from './contacts'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
        action: updateContactFavoriteAction
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>Oops! There was an error deleting the contact.</div>,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
