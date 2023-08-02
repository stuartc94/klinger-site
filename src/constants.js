const mode = 'development'
const prod = {
    url: {
     BASE_URL: 'http://10.11.11.12/klinger',
    }
};

const dev = {
    url: {
     BASE_URL: 'http://10.11.11.12/klinger_dev',
    }

};

export const config = mode === 'development' ? dev : prod;