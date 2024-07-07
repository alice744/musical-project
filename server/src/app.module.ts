import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.o7adeep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    ]
})
export class AppModule {}