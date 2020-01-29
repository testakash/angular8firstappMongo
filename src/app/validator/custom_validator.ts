import { AbstractControl } from '@angular/forms';  

export function OnlyAlphabetAllowed(control: AbstractControl){
   var letters = /^[A-Za-z ]+$/;
   if(!control.value.match(letters) && control.value.length>0)
    {
        return { 'OnlyAlphabetAllowed': true };
    }
    return false
    ;
}
