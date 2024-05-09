import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './lauouts/Main';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => fetch('products.json'),
          element: <Home></Home>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
