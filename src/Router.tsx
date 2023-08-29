import { Route, Routes } from "react-router-dom";
import { Publications } from "./pages/Publications";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Publications />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  )
}