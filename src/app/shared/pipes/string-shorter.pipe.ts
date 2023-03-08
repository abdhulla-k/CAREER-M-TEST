import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'stringShortner' })
export class StringShorterPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        let reducedString = value;
        if (value.length > 500) {
            reducedString =  value.slice(0, 500);
            reducedString += '...'
        }
        return reducedString;
    }
}