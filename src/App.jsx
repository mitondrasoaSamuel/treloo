import React from "react";
import Section2 from "./pages/section2/Section2";
import Tips from "./pages/tips/Tips";
import Contact from "./pages/contact/Contact";
import Alert from "./pages/alerts/Alert";
import Blog from "./pages/blog/Blog";
import CopiRight from "./pages/copiRight/CopiRight";


function App() {
  return (
    <div className="space-y-10 bg-[#F1F1FD]">
      <Section2 />
      <Contact/>
      <Alert/>
      <Blog/>
      <CopiRight/>
    </div>
  );
}

export default App;
