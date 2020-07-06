import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAnimalYears'
})
export class CalculateAnimalYearsPipe implements PipeTransform {

  transform(animal): unknown {
    let years:number;
    console.log("value = " + animal.deathDate + " type " + typeof animal.deathDate);
    if (animal.birthDate == "0000-00-00") {
      return 0;
    }

    let birthDate = new Date(animal.birthDate);
    let deathDate = new Date(animal.deathDate);
    let months;

    if (animal.deathDate != "0000-00-00") {
      //Esta vivo
      
      months = (deathDate.getFullYear() - birthDate.getFullYear()) * 12;
      months -= birthDate.getMonth();
      months += deathDate.getMonth();
      months =  months <= 0 ? 0 : months;
    } else {
      //Esta muerto
      let actualDate = new Date();
      months = (actualDate.getFullYear() - birthDate.getFullYear()) * 12;
      months -= birthDate.getMonth();
      months += actualDate.getMonth();
      months = months <= 0 ? 0 : months;
    }

    if (months >= 12) {
      return (months / 12) + " years";
    } else {
      return months + " months";
    }
  };

}
