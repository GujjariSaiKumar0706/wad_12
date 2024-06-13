import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Contact from './components/contact/Contact';


function App() {



  let router=createBrowserRouter([

    {
      path:'',
      element:<Layout />,
     children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:"signup",
        element:<Signup />
      },
      {
        path:'signin',
        element:<Signin />
      },{
        path:'contact',
        element:<Contact />
      }
    ]

    }


    ]



  )
  return (

    
    <div className="App ">

     <RouterProvider router={router} />
    </div>
  );
}

export default App;
