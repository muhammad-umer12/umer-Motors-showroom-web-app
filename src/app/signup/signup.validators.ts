import { AbstractControl, ValidationErrors, Validators } from '@angular/forms'
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import validator from 'validator';

export class SignupValidators{
    static formBuilder: any;

          static  cannotContainSpace(control : AbstractControl): ValidationErrors| null{

                if((control.value as string).indexOf(' ')>0){
                     return {cannotContainSpace : true}
                }
                else
                {
                    return null;
                }
            
            }



            static notalphanumeric(control: AbstractControl ):ValidationErrors| null{
                  

                if((validator.isAlphanumeric(control.value))== true){
                    return { notalphanumeric : true}
                }
                else
                {
                    return null;
                }  
            }

            static alphanumeric(control: AbstractControl ):ValidationErrors| null{
                  

                if(((validator.isAlphanumeric(control.value))==false) )
                {

                    if((validator.contains(control.value,' '))  )
                    {
                        return null;
                    }
                    else
                    {
                        return {alphanumeric : true}
                    }
                }
                else
                {
                    return null;
                }  
            }


            
}


