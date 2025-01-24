import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from '../layout/main-layout';
import HomePage from '../page/home/HomePage';
import AboutMe from '../page/about/AboutPage';
import SkillsPage from '../page/skill/SkillPage';
import EducationPage from '../page/work/EducationPage';
import { NotFoundPage } from '../page/error';
import ProjectsPage from '../page/project/ProjectPage';
import ProjectDetailPage from '../page/project/DetailProjectPage';
import Contact from '../page/contact/Contact';

// Define the router with typed routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/skill" element={<SkillsPage />} />
      <Route path="/work" element={<EducationPage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
