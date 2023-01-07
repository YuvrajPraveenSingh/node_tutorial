import { IUser , Iadmin } from "./interfaces/interface.js";

type DataTransfer = IUser | Iadmin;

  export const dataTransfer : DataTransfer[] = [{ type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
{ type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
{ type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
{ type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];