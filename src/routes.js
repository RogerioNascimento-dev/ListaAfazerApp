import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './telas/Login';
import Home from './telas/Home';
import Task from './telas/Task';


const Routes = createAppContainer(
  createSwitchNavigator(
    {Home, Login, Task}
  )
)

export default Routes;