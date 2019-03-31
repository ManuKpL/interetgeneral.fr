import { Pipe, PipeTransform } from '@angular/core';
import translations from '../assets/translations.json';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

  public transform(value: string, key: string): any {
    const translationsObj = translations[key];
    return translationsObj ? translationsObj[value] : '';
  }
}
