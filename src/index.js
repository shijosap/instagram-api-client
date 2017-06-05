/**
 * @author Shijo Thomas
 */
import Users from 'endpoints/users';
import { INSTAGRAM_API_AUTH_CONF, INSTAGRAM_API_URL } from 'conf/conf';


export default class InstagramApiClass {

    constructor(config = {}) {
        this.init(config);
    };

    init(config = {}) {
        this.config = Object.assign({}, INSTAGRAM_API_AUTH_CONF, config);
    };

    /**
     * Creates endpoint
     * @returns Endpoint object
     */
    endpoint(endPoint){

        switch (endPoint) {
            case 'Users':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Relationships':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Media':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Comments':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Likes':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Tags':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            case 'Locations':
                return new Users(this.config.baseUrl, this.config.clientId, this.config.accessKey);
            default:
                return {};

        }


    }


    test() {
        return this.config;
    };
};

let InstagramApi = new InstagramApiClass();
export { InstagramApi };