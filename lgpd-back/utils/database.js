import Sequelize from 'sequelize';

const sequelize = new Sequelize (
    'lgpd_database',
    'root',
    '0000',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        }
    }
);

export default sequelize;