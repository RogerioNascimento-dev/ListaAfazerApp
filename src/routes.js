import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './telas/Login';
import Home from './telas/Home';
import Task from './telas/Task';



const Routes = createAppContainer(
  createSwitchNavigator(
    { Home,Task,Login }
  )
)

export default Routes;