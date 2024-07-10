import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * path from 'path';
import * fs from 'fs';
import * uuid from 'uuid';

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()

export class FileService {
    createFile(type: FileType, file): string {
        try {
            const fileExtension = file.originalname.split('.').pop();
            const fileName = uuid.v4() + '.' + fileExtension;
            const filePath = path.resolve(__dirname, '..', 'static', type);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(fileName: string) {

    }
}