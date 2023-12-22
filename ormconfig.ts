// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Đường dẫn đến các entities của bạn
    synchronize: true, // Chỉ dùng trong môi trường dev để tự động tạo bảng dữ liệu khi chạy ứng dụng
};

export default config;
