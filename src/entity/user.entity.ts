import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';


@Entity('users')
export class User {
  
  @ObjectIdColumn() 
  id: ObjectID;
  
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() password: string;
  
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}