import api from './api';
// TODO Get all employees

// TODO Get an employee by ID


// Update an employee when the status is toggled
export const updateEmployee = (
  id: number,
  data: Partial<Pick<Employee, 'active' | 'name' | 'position' | 'email' | 'phone' | 'imageUrl' | 'departmentId'>>
) => api.patch<Employee>(`/employees/${id}`, data);
