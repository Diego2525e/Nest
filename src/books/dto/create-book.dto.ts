//Define como se va a enviar los datos en la red
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateBookDTO{
    readonly _id: string;
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly description:string;
    @ApiModelProperty()
    readonly author:string
}