import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'loopTo',
})
export class LoopToPipe implements PipeTransform {
    transform(startNumber: number, endNumber: number) {
        console.log(startNumber, endNumber);
        let result = [];
        for(let i = startNumber; i <= endNumber; i++){
            result.push(i);
        }
        return result;
    }
}