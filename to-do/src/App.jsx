import Tasks_List from "./Tasks_List";
import Done_list from "./Done_list";
import Layout from "./Layout";
import Today_tasks from "./Today's_tasks";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='today_tasks' element={<Today_tasks/>}/>
        <Route index element={<Tasks_List/>}/>
        <Route path='done_tasks' element={<Done_list/>} />
      </Route>
     </Routes>
    </BrowserRouter>
  )

}

export default App;