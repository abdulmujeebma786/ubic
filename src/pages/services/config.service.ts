import { Injectable } from '@angular/core';

@Injectable()

export class ConfigService {
	constructor() {}
}
 
export const BASE_URL: string = "http://ubicfitness.com/mobileApp/ApiV2/App.php?status=";


export const CONSTANTS = {
            EmptyUsername:'Please enter username',
            EmptyPassword:'Please enter Password',
            ValidName:'Please enter your name',
            validEmail:'please enter your emailid',
            selectLocation:'Please select your location',
            EmailExist :'This emailid already Exist',
            InvalidCredentials: 'Invalid credentials please try again',
            ValidationTargetweight:'Please eneter your target weight',
            TargetdateValidation:'Please select Target Date',
            allfields:'Please fill all the fields',
            weightvalidation:'Please enter Target weight < Current weight'
}