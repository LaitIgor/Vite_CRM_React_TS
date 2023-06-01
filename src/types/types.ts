import {FieldValues} from 'react-hook-form';

export interface ExtendedUser extends FieldValues {
    loggedIn: boolean;
    id: string;
}