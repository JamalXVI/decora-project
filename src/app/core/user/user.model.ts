import { UserRole } from './user-role.enum';

export class User {
    public id: Number;
    public user: String;
    public password: String;
    public role: UserRole;

    constructor(obj?: any) {
        this.id = obj && obj.id || 0;
        this.user = obj && obj.user || '';
        this.password = obj && obj.user || '';
        this.role = obj && obj.role || 0;
    }
}