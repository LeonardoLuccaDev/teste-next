export interface UserProps {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

export type CreateUserProps = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>

export type LoginProps = Pick<UserProps, 'email' | 'password'>

export type ProfileProps = Pick<UserProps, 'id'>

export type UpdateUserProps = Omit<UserProps, 'createdAt' | 'updatedAt' | 'password'>

export type UpdateProfileProps = Omit<UserProps, 'createdAt' | 'updatedAt'>

export type DeleteUserProps = Pick<UserProps, 'id'>