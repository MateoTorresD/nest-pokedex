import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";
import { min } from "rxjs";

export class CreatePokemonDto {
    @Min(1)
    @IsPositive()
    @IsInt()
    no: number;

    @IsString()
    @MinLength(1)
    name: string;
}
