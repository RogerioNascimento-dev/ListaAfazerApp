import {createAppContainer, createSwitchNavigator} from 'react-navigation';


import Login from './telas/Login';
import Home from './telas/Home';
import Task from './telas/Task';
import Sobre from './telas/Sobre';



const Routes = createAppContainer(
  createSwitchNavigator(
    { Login,Home,Task,Sobre } 
  )
)

export default Routes;