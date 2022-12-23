export class FileColumn {

    constructor(
        readonly name: string, 
        readonly  startPosition: number, 
        readonly endPosition?: number, 
        readonly valueTranslate: (value: string) => any  = (value: string) => {
            return value    
        }
    ) {

    }

}