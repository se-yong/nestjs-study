import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MaxLength(4)
    @MinLength(20)
    // 영어랑 숫자조합으로 password 유효성체크
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: "invalid  password: password only accepts english and number",
    })
    password: string;
}