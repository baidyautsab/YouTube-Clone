# YouTube Clone
This is a single page web application build using react.

1. First started the project with three component- LandingPage, AdminLogin, UserLogin.
2. Install the react-router-dom 
        `npm install react-router-dom`
3. Crate a link with AdminLogin with LandingPage using <Link> tag
```
        <Link to="/adminlogin">
          <img src={adminimg} alt="" />
          <span>Admin</span>
        </Link>
```
Here we write the address in the attribute to, it may be anything.
4. Then rendered all the pages in App.js using BrowserRouter. Import BrowserRouter, Routes, Route from react-router-dom libary
        `import { BrowserRouter, Routes, Route } from "react-router-dom";`
Then return all the components wrapped with BrowserRouter. There may be one or more Routes in one component.
```
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminlogin" element={<AdminLongin/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
        </Routes>
    </BrowserRouter>
```

path="/" mean the first page which will be display when run the application.
after that match the path with <Link to="">, inside the element attribute we write the jsx component name where to render. 
