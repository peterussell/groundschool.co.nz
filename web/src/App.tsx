import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />}></Route>
        
        </Route>
        
      </Routes>
    </BrowserRouter>
    // <MainLayout>
    //   <p>Hello world!</p>
    // </MainLayout>
  )
};

export default App;