import React, { lazy, Suspense } from "react";
import "./App.css";

const RemoteApp = lazy(() => import("remote/remote-app"));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteApp />
      </Suspense>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
