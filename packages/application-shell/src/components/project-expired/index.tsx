import React from 'react';

const ProjectExpired = React.lazy(
  () => import('./project-expired' /* webpackChunkName: "project-expired" */)
);

export default ProjectExpired;
