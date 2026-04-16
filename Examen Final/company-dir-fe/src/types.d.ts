declare global {
  interface Department {
    id: number;
    name: string;
  }

  interface Employee {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;
    active: boolean;
    imageUrl: string | null;
    departmentId: number;
    department: Department;
  }
}

export type { Department, Employee };
