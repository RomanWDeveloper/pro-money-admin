import { BENEFITS } from "@/constants/links/benefits";
import { Benefits } from "@/views/Main/Benefits";
import { Benefit } from "@/views/Main/Benefits/Benefit";
import { Navigate } from "react-router-dom";

export const benefits = [
  {
    path: BENEFITS.path,
    element: <Benefits />,
  },
  {
    path: BENEFITS.path + '/:id',
    element: <Benefit />,
  },
  {
    path: BENEFITS.path + '/:id?',
    element: (
      <Navigate to={BENEFITS.path + '/create'} replace />
    ),
  },
  {
    path: BENEFITS.CREATE.fullPath,
    element: <Benefit />,
  },
];
