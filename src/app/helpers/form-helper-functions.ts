import { FormArray } from '@angular/forms';
import { Skill } from '../Classes/skill';

export class FormHelperFunctions {
    public static getSkillsArray(skillsFormArray: FormArray): Skill[] {
        let skillsArray = [] as Skill[];
        for (const item of skillsFormArray.controls) {
          let skillObject = new Skill(
            {
              naming: item.get('naming').value,
              description: item.get('description').value,
              level: +item.get('level').value
            }
          )
      
          if (skillObject) skillsArray.push(skillObject);
        }
      
        return skillsArray;
      }
}
