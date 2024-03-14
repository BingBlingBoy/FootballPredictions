export default {
    providers: [
        {
            // domain: "dev-r567ksx0tomv3cll.uk.auth0.com",
            // applicationID: "x2Sl1ehxNj8Qd5Ekibd6ITj5pN2l7DWs",
            domain: process.env.VITE_AUTH0_DOMAIN,
            applicationID: process.env.VITE_AUTH0_CLIENT_ID,
        },
    ]
};
