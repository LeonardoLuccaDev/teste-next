export interface UserProps{
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string
}

export type RegisterProps = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>

export type LoginProps = Pick<UserProps, 'email' | 'password'>

export type UsersProps = Omit<UserProps, 'password'>

export type UpdateProfileProps = Omit<UserProps, 'updatedAt' | 'id' | 'createdAt'>

export type UpdateUserProps = Omit<UserProps, 'updatedAt' | 'createdAt' | 'password'>

export type DeleteUserProps = Pick<UserProps, 'id'>

export type GetUserProps = Pick<UserProps, 'id'>