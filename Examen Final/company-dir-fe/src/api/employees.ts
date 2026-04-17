import api from './api';
// TODO Get all employees
export const getEmployees = () => api.get<Employee[]>('/employees')

// TODO Get an employee by ID
export const getEmployeeById = (id: number) => api.get<Employee>(`/employees/${id}`)

// Update an employee when the status is toggled
export const updateEmployee = (
  id: number,
  data: Partial<Pick<Employee, 'active' | 'name' | 'position' | 'email' | 'phone' | 'imageUrl' | 'departmentId'>>
) => api.patch<Employee>(`/employees/${id}`, data);
