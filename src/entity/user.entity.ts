import { Exclude } from 'class-transformer';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';


@Entity('users')
export class User {
  
  @ObjectIdColumn() 
  id: ObjectID;
  
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({unique: true}) email: string;
  @Column() password: string;
  @Exclude() refreshTOken: String 
  
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
